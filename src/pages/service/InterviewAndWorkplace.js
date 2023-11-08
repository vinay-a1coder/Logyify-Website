import React from 'react'
import Card from '../../utils/card/Card'

function InterviewAndWorkplace() {
  const cardsContainer = {
    display: "flex",
    flexWrap: "wrap",
    // justifyContent: "space-between",
    gap: "20px",
    padding: "0 0 70px 0",
  }
  const headingStyle ={
    textAlign: "left",
    padding: "0 0 30px 0",
    fontWeight: "600",
  }

return (
    <div>
        <h1 style={headingStyle}>Interview and Workplace Preparation Services</h1>
        <div style={cardsContainer}>
            <Card img="/images/serviceImg/InterviewAndWorkplace1.png" caption="Dedicated Career Mentor" />
            <Card img="/images/serviceImg/InterviewAndWorkplace2.png" caption="Career Assessment" />
            <Card img="/images/serviceImg/InterviewAndWorkplace3.png" caption="Career Coaching Recommendations" />
            <Card img="/images/serviceImg/InterviewAndWorkplace4.png" caption="Career Mapping" />
            <Card img="/images/serviceImg/InterviewAndWorkplace5.png" caption="Course/Career Selection" />
            <Card img="/images/serviceImg/InterviewAndWorkplace6.png" caption="Industry-specific Career Counseling" />
            <Card img="/images/serviceImg/InterviewAndWorkplace7.png" caption="MBA Application Plan" />
            <Card img="/images/serviceImg/InterviewAndWorkplace8.png" caption="MBA Application Plan" />
        </div>
    </div> 
  )
}

export default InterviewAndWorkplace