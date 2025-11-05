# Quick Setup Guide for VS Code

## Step-by-Step Installation

### 1. Install Backend Dependencies

Open **Terminal** in VS Code (`` Ctrl + ` `` or View → Terminal) and run:

```powershell
cd backend
npm install
```

This will install:
- express
- mongoose
- cors
- dotenv
- nodemon (dev dependency)

### 2. Install Frontend Dependencies

Open a **NEW Terminal** in VS Code (click the `+` button in the terminal panel) and run:

```powershell
cd frontend
npm install
```

This will install:
- react
- react-dom
- react-scripts
- axios
- react-router-dom
- date-fns

### 3. Set Up Environment Variables

In the `backend` folder, create a `.env` file with:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/expenses-tracker
```

**For MongoDB Atlas (Cloud):**
```
PORT=5000
MONGO_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/expenses-tracker
```

## Running the Application in VS Code

### Method 1: Using Integrated Terminal (Recommended)

1. **Open Terminal 1** (Backend):
   - Press `` Ctrl + ` `` to open terminal
   - Run: `cd backend && npm run dev`
   - You should see: "Server is running on port 5000"

2. **Open Terminal 2** (Frontend):
   - Click the `+` button in terminal panel to create a new terminal
   - Run: `cd frontend && npm start`
   - Browser will automatically open to http://localhost:3000

### Method 2: Using VS Code Tasks (Optional)

You can create `.vscode/tasks.json` to run both servers with one command.

## Quick Commands Reference

### Install All Dependencies at Once

```powershell
# Backend
cd backend
npm install

# Frontend (in new terminal)
cd frontend
npm install
```

### Run Application

**Backend:**
```powershell
cd backend
npm run dev
```

**Frontend:**
```powershell
cd frontend
npm start
```

### Production Build

**Frontend:**
```powershell
cd frontend
npm run build
```

## Troubleshooting

### If MongoDB is not installed locally:

1. **Option A**: Install MongoDB locally from https://www.mongodb.com/try/download/community
2. **Option B**: Use MongoDB Atlas (free cloud database):
   - Sign up at https://www.mongodb.com/cloud/atlas
   - Create a free cluster
   - Get connection string
   - Update `MONGO_URI` in `backend/.env`

### If ports are busy:

- Backend port 5000: Change `PORT` in `backend/.env`
- Frontend port 3000: React will automatically use next available port

### Common Issues:

- **"Module not found"**: Run `npm install` in the respective directory
- **"Cannot connect to MongoDB"**: Check if MongoDB is running or connection string is correct
- **"Port already in use"**: Stop the process using that port or change the port number

## VS Code Extensions (Optional but Recommended)

- ESLint
- Prettier
- MongoDB for VS Code
- REST Client (for testing API)


