import React, { useState, useEffect, Fragment } from 'react'
import './Word.css'

const Word = (props) => {
  const { verse, wordNum, wordValue, change, active } = props
  const [editing, toggleEditing] = useState(false)
  const [newWord, setNewWord] = useState(wordValue)
  useEffect(() => {setNewWord(wordValue)}, [wordValue])
  
  return (
    <Fragment>
      {editing ?
        <form onSubmit={(event) => {
          event.preventDefault()
          change(verse, wordNum, event.target.firstChild.value)
          event.target.firstChild.blur()}}
        >
          <input
            type='text'
            value={newWord}
            maxLength='8'
            onChange={(e) => setNewWord(e.target.value)}
            className='word input'
            style={{width: newWord.length * 0.5 + 0.8 + 'rem', maxWidth:'100px', minWidth:'40px'}}
            autoFocus
            onBlur={(e) => {
              change(verse, wordNum, e.target.value)
              toggleEditing(!editing)
            }}>
          </input>
        </form>
        :
        <span
          onClick={active ? () => toggleEditing(!editing) : null}
          className={active ? 'word' : ''}>
          {newWord}
        </span>
      }
    </Fragment>
  )
};

export default Word;