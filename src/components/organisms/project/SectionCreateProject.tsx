import BtnFullCreateProject from '../../atoms/project/BtnFullCreateProject'
import SvgBackgroundMiniBalls from '../../atoms/project/SvgBackgroundMiniBalls'
import ImagesCreateProject from '../../molecules/project/ImagesCreateProject'
import TitleDescriptionCreateProject from '../../molecules/project/TitleDescriptionCreateProject'

function SectionCreateProject() {
  return (
    <section className="section-create-project">
      <ImagesCreateProject />
      <article className="article-content-create-project">
        <TitleDescriptionCreateProject />
        <BtnFullCreateProject />
        <SvgBackgroundMiniBalls />
      </article>
    </section>
  )
}

export default SectionCreateProject
