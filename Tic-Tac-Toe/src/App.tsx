import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Map from "./components/Map";
import History from "./components/History";
import {MAP_SIZE, winnerCombination} from "./Settings";



function App() {

  const [mapItems, setMapItems] = useState(Array(MAP_SIZE * MAP_SIZE).fill(null));

  const [currenPlayer, setCurrentPlayer] = useState("X")

  const [winner, setWinner] = useState<string | null>(null);

  const checkWinner = (mapItems : string[] | null[]) => {
    for (let i = 0; i < winnerCombination.length; i++) {
      let winnerRow = winnerCombination[i];
      
      if (!mapItems[winnerRow[0]] || !mapItems[winnerRow[1]] || !mapItems[winnerRow[2]])
      continue;
  
      if (mapItems[winnerRow[0]] === mapItems[winnerRow[1]] && mapItems[winnerRow[0]] === mapItems[winnerRow[2]]) {
      console.log('Winner is ' + mapItems[winnerRow[0]]); 
      setWinner(mapItems[winnerRow[0]]);
      return;
  }
  } 
  }

  const onClickHandler = (index: number): void => {
    
      if (winner)
      return;

      if (mapItems[index] !== null) {
          return;
      }

       const  newMapItems = [...mapItems];
       newMapItems[index] = currenPlayer;
 
       checkWinner(newMapItems);
       setMapItems(newMapItems);
       setCurrentPlayer(currenPlayer === "X" ? "O" : "X")
  }

  return (
    <div className="App">
     <Map mapItems={mapItems} onClickHandler={onClickHandler}  winner={winner}></Map>
     <History></History>
    </div>
  )
}

export default App
