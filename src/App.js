import './App.css';
import Loader from './components/loader';
import Main from './components/main.js'
import Navbar from './components/navbar';
import Event from './components/eventsPopup'
import Archives from './components/archives'
import Projects from './components/projects'
import ParticleEffect from './components/particleeffect';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Loader />
      <Event />
      <Archives />
      <Projects />
      <ParticleEffect />
    </div>
  );
}

export default App;
