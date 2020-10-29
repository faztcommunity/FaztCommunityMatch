import Head from 'next/head'
import NavProfile from '../../components/organisms/profile/NavProfile'
import SectionCreateProject from '../../components/organisms/project/SectionCreateProject'

function Project() {
  return (
    <>
      <Head>
        <title>Proyecto</title>
      </Head>
      <header>
        <NavProfile />
      </header>
      <main className="main-section-create-project">
        <SectionCreateProject />
      </main>
    </>
  )
}
export default Project
