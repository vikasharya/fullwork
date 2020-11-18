

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import User from './User/User';
import Stars from './Stars/Stars';
import Dashboard from './Dashboard/Dashboard';

import './App.css';

function App() {
  return (
    <Router>
    <div className="Dashboard">
          
          

          



<nav className="navbar navbar-expand-md bg-dark navbar-dark">  
  <a className="navbar-brand" href="#">Interview Task</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link activeclassname="active" className="nav-link " to="/">Dashboard</Link>
      </li>
      <li className="nav-item">
      <Link activeclassname="active" className="nav-link" to="/user">User</Link>
      </li>
      <li className="nav-item">
      <Link activeclassname="active" className="nav-link" to="/stars">Stars</Link>
      </li>    
    </ul>
  </div> 
</nav>



          
          
            <Route path="/" exact component={Dashboard} />
            <Route path="/user" component={User} />
            <Route path="/stars" component={Stars} />
         
          
    
    </div>
     </Router>
  );
}
 
export default App;
