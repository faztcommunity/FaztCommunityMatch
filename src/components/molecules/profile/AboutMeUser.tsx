import IconAddRedSocial from '../../atoms/profile/IconAddRedSocial'
import IconCircleSocial from '../../atoms/profile/IconCircleSocial'

function AboutMeUser() {
  return (
    <>
      <span className="line-hover-me-on"></span>
      <div className="content-description-user">
        <h3 className="text-description-user">Descripción</h3>
        <input type="text" className="box-description-user" />
      </div>
      <div className="content-social-user">
        <h3 className="text-social-user">Redes sociales</h3>
        <div className="box-social-user">
          <div className="conten-add-user">
            <IconCircleSocial />
            <IconAddRedSocial />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMeUser
