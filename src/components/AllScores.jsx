import React from "react";
//get scores from rails
class AllScores extends React.Component {
  state = { scores: [] };

  getScores = async () => {
    const response = await fetch("https://afternoon-shelf-14654.herokuapp.com/scores");
    const scores = await response.json();
    this.setState({ scores: scores });
  };

  renderScores = () => {
    return this.state.scores.map((score, index) => {
      return (
        <div key={index} className="score">
          <h3>{score.name}</h3>
          <h4>Score: </h4>
          <p>{score.score}</p>
          <hr />
        </div>
      );
    });
  };
  async componentDidMount() {
    this.getScores();
  }

  render() {
    return <div>{this.renderScores()}</div>;
  }
}

export default AllScores;
