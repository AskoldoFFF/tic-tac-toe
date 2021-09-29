import React from "react";

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: Array(9).fill(null),
            count: 0,
            scorePlayerX: 1,
            scorePlayerO: 1,
        };
    }

    checkWinner = (curField) => {
        this.winnerLine = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for(let i = 0; i < this.winnerLine.length; i++) {
            let line = this.winnerLine[i];
            if(this.state.fields[line[0]] === curField &&
                this.state.fields[line[1]] === curField &&
                this.state.fields[line[2]] === curField) {
                    if(curField === 'X') {
                        this.setState({scorePlayerX: this.state.scorePlayerX + 1});
                        this.props.updateScorePlayerX(this.state.scorePlayerX);
                        alert("Победитель: " + this.props.playerX);
                    }else {
                        this.setState({scorePlayerO: this.state.scorePlayerO + 1});
                        this.props.updateScorePlayerO(this.state.scorePlayerO);
                        alert("Победитель: " + this.props.playerO);
                    }
                    setTimeout(() => {
                        this.setState({fields: Array(9).fill(null)});
                        this.setState({count: 0});
                    }, 600);
                }
        }
    }

    clickHandler = event => {
        //console.log(1);
        let data = event.target.getAttribute('data');
        let curFields = this.state.fields;
        if(curFields[data] === null) {
            curFields[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
            this.setState({count: this.state.count + 1});
            this.setState({fields: curFields});
        }
        else{
            alert("Ход недопустим!");
        }
        this.checkWinner(curFields[data]);
    }
    

    render() {
        return (
            <div className = "game-square">
                <div className = "game-field" onClick = {this.clickHandler} data = "0">
                    {this.state.fields[0]}</div>
                <div className = "game-field" onClick = {this.clickHandler} data = "1">
                    {this.state.fields[1]}</div>
                <div className = "game-field" onClick = {this.clickHandler} data = "2">
                    {this.state.fields[2]}</div>
                <div className = "game-field" onClick = {this.clickHandler} data = "3">
                    {this.state.fields[3]}</div>
                <div className = "game-field" onClick = {this.clickHandler} data = "4">
                    {this.state.fields[4]}</div>
                <div className = "game-field" onClick = {this.clickHandler} data = "5">
                    {this.state.fields[5]}</div>
                <div className = "game-field" onClick = {this.clickHandler} data = "6">
                    {this.state.fields[6]}</div>
                <div className = "game-field" onClick = {this.clickHandler} data = "7">
                    {this.state.fields[7]}</div>
                <div className = "game-field" onClick = {this.clickHandler} data = "8">
                    {this.state.fields[8]}</div>
            </div>
        );
    }
}

export default Game;