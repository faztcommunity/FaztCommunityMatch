import React from 'react'
import { useState } from 'react'

function QuestionUserNineteen() {
  const [valueNineteen, setValueNineteen] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-nineteen {
  background: linear-gradient(-90deg,#21E788 ${parseInt(valueNineteen) * -1}% ,#04AB5B ${parseInt(valueNineteen)}%);
  width: ${parseInt(valueNineteen) * 12.55}px;
}
`}</style>

<div className="content-input-value">
    <h2 className="question">19. Noveana Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={valueNineteen}
          onChange={({ target: { value: radius} }) => {
            setValueNineteen(radius)
          }}
        />
        <div className="progress-bar-nineteen"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueNineteen)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionUserNineteen
