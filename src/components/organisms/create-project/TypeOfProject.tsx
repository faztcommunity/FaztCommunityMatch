import BoxTypeOfProject from "../../molecules/create-project/BoxTypeOfProject"

function TypeOfProject() {
  return (
    <>
      <div className="content-type-proyect">
        <div className="select-style">
          <select className="select-type-project" name="" id="">
            <option
              defaultValue="Seleccionar tipo de proyecto"
              selected
              disabled
            >
              Seleccionar tipo de proyecto
            </option>
            <option value="1">Proyecto para aprender</option>
            <option value="2">Proyecto con monetización futura</option>
            <option value="3">Proyecto monetizado</option>
            <option value="4">Proyecto con opción de empleo a futuro</option>
            <option value="5">Proyecto con paga temporal</option>
            <option value="6">Proyecto como hobbie</option>
          </select>
        </div>

        <div className="container-types-project">
        <BoxTypeOfProject />
        </div>
      </div>
    </>
  )
}

export default TypeOfProject
