import React from 'react'
import Container from './Container'
import ContactForm from './ContactForm'
// import './Service.scss'

function Service() {
  const containerStyle = {
    padding: "0 70px 0 70px",
  }
  const headingSytle = {
    backgroundColor: "#f5f5f5",
    fontSize: "78px",
    fontWeight: "400",
    height: "120px",
  }
  return (
    <div>
        <h1 style={headingSytle}>Our Services</h1>
        <div style={containerStyle}>
        <Container />
        </div>
        <h1 style={headingSytle}>Have Doubts? Let us Help!</h1>
        <ContactForm />
    </div>
  )
}

export default Service