import { useState } from 'react'

function QuestionUserThirteen() {
  const [valueThirteen, setValueThirteen] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-thirteen {
          background: linear-gradient(
            -90deg,
            #21e788 ${parseInt(valueThirteen) * -1}%,
            #04ab5b ${parseInt(valueThirteen)}%
          );
          width: ${parseInt(valueThirteen) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">13. ¿Tienes experiencia trabajando en grupo?
</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueThirteen}
              onChange={({ target: { value: radius } }) => {
                setValueThirteen(radius)
              }}
            />
            <div className="progress-bar-thirteen"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueThirteen)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionUserThirteen
