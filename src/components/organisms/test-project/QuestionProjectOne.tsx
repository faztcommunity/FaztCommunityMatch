import { useState } from 'react'

function QuestionProjectOne() {
  const [valueProject, setValueProject] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-project {
          background: linear-gradient(
            -90deg,
            #ffb077 ${parseInt(valueProject) * -1}%,
            #fd8e3e ${parseInt(valueProject)}%
          );
          width: ${parseInt(valueProject) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">1. Primera Pregunta</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueProject}
              onChange={({ target: { value: radius } }) => {
                setValueProject(radius)
              }}
            />
            <div className="progress-bar-project"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueProject)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionProjectOne
