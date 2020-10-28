import React from 'react'
import ContentDescriptionProject from '../../molecules/create-project/ContentDescriptionProject'
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
</article>
  )
}

export default ColumnProjectTwo
