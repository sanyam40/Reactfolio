import './App.css';
import React, {useState} from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    subject: true,
    status: '',
    car:""
  });

  function changleHandler(event){
    const {name, value, type, checked} = event.target;
    setFormData(prevData=>{
      return{
        ...prevData,
        [name]: type === 'checkbox'? checked : value      }
    });
    console.log(formData);
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("FINAL DATA : ",formData);
  }
  
  return (
    <div className="App">
      <form action="" onSubmit={submitHandler}>
        <input type="text" name="firstName" placeholder='Enter first Name' value={formData.firstName} onChange={changleHandler}/>
        <br/>
        <br/>
        <input type="text" name="lastName" placeholder='Enter last Name' value={formData.lastName} onChange={changleHandler}/>
        <label htmlFor="subject"> Am  I visible</label>
        <input type="checkbox" name="subject" id="subject" checked={formData.subject} onChange={changleHandler}/>
        <br/>
        <fieldset>
        <label htmlFor="Online">Online</label>
        <input name="status" id="Online" value="Online" type="radio" checked={formData.status === 'Online'} onChange={changleHandler} >  
        </input>
        <label htmlFor="Offline">Offline</label>
        <input name="status" id="Offline" value="Offline" type="radio" checked={formData.status === 'Offline'} onChange={changleHandler}/>
        <br/>
        <br/>
          <legend>Mode :</legend>
        </fieldset>
        <select onChange={changleHandler} name="car" id="car" value={formData.car}>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <h2>First Name: {formData.firstName}</h2>
        <h2>Last Name: {formData.lastName}</h2>
        <button>SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
