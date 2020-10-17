import React from 'react'
import Head from 'next/head'
import NavProfile from '../../components/organisms/profile/NavProfile'
import CardMatchProject from '../../components/organisms/match/CardMatchProject'
import ContentsBtnsMatch from '../../components/molecules/match/ContentsBtnsMatch'



function Plans() {
  return (
    <>
      <Head>
        <title>¡Haz Match!</title>
      </Head>

      <header>
        <NavProfile />
      </header>
      <main className="content-global-match-project">
        <section className="section-card-project">
      <ContentsBtnsMatch />
      <CardMatchProject />
      </section>
      </main>
    </>
  )
}
export default Plans
