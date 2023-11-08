import React from 'react'
import Card from '../../utils/card/Card'

function CareerPlanning() {
    const cardsContainer = {
        display: "flex",
        flexWrap: "wrap",
        // justifyContent: "space-between",
        gap: "16px",
        padding: "0 0 70px 0",
    }
    const headingStyle ={
      textAlign: "left",
      padding: "0 0 30px 0",
      fontWeight: "600",
    }
    
  return (
    <div>
        <h1 style={headingStyle}>Career Planning Services</h1>
        <div style={cardsContainer}>
            <Card img="/images/serviceImg/CareerPlanning1.png" caption="Dedicated Career Mentor" />
            <Card img="/images/serviceImg/CareerPlanning2.png" caption="Career Assessment" />
            <Card img="/images/serviceImg/CareerPlanning3.png" caption="Career Coaching Recommendations" />
            <Card img="/images/serviceImg/CareerPlanning4.png" caption="Career Mapping" />
            <Card img="/images/serviceImg/CareerPlanning5.png" caption="Course/Career Selection" />
            <Card img="/images/serviceImg/CareerPlanning6.png" caption="Industry-specific Career Counseling" />
            <Card img="/images/serviceImg/CareerPlanning7.png" caption="MBA Application Plan" />
            <Card img="/images/serviceImg/CareerPlanning8.png" caption="Scholarship And Financial Aid Counseling" />
            <Card img="/images/serviceImg/CareerPlanning9.png" caption="Skill-Based Training Programs" />
            <Card img="/images/serviceImg/CareerPlanning10.png" caption="Subject Assessment" />
            <Card img="/images/serviceImg/CareerPlanning11.png" caption="Subject Mapping" />
            <Card img="/images/serviceImg/CareerPlanning12.png" caption="Post-Grad Course Selection and Requirements" />
        </div>
    </div>
  )
}

export default CareerPlanning