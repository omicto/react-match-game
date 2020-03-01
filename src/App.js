import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./components/board/board.component";
import { shuffle } from "./utils/array";

const options = [
  {
    identifier: "moprosoft",
    question: "algo de mexico o asi",
    answer: "moprosoft"
  },
  {
    identifier: "cmmi",
    question: "algo q mide lo chingon o asi",
    answer: "cmmi"
  }
];

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
    <div className="App">
      <Board options={cards}></Board>
    </div>
  );
}

export default App;
