import React from 'react';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <Info />
        <About />
        <Interests />
        <Footer />
      </main>
    </div>
  );
}

export default App;
