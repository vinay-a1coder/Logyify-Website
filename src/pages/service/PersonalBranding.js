import React from 'react'
import Card from '../../utils/card/Card'

function PersonalBranding() {
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
        <h1 style={headingStyle}>Personal Branding and Job Search Services</h1>
        <div style={cardsContainer}>
            <Card img="/images/serviceImg/PersonalBranding1.png" caption="Dedicated Career Mentor" />
            <Card img="/images/serviceImg/PersonalBranding2.png" caption="Career Assessment" />
            <Card img="/images/serviceImg/PersonalBranding3.png" caption="Career Coaching Recommendations" />
            <Card img="/images/serviceImg/PersonalBranding4.png" caption="Career Mapping" />
            <Card img="/images/serviceImg/PersonalBranding5.png" caption="Course/Career Selection" />
            <Card img="/images/serviceImg/PersonalBranding6.png" caption="Industry-specific Career Counseling" />
            <Card img="/images/serviceImg/PersonalBranding7.png" caption="MBA Application Plan" />
        </div>
    </div> 
  )
}

export default PersonalBranding