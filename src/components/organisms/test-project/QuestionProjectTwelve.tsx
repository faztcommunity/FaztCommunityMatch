import React from 'react'
import { useState } from 'react'

function QuestionProjectTwelve() {
  const [valueTwelveProject, setValueTwelveProject] = useState('0')


  return (
    <>
<style jsx>{`
.progress-bar-twelve-project {
  background: linear-gradient(-90deg,#FFB077 ${parseInt(valueTwelveProject) * -1}% ,#FD8E3E ${parseInt(valueTwelveProject)}%);
  width: ${parseInt(valueTwelveProject) * 12.55}px;
}
`}</style>

<div className="content-input-value">
    <h2 className="question">12. Doceava Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={valueTwelveProject}
          onChange={({ target: { value: radius} }) => {
            setValueTwelveProject(radius)
          }}
        />
        <div className="progress-bar-twelve-project"></div>
      </div>


        <div className="content-value">
          <div className="value">{parseInt(valueTwelveProject)}%</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default QuestionProjectTwelve
