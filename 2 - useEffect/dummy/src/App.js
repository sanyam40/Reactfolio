import './App.css';
import {useEffect, useState} from 'react';

function App() {
  const[text,setText]=useState('sanyam');
  const [count,setCount]=useState(0);

  // variation 1 -> for every time
  // useEffect(()=>{
  //   document.title=text;
  // });

  // variation 2 -> for only one time
  // useEffect(()=>{
  //   console.log('useEffect');
  // },[])

  // variation 3 -> for only one time & when dependency changes
  // useEffect(()=>{
  //   console.log('useEffect');
  // },[count])

  // variation 4 -> to handle unmounting of a component (clean up)
  useEffect(()=>{
    // add event listener
    console.log('listener added');
    return ()=>{ // will be implmeneted first 
      // remove event listener
      console.log('listener removed');
    }
  },[text]);

  function changeHandler(event){
    setText(event.target.value);
    console.log(text);
  }

  return (
    <div className="App">
      <input type="text" onChange={changeHandler}/>
    </div>
  );
}

export default App;
