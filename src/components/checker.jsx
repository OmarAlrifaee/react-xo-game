// check winner
// note: the logic here debend on three box's have the same text and some of them is not empty
// cuz if did'nt do that it will allways end the game cuz all the sqares when they are empty are the same
const checker = (box, setWinner, setEndGame) => {
  if (
    (box[0].text === box[1].text &&
      box[1].text === box[2].text &&
      box[0].text !== "") ||
    (box[0].text === box[3].text &&
      box[3].text === box[6].text &&
      box[0].text !== "") ||
    (box[0].text === box[4].text &&
      box[4].text === box[8].text &&
      box[0].text !== "")
  ) {
    setWinner(box[0].text);
    setEndGame(true);
  } else if (
    box[1].text === box[4].text &&
    box[4].text === box[7].text &&
    box[1].text !== ""
  ) {
    setWinner(box[1].text);
    setEndGame(true);
  } else if (
    (box[2].text === box[5].text &&
      box[5].text === box[8].text &&
      box[2].text !== "") ||
    (box[2].text === box[4].text &&
      box[4].text === box[6].text &&
      box[2].text !== "")
  ) {
    setWinner(box[2].text);
    setEndGame(true);
  } else if (
    box[3].text === box[4].text &&
    box[4].text === box[5].text &&
    box[3].text !== ""
  ) {
    setWinner(box[3].text);
    setEndGame(true);
  } else if (
    box[6].text === box[7].text &&
    box[7].text === box[8].text &&
    box[6].text !== ""
  ) {
    setWinner(box[6].text);
    setEndGame(true);
    // check if every item has is not empty
  } else if (box.every((item) => item.empty === false)) {
    setWinner("drow");
    setEndGame(true);
  }
};

export default checker;
