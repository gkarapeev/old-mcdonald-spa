import React from 'react'

// Components
import Nav from '../Nav/Nav'
import Paper from '../Paper/Paper'
import Verse from '../Verse/Verse'

// CSS
import './App.css'

// Redux
import { connect } from 'react-redux'
// Actions
import { updateAnimals } from '../../actions/animal-actions'


class App extends React.Component {

  onUpdateAnimals = () => {
    this.props.onUpdateAnimals([{species:'hi', sound: 'HIII'}, {spacies: 'ha', sound: 'HAAA'}])
  }

  render() {
    const wordsActive = this.props.location.pathname !== '/'
    console.log(this.props);
    return (
        <div className="App">
          <Paper bg='white' classes={['song']}>
            <h1>The Old MacDonald Song</h1>
            <Nav />
            {/* {this.state.animals.map((animal, index) => {
              return (
                <Verse animal={animal} change={this.handleWordChange} active={wordsActive} key={index} />
              )
            })} */}
            <div onClick={this.onUpdateAnimals}>AAAAAWWWAWAWAWAW</div>
          </Paper>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  animals: state.animals
})

const mapActionsToProps = {
  onUpdateAnimals: updateAnimals
}

export default connect(mapStateToProps, mapActionsToProps)(App);
