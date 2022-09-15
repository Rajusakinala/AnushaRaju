import './App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [arr, setArr] = useState([]);
  function submitHandler(e) {
    e.preventDefault();
    if (
      text === 'Raju' ||
      text === 'anusha' ||
      text === 'ANUSHA' ||
      text === 'Anusha' ||
      text === 'Anu' ||
      text === 'ANU' ||
      text === 'raju' ||
      text === 'Raju' ||
      text === 'Ram' ||
      text === 'Parusharamulu' ||
      text === 'parusharamulu' ||
      text === 'Rajamma' ||
      text === 'rajamma' ||
      text === 'anu' ||
      text === 'My kids' ||
      text === 'my kids' ||
      text === 'My Kids' ||
      text === 'mt Kids'
    ) {
      console.log('start');
      const s = [];
      for (let i = 1; i <= 10000; i++) {
        let a = 'Raju likes Anusha ';
        let b = 'Anusha loves Raju ';
        let c = 'Raju and Anusha for each other ';
        s.push(a);
        s.push(b);
        s.push(c);
      }
      console.log('end');
      s.push(',,and soo on,');
      setArr(s);
    } else {
      setArr(['Wrong name']);
    }
  }
  return (
    <div className="App">
      <h3>Welcome to Raju Application</h3>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Whos is in Raju Heart"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {arr.map((item, index) => {
          return <h3 key={index}>{item}</h3>;
        })}
      </ul>
    </div>
  );
}

export default App;
