import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import { useRef } from 'react';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {

  const homeref=useRef(null);
  const projectref=useRef(null);
  const aboutref=useRef(null);
  const contactref=useRef(null);
  const scrolltoprojectcomp=()=>{
    projectref.current.scrollIntoView({behavior:'smooth',block:'start'});
  }
  const scrolltoaboutcomp=()=>{
    aboutref.current.scrollIntoView({behavior:'smooth',block:'start'});
  }
  const scrolltohomecomp=()=>{
    homeref.current.scrollIntoView({behavior:'smooth',block:'start'});
  }
  const scrolltocontactcomp=()=>{
    contactref.current.scrollIntoView({behavior:'smooth',block:'start'});
  }

  return (
    <div className="App">
      <Navbar projectbutton={scrolltoprojectcomp} aboutbutton={scrolltoaboutcomp} homebutton={scrolltohomecomp} contactbutton={scrolltocontactcomp}></Navbar>
      <div ref={homeref}>
      <Home projectbutton={scrolltoprojectcomp} ></Home>
      </div>
      <div className='aboutdiv' ref={aboutref} >
        <About></About>
      </div>
      <div ref={projectref} className='projectdiv'>
        <Projects></Projects>
      </div>
      <div ref={contactref} className='contactdiv'>
        <Contact></Contact>
      </div>
      
    </div>
  );
}

export default App;
