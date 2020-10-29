import BtnSaveNext from '../../atoms/create-project/BtnSaveNext'
import ContentDescriptionProject from '../../molecules/create-project/ContentDescriptionProject'
import ContentInfoProjectTest from '../../molecules/create-project/ContentInfoProjectTest'
import ContentProjectTest from '../../molecules/create-project/ContentProjectTest'
import ContentTitleProject from '../../molecules/create-project/ContentTitleProject'
import InputDescriptionProject from '../../molecules/create-project/InputDescriptionProject'
import InputEditTitleProject from '../../molecules/create-project/InputEditTitleProject'

function ColumnProjectTwo() {
  return (
    <article className="article-column-project-two">
      <ContentTitleProject />
      <InputEditTitleProject />
      <ContentDescriptionProject />
      <InputDescriptionProject />
      <ContentProjectTest />
      <ContentInfoProjectTest />
      <BtnSaveNext />
    </article>
  )
}

export default ColumnProjectTwo
