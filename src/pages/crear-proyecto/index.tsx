import React from 'react'
import Head from 'next/head'
import NavProfile from '../../components/organisms/profile/NavProfile'


function CreateProject() {
  return (
    <>
      <Head>
        <title>Crear Proyecto</title>
      </Head>

      <header>
        <NavProfile />
      </header>
    </>
  )
}
export default CreateProject
