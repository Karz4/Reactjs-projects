import React ,{useState} from "react";
import "./style.css";

function App() {


  const [minVal,setMinval]= useState(0);
  const [maxVal,setMaxVal] = useState(10);
  const [ randomNum, setRandomnum] = useState(5);
  const giveRandomNumber = () =>{
    setRandomnum(Math.floor(Math.random()*(maxVal-minVal +1) +minVal))
  }


  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>Random Number :<span>{randomNum}</span></p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input type="number"
            value={minVal}
            onChange={e => setMinval(e.target.value)}></input>
          </div>
          <div>
            <p>Max:</p>
            <input type="number"
            value={maxVal} 
            onChange={e => setMaxVal(e.target.value)}></input>
          </div>
        </div>
        <button onClick={giveRandomNumber}>Get Random Number</button>
      </div>
    </div>
  );
}

export default App;
