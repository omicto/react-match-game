import React, { Component } from "react";
import Card from "../card/card.component";

class Board extends Component {
  constructor({ options }) {
    super();
    this.state = {
      currentCard: null,
      flippedCards: [],
      temporaliyFlipped: []
    };
  }

  handleCardClick = numId => {
    const { currentCard, temporaliyFlipped } = this.state;
    const { options } = this.props;
    if (currentCard == null) {
      const temp = [...temporaliyFlipped];
      temp.push(numId);
      this.setState({ currentCard: numId, temporaliyFlipped: temp });
    } else {
      if (options[currentCard].identifier === options[numId].identifier) {
        const flippedCards = [...this.state.flippedCards];
        flippedCards.push(options[currentCard].identifier);
        this.setState({ flippedCards });
      }
      // TODO: Animate this or something
      const temp = [...temporaliyFlipped];
      temp.push(numId);
      this.setState({ temporaliyFlipped: temp });
      //
      this.setState({ currentCard: null, temporaliyFlipped: [] });
    }
  };

  render() {
    const { flippedCards, temporaliyFlipped } = this.state;
    const { options } = this.props;
    return (
      <div className="board row">
        {options.map((option, index) => (
          <Card
            key={index}
            id={index}
            pairId={option.identifier}
            value={option.value}
            handleClick={this.handleCardClick}
            flipped={
              flippedCards.includes(option.identifier) ||
              temporaliyFlipped.includes(index)
            }
          ></Card>
        ))}
      </div>
    );
  }
}

export default Board;
