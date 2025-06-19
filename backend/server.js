const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact'); 
const bookingRoutes = require('./routes/booking');

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes); 
app.use('/api/bookings', bookingRoutes);

// Root route (optional)
app.get("/", (req, res) => {
  res.send("VGBND backend is live");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
