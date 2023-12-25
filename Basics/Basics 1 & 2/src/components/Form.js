import React,{useState} from 'react'

export default function Form(props) {

  const [name,setName]=useState('');
  const [date,setDate]=useState('');
  const [month,setMonth]=useState('');
  const [year,setYear]=useState('');

  function NameChangeHandler(event){
    setName(event.target.value)
  }

  function DateChangeHandler(event){
    setDate(event.target.value)
  }

  function MonthChangleHandler(event){
    setMonth(event.target.value)
  }

  function YearChangleHnalder(event){
    setYear(event.target.value)
  }

  function submitHandler(event){
    event.preventDefault(); // It is used to prevent the default behaviour of the form
    const response = {
      itemName: name,
      itemDate: date,
      itemMonth: month,
      itemYear: year
    }
    props.print(response); // sending data to Parent Component
    setName('')
    setDate('')
    setMonth('')
    setYear('')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input type="text" onChange={NameChangeHandler} value={name}/>
        <label htmlFor="name">date</label>
        <input type="text" onChange={DateChangeHandler} value={date}/>
        <label htmlFor="name">month</label>
        <input type="text" onChange={MonthChangleHandler} value={month}/>
        <label htmlFor="name">year</label>
        <input type="text" onChange={YearChangleHnalder} value={year}/>
        <button type='submit' >submit</button>
      </form>
    </div>
  )
}
