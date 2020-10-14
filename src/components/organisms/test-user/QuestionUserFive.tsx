import React from 'react'
import { useState } from 'react'

function QuestionUserFive() {
  const [valueFive, setValueFive] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-five {
  background: linear-gradient(-90deg,#21E788 ${parseInt(valueFive) * -1}% ,#04AB5B ${parseInt(valueFive)}%);
  width: ${parseInt(valueFive) * 12.55}px;

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
          value={valueFive}
          onChange={({ target: { value: radius} }) => {
            setValueFive(radius)
          }}
        />
        <div className="progress-bar-five"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueFive)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionUserFive
