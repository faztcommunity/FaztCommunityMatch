import React from 'react'
import { useState } from 'react'

function QuestionUserEight() {
  const [valueEight, setValueEight] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-eight {
  background: linear-gradient(-90deg,#21E788 ${parseInt(valueEight) * -1}% ,#04AB5B ${parseInt(valueEight)}%);
  width: ${parseInt(valueEight) * 12.55}px;
}
`}</style>

<div className="content-input-value">
    <h2 className="question">8. Octava Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={valueEight}
          onChange={({ target: { value: radius} }) => {
            setValueEight(radius)
          }}
        />
        <div className="progress-bar-eight"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueEight)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionUserEight
