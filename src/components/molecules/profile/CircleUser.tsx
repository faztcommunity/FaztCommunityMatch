import BtonEditImage from '../../atoms/profile/BtonEditImage'
import CircleDropUser from '../../atoms/profile/CircleDropUser'
import IconEditImage from '../../atoms/profile/IconEditImage'

function CircleUser() {
  return (
    <div className="circle-user">
      <CircleDropUser />
      <h2 className="text-image-user">Coloca tu foto aquí</h2>
      <div className="contentbtn-edit-image">
        <BtonEditImage />
        <IconEditImage />
      </div>
    </div>
  )
}

export default CircleUser
