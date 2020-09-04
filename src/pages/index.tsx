import React from 'react'
import Register from './Register/Register'
import { Field, Form, Formik, FormikConfig, FormikValues } from 'formik'
import Head from 'next/head'
import { useForm, useStep } from 'react-hooks-helper'
import StepContext from '../components/molecules/various/StepContext'

const Home = () => {
  return (
    <>
      <Head>
        <title>Registrarse</title>
      </Head>

      <main>
        <StepContext>
          <Register />
        </StepContext>
      </main>
    </>
  )
}

export default Home
