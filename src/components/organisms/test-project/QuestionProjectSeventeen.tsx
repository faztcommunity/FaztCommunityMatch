import React from 'react'
import { useState } from 'react'

function QuestionProjectSeventeen() {
  const [valueSeventeenProject, setValueSeventeenProject] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-seventeen-project {
  background: linear-gradient(-90deg,#FFB077 ${parseInt(valueSeventeenProject) * -1}% ,#FD8E3E ${parseInt(valueSeventeenProject)}%);
  width: ${parseInt(valueSeventeenProject) * 12.55}px;
}
`}</style>

<div className="content-input-value">
    <h2 className="question">17. dicisieteava Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={valueSeventeenProject}
          onChange={({ target: { value: radius} }) => {
            setValueSeventeenProject(radius)
          }}
        />
        <div className="progress-bar-seventeen-project"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueSeventeenProject)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionProjectSeventeen
