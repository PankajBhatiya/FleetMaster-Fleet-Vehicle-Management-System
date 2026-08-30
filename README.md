# FleetMaster 🚚 — Fleet & Vehicle Management System

FleetMaster is a full-stack web application designed to help organizations manage their vehicle fleets efficiently. It provides a centralized platform for tracking vehicles, drivers, maintenance schedules, and trips — reducing manual paperwork and improving operational visibility.

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Future Improvements](#future-improvements)
- [Contributors](#contributors)

## 📖 About the Project

Managing a fleet of vehicles manually — tracking which driver is assigned to which vehicle, when maintenance is due, and how vehicles are being utilized — is time-consuming and error-prone. **FleetMaster** solves this by providing a simple, centralized dashboard where fleet managers can:

- Register and manage vehicles
- Assign drivers to vehicles
- Track maintenance and servicing schedules
- Monitor vehicle status (active, under maintenance, idle)
- View trip/usage history

## ✨ Features

- 🔐 User authentication and role-based access
- 🚗 Add, update, and remove vehicles from the fleet
- 👨‍✈️ Manage driver profiles and assignments
- 🛠️ Track vehicle maintenance and service reminders
- 📊 Dashboard overview of fleet status
- 📱 Responsive UI for desktop and mobile

*(Update this list to reflect the exact features you've implemented.)*

## 🛠️ Tech Stack

**Frontend:**
- React.js
- CSS / Tailwind (update based on what you used)

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB (update if you used a different database)

**Other Tools:**
- Git & GitHub for version control
- Postman for API testing

## 📁 Project Structure

```
FleetMaster-Fleet-Vehicle-Management-System/
├── Backend/          # Express server, API routes, controllers, models
├── Frontend/         # React application
├── CheckList.md      # Project checklist/tasks
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js installed (v16 or above recommended)
- npm or yarn
- MongoDB instance (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PankajBhatiya/FleetMaster-Fleet-Vehicle-Management-System.git
   cd FleetMaster-Fleet-Vehicle-Management-System
   ```

2. **Install backend dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../Frontend
   npm install
   ```

4. **Set up environment variables** (see below)

5. **Run the backend server**
   ```bash
   cd Backend
   npm start
   ```

6. **Run the frontend**
   ```bash
   cd Frontend
   npm start
   ```

The app should now be running at `http://localhost:3000` (frontend) with the backend API on `http://localhost:5000` (adjust ports as per your actual config).

## 🔑 Environment Variables

Create a `.env` file inside the `Backend` folder with the following:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## 💻 Usage

1. Register/login as a user
2. Add vehicles to the fleet from the dashboard
3. Assign drivers to vehicles
4. Track maintenance schedules and update vehicle status
5. View reports/analytics on fleet usage

## 🔮 Future Improvements

- Real-time GPS tracking integration
- Fuel consumption analytics
- Automated maintenance alerts via email/SMS
- Export reports as PDF/Excel
- Mobile app version

*This project was built as part of a summer project / academic submission.*
