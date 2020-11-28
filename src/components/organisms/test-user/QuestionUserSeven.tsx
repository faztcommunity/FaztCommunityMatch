import React from 'react'
import { useState } from 'react'

function QuestionUserSeven() {
  const [valueSeven, setValueSeven] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-seven {
          background: linear-gradient(
            -90deg,
            #21e788 ${parseInt(valueSeven) * -1}%,
            #04ab5b ${parseInt(valueSeven)}%
          );
          width: ${parseInt(valueSeven) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">7. ¿Sabes algo de Scrum?
</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueSeven}
              onChange={({ target: { value: radius } }) => {
                setValueSeven(radius)
              }}
            />
            <div className="progress-bar-seven"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueSeven)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionUserSeven
