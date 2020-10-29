import { useState } from 'react'

function QuestionUserFour() {
  const [valueFour, setValueFour] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-four {
          background: linear-gradient(
            -90deg,
            #21e788 ${parseInt(valueFour) * -1}%,
            #04ab5b ${parseInt(valueFour)}%
          );
          width: ${parseInt(valueFour) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">4. Cuarta Pregunta</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueFour}
              onChange={({ target: { value: radius } }) => {
                setValueFour(radius)
              }}
            />
            <div className="progress-bar-four"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueFour)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionUserFour
