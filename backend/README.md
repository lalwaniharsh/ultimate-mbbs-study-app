# Backend

This directory contains the Node.js/Express backend application for the Ultimate MBBS Study App.

## Structure

- `/src` - Source code
  - `/controllers` - Request handlers
    - `studySchedulerController.js` - Study scheduler endpoints
    - `mcqTrackerController.js` - MCQ tracker endpoints
    - `gymHealthController.js` - Gym & health tracker endpoints
    - `alarmsController.js` - Smart alarms endpoints
    - `todoController.js` - Todo manager endpoints
    - `analyticsController.js` - Progress analytics endpoints
    - `settingsController.js` - Settings endpoints
  - `/models` - Database models
    - `User.js` - User model
    - `StudySchedule.js` - Study schedule model
    - `MCQ.js` - MCQ practice model
    - `GymHealth.js` - Gym & health data model
    - `Alarm.js` - Alarm model
    - `Todo.js` - Todo item model
    - `Progress.js` - Progress tracking model
  - `/routes` - API routes
  - `/middleware` - Custom middleware
  - `/utils` - Utility functions
  - `/config` - Configuration files
- `/tests` - Test files
