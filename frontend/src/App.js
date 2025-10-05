import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MCQDashboard from './components/MCQDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Ultimate MBBS Study App</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/mcq">MCQ Practice</Link>
            <Link to="/study">Study Schedule</Link>
            <Link to="/todo">Todo</Link>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mcq" element={<MCQDashboard />} />
            <Route path="/study" element={<StudySchedule />} />
            <Route path="/todo" element={<TodoManager />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h2>Welcome to Ultimate MBBS Study App</h2>
      <p>Your comprehensive study companion for NEET-PG preparation</p>
      <div className="features">
        <div className="feature-card">
          <h3>MCQ Practice</h3>
          <p>Practice thousands of MCQs with detailed explanations</p>
        </div>
        <div className="feature-card">
          <h3>Study Scheduler</h3>
          <p>Intelligent scheduling with spaced repetition</p>
        </div>
        <div className="feature-card">
          <h3>Progress Tracking</h3>
          <p>Track your progress with detailed analytics</p>
        </div>
      </div>
    </div>
  );
}

function StudySchedule() {
  return <div><h2>Study Schedule</h2><p>Feature coming soon...</p></div>;
}

function TodoManager() {
  return <div><h2>Todo Manager</h2><p>Feature coming soon...</p></div>;
}

export default App;
