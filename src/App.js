import './App.css';
import { Nameform } from "./Nameform";
import {AuthEmailPass} from './AuthEmailPass'
import { DiffWayAuth } from './DiffWayAuth';
import {Nav} from './Nav';
import {Home} from './Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (

    <div>

      <Router>
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Nameform' element={<Nameform/>}/>
        <Route exact path='/AuthEmailPass' element={<AuthEmailPass/>}/>
        <Route exact path='/DiffWayAuth' element={<DiffWayAuth/>}/>
      </Routes>
  
      </Router>
 
    </div>
  );
}

export default App;
