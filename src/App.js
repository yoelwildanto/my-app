import './App.css';
import { NavBar } from './components/NavBar';
import { Home } from './section/Home'
import { About } from './section/About'
import { Skills } from './section/Skills'

function App() {
  return (
    <div >
      <NavBar/>
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
