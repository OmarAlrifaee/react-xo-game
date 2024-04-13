import ReactDOM from "react-dom";

function Popup({ winner, restart }) {
  return ReactDOM.createPortal(
    <div className="popup-container">
      <h3 className="popup">{winner}</h3>
      <button onClick={restart}>Restart</button>
    </div>,
    document.getElementById("popup")
  );
}

export default Popup;
