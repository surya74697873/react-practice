import './Quiz.css'

const Quiz = () => {
  return (
    <div className="Quiz">
      <div className="score-section" >
        <h2>Your Score : 3/3</h2><button>Restart</button>
      </div>
      <div className="question-section">
        <h2>Quesiton 1</h2>
        <p>This is sample Question</p>
        <class className="options">
          <button>option1</button>
          <button>option2</button>
          <button>option3</button>
          <button>option4</button>
        </class>
        <div className="timer">Time Left : 5s</div>
      </div>
    </div>
  );
};

export default Quiz;
