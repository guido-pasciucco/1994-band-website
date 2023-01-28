import './App.css';
import Home from './components/pages/home.js'
import Footer from './components/pages/footer.js'
import About from './components/pages/about.js';
import Contact from './components/pages/contact.js';
import Music from './components/pages/music.js';
import Shows from './components/pages/shows.js';
import NavBar from './components/pages/navBar.js';
import Stats from './components/pages/stats.js';

function App() {
  return (
      <>
      <NavBar /><div className="App">
      <header className="App-header">
        <Home />
        <About />
        <Stats />
        <Shows />
        <Music />
        <Contact />
        <Footer />
      </header>
    </div></>
  );
}

export default App;
