import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Board from "./components/board/board.component";
import { shuffle } from "./utils/array";
import { data } from "./utils/data";

const options = data;

let cards = [];
options.forEach(option =>
  cards.push(
    { identifier: option.identifier, value: option.question },
    { identifier: option.identifier, value: option.answer }
  )
);
cards = shuffle(cards);

function App() {
  return (
    <div className="App container">
      <Board options={cards}></Board>
    </div>
  );
}

export default App;
