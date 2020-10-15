import React from 'react'
import { useState } from 'react'

function QuestionProjectSix() {
  const [valueSixProject, setValueSixProject] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-six-project {
  background: linear-gradient(-90deg,#FFB077 ${parseInt(valueSixProject) * -1}% ,#FD8E3E ${parseInt(valueSixProject)}%);
  width: ${parseInt(valueSixProject) * 12.55}px;

}

`}</style>

<div className="content-input-value">
    <h2 className="question">6. Sexta Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={valueSixProject}
          onChange={({ target: { value: radius} }) => {
            setValueSixProject(radius)
          }}
        />
        <div className="progress-bar-six-project"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueSixProject)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionProjectSix
