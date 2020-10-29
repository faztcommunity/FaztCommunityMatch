import React from 'react'
import BtnAddRequirement from '../../atoms/create-project/BtnAddRequirement'
import AddRequirementsProject from '../../molecules/create-project/AddRequirementsProject'
import ContentProjectRequirements from '../../molecules/create-project/ContentProjectRequirements'

function ColumnProjectThree() {
  return (
<article className="article-column-project-three">
  <ContentProjectRequirements />
  <AddRequirementsProject />
</article>
  )
}

export default ColumnProjectThree
