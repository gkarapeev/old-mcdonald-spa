import React from 'react'
import Paper from '../Paper/Paper'
import Verse from '../Verse/Verse'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: [
        {
          species: 'cow',
          sound: 'moo'
        },
        {
          species: 'dog',
          sound: 'woof'
        },
        {
          species: 'cat',
          sound: 'meow'
        },
        {
          species: 'pig',
          sound: 'oink'
        },
        {
          species: 'rat',
          sound: 'squeak'
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Paper bg='white' classes={['song']}>
          <h1>
          The Old MacDonald Song
          </h1>

          {this.state.animals.map((animal, index) => {
            return (
              <Verse animal={animal.species} sound={animal.sound} key={index}/>
            )
          })}
        </Paper>
      </div>
    );
  }
}

export default App;
