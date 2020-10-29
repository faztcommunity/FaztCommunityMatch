import Link from 'next/link'

function BtonCreateTest() {
  return (
    <>
      <Link href="/tests">
        <button className="btn-create-test">Hacer Test</button>
      </Link>
    </>
  )
}

export default BtonCreateTest
