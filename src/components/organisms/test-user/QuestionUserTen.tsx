import React from 'react'
import { useState } from 'react'

function QuestionUserTen() {
  const [valueTen, setValueTen] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-ten {
  background: linear-gradient(-90deg,#21E788 ${parseInt(valueTen) * -1}% ,#04AB5B ${parseInt(valueTen)}%);
  width: ${parseInt(valueTen) * 12.55}px;
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
          value={valueTen}
          onChange={({ target: { value: radius} }) => {
            setValueTen(radius)
          }}
        />
        <div className="progress-bar-ten"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueTen)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionUserTen
