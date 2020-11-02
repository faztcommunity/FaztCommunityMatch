import Head from 'next/head'
import NavProfile from '../../components/organisms/profile/NavProfile'
import ColumnProjectOne from '../../components/organisms/create-project/ColumnProjectOne'
import ColumnProjectTwo from '../../components/organisms/create-project/ColumnProjectTwo'
import ColumnProjectThree from '../../components/organisms/create-project/ColumnProjectThree'
import React from 'react'
import Footer from '../../components/organisms/footer/Footer'

function CreateProject() {
  return (
    <>
      <Head>
        <title>Crear Proyecto</title>
      </Head>

      <header>
        <NavProfile />
      </header>

      <section className="section-my-project-global">
      <section className="section-edit-project">
        <ColumnProjectOne />
        <ColumnProjectTwo />
        <ColumnProjectThree />
      </section>
      <Footer />
      </section>
    </>
  )
}
export default CreateProject
