import React from 'react'
import Card from '../../utils/card/Card'

function ParentWorkshops() {
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
        <h1 style={headingStyle}>Parent Workshops and Resources</h1>
        <div style={cardsContainer}>
            <Card img="/images/serviceImg/ParentWorkshops1.png" caption="Dedicated Career Mentor" />
        </div>
    </div> 
  )
}

export default ParentWorkshops