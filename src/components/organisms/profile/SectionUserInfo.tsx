import TitleNameUser from '../../atoms/profile/TitleNameUser'
import BackgroundProfileUser from '../../molecules/profile/BackgroundProfileUser'
import CircleUser from '../../molecules/profile/CircleUser'
import MenuCardUser from '../../molecules/profile/MenuCardUser'

function SectionUserInfo() {
  return (
    <div className="content-section-user">
      <TitleNameUser />
      <CircleUser />
      <BackgroundProfileUser />
      <MenuCardUser />
    </div>
  )
}

export default SectionUserInfo
