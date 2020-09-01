import React from 'react'

function NameInput() {
  return (
    <div className="content-name">
      <input
        type="text"
        name="lastname"
        placeholder="* Ingresa tu Nombre"
        className="input-name"
      />
      <i className="fas fa-user" id="name"></i>
    </div>
  )
}

export default NameInput
