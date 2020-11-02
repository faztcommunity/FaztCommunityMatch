import BoxTypeOfProject from "../create-project/BoxTypeOfProject"
import BoxTypeOfProjectTwo from "../create-project/BoxTypeOfProjectTwo"


function CardTypeOfProject() {


    return (
<>
        <h2 className="type-project-edited">Tipo de proyecto</h2>
        <div className="content-edit-type-project">
        <BoxTypeOfProject />
        <BoxTypeOfProjectTwo />
        </div>
        </>
    )
}

export default CardTypeOfProject
