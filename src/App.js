import logo from './logo.svg';
import './App.css';
import Home from './components/pages/home.js'
import Footer from './components/pages/footer.js'

import About from './components/pages/about.js';
import Contact from './components/pages/contact.js';
import Music from './components/pages/music.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Home/>
      <About/>
      <Music/>
      <Contact/>
      <Footer/>
      </header>
    </div>
  );
}

export default App;
