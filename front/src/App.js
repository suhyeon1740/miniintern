import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
// import About from './pages/About/About'
import Projects from './pages/projects/Projects'

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
