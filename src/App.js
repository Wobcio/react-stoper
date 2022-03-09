import { useEffect, useState } from 'react';

import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import FormattedTime from './components/FormattedTime/FormattedTime';

const App = () => {

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn){
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [timerOn])

  return (
    <Container>
      <h1>Stoper</h1>
      <FormattedTime time={time}/>
      <Button onClick={() => setTimerOn(true)}>start</Button>
      <Button onClick={() => setTimerOn(false)}>stop</Button>
      <Button onClick={() => setTime(0)}>reset</Button>
    </Container>
  );
}

export default App;
