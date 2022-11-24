import { useEffect, useState } from "react";
import "./App.css";
import Final from "./component/Final";
import Group from "./component/Group";
import Round16 from "./component/Round16";
import Round4 from "./component/Round4";
import Round8 from "./component/Round8";
import countries from "./data";

function App() {
  const stages = {
    s16: false,
    s8: false,
    s4: false,
    s2: false,
  };
  const [allCoutries, setAllCoutries] = useState([]);
  const [winners, setWinners] = useState([]);
  const [showStages, setShowStages] = useState(stages);

  useEffect(() => {
    setAllCoutries(countries);
  }, []);

  function sortArr(arr) {
    const firstArr = [];
    const secondArr = [];
    for (let i = 0; i < arr.length; i++) {
      if ((i + 1) % 4 === 0 || (i + 1) % 4 === 1) {
        firstArr.push(arr[i]);
      } else {
        secondArr.push(arr[i]);
      }
    }
    return firstArr.concat(secondArr);
  }

  const handleRound16 = () => {
    const result = sortArr(winners);
    setWinners(result);
    setShowStages({ ...showStages, s16: true });
  };

  // function sortArr(){
  //   const firstArr = []
  //   const secondArr = []
  //   const arr = ["a1", "a2", 'b1', 'b2', 'c1', 'c2', 'd1', 'd2', 'e1', 'e2', 'f1', 'f2','g1', 'g2', 'h1', 'h2']
  //   for(let i=0; i<arr.length; i++){
  //     if((i+1)%4===0 || (i+1)%4===1){
  //     firstArr.push(arr[i])
  //   }else{
  //       secondArr.push(arr[i])
  //     }
  //   }
  //   console.log(firstArr.concat(secondArr))
  // }
  // sortArr()

  return (
    <div className="App">
      <main>
        <div>
          <div className="group-stages">
            {allCoutries.map((country, idx) => (
              <Group
                winners={winners}
                setWinners={setWinners}
                country={country}
                key={idx}
                idx={idx}
              />
            ))}
          </div>
          {winners.length > 15 && (
            <button onClick={handleRound16}>Continue To Round 16</button>
          )}
          {showStages.s16 && <Round16 winners={winners} />}
          {false && (
            <>
              <button>Continue To Round 8</button>
              <Round8 />
              <button>Continue To Semi Final</button>
              <Round4 />
              <button>Continue To Final</button>
              <Final />
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
