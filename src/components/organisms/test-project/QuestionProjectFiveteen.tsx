import React from 'react'
import { useState } from 'react'

function QuestionProjectFiveteen() {
  const [valueFiveteenProject, setValueFiveteenProject] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-fiveteen-project {
  background: linear-gradient(-90deg,#FFB077 ${parseInt(valueFiveteenProject) * -1}% ,#FD8E3E ${parseInt(valueFiveteenProject)}%);
  width: ${parseInt(valueFiveteenProject) * 12.55}px;
}
`}</style>

<div className="content-input-value">
    <h2 className="question">15. Quinceava Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={valueFiveteenProject}
          onChange={({ target: { value: radius} }) => {
            setValueFiveteenProject(radius)
          }}
        />
        <div className="progress-bar-fiveteen-project"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueFiveteenProject)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionProjectFiveteen
