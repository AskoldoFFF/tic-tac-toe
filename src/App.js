import React from "react";
import Game from "./components/Game";
import Info from "./components/Info";

class App extends React.Component {
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