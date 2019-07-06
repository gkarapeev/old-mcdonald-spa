import React, { useState, useEffect, Fragment } from 'react'
import './Word.css'

const Word = (props) => {
  const { type, animal, index, change, variant } = props
  const [editing, toggleEditing] = useState(false)
  const [newAnimal, setNewAnimal] = useState(animal)
  useEffect(() => {setNewAnimal(props.animal)}, [props.animal])
  
  return (
    <Fragment>
      {editing ?
        <form onSubmit={(event) => {
          change(event.target.firstChild.value, index, type)
          event.preventDefault()
          event.target.firstChild.blur()}}
        >
          <input
            type='text'
            value={newAnimal[type]}
            maxLength='8'
            onChange={(e) => setNewAnimal({...animal, [type]: e.target.value})}
            className='word input'
            style={{width: newAnimal[type].length * 0.5 + 0.8 + 'rem', maxWidth:'100px', minWidth:'40px'}}
            autoFocus
            onBlur={(event) => {
              change(event.target.value, index, type)
              toggleEditing(!editing)
            }}>
          </input>
        </form>
        :
        <span
          onClick={variant === 'custom' ? () => toggleEditing(!editing) : null}
          className={variant === 'custom' ? 'word' : ''}>
          {newAnimal[type]}
        </span>
      }
    </Fragment>
  )
};

export default Word;