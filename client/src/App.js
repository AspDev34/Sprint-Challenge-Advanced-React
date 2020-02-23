import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerCard from './components/PlayerCard';
import DarkButton from './components/DarkButton';

const centerContent = {
  display: 'flex',
};

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      player: [],
    };
  }
  // state = {
  //   player: [],
  // };

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        console.log("SPRINT API DATA", res.data)
        this.setState({
          player: res.data
        })
      })
      .catch(error => {
        console.log("An error has occurred", error);
      })
  };

  render() {

    return (

      <div style={centerContent}>

        <DarkButton />

        <PlayerCard playerData={this.state.player} />
        
        
      </div>
      
    );
  }
}
export default App;
