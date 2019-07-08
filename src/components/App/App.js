import React from 'react'
import Nav from '../Nav/Nav'
import Paper from '../Paper/Paper'
import parseVerse from '../../utils/parseVerse'
import cloneDeep from 'lodash.clonedeep'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      song: this.props.song,
      customSong: this.props.song
    }
  }

  handleChangeWord = (verseIndex, wordNum, newValue) => {
    let newSong = cloneDeep(this.state.customSong)
    newSong.verses[verseIndex]['word' + wordNum] = newValue

    this.setState({ customSong: newSong })
  }

  handleAddVerse = () => {
    let newSong = cloneDeep(this.state.customSong)
    let wordCount = Object.keys(newSong.verses[0]).length
    let newVerse = {}

    for (let i=1; i <= wordCount; i++) {
      newVerse['word' + i] = 'word ' + i
    }

    newSong.verses.push(newVerse)
    this.setState({customSong: newSong})
  }

  handleDeleteVerse = (i) => {
    let newVerses = cloneDeep(this.state.customSong.verses)
    newVerses.splice(i, 1)

    this.setState({customSong: {...this.state.customSong, verses: newVerses}})
  }

  generateVerses = (song, custom) => {
    let verses = []

    for (let i = 0; i < song.verses.length; i++) {
      verses.push(parseVerse(i, song, this, custom))
    }

    return verses
  }

  getDelButton = (custom, index) => {

    const buttonJSX = (
      <div className='delete' onClick={() => this.handleDeleteVerse(index)}>
        <svg className='edit-icon' id='delete-icon' viewBox='0 0 22 22'>
          <circle className="circle" cx="11" cy="11" r="10" />
          <line className="line line-1" x1="6" y1="11" x2="16" y2="11" />
          <line className="line line-2" x1="6" y1="11" x2="16" y2="11" />
        </svg>
      </div>
    )

    const button = custom ? buttonJSX : null
    return button
  }

  getAddButton = (custom) => {
    const buttonJSX = (
      <div className='new-verse' onClick={this.handleAddVerse} tabIndex={this.state.song.verses.length + 1}>
        <svg className='edit-icon' id='add-icon' viewBox='0 0 22 22'>
          <circle className="plus-icon" cx="11" cy="11" r="10" />
          <line className="plus-icon" x1="11" y1="6" x2="11" y2="16" />
          <line className="plus-icon" x1="6" y1="11" x2="16" y2="11" />
        </svg>
        <span id='add-new-verse'>
          Add verse
        </span>
      </div>
    )

    const button = custom ? buttonJSX : null
    return button
  }

  render() {
    // Rendering a song variant based on the route
    const custom = this.props.match.params.mode === 'custom'
    const renderSong = custom ? this.state.customSong : this.state.song

    return (
      <div className="App">
        <Paper bg='white' classes={['song']}>
          <h1>{this.state.song.title}</h1>
          <Nav song={this.state.song.path}/>
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
                    {this.getDelButton(custom, index)}
                  </div>
                </li>
              )
            })}
          </ul>
          {this.getAddButton(custom)}
        </Paper>
        <a className='bg-credit' href="https://www.freepik.com/free-photos-vectors/background" tabIndex={-1}>Background vector created by freepik - www.freepik.com</a>
      </div>
    );
  }
}

export default App;
