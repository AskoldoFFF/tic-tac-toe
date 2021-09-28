import React from "react";

class Game extends React.Component {
    render() {
        return (
            <div className = "game-square">
                <div className = "game-field"></div>
                <div className = "game-field"></div>
                <div className = "game-field"></div>
                <div className = "game-field"></div>
                <div className = "game-field"></div>
                <div className = "game-field"></div>
                <div className = "game-field"></div>
                <div className = "game-field"></div>
                <div className = "game-field"></div>
            </div>
        );
    }
}

export default Game;