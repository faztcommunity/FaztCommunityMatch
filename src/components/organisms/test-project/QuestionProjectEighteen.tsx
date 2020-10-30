import { useState } from 'react'

function QuestionProjectEighteen() {
  const [valueEighteenProject, setValueEighteenProject] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-eighteen-project {
          background: linear-gradient(
            -90deg,
            #ffb077 ${parseInt(valueEighteenProject) * -1}%,
            #fd8e3e ${parseInt(valueEighteenProject)}%
          );
          width: ${parseInt(valueEighteenProject) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">18. Dieciochoava Pregunta</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueEighteenProject}
              onChange={({ target: { value: radius } }) => {
                setValueEighteenProject(radius)
              }}
            />
            <div className="progress-bar-eighteen-project"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueEighteenProject)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionProjectEighteen
