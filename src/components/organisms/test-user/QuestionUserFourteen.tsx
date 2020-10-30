import { useState } from 'react'

function QuestionUserFourteen() {
  const [valueFourteen, setValueFourteen] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-fourteen {
          background: linear-gradient(
            -90deg,
            #21e788 ${parseInt(valueFourteen) * -1}%,
            #04ab5b ${parseInt(valueFourteen)}%
          );
          width: ${parseInt(valueFourteen) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">14. Catorceava Pregunta</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueFourteen}
              onChange={({ target: { value: radius } }) => {
                setValueFourteen(radius)
              }}
            />
            <div className="progress-bar-fourteen"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueFourteen)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionUserFourteen
