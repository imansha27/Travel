import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { packages } from './Pages/Packages/packages';
import { location } from './Pages/Location/location';
import { activities } from './Pages/Activities/activities';
import { transport } from './Pages/Transport/transport';
import { aboutus } from './Pages/Aboutus/aboutus';
import { contactus } from './Pages/Contactus/contactus';
import { Login } from './Pages/Login/login';
import {userprofile}  from './Pages/Userprofile/userprofile';
import {userpackages} from './Pages/Userpackages/userpackages';
import { Payment } from './Pages/Payment/payment';




function App() {
  // test comment
  // test deveop branch

  return (
    <div className="App">
      <Router>
        <div>

          <Route path='/' exact component={Home} />
          <Route path='/packages' exact component={packages} />
          <Route path='/location' exact component={location} />
          <Route path='/activities' exact component={activities} />
          <Route path='/transport' exact component={transport} />
          <Route path='/aboutus' exact component={aboutus} />
          <Route path='/contactus' exact component={contactus} />
          <Route path='/login' exact component={Login} />
          <Route path='/userprofile' exact component={userprofile} />
          <Route path='/userpackages' exact component={userpackages} />
          <Route path='/payment' exact component={Payment} />

          
        </div>
      </Router>
    </div>
  );
}

export default App;
