import React from 'react'
import { useState } from 'react'

function QuestionProjectFive() {
  const [valueFiveProject, setValueFiveProject] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-five-project {
  background: linear-gradient(-90deg,#FFB077 ${parseInt(valueFiveProject) * -1}% ,#FD8E3E ${parseInt(valueFiveProject)}%);
  width: ${parseInt(valueFiveProject) * 12.55}px;

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
          value={valueFiveProject}
          onChange={({ target: { value: radius} }) => {
            setValueFiveProject(radius)
          }}
        />
        <div className="progress-bar-five-project"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueFiveProject)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionProjectFive
