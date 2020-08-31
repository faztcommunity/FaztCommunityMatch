import React from 'react'

function EmailInput() {
  return (
    <div className="content-email">
      <input
        type="email"
        name="email"
        placeholder="* Ingrese el Correo"
        className="input-email"
        id="password"
      />
      <i className="fas fa-envelope" id="password"></i>
    </div>
  )
}

export default EmailInput
