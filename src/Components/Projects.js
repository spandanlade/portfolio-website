import React from 'react'

export default function Projects() {
  return (
    <div id='projects_comp'>
      <div className='projectname'>Electricity Billing System</div>
      <div className='project'>
        <img className='projectimage' src='/images/image.png' alt='project_1_image'></img>
        <h3 className='projectdescription'>Description:</h3> 
        <h4 className='prodesc_context'><p>Developed a standalone Java application to generate monthly electicity bills, implementing data validation
        and storage</p></h4>
      </div>
      <div><h3>Online Blogging System</h3></div>
      <div><h3>Communnity Music Records Library</h3></div>
    </div>
  )
}
