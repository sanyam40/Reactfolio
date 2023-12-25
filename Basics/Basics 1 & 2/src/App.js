import './App.css';
import React,{useState} from 'react';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Form from './components/Form';

function App() {
  const response = [{
    itemName: 'sanyam',
    itemDate: '21',
    itemMonth: 'June',
    itemYear: '2003'
  },
  {
    itemName: 'sahil',
    itemDate: '10',
    itemMonth: 'dec',
    itemYear: '2003'
  }
  ];

  const [title,settitle]=useState('demo1')

  function clickHandler(){
    if(title==='demo1'){
      settitle('demo2')
    }else settitle('demo1')
    console.log('button clicked')
  }

  function printItems(data){
    response.push(data);
    console.log('data is print at parent component')
    console.log(data)
  }
  
  return (
    <>
      <div className="App">
        <Item name={response[0].itemName} title={title}>hello</Item>
        <ItemDate date={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear} />
        <button onClick={clickHandler}>Add To Cart</button>

        <Item name={response[1].itemName} title={title}/>
        <ItemDate date={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear} />

        {/* <Item name={response[2].itemName} title={title}/>
        <ItemDate date={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear} /> */}

        <h2>demo</h2>

        {/* // here we are passing the function as a prop to the child component */}
        <Form print={printItems}/> 
      </div>
    </>
  );
}

export default App;
