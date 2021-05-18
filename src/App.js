  import React,{useState} from 'react';
  import {Message} from './Message'
  import './App.css';
  export default function App() {
    let [count, setCount]=useState(1)
    let [isMorning, setMorning]=useState(true)
    return (
      <div className={`box ${isMorning ? 'dayLight' : ''}`} >
      <h1> Have a good {isMorning ? 'Morning' : 'Night'}</h1>
      
      <Message counter={count}/> 
      <button onClick={
      ()=>setCount(count + 1)}> 
      Update Counter
      </button> 
      
      <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
      </div>
    );
  }


