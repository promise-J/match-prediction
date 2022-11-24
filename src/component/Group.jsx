import React, { useState } from "react";
import { groupsInAlpha } from "../data";
import SingleGroup from "./SingleGroup";

const Group = ({ country, idx, winners, setWinners }) => {
    const [gWinners, setGWinners] = useState([])
    const [toBeReplaced, setToBeReplaced] = useState({val: null, idx: 0})
    const chooseWinners = (gIndx, gCountry)=>{
        if(gWinners.length >= 2 && toBeReplaced.val === null) return
        if(gWinners.length >= 2 && toBeReplaced.val){
            if(gWinners.find(g=> g.name===gCountry.name)){
                return alert("A team can't be first and second at the same time")
            }
            gWinners.splice(toBeReplaced.idx - 1, 1, gCountry)
            setGWinners(gWinners)
            setToBeReplaced({val: null, idx: 0})
        } 
        const valDey = gWinners.find(v=> v.name===gCountry.name)
        if(valDey===undefined){
            setGWinners(val=> [...val, gCountry])
            // if(gWinners.length===1){
                
                // winners.push(gWinners)
                setWinners([...winners, gCountry])
            // }
        }
        return
    }

    // console.log(winners.length, 'total winners')

    const undoWinners = (idx, val)=>{
        if(gWinners.length < 2){
            return null
        }else{
            if(toBeReplaced.val === val){
                setToBeReplaced({val: null, idx: 0})
            }else{
                setToBeReplaced({val, idx: idx + 1})
            }
        }
    }

  return (
    <div className="group-stage">
      <h2>Group {groupsInAlpha[idx]}</h2>
      <ul className="listGroup">
        {
            country.map((ctry, idx)=>(
                <div key={idx} onClick={()=> chooseWinners(idx, ctry)}>
                <SingleGroup ctry={ctry} />
                </div>
            ))
        }
      </ul>
      <h4>Group qualifiers</h4>
      <ul className="outcome-group">
        {
            gWinners.map((val, idx)=>(
                <div style={{boxShadow: toBeReplaced.idx - 1 === idx && '2px 2px 4px 4px rgb(252, 181, 181)'}} onClick={()=> undoWinners(idx, val)} key={idx}>
                <SingleGroup noBackground  ctry={val} idx={idx} />
                </div>
            ))
        }
        {
            gWinners.length < 1 && (
                <li style={{fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>First Placed Team</li>
            )
        }
        {
            gWinners.length < 2 && (
                <li style={{fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Second Placed Team</li>
            )
        }
       
      </ul>
      {/* <CountryImage imgUrl="https://flagcdn.com/us.svg" /> */}
    </div>
  );
};

export default Group;
