import React from "react";
import VersusRound from "./VersusRound";

const Round16 = ({ winners }) => {
  let arr = []
  function handleClick(idx, winner){
    if(arr.includes(winner)) return
    let disLeng = 14
    if(idx >= winners.length - disLeng) return 
    arr.push(winner)
    console.log(arr)
  }

  return (
    <div className="round-16">
      {winners.map((winner, idx) => (
        <div disabled={true} onClick={()=> handleClick(idx, winner)}>
          <VersusRound
            key={idx}
            status={idx % 2 === 0 ? "even" : "odd"}
            winner={winner}
          />
        </div>
      ))}
    </div>
  );
};

export default Round16;
