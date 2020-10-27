import React from 'react'
import Head from 'next/head'
import NavProfile from '../../components/organisms/profile/NavProfile'
import ColumnProjectOne from '../../components/organisms/create-project/ColumnProjectOne'


function CreateProject() {
  return (
    <>
      <Head>
        <title>Crear Proyecto</title>
      </Head>

      <header>
        <NavProfile />
      </header>
      <section className="section-edit-project">
      <ColumnProjectOne />
      </section>
    </>
  )
}
export default CreateProject
