# 🚀 Quick Start - Expenses Tracker

## ⚡ Fast Setup (Copy & Paste)

### 1️⃣ Install Backend Dependencies
```powershell
cd backend
npm install
```

### 2️⃣ Install Frontend Dependencies
```powershell
cd frontend
npm install
```

### 3️⃣ Create Backend .env File
```powershell
cd backend
echo PORT=5000 > .env
echo MONGO_URI=mongodb://localhost:27017/expenses-tracker >> .env
```

Or manually create `backend/.env` with:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/expenses-tracker
```

### 4️⃣ Start Backend Server
```powershell
cd backend
npm run dev
```

### 5️⃣ Start Frontend Server (in new terminal)
```powershell
cd frontend
npm start
```

## 📍 Access Points

- **Frontend App**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **Health Check**: http://localhost:5000/api/health

## ✅ Success Indicators

- Backend: "Server is running on port 5000" + "Connected to MongoDB"
- Frontend: Browser opens automatically to http://localhost:3000

## 🎯 All-in-One Installation Script

If you want to install everything at once, run these commands sequentially:

```powershell
# Backend
cd backend
npm install
cd ..

# Frontend  
cd frontend
npm install
cd ..
```

Then start the servers in separate terminals as shown above.


