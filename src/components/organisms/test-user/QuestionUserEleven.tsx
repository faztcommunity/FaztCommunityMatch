import React from 'react'
import { useState } from 'react'

function QuestionUserEleven() {
  const [valueEleven, setValueEleven] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-eleven {
  background: linear-gradient(-90deg,#21E788 ${parseInt(valueEleven) * -1}% ,#04AB5B ${parseInt(valueEleven)}%);
  width: ${parseInt(valueEleven) * 12.55}px;
}
`}</style>

<div className="content-input-value">
    <h2 className="question">11. Onceava Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={valueEleven}
          onChange={({ target: { value: radius} }) => {
            setValueEleven(radius)
          }}
        />
        <div className="progress-bar-eleven"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueEleven)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionUserEleven
