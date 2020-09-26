import React from 'react'
import TitleNameUser from '../../atoms/profile/TitleNameUser'
import BackgroundProfileUser from '../../molecules/profile/BackgroundProfileUser'
import CircleUser from '../../molecules/profile/CircleUser'
import DescriptionUser from '../../molecules/profile/DescriptionUser'
import MenuCardUser from '../../molecules/profile/MenuCardUser'
import RedSocialUser from '../../molecules/profile/RedSocialUser'

function SectionUserInfo() {
  return (
    <div className="content-section-user">
      <TitleNameUser />
      <CircleUser />
      <BackgroundProfileUser />
      <MenuCardUser />
      <div className="content-info-me">
        <DescriptionUser />
        <RedSocialUser />
      </div>
    </div>
  )
}

export default SectionUserInfo
