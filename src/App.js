import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Therapy from './pages/Therapy';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollArrow from './components/ScrollArow';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


const App = () => {
  return (
    <Router>
    <div className="App">
      <ScrollToTop />
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/therapy" component={Therapy} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      <Footer />
      <ScrollArrow />
    </div>
    </Router>
  );
}

export default App;
