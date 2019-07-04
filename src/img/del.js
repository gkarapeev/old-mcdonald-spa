import React, { Fragment } from 'react'

const Del = () => {

  const style = (
    `.circle {
      fill:none;
      stroke:#DFA9A9;
      stroke-width:2;
    }
    .line {
      fill:none;
      stroke:#DFA9A9;
      stroke-width:2;
      stroke-linejoin:round;
    }`
  )

  const code = (
    <svg version="1.1" id="arrow" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 14.9 23.9" >
      <style>
        {style}
      </style>
      <circle class="circle" cx="11" cy="11" r="10"/>
      <line class="line" x1="6" y1="11" x2="16" y2="11"/>
    </svg>
  )

  return (
    <Fragment>
      {code}
    </Fragment>
  )
}

export default Del;