import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import click1 from "./assets/click1.wav";
import click2 from "./assets/click2.wav";
import sus1 from "./assets/sus.wav";
import { Simulate } from "react-dom/test-utils";
import play = Simulate.play;

const click1Audio = new Audio(click1);
const click2Audio = new Audio(click2);
const susAudio = new Audio(sus1);

function App() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [bpm, setBpm] = useState<number>(150);

  const timer = useRef<number>();
  let counter = 1;

  useEffect(() => {
    console.log("test");

    if (playing) {
      timer.current = setInterval(() => {
        if (counter == 5) counter = 1;

        if (counter == 1) click2Audio.play();
        else click1Audio.play();

        counter++;
      }, (60 / bpm) * 1000);
    } else {
      clearInterval(timer.current);
      setPlaying(false);
    }

    return () => {
      timer && clearInterval(timer);
    };
  }, [playing, bpm]);
  const stopPlayHandler = () => {
    setPlaying(!playing);
  };
  /*
  function myEvent(event) {
    console.log(event.target.value);
  }

  const myEvent2 = event => console.log(event.target.value); */

  return (
    <div className="metronome">
      <div className="bpm-slider">
        <div>{bpm} bpm</div>
        <input
          type="range"
          min="60"
          max="240"
          onChange={(event) => setBpm(parseInt(event.target.value, 10))}
        />
      </div>

      <button onClick={stopPlayHandler}>{playing ? "Stop" : "Play"}</button>
    </div>
  );
}
export default App;
