import { useState } from 'react'

function QuestionProjectTwenty() {
  const [valueTwentyProject, setValueTwentyProject] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-twenty-project {
          background: linear-gradient(
            -90deg,
            #ffb077 ${parseInt(valueTwentyProject) * -1}%,
            #fd8e3e ${parseInt(valueTwentyProject)}%
          );
          width: ${parseInt(valueTwentyProject) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">20. Veinteava Pregunta</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueTwentyProject}
              onChange={({ target: { value: radius } }) => {
                setValueTwentyProject(radius)
              }}
            />
            <div className="progress-bar-twenty-project"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueTwentyProject)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionProjectTwenty
