# MERN Bug Tracker – Deployment

## 🔗 Live URLs
- **Frontend:** https://mern-bugtracker.vercel.app
- **Backend API:** https://mern-bugtracker-backend.onrender.com/api/bugs

## 🚀 Deployment Platforms
- **Backend:** Render
- **Frontend:** Vercel
- **Database:** MongoDB Atlas
- **CI/CD:** GitHub Actions

## 🛠 How to Run Locally
1. Clone the repo and install dependencies.
2. Set environment variables from `.env.example`
3. Run backend:
   ```bash
   cd backend && npm install && npm run dev
🔐 Environment Variables
Fill in .env files for both backend and frontend using the templates provided.

📦 CI/CD Pipeline
Auto builds and tests on push to main

Frontend and backend built separately

Uses GitHub Actions and deploys via Render/Vercel

📊 Monitoring Setup
Health Check Endpoint: /api/health

Logging: Backend logs are saved in /logs

Error Tracking: Using error boundaries in React + Express middleware

Uptime Monitoring: Integrated with UptimeRobot

Performance Monitoring: Chrome DevTools + MongoDB Atlas monitoring

🛡️ Maintenance Plan
Weekly updates for dependencies

Automated backups via MongoDB Atlas

Deployment rollback via GitHub Actions history
