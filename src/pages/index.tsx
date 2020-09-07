import React from 'react'
import Register from './Register/Register'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Registrarse</title>
      </Head>

      <main>
        <Register />
      </main>
    </>
  )
}

export default Home
