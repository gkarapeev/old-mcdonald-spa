import React, { useState, Fragment } from 'react'
import './Word.css'

const Word = (props) => {
  const { type, animal, change, active } = props
  const [editing, toggleEditing] = useState(false)
  const [newAnimal, setNewAnimal] = useState(animal)

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
          onClick={active ? () => toggleEditing(!editing) : null}
          className={active ? 'word' : ''}>
          {animal[type]}
        </span>
      }
    </Fragment>
  )
};

export default Word;