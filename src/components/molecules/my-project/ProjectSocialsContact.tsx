import React from "react"
import IconContactProject from "../../atoms/my-project/IconContactProject"
import ProfileImageProject from "../../atoms/my-project/ProfileImageProject"

function ProjectSocialsContact() {
    return (

    <>
    <div className="global-content-contacts">
    <div className="contact-icon-info">
        <h3 className="title-contact">Contactanos</h3>
        <div className="info-contact-project"><span className="character-question">?</span></div>
    </div>
    <span className="line-contact"></span>
    <div className="content-add-social-project">
    <IconContactProject />
    <IconContactProject />
    <IconContactProject />
    <IconContactProject />
    </div>
    <ProfileImageProject />
    <article className="global-info-project"></article>
    </div>
      </>
    )
  }

  export default ProjectSocialsContact
