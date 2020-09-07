import BtnNext from '../../atoms/btonNext'
import DescriptionLogin from '../../molecules/description-login'
import EmailInput from '../../molecules/inputs/input-email'
import LastnameInput from '../../molecules/inputs/input-lastname'
import NameInput from '../../molecules/inputs/input-name'

function PageFormOne() {
  return (
    <>
      <NameInput />
      <LastnameInput />
      <EmailInput />
      <p className="content-description">
        <DescriptionLogin />
      </p>
      <div className="container-btn-next">
        <BtnNext />
      </div>
    </>
  )
}

export default PageFormOne
