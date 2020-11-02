import IconFacebook from '../../../assets/svg/Facebook.svg'
import IconLinkedin from '../../../assets/svg/Linkedin.svg'

function ContactSection() {
  return (
    <div className="content-contact-section">
<h2 className="txt-contant-section">Contactanos</h2>
<span className="line-contact-section"></span>
<div className="content-social-contact">
<div>
<a className="icon-facebook" href="https://discord.gg/rg3fKr6" target="_blank"><IconFacebook /></a>
<a href="https://github.com/faztcommunity/FaztCommunityMatch" target="_blank"><IconLinkedin /></a>
</div>
<h3 className="email-contact">faztmatch@gmail.com</h3>
</div>
    </div>
  )
}

export default ContactSection
