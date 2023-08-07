import "./styles.css";
import { useState } from "react";
export default function App() {
  let arr = [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."]
  ];
  let [array, setArray] = useState(arr);
  const [winner, setWinner] = useState("");
  const [pop, setPop] = useState("");
  const [count, setCount] = useState(1);
  function setPlayer(n, m) {
    setPop(false);

    let a = [...array];
    if (a[n][m] === ".") {
      setCount((count) => (count = count + 1));
      a[n][m] = count % 2 === 0 ? "x" : "o";
    } else {
      setPop(true);
    }
    setArray(a);
    for (let i = 0; i < 3; i++) {
      if (a[i][0] === a[i][1] && a[i][1] === a[i][2] && a[i][0] !== ".") {
        setWinner(a[i][0]);
        break;
      } else if (
        a[0][i] === a[1][i] &&
        a[1][i] === a[2][i] &&
        a[0][i] !== "."
      ) {
        setWinner(a[0][i]);
        break;
      } else if (
        a[0][0] === a[1][1] &&
        a[1][1] === a[2][2] &&
        a[i][0] !== "."
      ) {
        setWinner(a[0][0]);
        break;
      } else if (
        a[0][3] === a[1][1] &&
        a[1][1] === a[2][0] &&
        a[i][0] !== "."
      ) {
        setWinner(a[1][1]);
        break;
      } else if(a[0][0]!==a[0][1]!==a[0][2]!==a[1][0]!==a[1][1]!==a[1][2]!==a[2][0]!==a[2][1]!==a[2][2]!=='.'){
        setWinner("Match Draw");
        break;
      }else {
        continue;
      }
    }
    

  return (
    <div className="App">
      <h1>Tic-Tac-Toe{count}</h1>
      <span className={pop ? "show" : "popuptext"}>
        This box is already filled!
      </span>
      <div className={winner !== "" ? "show1" : "winner"}>
        Congratulation,The winner is "{winner}".
        <button
          onClick={() => {
            setArray(arr);
            setWinner("");
          }}
        >
          Ok
        </button>
      </div>
      <h3>{"player1 :x   player2 :O"} </h3>
      <div className="box">
        <div className="row">
          <button onClick={() => setPlayer(0, 0)}>{array[0][0]}</button>
          <button onClick={() => setPlayer(0, 1)}>{array[0][1]}</button>
          <button onClick={() => setPlayer(0, 2)}>{array[0][2]}</button>
        </div>
        <div className="row">
          <button onClick={() => setPlayer(1, 0)}>{array[1][0]}</button>
          <button onClick={() => setPlayer(1, 1)}>{array[1][1]}</button>
          <button onClick={() => setPlayer(1, 2)}>{array[1][2]}</button>
        </div>
        <div className="row">
          <button onClick={() => setPlayer(2, 0)}>{array[2][0]}</button>
          <button onClick={() => setPlayer(2, 1)}>{array[2][1]}</button>
          <button onClick={() => setPlayer(2, 2)}>{array[2][2]}</button>
        </div>
      </div>
    </div>
  );
}
