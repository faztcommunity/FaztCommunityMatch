import React from 'react'
import AddImageMin from '../../../assets/images/Add-image-mini.jpg'


function AddImageMini() {
  return (
    <>
        <div className="content-image-mini">
        <svg className="square-dashed" width="101" height="89" viewBox="0 0 101 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.54004" y="2.52051" width="96.0311" height="83.5783" rx="10" stroke-width="4" stroke-linecap="round" stroke-dasharray="5 10"/>
<path d="M65.5659 44.6642H50.5555M35.5451 44.6642H50.5555M50.5555 44.6642V29.772M50.5555 44.6642V58.8472" stroke-width="3.61096" stroke-linecap="round"/>
</svg>
        <img src={AddImageMin} alt="Colocar imagen alternativa"/>
        </div>
    </>
  )
}

export default AddImageMini
