import React from 'react'
import CareerPlanning from './CareerPlanning'
import PersonalBranding from './PersonalBranding'
import InterviewAndWorkplace from './InterviewAndWorkplace'
import ParentWorkshops from './ParentWorkshops'
import PersonalityAssessment from './PersonalityAssessment'
import Miscellaneous from './Miscellaneous'
// import ContactForm from './ContactForm'

function Container() {
  
  return (
    <div>
        <CareerPlanning />
        <PersonalBranding />
        <InterviewAndWorkplace />
        <ParentWorkshops />
        <PersonalityAssessment />
        <Miscellaneous />
    </div>
  )
}

export default Container