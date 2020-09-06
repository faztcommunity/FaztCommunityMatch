import React from 'react'
import Register from './Register/Register'
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik'
import Head from 'next/head'
import { useForm, useStep } from 'react-hooks-helper'

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
