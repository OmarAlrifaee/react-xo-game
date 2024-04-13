/* eslint-disable react/prop-types */
function Box({ hundleClick, endGame, text, index, empty }) {
  return (
    <div
      className={`box ${text === "x" ? "red" : "green"} ${endGame && "end"}`}
      onClick={() => hundleClick(index)}
      key={index}
    >
      <span>{(empty && "") || text}</span>
    </div>
  );
}

export default Box;
