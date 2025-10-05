# Ultimate MBBS Study App

A comprehensive full-stack study and productivity management application for MBBS students and NEET PG aspirants. Inspired by Marrow and enhanced with personal productivity features.

## Features

- **Study Scheduler** - Intelligent study scheduling with spaced repetition algorithms
- **MCQ Tracker** - Practice MCQs with detailed analytics and performance tracking
- **Gym & Health Tracker** - Track workouts, health metrics, and wellness activities
- **Smart Alarms** - Context-aware alarm system for study, workout, and activities
- **Todo Manager** - Task management with priorities and categories
- **Progress Analytics** - Comprehensive analytics and progress visualization
- **Settings** - Customizable themes, notifications, and preferences

## Project Structure

```
ultimate-mbbs-study-app/
├── frontend/                 # React frontend application
│   └── src/
│       ├── components/      # React components
│       │   ├── StudyScheduler/
│       │   ├── MCQTracker/
│       │   ├── GymHealthTracker/
│       │   ├── SmartAlarms/
│       │   ├── TodoManager/
│       │   ├── ProgressAnalytics/
│       │   └── Settings/
│       ├── utils/           # Utility functions
│       ├── services/        # API service layer
│       ├── hooks/           # Custom React hooks
│       └── context/         # React Context providers
│
└── backend/                 # Node.js/Express backend
    └── src/
        ├── controllers/     # Request handlers
        ├── models/          # Database models
        ├── routes/          # API routes
        ├── middleware/      # Custom middleware
        ├── utils/           # Utility functions
        └── config/          # Configuration files
```

## Tech Stack

### Frontend
- React
- React Router
- Context API / Redux
- Axios
- Chart.js / Recharts

### Backend
- Node.js
- Express.js
- MongoDB / PostgreSQL
- JWT Authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB / PostgreSQL

### Installation

1. Clone the repository
```bash
git clone https://github.com/lalwaniharsh/ultimate-mbbs-study-app.git
cd ultimate-mbbs-study-app
```

2. Install frontend dependencies
```bash
cd frontend
npm install
```

3. Install backend dependencies
```bash
cd ../backend
npm install
```

4. Set up environment variables (create .env files in both frontend and backend directories)

5. Start the development servers
```bash
# Frontend
cd frontend
npm start

# Backend (in a new terminal)
cd backend
npm start
```

## License

MIT License

## Contributors

Contributions are welcome! Please feel free to submit a Pull Request.
