import React, { useEffect,useState } from "react";
import Amount from "./components/Amount"
import Result from "./components/Result"
import DropdownFrom from "./components/DropdownFrom"
import DropdownTo from "./components/DropdownTo"
import Switch from "./components/Switch"
import 'react-dropdown/style.css';
import {getApi} from "./helpers/getCurrencyApi."


function App() {
  
  // Initializing all the state variables 
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("uah");
  const [to, setTo] = useState("usd");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  
  // Calling the api whenever the dependency changes
  useEffect(() => {
    getApi(from,info,setInfo);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from]);
  
  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info])
    
  const handleChangeInput = (e) => {
    setInput(e.target.value)
  };

  const handleChangeFrom = (e) => {
    setFrom(e.value)
  };

  const handleChangeTo = (e) => {
    setTo(e.value)
  };

  // Function to convert the currency
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }
  
  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }
  
  return (
    <>
      <div className="heading">
        <h1>Currency converter</h1>
      </div>
      <div className="container">
        <Amount handleInput={handleChangeInput}/>
        <DropdownFrom options={options} from={from} handleFrom={handleChangeFrom}/>
        <Switch flip={flip}/>
        <DropdownTo options={options} to={to} handleTo={handleChangeTo}/>
      </div>
        <Result convert={convert} input={input} from={from} output={output} to={to}/>
    </>
  );
}
  
export default App;
