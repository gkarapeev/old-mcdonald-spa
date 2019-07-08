import React from 'react'
import './SongNav.css'

const SongNav = (props) => {
  return(
    <nav className='song-nav'>
      <div className='arrow' onClick={() => props.change('prev')}>
      <svg className='nav-arrow' id='nav-arrow-left' width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className='nav-arrow-path' id='nav-arrow-path-left' d="M14 7.26795C15.3333 8.03775 15.3333 9.96225 14 10.7321L3.5 16.7942C2.16667 17.564 0.499999 16.6018 0.499999 15.0622L0.5 2.93782C0.5 1.39822 2.16667 0.43597 3.5 1.20577L14 7.26795Z"/>
      </svg>
      </div>
      <div className='arrow' onClick={() => props.change('next')}>
      <svg className='nav-arrow' id='nav-arrow-right' width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className='nav-arrow-path' id='nav-arrow-path-right' d="M14 7.26795C15.3333 8.03775 15.3333 9.96225 14 10.7321L3.5 16.7942C2.16667 17.564 0.499999 16.6018 0.499999 15.0622L0.5 2.93782C0.5 1.39822 2.16667 0.43597 3.5 1.20577L14 7.26795Z"/>
      </svg>
      </div>
    </nav>
  )
};

export default SongNav;