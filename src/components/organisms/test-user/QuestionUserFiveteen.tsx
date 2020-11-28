import { useState } from 'react'

function QuestionUserFiveteen() {
  const [valueFiveteen, setValueFiveteen] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-fiveteen {
          background: linear-gradient(
            -90deg,
            #21e788 ${parseInt(valueFiveteen) * -1}%,
            #04ab5b ${parseInt(valueFiveteen)}%
          );
          width: ${parseInt(valueFiveteen) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">15. ¿Sueles llegar puntual a las reuniones?
</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueFiveteen}
              onChange={({ target: { value: radius } }) => {
                setValueFiveteen(radius)
              }}
            />
            <div className="progress-bar-fiveteen"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueFiveteen)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionUserFiveteen
