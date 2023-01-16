import logo from './logo.svg';
import './App.css';
import Home from './components/home.js'
import Footer from './components/footer.js'
import NavBar from './components/navBar';
import About from './components/about.js';
import Contact from './components/contact.js';
import Music from './components/music.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
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
