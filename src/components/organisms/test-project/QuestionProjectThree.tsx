import { useState } from 'react'

function QuestionProjectThree() {
  const [valueThreeProject, setValueThreeProject] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-three-project {
          background: linear-gradient(
            -90deg,
            #ffb077 ${parseInt(valueThreeProject) * -1}%,
            #fd8e3e ${parseInt(valueThreeProject)}%
          );
          width: ${parseInt(valueThreeProject) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">3. ¿Es ideal que la persona le guste trabajar en grupo?
</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueThreeProject}
              onChange={({ target: { value: radius } }) => {
                setValueThreeProject(radius)
              }}
            />
            <div className="progress-bar-three-project"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueThreeProject)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionProjectThree
