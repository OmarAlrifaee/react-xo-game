import { useState } from "react";
import Box from "./Box";
import checker from "./checker";
import Popup from "./Popup";

function MainComp() {
  // states
  const [XO, setXO] = useState("x"),
    [winner, setWinner] = useState(""),
    [endGame, setEndGame] = useState(false),
    [box, setBox] = useState([
      { empty: true, text: "" },
      { empty: true, text: "" },
      { empty: true, text: "" },
      { empty: true, text: "" },
      { empty: true, text: "" },
      { empty: true, text: "" },
      { empty: true, text: "" },
      { empty: true, text: "" },
      { empty: true, text: "" },
    ]);

  // functions
  const hundleClick = (index) => {
    const newArray = box;
    if (newArray[index].empty) {
      // change the empty to false so i can render the text
      newArray[index].empty = false;
      // change the text from "" to the XO turn
      newArray[index].text = XO;
      // set the box to the new array after edit
      setBox([...newArray]);
      // change the turn
      setXO(XO === "x" ? "o" : "x");
      // the checker function
      checker(box, setWinner, setEndGame);
    }
  };

  // for the popup
  const restart = () => {
    // reset every think
    setBox([
      { empty: true, text: "" },
      { empty: true, text: "" },
      { empty: true, text: "" },
      { empty: true, text: "" },
      { empty: true, text: "" },
      { empty: true, text: "" },
      { empty: true, text: "" },
      { empty: true, text: "" },
      { empty: true, text: "" },
    ]);
    setXO("x");
    setEndGame(false);
    setWinner("");
  };

  return (
    <div className="game">
      <div className="title">
        <h1>tic tac toe</h1>
        {winner && (
          <Popup
            winner={winner === "drow" ? winner : `${winner} is the winner 🏆`}
            restart={restart}
          />
        )}
        {!winner && (
          <h4>
            Turn <span className={XO === "x" ? "red" : "green"}>{XO}</span>
          </h4>
        )}
      </div>
      <div className="boxes">
        {box.map(({ empty, text }, index) => (
          <Box
            box={box}
            hundleClick={hundleClick}
            endGame={endGame}
            empty={empty}
            text={text}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default MainComp;
