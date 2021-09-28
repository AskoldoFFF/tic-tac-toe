import React from "react";
import Game from "./components/Game";
import Info from "./components/Info";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render() {
    return (
      <div className = "main">
        <Game />
        <Info />
      </div>
    );
  }
}

export default App;