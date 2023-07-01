
import './App.css';

import { Route,Routes,NavLink} from 'react-router-dom';
import Home from './componets/Home';
import Signup from './componets/Signup';
import Login from './componets/Login';
import Contactus from './componets/Contactus';


function App(){
  return(
      
      <div className='container-fluid'> 
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark text-end'>
          <div className='container-fluid'>
              
              <ul className='navbar-nav  ms-auto '>
                <li className='nav-item'>
                  <NavLink  className="nav-link" to="/" >Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink   className="nav-link" to="/signup" >Signup</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink  className="nav-link" to="/login" >Login</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink  className="nav-link" to="/contactus">Contactus</NavLink>
                </li>
              </ul>
              </div>
        
              </nav>
  

          

      
      <div>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/contactus" element={<Contactus/>}/>
          </Routes>
      </div>
      </div>
  )
}

export default App;
