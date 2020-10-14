import React from 'react'
import { useState } from 'react'

function QuestionUserNine() {
  const [valueNine, setValueNine] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-nine {
  background: linear-gradient(-90deg,#21E788 ${parseInt(valueNine) * -1}% ,#04AB5B ${parseInt(valueNine)}%);
  width: ${parseInt(valueNine) * 12.55}px;
}
`}</style>

<div className="content-input-value">
    <h2 className="question">5. Quinta Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={valueNine}
          onChange={({ target: { value: radius} }) => {
            setValueNine(radius)
          }}
        />
        <div className="progress-bar-nine"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueNine)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionUserNine
