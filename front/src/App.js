import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About/About'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
