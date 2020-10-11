import React, { Component } from "react";
import Grid from "./game components/grid";

class Game extends Component {
  constructor() {
    super();
    this.startingState = [];
    this.alive = [];
    this.state = { score: 1, pairs: 0, name: "player" };
  }

  pairCheck = () => {
    if (this.alive.length === 2) {
      if (this.alive[0].id === this.alive[1].id && this.state.pairs < 8) {
        this.setState((state) => {
          state.pairs += 1;
        });
        console.log("pair count is  " + this.state.pairs);
      } else if (this.state.pairs === 8) {
        this.gameEnd();
      }
    }
  };

  gameEnd = () => {
    if (this.state.pairs === 8) {
      return (
        <div className="container">
          <h1>What's your name??</h1>
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" onChange={this.onInputChange} />
            <p>your score is {this.state.score + " clicks"}</p>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  };

  onInputChange = (event) => {
    console.log("on input change");
    this.setState({
      [event.target.id]: event.target.value,
      // this.startingState.push() add cell to list
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    await fetch("https://afternoon-shelf-14654.herokuapp.com/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Parameters: {"score"=>{"score"=>19, "pairs"=>8, "name"=>"TestScore"}}
      body: JSON.stringify({ score: this.state }),
    });
    this.props.history.push("/scoreboard");
  };

  updateVisibility = (tile) => {
    if (tile.style["background-color"] === "blue") {
      tile.style = "background-color: pink";
    } else {
      tile.style = "background-color: blue";
    }
  };

  Visibility = (tile) => {
    if (this.alive.length === 2) {
      this.updateVisibility(this.alive[0].element);
      this.alive.shift();
    }
    this.alive.push({ id: tile.id, element: tile });
    this.updateVisibility(tile);
  };

  handleClick = (event) => {
    console.log(`you've clicked ${this.state.score} times`);
    this.Visibility(event.target);
    this.setState((state) => {
      return (state.score += 1);
    });
    this.pairCheck();
  };

  render() {
    return (
      <>
        {" "}
        <Grid tileEvent={this.handleClick} />
        <div className="scoreBox">
          {" "}
          <h2>clicks:{this.state.score}</h2>
        </div>{" "}
        <div className="scorePairs">
          {" "}
          <h2>pairs:{this.state.pairs}</h2>
        </div>
        {this.gameEnd()}
      </>
    );
  }
}

export default Game;
