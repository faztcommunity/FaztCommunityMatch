import { useState } from 'react'

function QuestionUserTwelve() {
  const [valueTwelve, setValueTwelve] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-twelve {
          background: linear-gradient(
            -90deg,
            #21e788 ${parseInt(valueTwelve) * -1}%,
            #04ab5b ${parseInt(valueTwelve)}%
          );
          width: ${parseInt(valueTwelve) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">12. Doceava Pregunta</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueTwelve}
              onChange={({ target: { value: radius } }) => {
                setValueTwelve(radius)
              }}
            />
            <div className="progress-bar-twelve"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueTwelve)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionUserTwelve
