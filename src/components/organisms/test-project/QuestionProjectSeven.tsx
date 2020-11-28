import { useState } from 'react'

function QuestionProjectSeven() {
  const [valueSevenProject, setValueSevenProject] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-seven-project {
          background: linear-gradient(
            -90deg,
            #ffb077 ${parseInt(valueSevenProject) * -1}%,
            #fd8e3e ${parseInt(valueSevenProject)}%
          );
          width: ${parseInt(valueSevenProject) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">7. ¿Es necesario que la persona tenga muy buenas bases en cuanto a buenas prácticas de programación?
</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueSevenProject}
              onChange={({ target: { value: radius } }) => {
                setValueSevenProject(radius)
              }}
            />
            <div className="progress-bar-seven-project"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueSevenProject)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionProjectSeven
