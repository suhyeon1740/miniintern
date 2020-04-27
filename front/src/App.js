import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">      
      <Router>
        <Header />
        <Route exact path="/" component={Home} /> 
        <Route path="/projects" component={Projects} />
        <Footer />
      </Router>      
    </div>
  );
}

export default App;
