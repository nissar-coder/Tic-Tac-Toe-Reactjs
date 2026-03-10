import React, { useState , useRef} from 'react'
import './TicTacToe.css'
import cross_icon from '../Assets/cross.png';
import circle_icon from '../Assets/circle.png'

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {

const [count, setCount] = useState(0);
const [lock, setLock] = useState(false);
const titleRef = useRef(null);


const toggle = (e, num)=>{
  if (lock) {
    return 0;
  }
if (count % 2 === 0) {
 e.target.innerHTML = `<img src="${cross_icon}" />`;

  data[num] = "x"
}
else{
e.target.innerHTML = `<img src="${circle_icon}" />`;

  data[num] = "o";
}
setCount(count + 1)
checkWin();
}
const checkWin = () =>{
   const winPatterns = [
     [0, 1, 2],
      [3, 4, 5],
     [6, 7, 8],
      [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
     ]
  winPatterns.forEach((pattern) =>{
const [a, b, c] = pattern;
if (data[a] !== "" && data[a] === data[b] && data[b] === data[c]) {
  won(data[a]);
  

}

})
}

const won = (winner) =>{
  setLock(true)
if (winner === 'x') {
  titleRef.current.innerHTML = `Congratulations! Winner is <img src="${cross_icon}" />`;
} else {
  titleRef.current.innerHTML = `Congratulations! Winner is <img src="${circle_icon}" />`;
}


}
const reset = () =>{
  setLock(false);
  setCount(0)
  data = ["", "", "", "", "", "", "", "", ""];
  titleRef.current.innerHTML = "Tic Tac Toe Game in <span>React</span>"
  document.querySelectorAll('.boxes').forEach((box)=>{
    box.innerHTML = ""
  })
}
  return (
    <div className='container'>
      <h1 className="title" ref={titleRef}>Tic Tac Toe Game in <span>React</span></h1>
      <div className="board">
        <div className="row1">
        <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className="row2">
        <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className="row3">
        <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>

        </div>

      </div>
      <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}

export default TicTacToe





























