import { useState } from 'react'

function QuestionProjectThirteen() {
  const [valueThirteenProject, setValueThirteenProject] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-thirteen-project {
          background: linear-gradient(
            -90deg,
            #ffb077 ${parseInt(valueThirteenProject) * -1}%,
            #fd8e3e ${parseInt(valueThirteenProject)}%
          );
          width: ${parseInt(valueThirteenProject) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">13. Treceava Pregunta</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueThirteenProject}
              onChange={({ target: { value: radius } }) => {
                setValueThirteenProject(radius)
              }}
            />
            <div className="progress-bar-thirteen-project"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueThirteenProject)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionProjectThirteen
