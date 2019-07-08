import React from 'react'
import Nav from '../Nav/Nav'
import Paper from '../Paper/Paper'
import parseVerse from '../../utils/parseVerse'
import cloneDeep from 'lodash.clonedeep'
import './App.css'

import old_macdonald from '../../data/old_macdonald'
import georgi_song from '../../data/georgi_song'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      song: old_macdonald,
      customSong: old_macdonald
    }
  }

  handleWordChange = (verseIndex, wordNum, newValue) => {
    let newSong = cloneDeep(this.state.customSong)
    newSong.verses[verseIndex]['word' + wordNum] = newValue

    this.setState({ customSong: newSong })
  }

  generateVerses = (song, custom) => {
    let verses = []

    for (let i = 0; i < song.verses.length; i++) {
      verses.push(parseVerse(i, song, this, custom))
    }

    return verses
  }


  render() {
    // Rendering a song variant based on the route
    const custom = this.props.location.pathname === '/custom'
    const renderSong = custom ? this.state.customSong : this.state.song

    return (
      <div className="App">
        <Paper bg='white' classes={['song']}>
          <h1>{this.state.song.title}</h1>
          <Nav />
          <ul>
            {this.generateVerses(renderSong, custom).map((verse, index) => {
              return (
                <li key={index}>
                  <div className={custom ? 'Verse Verse-custom' : 'Verse'}>
                    {verse.map((line, idx) => {
                      return (
                        <span className='song-line' key={idx}>
                          {line}
                        </span>
                      )
                    })}
                    {custom ?
                      <div className='delete'>
                        <svg className='edit-icon' id='delete-icon' viewBox='0 0 22 22'>
                          <circle className="circle" cx="11" cy="11" r="10" />
                          <line className="line line-1" x1="6" y1="11" x2="16" y2="11" />
                          <line className="line line-2" x1="6" y1="11" x2="16" y2="11" />
                        </svg>
                      </div>
                      : null
                    }
                  </div>
                </li>
              )
            })}
          </ul>
          {custom ?
            <div className='new-verse' onClick={this.handleAddAnimal} tabIndex={this.state.song.verses.length + 1}>
              <svg className='edit-icon' id='add-icon' viewBox='0 0 22 22'>
                <circle className="plus-icon" cx="11" cy="11" r="10" />
                <line className="plus-icon" x1="11" y1="6" x2="11" y2="16" />
                <line className="plus-icon" x1="6" y1="11" x2="16" y2="11" />
              </svg>
              <span id='add-new-verse'>
                Add verse
              </span>
            </div>
            :
            null
          }
        </Paper>
        <a className='bg-credit' href="https://www.freepik.com/free-photos-vectors/background" tabIndex={-1}>Background vector created by freepik - www.freepik.com</a>
      </div>
    );
  }
}

export default App;
