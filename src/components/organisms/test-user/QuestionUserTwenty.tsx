import React from 'react'
import { useState } from 'react'

function QuestionUserTwenty() {
  const [valueTwenty, setValueTwenty] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-twenty {
  background: linear-gradient(-90deg,#21E788 ${parseInt(valueTwenty) * -1}% ,#04AB5B ${parseInt(valueTwenty)}%);
  width: ${parseInt(valueTwenty) * 12.55}px;
}
`}</style>

<div className="content-input-value">
    <h2 className="question">20. Veinteava Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={valueTwenty}
          onChange={({ target: { value: radius} }) => {
            setValueTwenty(radius)
          }}
        />
        <div className="progress-bar-twenty"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueTwenty)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionUserTwenty
