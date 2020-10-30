import Link from 'next/link'

function BtnCreateTestProject() {
  return (
    <>
      <Link href="/test-proyecto">
        <button className="btn-create-test-project">
          Hacer test para proyectos
        </button>
      </Link>
    </>
  )
}

export default BtnCreateTestProject
