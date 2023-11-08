import React from 'react'
import Card from '../../utils/card/Card'

function Miscellaneous() {
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
        <h1 style={headingStyle}>Miscellaneous Services</h1>
        <div style={cardsContainer}>
            <Card img="/images/serviceImg/MiscellaneousServices1.png" caption="Dedicated Career Mentor" />
            <Card img="/images/serviceImg/MiscellaneousServices2.png" caption="Dedicated Career Mentor" />
            <Card img="/images/serviceImg/MiscellaneousServices3.png" caption="Dedicated Career Mentor" />
            <Card img="/images/serviceImg/MiscellaneousServices4.png" caption="Dedicated Career Mentor" />
        </div>
    </div> 
  )
}

export default Miscellaneous