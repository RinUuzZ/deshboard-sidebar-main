import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Mss from './pages/Mss.jsx';
import Settings from './pages/Settings.jsx';
import Product from './pages/Product.jsx';
import Logout from './pages/Logout.jsx';
import Navbar from './components/NavBar.jsx';
import Login from './components/Login.jsx' 

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      {isLoggedIn ? ( 
        <>
          <Navbar />
          <Sidebar>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/settings" component={Settings} />
              <Route path="/mss" component={Mss} />
              <Route path="/product" component={Product} />
              <Route path="/logout" component={Logout} />
            </Switch>
          </Sidebar>
        </>
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}
    </BrowserRouter>
  );
};

export default App;
