import React, {use, useState} from 'react'


  


export default function Contact() {

const [formData,setFormData]= useState({
    name:'',
    email:'',
    message:'',
  });

const [status,setStatus]=useState('');
const [errors,setErrors]=useState({});

const handleChange=(e)=>{
  const {name, value} = e.target;
  setFormData({...formData,[name]:value});

};

const validateForm =()=>{
  const newErrors ={};
  if(!formData.name.trim()) newErrors.name= "Name is required";
  if(!formData.email.trim()) {
    newErrors.email ="Email is required";
  }else if(!/\S+@\S+\.\S+/.test(formData.email)){
    newErrors.email = "Email is invalid"
  }
  if(!formData.message.trim()) newErrors.message="Message is required";
  setErrors(newErrors);
  return Object.keys(newErrors).length===0;
};

const handleSubmit = async (e) =>{
  e.preventDefualt();
  if(!validateForm()) return;

  const form = e.target;
  const data = new formData(form);
try{
  setStatus('Submitting...');
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded'},
    body: new URLSearchParams(data).toString(),
  });

  if(response.ok){
    setStatus('Form submitted successfully!');
    setFormData({ name: '', email: '', message: ''});
    setErrors({});
  }else{
    setStatus('Error submitting form. Please try again.');
  }
}catch (error){
  setStatus('Error submitting form. Please try again.');
} 
};

  return (
    <div id='contact_comp'>
      <h1 id='aboutme' className='Contact_title'>CONTACT</h1> <br></br>
      <h2 className='contact_desc'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h2>
      <div id='contact_form'>
        <div id='form'>
          <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          >
          <input type='hidden' name='form-name' value="contact"/>
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field"/>
            </label>
          </p>
          <div>
          <label id='name_label' htmlFor='name'>Name</label><br></br>
          <input type='text' name='name' placeholder='Enter Your Name' id='name' value={formData.name} onChange={handleChange}></input>
          {errors.name && <span style={{ color: 'red'}}>{errors.name}</span>}
          </div>
          <div>
          <label id='name_label' htmlFor='email'>Email</label><br></br>
          <input type='email' name='email' placeholder='Enter Your Email' id='name' value={formData.email} onChange={handleChange}></input>
          {errors.email && <span style={{ color: 'red'}}>{errors.email}</span>}
          </div>
          <div>
          <label id='message_label' htmlFor='message'>Message</label><br></br>
          <textarea name='message' placeholder='Enter Your Message' id='message' aria-colspan={100} value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <span style={{ color: 'red'}}>{errors.message}</span>}
          </div>
          <div id='submit_button'><input type='submit' value={'Submit'} name='submit' id='submit'></input></div>
          </form>
          {status && <p>{status}</p>}
        </div>
      </div>
    </div>
    
  )
}