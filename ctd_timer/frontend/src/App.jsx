import { useEffect, useState } from 'react'
import './App.css'

function Countdown({targetDate}) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))

  function calculateTimeLeft(targetDate) {
    if (!targetDate) return;
    const difference = targetDate - Date.now()
    if (difference < 0) return null;
    
    return {
      minutes: Math.floor((difference / (1000 * 60))),
      seconds: Math.floor((difference / 1000)),
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft(targetDate);
      if (!newTime) {
        clearInterval(timer);
      }
      setTimeLeft(newTime);
    }, 1000)
 
    return () => clearInterval(timer)

  }, [targetDate])

  if (!timeLeft) return <div>Time's up!</div>;

  return (
    <div>
      {timeLeft.minutes}m {timeLeft.seconds}s
    </div>
  );
}

function App() {
  const [inputDate, setInputDate] = useState("");
  const [target, setTarget] = useState(null);

  const handleChange = (e) => setInputDate(e.target.value)

  const handleStart = () => {
    if (!inputDate) return;
    const timestamp = new Date(inputDate).getTime()
    console.log(timestamp)
    console.log(Date.now())
    setTarget(timestamp)
    
  }

  return (
    <>
      <h1>CTN COUNTER</h1>
      <h1>{Date.now()}</h1>
      <div className="form">
        <input type="date" name="ctn" value={inputDate} onChange={handleChange} />
        <button onClick={handleStart}>Start Countdown</button>
        

        
        {target && <Countdown targetDate={target} />}

      </div>
      
    </>
  )
}

export default App
