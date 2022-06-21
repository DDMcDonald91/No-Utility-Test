import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Web from 'web3';
import Navigation from './Components/Navigation.js';
import Footer from './Components/Footer.js';
import Hero from './Sections/Hero.js';
import About from './Sections/About.js';
import Team from './Sections/Team.js';
import ParallaxGallery from './Sections/ParallaxGallery.js';
import Utility from './Sections/Utility.js';


function App() {
  let Web3 = require('web3');
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

export default App;
