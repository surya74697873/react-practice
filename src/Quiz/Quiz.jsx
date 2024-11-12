import { useState } from "react";
import data from "./Data";
import "./Quiz.css";
import { useEffect } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreCard, setScoreCard] = useState(false);
  const [timer, setTimer] = useState(10)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          if (currentQuestion < data.length - 1) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            return 10; 
          } else {
            setScoreCard(true);
            clearInterval(interval);
            return prevTimer;
          }
        } else {
          return prevTimer - 1;
        }
      });
    },1000)

    return () => clearInterval(interval)
  },[currentQuestion,timer])

  function checkCorrections(option) {
    if (data[currentQuestion].correctOption === option) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion < data.length - 1){
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
    else
      setScoreCard(true)
    setTimer(10)
  }


  function restartQuiz(){
    setCurrentQuestion(0)
    setScore(0)
    setScoreCard(false)
  }

  return (
    <div className="Quiz">
      {scoreCard ? (
        <div className="score-section">
          <h2>Your Score : {`${score} / ${data.length} `}</h2>
          <button onClick={restartQuiz}>Restart</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{data[currentQuestion].questions}</p>
          <div className="options">
            {data[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => checkCorrections(option)}>
                {option}
              </button>
            ))}
          </div>
          <div className="timer">Time Left : {timer}s</div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
