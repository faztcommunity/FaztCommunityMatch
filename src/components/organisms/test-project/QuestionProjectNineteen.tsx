import { useState } from 'react'

function QuestionProjectNineteen() {
  const [valueNineteenProject, setValueNineteenProject] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-nineteen-project {
          background: linear-gradient(
            -90deg,
            #ffb077 ${parseInt(valueNineteenProject) * -1}%,
            #fd8e3e ${parseInt(valueNineteenProject)}%
          );
          width: ${parseInt(valueNineteenProject) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">19. ¿Sería ideal que el talento aporte ideas y sea proactivo?
</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueNineteenProject}
              onChange={({ target: { value: radius } }) => {
                setValueNineteenProject(radius)
              }}
            />
            <div className="progress-bar-nineteen-project"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueNineteenProject)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionProjectNineteen
