import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerCard from './components/PlayerCard';




class App extends React.Component {
  
state = {

  player: [],

};

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

  return(

    <div>
      <PlayerCard playerData={this.state.player}/>

      hello ooooo



    </div>


  );
}

}

export default App;
