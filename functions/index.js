/* eslint-disable no-undef */
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true });
const { v4: uuidv4 } = require('uuid');
const Razorpay = require('razorpay');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); 

admin.initializeApp();

const razorpay = new Razorpay({
  key_id: 'rzp_test_HVZCFfDTz5rdFC',
  key_secret: 'MW4HqApp2RICQ9sV7fihqI6o',
});
const withCors = (handler) => (req, res) => {
  cors(corsOptions, (req, res) => handler(req, res));
};
// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  const secretKey = functions.config().jwt.secret;

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to authenticate token' });
    }

    req.userId = decoded.uid;
    next();
  });
};

// Placeholder for integrating with an email service
async function sendVerificationEmail(email, link) {
  // Implement actual email sending logic here
  console.log(`Sending verification email to ${email} with link: ${link}`);
  return Promise.resolve(); // Simulated success
}

exports.registerUser = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
      }

      const { name, email, address, password } = req.body;

      if (!name || !email || !address || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Check if email already exists
      try {
        await admin.auth().getUserByEmail(email);
        return res.status(400).json({ error: 'Email already in use' });
      } catch (error) {
        if (error.code !== 'auth/user-not-found') {
          throw error;
        }
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      const userRecord = await admin.auth().createUser({
        email,
        password,
        displayName: name,
      });

      const emailVerificationLink = await admin.auth().generateEmailVerificationLink(email);

      await admin.firestore().collection('users').doc(userRecord.uid).set({
        name,
        email,
        address,
        emailVerified: false,
        emailVerificationLink: emailVerificationLink,
        password: hashedPassword // Store hashed password
      });

      await sendVerificationEmail(email, emailVerificationLink);

      res.status(200).json({ success: true, message: 'User registered successfully. Please verify your email.', emailVerificationLink });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});


// Login User
// Login User
exports.loginUser = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
      }

      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const usersRef = admin.firestore().collection('users');
      const snapshot = await usersRef.where('email', '==', email).get();

      if (snapshot.empty) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      const userDoc = snapshot.docs[0].data();

      // Retrieve the hashed password
      const hashedPassword = userDoc.password;

      // Ensure the hashed password exists
      if (!hashedPassword) {
        return res.status(400).json({ error: 'Password not set' });
      }

      // Compare the provided password with the hashed password
      const passwordMatch = await bcrypt.compare(password, hashedPassword);

      if (!passwordMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }

      const secretKey = functions.config().jwt.secret;
      const token = jwt.sign({ uid: userDoc.uid }, secretKey, { expiresIn: '1h' });

      res.status(200).json({
        success: true,
        message: 'Login successful',
        token
      });
    } catch (error) {
      console.error('Error logging in user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});


exports.createRazorpayOrder = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { amount, currency } = req.body;

      const options = {
        amount,
        currency,
        receipt: `receipt_${Date.now()}`,
        payment_capture: '1',
      };

      const order = await razorpay.orders.create(options);

      res.json({
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
      });
    } catch (error) {
      console.error("Error creating Razorpay order:", error);
      res.status(500).send("Error creating Razorpay order");
    }
  });
});

// Save Payment Details
exports.savePaymentDetails = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { orderId, paymentId, signature, amount, email, name, cart } = req.body;

      // Save payment details to Firestore or any other database
      const paymentRef = admin.firestore().collection('payments').doc(paymentId);
      await paymentRef.set({
        orderId,
        paymentId,
        signature,
        amount,
        email,
        name,
        cart,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
      });

      res.status(200).send("Payment details saved successfully");
    } catch (error) {
      console.error("Error saving payment details:", error);
      res.status(500).send("Error saving payment details");
    }
  });
});


// Protected route example
exports.protectedRoute = functions.https.onRequest(withCors(async (req, res) => {
  verifyToken(req, res, async () => {
    return res.status(200).json({ success: true, message: 'Access granted to protected route' });
  });
}));
