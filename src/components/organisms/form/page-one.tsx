import BtnNext from '../../atoms/btonNext'
import DescriptionLogin from '../../molecules/description-login'
import EmailInput from '../../molecules/inputs/input-email'
import LastnameInput from '../../molecules/inputs/input-lastname'
import NameInput from '../../molecules/inputs/input-name'

function PageFormOne() {
  return (
    <>
      <NameInput aria-label="write your first name" />
      <LastnameInput aria-label="write your last name" />
      <EmailInput aria-label="write your email" />

      <DescriptionLogin />

      <div className="container-btn-next">
        <BtnNext />
      </div>
    </>
  )
}

export default PageFormOne
