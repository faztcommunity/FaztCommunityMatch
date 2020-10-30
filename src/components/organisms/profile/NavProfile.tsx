import LogoFaztMatch from '../../atoms/profile/LogoFaztMatch'
import BackgroundNav from '../../molecules/profile/BackgroundNav'
import BtnProfile from '../../molecules/profile/BtnProfile'
import BtonsMenu from '../../molecules/profile/BtonsMenu'
import PrincipalNav from '../../molecules/profile/PrincipalNav'

function NavProfile() {
  return (
    <>
      <nav className="content-menu-nav">
        <LogoFaztMatch />
        <BtonsMenu />
        <BtnProfile />
        <PrincipalNav />
        <BackgroundNav />
      </nav>
    </>
  )
}

export default NavProfile
