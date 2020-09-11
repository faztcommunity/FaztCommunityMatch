import React, { useState, useRef } from 'react'

function ProgressBar() {
  return (
    <div className="progress-bar">
      <div className="contentstep-one">
        <div className="step-one">
          <span className="number-step">1</span>
        </div>
        <div aria-hidden="true" className="check fas fa-check"></div>
      </div>

      <div className="contentstep-two">
        <div className="step-two">
          <span className="number-step">2</span>
        </div>
        <div aria-hidden="true" className="check fas fa-check"></div>
      </div>
    </div>
  )
}

export default ProgressBar
