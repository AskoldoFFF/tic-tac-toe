import React from "react";

class Info extends React.Component {
    render() {
        return (
            <div className = "info-square">
                <h1>Score</h1>
                <p>{(this.props.playerX === null) ? "PlayerX" : this.props.playerX}: {this.props.scorePlayerX}</p>
                <p>{(this.props.playerO === null) ? "PlayerO" : this.props.playerO}: {this.props.scorePlayerO}</p>
            </div>
        );
    }
}

export default Info;