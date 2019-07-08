import React from 'react'
import Word from '../Word/Word'
import './Verse.css'


const Verse = (props) => {
  const { words } = props;
  
  // const classes = ['Verse']
  // if(custom) {
  //   classes.push('Verse-custom')
  // }



  return(
    <div className={classes.join(' ')}>
      
      {custom ?
        <div className='delete' onClick={deleteAnimal}>
          <svg className='edit-icon' id='delete-icon' viewBox='0 0 22 22'>
            <circle className="circle" cx="11" cy="11" r="10"/>
            <line className="line line-1" x1="6" y1="11" x2="16" y2="11"/>
            <line className="line line-2" x1="6" y1="11" x2="16" y2="11"/>
          </svg>
        </div>
        : null
      }
    </div>
  )
};

export default Verse;