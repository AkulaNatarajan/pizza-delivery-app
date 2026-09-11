# Pizza Delivery Full-Stack Application

A production-grade, full-stack pizza ordering and inventory management platform built with **MERN stack** (MongoDB, Express.js, React.js, Node.js).

## 🚀 Features

### User Side
- ✅ User registration with email verification
- ✅ User login with JWT-based authorization
- ✅ Forgot password flow (email reset link)
- ✅ Dashboard displaying available pizza varieties
- ✅ Custom pizza builder:
  - Choose pizza base (5 options)
  - Choose sauce (5 options)
  - Choose cheese type
  - Choose vegetables (multiple select)
- ✅ Order summary page before payment
- ✅ Razorpay checkout integration (test mode)
- ✅ Real-time order status display (Order Received → In Kitchen → Sent to Delivery)

### Admin Side
- ✅ Separate admin login
- ✅ Inventory dashboard with stock management
- ✅ Stock automatically decremented after each order
- ✅ Manual stock update capability
- ✅ Automated email notifications for low stock items (node-cron)
- ✅ Order management panel with status updates
- ✅ Real-time status reflection on user dashboard

## 🛠 Tech Stack

**Backend:**
- Node.js + Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Razorpay Payment Gateway (test mode)
- NodeMailer for email notifications
- Node-Cron for scheduled jobs

**Frontend:**
- React.js
- React Router for navigation
- Axios for API calls
- CSS for styling

## 📋 Project Structure

```
pizza-delivery-app/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Order.js
│   │   └── Inventory.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── orders.js
│   │   └── inventory.js
│   ├── controllers/
│   ├── middleware/
│   ├── services/
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   ├── context/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
├── README.md
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB (local or cloud - MongoDB Atlas)
- Razorpay account (test mode)
- Gmail account (for email notifications)

### Installation

#### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

#### Frontend Setup
```bash
cd frontend
npm install
npm start
```

The app will run on `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

## 📚 Self-Sourcing Resources

- **MERN Architecture:** Search "MERN stack full project tutorial 2024" on YouTube
- **Razorpay Integration:** https://razorpay.com/developers/ (test mode documentation)
- **Email Setup:** "nodemailer Node.js email tutorial"
- **Scheduled Jobs:** "node-cron scheduled jobs" documentation

## 📝 Environment Variables

Create a `.env` file in the `backend/` directory using `.env.example` as a template:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/pizza-delivery
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_test_key
RAZORPAY_SECRET_KEY=your_test_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

## 🔄 Development Workflow

1. Create feature branches for each component
2. Follow commit message conventions
3. Test locally before pushing
4. Create pull requests for review

## 📄 License

MIT

## 👤 Author

Akula Natarajan

---

**Last Updated:** September 2024
