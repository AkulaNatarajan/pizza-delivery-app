const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['base', 'sauce', 'cheese', 'vegetables'],
    required: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  quantity: {
    type: Number,
    required: true,
    default: 0
  },
  minThreshold: {
    type: Number,
    default: 20
  },
  unit: {
    type: String,
    default: 'units'
  },
  lastRestocked: {
    type: Date,
    default: Date.now
  },
  notificationSent: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Inventory', inventorySchema);
