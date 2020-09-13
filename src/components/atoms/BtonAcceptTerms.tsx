import React from 'react'
import Link from 'next/link'
/* import { useRef } from 'react'
import ModalDone from '../molecules/Modal/ModalDone'
import ModalRegisterDone from '../organisms/form/ModalRegisterDone' */

function BtonAcceptTerms() {
  /* const modalDoneRef = useRef<any>(null)

  const openModalDone = () => {
    console.log(modalDoneRef.current.openModalDone())
  } */
  return (
    <>
      <Link href="/planes">
        <a /* onClick={openModalDone} */ className="accept-terms">
          Si, Continuar
        </a>
      </Link>
      {/* <ModalRegisterDone ref={modalDoneRef}>
        <ModalDone />
      </ModalRegisterDone> */}
    </>
  )
}

export default BtonAcceptTerms
