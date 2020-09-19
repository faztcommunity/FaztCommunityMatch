import React from 'react'
import BackgroundProfileUser from '../../molecules/profile/BackgroundProfileUser'
import CircleUser from '../../molecules/profile/CircleUser'

function SectionUserInfo() {
  return (
    <div className="content-section-user">
      <CircleUser />
      <BackgroundProfileUser />
    </div>
  )
}

export default SectionUserInfo
