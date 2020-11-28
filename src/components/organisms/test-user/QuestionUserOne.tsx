import { useState } from 'react'

function QuestionUserOne() {
  const [value, setValue] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar {
          background: linear-gradient(
            -90deg,
            #21e788 ${parseInt(value) * -1}%,
            #04ab5b ${parseInt(value)}%
          );
          width: ${parseInt(value) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">1. ¿Para ti es muy importante las buenas prácticas?
</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={value}
              onChange={({ target: { value: radius } }) => {
                setValue(radius)
              }}
            />
            <div className="progress-bar"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(value)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionUserOne
