import { useState } from 'react'

function QuestionProjectEight() {
  const [valueEightProject, setValueEightProject] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-eight-project {
          background: linear-gradient(
            -90deg,
            #ffb077 ${parseInt(valueEightProject) * -1}%,
            #fd8e3e ${parseInt(valueEightProject)}%
          );
          width: ${parseInt(valueEightProject) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">8. ¿El integrante que buscas debe respetar los tiempos de entrega que requiere el proyecto?
</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueEightProject}
              onChange={({ target: { value: radius } }) => {
                setValueEightProject(radius)
              }}
            />
            <div className="progress-bar-eight-project"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueEightProject)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionProjectEight
