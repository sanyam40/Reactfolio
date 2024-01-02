import './App.css';
import { Routes, Route,Link, NavLink, Outlet } from 'react-router-dom';
import Header from './Header';
import About from './About';

function App() {
  return (
    <>
    <div className="App">
      <h1>HEADER</h1>
      <nav>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><NavLink to='/Support'>SUPPORT</NavLink></li>
          <li><Link to='/About'>ABOUT</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Header/>}>
         <Route index element={<div>Home Page</div>}/>
         <Route path='/Support' element={<div>Support Page</div>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='*' element={<div>NOT FOUND Page</div>}/>
        </Route>
      </Routes>
    </div>  
    </>
  );
}

export default App;
