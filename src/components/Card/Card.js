import React from "react";
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
class Card extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0,
    score: ""
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    if (this.props.count != "0") {
        this.setState({ count: this.state.count = 0 });
    }
    else {
        this.setState({ count: this.state.count + 1 });
    }
    this.scoreCard()
    // We always use the setState method to update a component's state
  };

  scoreCard = () => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let score = parseInt(this.state.score)
    score++
    // Set this.state.friends equal to the new friends array
    this.setState({ score });
  };

  // The render method returns the JSX that should be rendered
  render(props) {
    return (
        <div className="card">
            <div className="img-container" onClick={() => this.handleIncrement()}>
                <img 
                    src={this.props.image} 
                    count={this.state.count}
                />
            </div>
        </div>
    );
  }
}

export default Card;
