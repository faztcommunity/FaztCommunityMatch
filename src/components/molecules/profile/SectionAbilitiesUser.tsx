import React from 'react'
import BackgroundSectionAbilities from '../../atoms/profile/BackgroundSectionAbilities'
import BtonAddAbilities from '../../atoms/profile/BtonAddAbilities'

function SectionAbilitiesUser() {
  return (
    <>
      <span className="line-hover-abilities-on"></span>
      <div className="content-abilities">
        <BackgroundSectionAbilities />
        <BtonAddAbilities />
      </div>
    </>
  )
}

export default SectionAbilitiesUser
