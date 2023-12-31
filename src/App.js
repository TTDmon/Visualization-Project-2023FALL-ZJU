import {useState,useRef} from "react";
import {Canvas, useFrame, useLoader, useThree} from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './App.css';
import Bodyviewer from "./bodyviewer";
import {MainChart, SubCharts} from "./charts";
import { use } from "echarts";


function App() {
  const chartRef = useRef(null);
  const [body, selectBody] = useState('None');
  const handleModelChose = (bodypart) => {
      selectBody(bodypart)
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
                    chartRef={chartRef}
        />
      </div>
      <div className="ui_suboverlay">
        <h2>Soccer Injuries by Body</h2>
        <MainChart  bodypart={body}
                chartRef={chartRef}
        />
      </div>
      <div className="ui_mainoverlay">
        <h2>Details</h2>
        <SubCharts bodypart={body} />
      </div>
    </div>     
  );
}

export default App;
