const MCQ = require('../models/MCQ');

exports.getAllMCQs = async (req, res) => {
  try {
    const mcqs = await MCQ.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.status(200).json({ mcqs });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.createMCQ = async (req, res) => {
  try {
    const { question, options, correctAnswer, subject, topic, difficulty, explanation } = req.body;
    const mcq = new MCQ({
      userId: req.userId,
      question,
      options,
      correctAnswer,
      subject,
      topic,
      difficulty: difficulty || 'medium',
      explanation
    });
    await mcq.save();
    res.status(201).json({ message: 'MCQ created successfully', mcq });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.submitAnswer = async (req, res) => {
  try {
    const { mcqId, selectedAnswer } = req.body;
    const mcq = await MCQ.findById(mcqId);
    if (!mcq) {
      return res.status(404).json({ message: 'MCQ not found' });
    }
    const isCorrect = selectedAnswer === mcq.correctAnswer;
    mcq.attempts.push({
      selectedAnswer,
      isCorrect,
      attemptedAt: new Date()
    });
    await mcq.save();
    res.status(200).json({ isCorrect, correctAnswer: mcq.correctAnswer, explanation: mcq.explanation });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getAnalytics = async (req, res) => {
  try {
    const mcqs = await MCQ.find({ userId: req.userId });
    let totalAttempts = 0;
    let correctAttempts = 0;
    mcqs.forEach(mcq => {
      mcq.attempts.forEach(attempt => {
        totalAttempts++;
        if (attempt.isCorrect) correctAttempts++;
      });
    });
    const accuracy = totalAttempts > 0 ? (correctAttempts / totalAttempts * 100).toFixed(2) : 0;
    res.status(200).json({ totalAttempts, correctAttempts, accuracy, totalQuestions: mcqs.length });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
