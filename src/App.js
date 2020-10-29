import React from 'react';
import Navbar from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import Upload from './Components/Pages/Upload';
import MyProfile from './Components/Pages/MyProfile';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/upload' component={Upload} />
          <Route path='/my-profile' component={MyProfile} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;