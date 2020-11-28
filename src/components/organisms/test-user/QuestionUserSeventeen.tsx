import { useState } from 'react'

function QuestionUserSeventeen() {
  const [valueSeventeen, setValueSeventeen] = useState('0')

  return (
    <>
      <style jsx>{`
        .progress-bar-seventeen {
          background: linear-gradient(
            -90deg,
            #21e788 ${parseInt(valueSeventeen) * -1}%,
            #04ab5b ${parseInt(valueSeventeen)}%
          );
          width: ${parseInt(valueSeventeen) * 12.55}px;
        }
      `}</style>

      <div className="content-input-value">
        <h2 className="question">17. Si ves que algo se puede hacer de una mejor forma, ¿Das tu opinión?
</h2>
        <div className="content-dark">
          <div className="content-range-slider">
            <input
              className="slider"
              id="slider"
              type="range"
              min={0}
              max={100}
              value={valueSeventeen}
              onChange={({ target: { value: radius } }) => {
                setValueSeventeen(radius)
              }}
            />
            <div className="progress-bar-seventeen"></div>
          </div>

          <div className="content-value">
            <div className="value">{parseInt(valueSeventeen)}%</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionUserSeventeen
