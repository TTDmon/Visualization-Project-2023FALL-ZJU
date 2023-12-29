import {useState,useRef} from "react";
import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './App.css';
import Bodyviewer from "./bodyviewer";
import Chart from "./charts";
import { use } from "echarts";


function App() {
  const [body, selectBody] = useState('None');
  const handleModelChose = (organ) => {
      selectBody(organ)
  };
  const handleModelunChose = () => {
      selectBody('None')
  };

  return (
    <div className="parent">
      <div className="scene">
        <Bodyviewer bodypart={body}
                    onModelChose={handleModelChose}
                    onModelLeave={handleModelunChose}
        />
      </div>
      <div className="ui_overlay">
        <h1>status:</h1>
        <h1>{body}</h1>
        <Chart bodypart={body}/>
      </div>
    </div>     
  );
}

export default App;
