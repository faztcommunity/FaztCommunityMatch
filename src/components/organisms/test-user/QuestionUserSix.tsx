import React from 'react'
import { useState } from 'react'

function QuestionUserSix() {
  const [valueSix, setValueSix] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-six {
  background: linear-gradient(-90deg,#21E788 ${parseInt(valueSix) * -1}% ,#04AB5B ${parseInt(valueSix)}%);
  width: ${parseInt(valueSix) * 12.55}px;

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
          value={valueSix}
          onChange={({ target: { value: radius} }) => {
            setValueSix(radius)
          }}
        />
        <div className="progress-bar-six"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueSix)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionUserSix
