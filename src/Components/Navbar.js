import React,{useState} from 'react'

export default function Navbar(props) {

const [isOpen,setIsOpen]=useState(false);

const toggleMenu=()=>{
    setIsOpen(!isOpen);
}

  return (
    <div>
        <nav className='nav'>
              <span className={`left-nav ${isOpen ? 'active': ''}`} onClick={props.homebutton}>
                <img src='/images/Profileimage.jpeg' alt='profileimage' className='profile_image'></img>
                <h3 id='profile_name'>SPANDAN RAMDAS LADE</h3>
              </span> 
               <ul className={`right-nav ${isOpen ? 'active' : ''}`}>
                <li><a href='./' onClick={(event)=>{
                  toggleMenu();
                  props.homebutton();
                  event.preventDefault();
                }}>Home</a></li>
                <li><a href='./' onClick={(event)=>{
                  toggleMenu();
                  props.aboutbutton();
                  toggleMenu();
                  event.preventDefault()}}>About</a></li>
                <li><a href='./' onClick={(event)=>{
                  toggleMenu();
                  props.projectbutton();
                  event.preventDefault()}}>Projects</a></li>
                <li><a href='./' onClick={(event)=>{
                  toggleMenu();
                  props.contactbutton();
                  event.preventDefault()}}
                  >Contact</a></li>
                </ul>
                <button className={`hamburger ${isOpen ? 'active' :''}`} onClick={toggleMenu} aria-label='Toggle menu'>
                  <span></span>
                  <span></span>
                  <span></span>

                </button>
                
        </nav>
      
    </div>
  )
}
