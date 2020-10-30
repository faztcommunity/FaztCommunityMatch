import ContentDescriptionProject from '../../molecules/match/ContentDescriptionProject'
import ContentImageProjec from '../../molecules/match/ContentImageProject'
import ContentNameProject from '../../molecules/match/ContentNameProject'
import ContentOwnerProject from '../../molecules/match/ContentOwnerProject'
import ContentRequirementProject from '../../molecules/match/ContentRequirementProject'
import ContentTypeProject from '../../molecules/match/ContentTypeProject'

function CardMatchProject() {
  return (
    <section className="card-match-project">
      <ContentImageProjec />
      <div className="section-card-project-match">
        <ContentNameProject />
        <ContentDescriptionProject />
        <ContentTypeProject />
      </div>
      <div>
        <ContentOwnerProject />
        <ContentRequirementProject />
      </div>
    </section>
  )
}

export default CardMatchProject
