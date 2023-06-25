
import { useEffect, useState } from 'react';
import ringtone from '../../../assets/Time.mp3';



const Practice = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [running, setRunning] = useState(false);

  const audio = new Audio(ringtone);

  useEffect(() => {
    if (running && timeRemaining === 0) {
      // Timer has reached 0, play the ringtone
      audio.play();
    }
  }, [running, timeRemaining, audio]);

  let intervalId;

  const startTimer = (duration) => {
    clearInterval(intervalId);
    setTimeRemaining(duration);
    setRunning(true);

    intervalId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    setRunning(false);
    audio.pause();
    audio.currentTime = 0;
  };

  return (
    <div>
      <h1>Timer</h1>
      {running ? (
        <button onClick={stopTimer}>Stop Timer</button>
      ) : (
        <div>
          <input
            type="number"
            min="1"
            value={timeRemaining}
            onChange={(e) => setTimeRemaining(parseInt(e.target.value))}
          />
          <button onClick={() => startTimer(timeRemaining)}>Start Timer</button>
        </div>
      )}
    </div>
  );
};

export default Practice;
