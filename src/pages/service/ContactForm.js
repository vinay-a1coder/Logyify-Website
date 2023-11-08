import React, { useState } from 'react'
import './ContactForm.css'

function ContactForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [doubts, setDoubts] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            phone,
            doubts
        }
        console.log("Form Data: ", formData);
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className='formContainer'>
            <label htmlFor='firstName'>First Name</label><br />
            <input
             type='text' 
             id='firstName' 
             name='firstName' 
             value={firstName}
             onChange={(e)=>setFirstName(e.target.value)}
            //  size={50}
             required
            />

            <label htmlFor='lastName'>Last Name</label><br />
            <input
             type='text' 
             id='lastName' 
             name='lastName' 
             value={lastName}
             onChange={(e)=>setLastName(e.target.value)}
            //  size={50}
             required 
            />

            <br /><br />

            <label htmlFor='email'>Email</label>
            <input
             type='email' 
             id='email' 
             name='email' 
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             size={120}
             required 
            /><br /><br />

            <label htmlFor='phone'>Mobile No.</label>
            <input
             type='tel' 
             id='phone' 
             name='phone' 
             value={phone}
             onChange={(e)=>setPhone(e.target.value)}
             size={50}
            /><br /><br />

            <label htmlFor='doubts'>Doubts</label>
            <textarea
             id='doubts' 
             name='doubts' 
             value={doubts}
             onChange={(e)=>setDoubts(e.target.value)}
             size={50}
            /><br /><br />

            <button type='submit'>Get Started</button><br /><br />
        </form>
    </div>
  )
}

export default ContactForm