# Expenses Tracker - MERN Stack Application

A full-stack web application for tracking and managing expenses, built with MongoDB, Express, React, and Node.js.

## Features

- ✅ Add, edit, and delete expenses
- ✅ Categorize expenses (Food, Transport, Shopping, Bills, etc.)
- ✅ View expense summary (total, count, average)
- ✅ Beautiful and responsive UI
- ✅ Real-time expense tracking

## Tech Stack

- **Frontend**: React 18, React Router, Axios, date-fns
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Styling**: CSS3 with modern design

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local installation or MongoDB Atlas account)

## Installation & Setup

### Step 1: Install Backend Dependencies

Open a terminal in VS Code and navigate to the backend directory:

```bash
cd backend
npm install
```

### Step 2: Install Frontend Dependencies

Open a new terminal in VS Code and navigate to the frontend directory:

```bash
cd frontend
npm install
```

### Step 3: Configure Environment Variables

Create a `.env` file in the `backend` directory:

```bash
cd backend
copy .env.example .env
```

Edit the `.env` file and update the MongoDB connection string:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/expenses-tracker
```

For MongoDB Atlas (cloud), use:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/expenses-tracker
```

### Step 4: Start MongoDB

Make sure MongoDB is running on your system:
- If using local MongoDB: Start the MongoDB service
- If using MongoDB Atlas: Your connection string should work automatically

## Running the Application

### Option 1: Run in Separate Terminals (Recommended)

**Terminal 1 - Backend Server:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend Server:**
```bash
cd frontend
npm start
```

### Option 2: Quick Start Commands

**Backend:**
```bash
cd backend && npm run dev
```

**Frontend:**
```bash
cd frontend && npm start
```

## Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

## API Endpoints

- `GET /api/expenses` - Get all expenses
- `GET /api/expenses/:id` - Get single expense
- `POST /api/expenses` - Create new expense
- `PUT /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense
- `GET /api/expenses/total` - Get total expenses
- `GET /api/expenses/category/:category` - Get expenses by category

## Project Structure

```
Expenses-tracker/
├── backend/
│   ├── controllers/
│   │   └── expenseController.js
│   ├── models/
│   │   └── Expense.js
│   ├── routes/
│   │   └── expenseRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ExpenseForm.js
│   │   │   ├── ExpenseList.js
│   │   │   └── ExpenseSummary.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## Troubleshooting

1. **MongoDB Connection Error**: 
   - Ensure MongoDB is running
   - Check your `.env` file for correct connection string

2. **Port Already in Use**:
   - Change PORT in backend/.env file
   - Or stop the process using the port

3. **CORS Errors**:
   - Ensure backend is running on port 5000
   - Check proxy setting in frontend/package.json

4. **Module Not Found**:
   - Run `npm install` in both backend and frontend directories

## License

ISC


