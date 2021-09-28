import React from "react";

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: Array(9).fill(null),
            count: 0,
        };
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