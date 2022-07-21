import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Web from 'web3';
import Navigation from './Components/Navigation.js';
import Footer from './Components/Footer.js';
import Hero from './Sections/Hero.js';
import About from './Sections/About.js';
import Team from './Sections/Team.js';
import ParallaxGallery from './Sections/ParallaxGallery.js';
import Utility from './Sections/Utility.js';
import Loading from './Components/Loading';

function App() {
  let Web3 = require('web3');
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000)

  if(loading) {
    return(
      <Loading />
    )
  } else {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <ParallaxGallery />
      <Team />
      <Utility />
      <Footer />
    </div>
  );
  }
}

export default App;
