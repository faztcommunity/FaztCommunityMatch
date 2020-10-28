import React from 'react'
import { useState } from 'react'


function AddRequirementsProject() {
    const [valueTech, setValueTech] = useState('0')

  return (
    <>
<style jsx>{`
.progress-bar-tech {
  background: linear-gradient(-90deg,#04AB5B ${parseInt(valueTech) * -1}% ,#289038 ${parseInt(valueTech)}%);
  width: ${parseInt(valueTech) * 2.90}px;
}
`}</style>


        <div className="content-add-requirements">
<div className="mini-content-add-requirements">

    <div className="container-select-project">
        <div className="container-select-project-two">
<div className="content-percent-project"><span className="percent-project">{parseInt(valueTech)}%</span></div>
<select className="choose-technology" name="" id="">
    <option selected disabled value="">Seleccionar</option>
    <option value="">TypeScript</option>
    <option value="">Javascript</option>
    <option value="">Java</option>
    <option value="">C++</option>
    <option value="">C#</option>
    <option value="">Swift</option>
    <option value="">Node.js</option>
    <option value="">Next.js</option>
    <option value="">React.js</option>
    <option value="">Angular</option>
    <option value="">Svelte</option>
    <option value="">Vue</option>
    <option value="">PHP</option>
    <option value="">Laravel</option>
    <option value="">HTML</option>
    <option value="">CSS</option>
    <option value="">Sass</option>
    <option value="">UI/UX</option>
    <option value="">Express</option>
    <option value="">SQL</option>
    <option value="">MongoDB</option>
</select>
</div>
<svg className="mini-icon-delete" width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="18.2454" cy="17.4968" r="17.4968" />
<path d="M13.3247 12.5757L14.0082 23.5112C14.0406 24.1431 14.5003 24.6048 15.1017 24.6048H21.3897C21.9935 24.6048 22.4446 24.1431 22.4832 23.5112L23.1667 12.5757" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.231 12.5757H24.26H12.231Z" fill="#FAFAFA"/>
<path d="M12.231 12.5757H24.26" stroke="#FAFAFA" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M16.0586 12.5753V11.2084C16.0583 11.1006 16.0793 10.9938 16.1204 10.8941C16.1615 10.7945 16.2219 10.7039 16.2981 10.6277C16.3743 10.5515 16.4649 10.4911 16.5645 10.45C16.6642 10.4089 16.771 10.3879 16.8788 10.3882H19.6126C19.7204 10.3879 19.8272 10.4089 19.9269 10.45C20.0265 10.4911 20.1171 10.5515 20.1933 10.6277C20.2695 10.7039 20.3299 10.7945 20.371 10.8941C20.4121 10.9938 20.4331 11.1006 20.4328 11.2084V12.5753" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.2456 14.7627V22.4176" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.7852 14.7627L16.0585 22.4176" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.706 14.7627L20.4326 22.4176" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>

<div className="content-range-slider-tech">
        <input
          className="slider-tech"
          id="slider"
          type="range"
          min={0}
          max={100}
          value={valueTech}
          onChange={({ target: { value: radius} }) => {
            setValueTech(radius)
          }}
        />
        <div className="progress-bar-tech"></div>
      </div>
</div>
        </div>
    </>
  )
}

export default AddRequirementsProject
