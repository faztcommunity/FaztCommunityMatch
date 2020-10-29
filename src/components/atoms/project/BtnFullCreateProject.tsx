import Link from 'next/link'

function BtnFullCreateProject() {
  return (
    <>
      <Link href="/crear-proyecto">
        <button className="btn-full-create-project">Crear Proyecto</button>
      </Link>
    </>
  )
}

export default BtnFullCreateProject
