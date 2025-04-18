import React from 'react'

export default function Navbar(props) {
  return (
    <div>
        <nav>
              <span className='left-nav' onClick={props.homebutton}>
                <img src='/images/Profileimage.jpeg' height={'50px'} width={'50px'}></img>
                <h3 id='profile_name'>SPANDAN RAMDAS LADE</h3>
              </span> 
               <ul className='right-nav'>
                <li><a href='./' onClick={(event)=>{
                  props.homebutton();
                  event.preventDefault();
                }}>Home</a></li>
                <li><a href='./' onClick={(event)=>{
                  props.aboutbutton();
                  event.preventDefault()}}>About</a></li>
                <li><a href='./' onClick={(event)=>{
                  props.projectbutton();
                  event.preventDefault()}}>Projects</a></li>
                <li><a href='./' onClick={(event)=>{
                  props.contactbutton();
                  event.preventDefault()}}
                  >Contact</a></li>
                </ul>
                
        </nav>
      
    </div>
  )
}
