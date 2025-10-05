const StudySchedule = require('../models/StudySchedule');

// Get all study schedules for a user
exports.getSchedules = async (req, res) => {
  try {
    const schedules = await StudySchedule.find({ userId: req.userId })
      .sort({ createdAt: -1 });
    res.status(200).json({ schedules });
  } catch (error) {
    console.error('Get schedules error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Create new study schedule
exports.createSchedule = async (req, res) => {
  try {
    const { subject, topic, startDate, endDate, priority, notes, duration } = req.body;

    const schedule = new StudySchedule({
      userId: req.userId,
      subject,
      topic,
      startDate,
      endDate,
      priority: priority || 'medium',
      notes,
      duration,
      status: 'pending'
    });

    await schedule.save();
    res.status(201).json({ message: 'Schedule created successfully', schedule });
  } catch (error) {
    console.error('Create schedule error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update study schedule
exports.updateSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const schedule = await StudySchedule.findOneAndUpdate(
      { _id: id, userId: req.userId },
      updateData,
      { new: true, runValidators: true }
    );

    if (!schedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }

    res.status(200).json({ message: 'Schedule updated successfully', schedule });
  } catch (error) {
    console.error('Update schedule error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete study schedule
exports.deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;

    const schedule = await StudySchedule.findOneAndDelete({
      _id: id,
      userId: req.userId
    });

    if (!schedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }

    res.status(200).json({ message: 'Schedule deleted successfully' });
  } catch (error) {
    console.error('Delete schedule error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Mark schedule as complete
exports.completeSchedule = async (req, res) => {
  try {
    const { id } = req.params;

    const schedule = await StudySchedule.findOneAndUpdate(
      { _id: id, userId: req.userId },
      { status: 'completed', completedAt: new Date() },
      { new: true }
    );

    if (!schedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }

    res.status(200).json({ message: 'Schedule marked as complete', schedule });
  } catch (error) {
    console.error('Complete schedule error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get study statistics
exports.getStatistics = async (req, res) => {
  try {
    const schedules = await StudySchedule.find({ userId: req.userId });

    const stats = {
      total: schedules.length,
      completed: schedules.filter(s => s.status === 'completed').length,
      pending: schedules.filter(s => s.status === 'pending').length,
      inProgress: schedules.filter(s => s.status === 'in-progress').length,
      totalHours: schedules.reduce((sum, s) => sum + (s.duration || 0), 0)
    };

    res.status(200).json({ stats });
  } catch (error) {
    console.error('Get statistics error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
