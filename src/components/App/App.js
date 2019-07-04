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
      animals: getAnimals()
    }
  }

  handleWordChange = (event, id, type) => {
    let newAnimals = [...this.state.animals]
    newAnimals[id][type] = event.target.value
    this.setState({animals: newAnimals})
  }

  handleResetAnimals = () => {
    this.setState({animals: getAnimals()})
  }

  render() {
    const wordsActive = this.props.location.pathname !== '/'

    return (
        <div className="App">
          <Paper bg='white' classes={['song']}>
            <h1>The Old MacDonald Song</h1>
            <Nav reset={this.handleResetAnimals} />
            {this.state.animals.map((animal, index) => {
              return (
                <Verse animal={animal} change={this.handleWordChange} active={wordsActive} key={index} />
              )
            })}
          </Paper>
        </div>
    );
  }
}

export default App;
