import React from 'react'
import { useState } from 'react'

function QuestionProjectEleven() {
  const [valueElevenProject, setValueElevenProject] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-eleven-project {
  background: linear-gradient(-90deg,#FFB077 ${parseInt(valueElevenProject) * -1}% ,#FD8E3E ${parseInt(valueElevenProject)}%);
  width: ${parseInt(valueElevenProject) * 12.55}px;
}
`}</style>

<div className="content-input-value">
    <h2 className="question">11. Onceava Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={valueElevenProject}
          onChange={({ target: { value: radius} }) => {
            setValueElevenProject(radius)
          }}
        />
        <div className="progress-bar-eleven-project"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueElevenProject)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionProjectEleven
