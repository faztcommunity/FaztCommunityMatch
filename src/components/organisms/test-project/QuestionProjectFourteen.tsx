import { useState } from 'react'

function QuestionProjectFourteen() {
  const [valueFourteenProject, setValueFourteenProject] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-fourteen-project {
          background: linear-gradient(
            -90deg,
            #ffb077 ${parseInt(valueFourteenProject) * -1}%,
            #fd8e3e ${parseInt(valueFourteenProject)}%
          );
          width: ${parseInt(valueFourteenProject) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">14. Catorceava Pregunta</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueFourteenProject}
              onChange={({ target: { value: radius } }) => {
                setValueFourteenProject(radius)
              }}
            />
            <div className="progress-bar-fourteen-project"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueFourteenProject)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionProjectFourteen
