import CardDesciptionProject from "../../molecules/my-project/CardDesciptionProject"
import CardHistoryProject from "../../molecules/my-project/CardHistoryProject"
import CardTypeOfProject from "../../molecules/my-project/CardTypeOfProject"
import TitleProjectReactions from "../../molecules/my-project/TitleProjectReactions"


function MyProjectColumnTwo() {
  return (

<article className="content-project-column-two">
<TitleProjectReactions />
<CardDesciptionProject />
<CardTypeOfProject />
<CardHistoryProject />
</article>
  )
}

export default MyProjectColumnTwo
