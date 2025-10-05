import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MCQDashboard() {
  const [mcqs, setMcqs] = useState([]);
  const [currentMcq, setCurrentMcq] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMCQs();
  }, []);

  const fetchMCQs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/mcq');
      setMcqs(response.data.mcqs || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching MCQs:', error);
      setLoading(false);
    }
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const submitAnswer = async () => {
    if (!selectedAnswer) return;

    try {
      const response = await axios.post('http://localhost:5000/api/mcq/submit', {
        mcqId: currentMcq?.id,
        answer: selectedAnswer
      });

      if (response.data.correct) {
        setScore({ ...score, correct: score.correct + 1, total: score.total + 1 });
      } else {
        setScore({ ...score, total: score.total + 1 });
      }

      setSelectedAnswer(null);
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  if (loading) {
    return <div>Loading MCQs...</div>;
  }

  return (
    <div className="mcq-dashboard">
      <h2>MCQ Practice Dashboard</h2>
      
      <div className="score-card">
        <h3>Your Score</h3>
        <p>Correct: {score.correct} / {score.total}</p>
        <p>Accuracy: {score.total > 0 ? ((score.correct / score.total) * 100).toFixed(1) : 0}%</p>
      </div>

      <div className="mcq-container">
        <h3>Sample MCQ</h3>
        <p>What is the most common cause of community-acquired pneumonia?</p>
        
        <div className="options">
          <button onClick={() => handleAnswerSelect('A')} 
                  className={selectedAnswer === 'A' ? 'selected' : ''}>
            A. Streptococcus pneumoniae
          </button>
          <button onClick={() => handleAnswerSelect('B')} 
                  className={selectedAnswer === 'B' ? 'selected' : ''}>
            B. Mycoplasma pneumoniae
          </button>
          <button onClick={() => handleAnswerSelect('C')} 
                  className={selectedAnswer === 'C' ? 'selected' : ''}>
            C. Haemophilus influenzae
          </button>
          <button onClick={() => handleAnswerSelect('D')} 
                  className={selectedAnswer === 'D' ? 'selected' : ''}>
            D. Staphylococcus aureus
          </button>
        </div>

        <button onClick={submitAnswer} disabled={!selectedAnswer}>
          Submit Answer
        </button>
      </div>
    </div>
  );
}

export default MCQDashboard;
