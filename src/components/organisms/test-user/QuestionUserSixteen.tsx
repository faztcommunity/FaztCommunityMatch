import { useState } from 'react'

function QuestionUserSixteen() {
  const [valueSixteen, setValueSixteen] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-sixteen {
          background: linear-gradient(
            -90deg,
            #21e788 ${parseInt(valueSixteen) * -1}%,
            #04ab5b ${parseInt(valueSixteen)}%
          );
          width: ${parseInt(valueSixteen) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">16. ¿Eres de los que piensas que el proyecto elije las tecnologías?</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueSixteen}
              onChange={({ target: { value: radius } }) => {
                setValueSixteen(radius)
              }}
            />
            <div className="progress-bar-sixteen"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueSixteen)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionUserSixteen
