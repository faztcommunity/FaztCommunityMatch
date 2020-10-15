import React from 'react'
import { useState } from 'react'

function QuestionProjectNine() {
  const [valueNineProject, setValueNineProject] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-nine-project {
  background: linear-gradient(-90deg,#FFB077 ${parseInt(valueNineProject) * -1}% ,#FD8E3E ${parseInt(valueNineProject)}%);
  width: ${parseInt(valueNineProject) * 12.55}px;
}
`}</style>

<div className="content-input-value">
    <h2 className="question">9. Novena Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={valueNineProject}
          onChange={({ target: { value: radius} }) => {
            setValueNineProject(radius)
          }}
        />
        <div className="progress-bar-nine-project"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueNineProject)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionProjectNine
