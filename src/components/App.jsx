import { useEffect, useState } from 'react';

const App = () => {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    const url = 'https://api.adviceslip.com/advice';
    const res = await fetch(url);
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h2>{advice}</h2>
      <button onClick={getAdvice}>Get advice</button>
      <Message count={count} />
    </div>
  );
};

const Message = (props) => {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice.
    </p>
  );
};

export default App;
