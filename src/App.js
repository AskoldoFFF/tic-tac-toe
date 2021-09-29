import React from "react";
import Game from "./components/Game";
import Info from "./components/Info";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerX: "PlayerX",
      playerO: "PlayerO",
      scorePlayerX: 0,
      scorePlayerO: 0
    };
  }

  updateScorePlayerX = (scoreX) => {
    this.setState({scorePlayerX: scoreX});
  }

  updateScorePlayerO = (scoreO) => {
    this.setState({scorePlayerO: scoreO});
  }

  componentDidMount() {
    this.setState({playerX: prompt("Введите имя игрока X:", "PlayerX")});
    this.setState({playerO: prompt("Введите имя игрока O:", "PlayerO")});
  }


  render() {
    return (
      <div className = "main">
        <Game playerX = {this.state.playerX} playerO = {this.state.playerO} 
        updateScorePlayerX = {this.updateScorePlayerX} updateScorePlayerO = {this.updateScorePlayerO}/>
        <Info playerX = {this.state.playerX} playerO = {this.state.playerO}
         scorePlayerX = {this.state.scorePlayerX} scorePlayerO = {this.state.scorePlayerO} />
      </div>
    );
  }
}

export default App;