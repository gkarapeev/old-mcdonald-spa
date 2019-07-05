import React, { useState, useEffect, Fragment } from 'react'
import './Word.css'

const Word = (props) => {
  const { type, animal, change, variant } = props
  const [editing, toggleEditing] = useState(false)
  const [newAnimal, setNewAnimal] = useState(animal)
  useEffect(() => {setNewAnimal(props.animal)}, [props.animal])

  return (
    <Fragment>
      {editing ?
        <input
          type='text'
          value={newAnimal[type]}
          onChange={(e) => setNewAnimal({...animal, [type]: e.target.value})}
          className='word input'
          style={{width: newAnimal[type].length - 1 + 'rem'}}
          autoFocus
          onBlur={(event) => {
            change(event, animal.id, type)
            toggleEditing(!editing)
          }}>
        </input>
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