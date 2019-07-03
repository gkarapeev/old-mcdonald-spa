import React from 'react'
import './Paper.css'

const Paper = (props) => {
  const classes = props.classes ? ' ' + props.classes.join(' ') : ''
  const bg = props.bg ? ' ' + props.bg : ''

  return(
    <div className={'paper' + bg + classes}>
      {props.children}
    </div>
  )
};

export default Paper;