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
      animals: getAnimals(),
      customAnimals: getAnimals()
    }
  }

  handleWordChange = (event, id, type) => {
    let newAnimals = [...this.state.customAnimals]
    newAnimals[id][type] = event.target.value
    this.setState({ customAnimals: newAnimals })
  }

  handleDeleteAnimal = (id) => {
    let newAnimals = [...this.state.customAnimals]
    newAnimals.splice(id, 1)
    this.setState({ customAnimals: newAnimals })
  }

  render() {
    // Determining which variant of the song to display based on the route
    const variant = this.props.location.pathname === '/' ? 'original' : 'custom'
    const renderAnimals = variant === 'original' ? this.state.animals : this.state.customAnimals

    return (
      <div className="App">
        <Paper bg='white' classes={['song']}>
          <h1>The Old MacDonald Song</h1>
          <Nav />
          {renderAnimals.map((animal, index) => {
            return (
              <Verse
                animal={animal}
                change={this.handleWordChange}
                deleteAnimal={() => this.handleDeleteAnimal(index)}
                variant={variant}
                key={index}
              />
            )
          })}
          {variant === 'custom' ?
            <div className='new-verse' onClick={this.handleAddAnimal}>
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
      </div>
    );
  }
}

export default App;
