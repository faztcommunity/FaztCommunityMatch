import React from "react";
import Register from "./Register/Register";
import Head from "next/head";

/* import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {} from "@fortawesome/free-solid-svg-icons" */

<Head>
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
    @import "./styles/index.scss";
  </style>
  <title>Registrarse</title>
</Head>;

function Home() {
  return (
    <>
      <Register />
    </>
  );
}

export default Home;
