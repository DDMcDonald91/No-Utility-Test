import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation.js';
import Footer from './Components/Footer.js';
import Hero from './Sections/Hero.js';
import About from './Sections/About.js';
import Team from './Sections/Team.js';
import Gallery from './Sections/Gallery.js';
import FAQs from './Sections/FAQs';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Team />
      <Gallery />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
