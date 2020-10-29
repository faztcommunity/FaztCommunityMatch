import IconChange from '../../atoms/profile/IconChange'
import IconInfoChange from '../../atoms/profile/IconInfoChange'

function BtonChange() {
  return (
    <>
      <div className="content-hover-circle">
        <IconInfoChange />
        <div className="hover-circle"></div>

        <IconChange />
      </div>
    </>
  )
}

export default BtonChange
