import { useState } from 'react'

function QuestionUserTwo() {
  const [valueTwo, setValueTwo] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-two {
          background: linear-gradient(
            -90deg,
            #21e788 ${parseInt(valueTwo) * -1}%,
            #04ab5b ${parseInt(valueTwo)}%
          );
          width: ${parseInt(valueTwo) * 12.55}px;
        }
      `}</style>
      <section className="global-test-user">
        <div className="content-input-value">
          <h2 className="question">2. Segunda Pregunta</h2>
          <div className="content-dark">
            <div className="content-range-slider">
              <input
                className="slider"
                id="slider"
                type="range"
                min={0}
                max={100}
                value={valueTwo}
                onChange={({ target: { value: radius } }) => {
                  setValueTwo(radius)
                }}
              />
              <div className="progress-bar-two"></div>
            </div>

            <div className="content-value">
              <div className="value">{parseInt(valueTwo)}%</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default QuestionUserTwo
