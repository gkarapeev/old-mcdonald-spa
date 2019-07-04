import React from 'react'
import Nav from '../Nav/Nav'
import Paper from '../Paper/Paper'
import Verse from '../Verse/Verse'
import getAnimals from '../../data/animal_list'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wordsActive: false,
      animals: getAnimals()
    }
  }

  handleWordChange = (event, id, type) => {
    let newAnimals = [...this.state.animals]
    newAnimals[id][type] = event.target.value
    this.setState({animals: newAnimals})
  }

  handleResetAnimals = () => {
    this.setState({wordsActive: false, animals: getAnimals()})
  }

  handleActivateWords = () => {
    this.setState({wordsActive: true})
  }

  render() {
    return (
        <div className="App">
          <Paper bg='white' classes={['song']}>
            <h1>The Old MacDonald Song</h1>
            <Nav reset={this.handleResetAnimals} activate={this.handleActivateWords}/>
            {this.state.animals.map((animal, index) => {
              return (
                <Verse animal={animal} change={this.handleWordChange} active={this.state.wordsActive} key={index} />
              )
            })}
          </Paper>
        </div>
    );
  }
}

export default App;
