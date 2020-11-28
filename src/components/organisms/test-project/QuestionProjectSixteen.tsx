import { useState } from 'react'

function QuestionProjectSixteen() {
  const [valueSixteenProject, setValueSixteenProject] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-sixteen-project {
          background: linear-gradient(
            -90deg,
            #ffb077 ${parseInt(valueSixteenProject) * -1}%,
            #fd8e3e ${parseInt(valueSixteenProject)}%
          );
          width: ${parseInt(valueSixteenProject) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">16. ¿Es necesario que el talento que buscas sea constante?
</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueSixteenProject}
              onChange={({ target: { value: radius } }) => {
                setValueSixteenProject(radius)
              }}
            />
            <div className="progress-bar-sixteen-project"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueSixteenProject)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionProjectSixteen
