import React from 'react'

export default function About() {
  return (
    <div id='about_comp'>
      <h1 id='aboutme' className='title'>ABOUT ME</h1> <br></br>
      <h3 className='subtext'>Hey you will find more information about me, what i do, and my current skills mostly in terms <br></br> of programming and technology</h3><br></br>
      <div id='aboutcontent'>
        <div id='aboutcontex'>
        <h2>Get to know me!</h2>
        <p>I'm a Frontend Focused Web Developer building and managing the <br></br> Front-end of Websites and Web Applications that leads to the success of <br></br> the overall product. Check out some of my work in the Projects section.</p>
        <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
      </div>
      <div id='aboutskills'>
        <h3 id='myskills'>My Skills</h3>
        <div id='row1'>
        <div className='skills'>HTML</div>
        <div className='skills'>CSS</div>
        <div className='skills'>Javascript</div>
        <div className='skills'>React</div>
        <div className='skills'>Java</div></div>
        <div id='row2'>
        <div className='skills'>GIT</div>
        <div className='skills'>Github</div>
        <div className='skills'>Responsive Design</div>
        </div>
        
      </div>
        </div>
        
    </div>
  )
}
