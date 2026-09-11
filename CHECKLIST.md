# Pizza Delivery App - Feature Checklist

## User Side Features

### Authentication & Account
- [ ] User registration with email verification
  - [ ] Registration form with validation
  - [ ] Email verification link sent
  - [ ] Email verification endpoint
  - [ ] Database schema for verification token
- [ ] User login with JWT-based authorization
  - [ ] Login form
  - [ ] JWT token generation
  - [ ] Token storage in frontend
  - [ ] Protected route middleware
- [ ] Forgot password flow (email reset link)
  - [ ] Forgot password form
  - [ ] Password reset email with token link
  - [ ] Password reset endpoint
  - [ ] Token expiration handling

### Dashboard & Browsing
- [ ] Dashboard displaying available pizza varieties
  - [ ] Fetch available pizzas from backend
  - [ ] Display pizzas in grid/list layout
  - [ ] Search and filter functionality

### Custom Pizza Builder
- [ ] Step 1: Choose a pizza base (5 options)
  - [ ] Radio buttons for base selection
  - [ ] Display base options with images/prices
- [ ] Step 2: Choose a sauce (5 options)
  - [ ] Sauce selection interface
- [ ] Step 3: Choose a cheese type
  - [ ] Cheese selection interface
- [ ] Step 4: Choose vegetables (multiple select)
  - [ ] Checkbox interface for vegetables
  - [ ] Show/hide based on availability

### Checkout & Payment
- [ ] Order summary page before payment
  - [ ] Display all order items
  - [ ] Show total price
  - [ ] Delivery address form
  - [ ] Confirm order button
- [ ] Razorpay checkout integration (test mode — clicking "Success" confirms the order)
  - [ ] Razorpay button integration
  - [ ] Test mode payment flow
  - [ ] Payment success/failure handling
  - [ ] Order creation on payment success

### Order Tracking
- [ ] Real-time order status display on user dashboard
  - [ ] Fetch order status from backend
  - [ ] Display Order Received → In Kitchen → Sent to Delivery
  - [ ] Polling or WebSocket for real-time updates
  - [ ] Order history view

---

## Admin Side Features

### Authentication
- [ ] Separate admin login (not accessible from the user registration flow)
  - [ ] Separate login page for admin
  - [ ] Admin role verification
  - [ ] Admin JWT token

### Inventory Management
- [ ] Inventory dashboard showing current stock of:
  - [ ] Pizza bases
  - [ ] Sauces
  - [ ] Cheeses
  - [ ] Vegetables
- [ ] Stock automatically decremented after each order
  - [ ] Inventory update logic on order success
  - [ ] Quantity deduction logic
- [ ] Manual stock update capability for each inventory item
  - [ ] Update form for each inventory item
  - [ ] Edit endpoint
  - [ ] Audit log for stock changes

### Notifications
- [ ] Automated email notification to admin when any inventory item falls below a configurable threshold
  - [ ] Configure threshold in database/env
  - [ ] Node-cron scheduled job for checking stock
  - [ ] Email sending logic using NodeMailer
  - [ ] Notification log

### Order Management
- [ ] Order management panel: view all incoming orders
  - [ ] Fetch all orders from backend
  - [ ] Display in table/card format
  - [ ] Filter by status, date, etc.
- [ ] Update status for each order
  - [ ] Status dropdown (Order Received → In Kitchen → Sent to Delivery → Delivered)
  - [ ] Update endpoint
- [ ] Status change reflected in real-time on the user's dashboard
  - [ ] Use polling or WebSockets
  - [ ] Real-time notification to users

---

## Backend Infrastructure

- [ ] Express.js server setup
- [ ] MongoDB connection and models
- [ ] JWT authentication middleware
- [ ] Error handling middleware
- [ ] CORS configuration
- [ ] API routes structure
- [ ] Razorpay integration
- [ ] NodeMailer setup
- [ ] Node-Cron scheduler
- [ ] Input validation (express-validator)

---

## Frontend Infrastructure

- [ ] React app setup with Create React App
- [ ] React Router for navigation
- [ ] Axios for API calls
- [ ] Context API for state management (Auth, Cart, User)
- [ ] CSS/styling (or TailwindCSS)
- [ ] Responsive design
- [ ] Error handling and loading states

---

## Testing & Deployment

- [ ] Backend API testing (Postman/Insomnia)
- [ ] Frontend manual testing
- [ ] Payment flow testing in Razorpay test mode
- [ ] Email notification testing
- [ ] Real-time update testing
- [ ] Responsive design testing on mobile
- [ ] Security: password hashing, JWT tokens, input sanitization
- [ ] Deployment setup (optional)

---

## Notes

- Razorpay test mode: Use test API keys provided in Razorpay dashboard
- Email testing: Use Gmail app password for NodeMailer
- Stock threshold: Configurable via environment variable or database config
- Real-time updates: Use polling (every 5-10 seconds) or WebSockets (Socket.io)
