import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'


function RangeSlider() {
  const [value, setValue] = useState('0')


/* function background (){
  target.value
} */

  return (
    <>
<style jsx>{`

.progress-bar {
  position: absolute;
  bottom:0;
  left:0;
  height: 20px;
  background: linear-gradient(-90deg,#21E788 ${parseInt(value) * -1}% ,#04AB5B ${parseInt(value)}%);
  width: ${parseInt(value) * 12.55}px;
  border-radius: 50px;
}

`}</style>
<section className="global-test-user">
<div className="content-input-value">
    <h2 className="question">1. Primera Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={({ target: { value: radius} }) => {
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
<div className="content-input-value-two">
    <h2 className="question">1. Primera Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={({ target: { value: radius} }) => {
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
<div className="content-input-value">
    <h2 className="question">1. Primera Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={({ target: { value: radius} }) => {
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
<div className="content-input-value">
    <h2 className="question">1. Primera Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={({ target: { value: radius} }) => {
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
<div className="content-input-value">
    <h2 className="question">1. Primera Pregunta</h2>
  <div className="content-dark">
      <div className="content-range-slider">
        <input
          className="slider"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={({ target: { value: radius} }) => {
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


    </section>
    </>
  )
}

export default RangeSlider
