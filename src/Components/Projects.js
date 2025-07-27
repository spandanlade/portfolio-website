import React from 'react'

export default function Projects() {
  return (
    <div id='projects_comp'>
      <h1 id="aboutme" className='Project_title'>PROJECTS</h1> <br></br>
      <div className='projectname'>Electricity Billing System</div>
      <div className='project'>
        <img className='projectimage' src='/images/image.png' alt='project_1_image'></img>
        <div>
        <h3 className='projectdescription'>Description</h3> 
        <h4 className='prodesc_context'><p>Developed a standalone Java application to generate monthly electicity bills, implementing data validation
        and storage</p></h4>
        </div>
      </div>
      <div className='projectname'>Online Blogging System</div>
      <div className='project'>
        <img className='projectimage' src='/images/Screenshot (99).png' alt='project_2_image'></img>
        <div >
        <h3 className='projectdescription'>Description</h3> 
        <h4 className='prodesc_context'><p>Built a dynamic web application using PHP and MySQL, enabling users to create and categorize blogs with
secure authentication.</p></h4>
      </div>
      </div>
      {/* <div><h3>Communnity Music Records Library</h3></div> */}
    </div>
  )
}
