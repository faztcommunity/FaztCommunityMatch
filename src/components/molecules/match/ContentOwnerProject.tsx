import AvatarProject from './AvatarProject'

function ContentOwnerProject() {
  return (
    <article className="content-owner-project">
      <AvatarProject />
      <div className="card-owner-project">
        <h4 className="style-title-owner"> Owner</h4>
        <h3 className="name-owner">
          Nombre dueño del proyecto.{' '}
          <span className="line-title-name-owner"></span>
        </h3>
        <p className="owner-description"></p>
      </div>
    </article>
  )
}

export default ContentOwnerProject
