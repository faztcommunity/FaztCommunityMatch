import React from 'react'
import { useState } from 'react'

function QuestionUserEighteen() {
  const [valueEighteen, setValueEighteen] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-eighteen {
  background: linear-gradient(-90deg,#21E788 ${parseInt(valueEighteen) * -1}% ,#04AB5B ${parseInt(valueEighteen)}%);
  width: ${parseInt(valueEighteen) * 12.55}px;
}
`}</style>

<div className="content-input-value">
    <h2 className="question">18. Dieciochoava Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={valueEighteen}
          onChange={({ target: { value: radius} }) => {
            setValueEighteen(radius)
          }}
        />
        <div className="progress-bar-eighteen"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueEighteen)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionUserEighteen
