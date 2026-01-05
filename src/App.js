import './styles.css';
import Header from './header';
import About from './about';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact'

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;