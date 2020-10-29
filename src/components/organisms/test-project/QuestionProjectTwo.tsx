import { useState } from 'react'

function QuestionProjectTwo() {
  const [valueTwoProject, setValueTwoProject] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-two-project {
          background: linear-gradient(
            -90deg,
            #ffb077 ${parseInt(valueTwoProject) * -1}%,
            #fd8e3e ${parseInt(valueTwoProject)}%
          );
          width: ${parseInt(valueTwoProject) * 12.55}px;
        }
      `}</style>
      <section className="global-test-user">
        <div className="content-input-value">
          <h2 className="question">2. Segunda Pregunta</h2>
          <div className="content-dark">
            <div className="content-range-slider">
              <input
                className="slider"
                id="slider"
                type="range"
                min={0}
                max={100}
                value={valueTwoProject}
                onChange={({ target: { value: radius } }) => {
                  setValueTwoProject(radius)
                }}
              />
              <div className="progress-bar-two-project"></div>
            </div>

            <div className="content-value">
              <div className="value">{parseInt(valueTwoProject)}%</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default QuestionProjectTwo
