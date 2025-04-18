import React from 'react'
import Projects from './Projects'

export default function Home(props) {
  return (
    <div id='Home_compo'>
    <div className='Home_box'>
      <h1 className='title'>HEY I'M SPANDAN RAMDAS LADE</h1>
      <h4 className='subtext'>A Result-Oriented Web Developer building and managing <br></br>Websites and Web Applications</h4>
      <button onClick={props.projectbutton} id='projectbutton'>PROJECTS</button>
    </div>
    </div>
    
  )
}
