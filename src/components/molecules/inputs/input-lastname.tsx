import React from 'react'

function LastnameInput() {
  return (
    <div className="content-lastname">
      <input
        type="text"
        name="lastname"
        placeholder="* Ingresa tu Apellido"
        className="input-lastname"
      />
      <i className="fas fa-user" id="user"></i>
    </div>
  )
}

export default LastnameInput
