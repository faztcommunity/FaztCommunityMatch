import * as React from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

function InputPass() {
  return (
    <div className="input-password" id="show_hide_password">
      <input
        type="password"
        name="password"
        placeholder="* Ingresa Contraseña"
        className="password"
        id="password"
      />
      <i className="fas fa-eye" id="password_icon"></i>
    </div>
  );
}

export default InputPass;
