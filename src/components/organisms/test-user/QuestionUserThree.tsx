import { useState } from 'react'

function QuestionUserThree() {
  const [valueThree, setValueThree] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-three {
          background: linear-gradient(
            -90deg,
            #21e788 ${parseInt(valueThree) * -1}%,
            #04ab5b ${parseInt(valueThree)}%
          );
          width: ${parseInt(valueThree) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">3. ¿No te gusta que te den ordenes?</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueThree}
              onChange={({ target: { value: radius } }) => {
                setValueThree(radius)
              }}
            />
            <div className="progress-bar-three"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueThree)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionUserThree
