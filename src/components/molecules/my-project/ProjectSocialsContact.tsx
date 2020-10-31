import React from "react"
import IconContactProject from "../../atoms/my-project/IconContactProject"

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
    </div>
      </>
    )
  }

  export default ProjectSocialsContact
