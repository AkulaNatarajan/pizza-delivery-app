const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    type: {
      type: String,
      enum: ['custom', 'preset'],
      required: true
    },
    pizzaName: String,
    base: String,
    sauce: String,
    cheese: String,
    vegetables: [String],
    quantity: {
      type: Number,
      default: 1
    },
    price: Number
  }],
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Order Received', 'In Kitchen', 'Sent to Delivery', 'Delivered', 'Cancelled'],
    default: 'Order Received'
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Completed', 'Failed', 'Refunded'],
    default: 'Pending'
  },
  paymentId: String, // Razorpay Payment ID
  orderId: String,   // Razorpay Order ID
  deliveryAddress: {
    street: String,
    city: String,
    pincode: String,
    phone: String
  },
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
