import BtonFree from '../../atoms/plans/BtonFree'
import PriceFree from '../../atoms/plans/PriceFree'

function CardFreeDescription() {
  return (
    <div className="card-free-description">
      <p className="description-free">Ver 20 Usuarios por día</p>
      <span className="under-line"></span>
      <p className="description-free">Ver 20 Proyectos por día</p>
      <span className="under-line"></span>
      <p className="description-free">
        1 estrella para reaccionar por día (no acumulable)
      </p>
      <span className="under-line"></span>
      <p className="description-free">
        5 corazón para reaccionar por día (no acumulable)
      </p>
      <span className="under-line"></span>
      <p className="description-free">
        Maximo 1 retroceso en la vista de usuarios o proyectos
      </p>

      <BtonFree />
      <PriceFree />
    </div>
  )
}

export default CardFreeDescription
