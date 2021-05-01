import { Route, Switch } from 'react-router';
import './App.scss'
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Navbar></Navbar>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/skills" exact>
              <Skills/>
            </Route>
            <Route path="/projects" exact>
              <Projects/>
            </Route>
            <Route path="/contact" exact>
              <Contact/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
