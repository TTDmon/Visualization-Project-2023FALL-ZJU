import { Stats, OrbitControls, Circle, Gltf } from '@react-three/drei'
import { Canvas, useLoader, useThree} from '@react-three/fiber'
import { useSpring, animated } from "@react-spring/three"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import React, { useRef, useEffect, useState} from 'react';
import { Raycaster, Vector2, Vector3 } from 'three';
import * as THREE from 'three';
import * as echarts from 'echarts'
import ReactEcharts from "echarts-for-react"

function Bodyviewer({bodypart, onModelChose, onModelLeave, chartRef}) {
    const Models = {
        Head: null,
        Body: null,
        Feet: null,
        Uplegs: null,
        Lowerlegs: null,
        Back: null,
        Knees: null,
        Arms: null,
      };
    
    /*Models.Head = useLoader(GLTFLoader, 'models/playerHead.glb');
    Models.Body = useLoader(GLTFLoader, 'models/playerBody.glb');
    Models.Feet = useLoader(GLTFLoader, 'models/playerFeet.glb');
    Models.Uplegs = useLoader(GLTFLoader, 'models/playerUplegs.glb');
    Models.Lowerlegs = useLoader(GLTFLoader, 'models/playerLowerlegs.glb');
    Models.Back = useLoader(GLTFLoader, 'models/playerBack.glb');
    Models.Knees = useLoader(GLTFLoader, 'models/playerKnees.glb');
    Models.Arms = useLoader(GLTFLoader, 'models/playerArms.glb');*/
    
    const mesh = useRef();

    const [active, setActive] = useState('None');
    const [selected, setSelected] = useState(false);

    const ball = useLoader(GLTFLoader, 'models/SoccerBall.glb');
    const {nodes} = useLoader(GLTFLoader, 'models/PlayerModel.glb'); //use 'nodes' to extract attributes from glb file

    const chooseModel = (part) => {
        if(!selected){
            setActive(part);
            onModelChose(part);
            if (chartRef.current) {
                //clear chart
                chartRef.current.dispatchAction({
                    type: 'downplay',
                });
                chartRef.current.dispatchAction({
                    type: 'highlight',
                    name: part
                });
            }
        }
    }

    const unchooseModel = (part) => {
        if(!selected){
            setActive('None'); 
            onModelLeave();
            if (chartRef.current) {
                chartRef.current.dispatchAction({
                    type: 'downplay',
                });
            }
        }
    }

    return (
            <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
                <directionalLight
                    position={[20, 50, 50]}
                    castShadow
                    intensity={Math.PI * 2}
                />
                <hemisphereLight
                    skycolor={new THREE.Color(0xffffff)}
                    groundColor={new THREE.Color(0xffffff)}
                    intensity={0.61}
                    position={[0, 50, 0]}
                />
                <animated.mesh
                    name="player_head" castShadow receiveShadow geometry={nodes.Body1005.geometry} material={nodes.Body1005.material}
                    onPointerOver={(event) => chooseModel('Head')}
                    onPointerOut={(event) => unchooseModel('Head')}
                    onClick={()=>{
                        setSelected(!selected);
                        if (chartRef.current) {
                            chartRef.current.dispatchAction({
                                type: 'downplay',
                            });
                            // use chartRef.current to call Echarts instance
                            chartRef.current.dispatchAction({
                                type: 'highlight',
                                name: 'Head',
                            });
                        }
                    }}               
                >
                    <meshStandardMaterial color={active == 'Head' ? 0xffa684 : "grey"} />
                </animated.mesh>                     
                <animated.mesh
                    name="player_body" castShadow receiveShadow geometry={nodes.Body.geometry} material={nodes.Body.material}
                    onPointerOver={(event) => {chooseModel('Body')}}
                    onPointerOut={(event) => {unchooseModel('Body')}}  
                    onClick={()=>{
                        setSelected(!selected);
                        if (chartRef.current) {
                            chartRef.current.dispatchAction({
                                type: 'downplay',
                            });
                            // use chartRef.current to call Echarts instance
                            chartRef.current.dispatchAction({
                                type: 'highlight',
                                name: 'Body',
                            });
                        }
                    }}           
                >
                    <meshStandardMaterial color={active == 'Body' ? 0xff6459 : "grey"} />
                </animated.mesh>                     
                <animated.mesh
                    name="player_arms" castShadow receiveShadow geometry={nodes.Arms.geometry} material={nodes.Arms.material}
                    onPointerOver={(event) => {chooseModel('Arms')}}
                    onPointerOut={(event) => {unchooseModel('Arms')}}
                    onClick={()=>{
                        setSelected(!selected);
                        if (chartRef.current) {
                            chartRef.current.dispatchAction({
                                type: 'downplay',
                            });
                            // use chartRef.current to call Echarts instance
                            chartRef.current.dispatchAction({
                                type: 'highlight',
                                name: 'Arms',
                            });
                        }
                    }}             
                >
                    <meshStandardMaterial color={active == 'Arms' ? 0xff856e : "grey"} />
                </animated.mesh>                     
                <animated.mesh
                    name="player_back" castShadow receiveShadow geometry={nodes.Back.geometry} material={nodes.Back.material}
                    onPointerOver={(event) => chooseModel('Back')}
                    onPointerOut={(event) => unchooseModel('Back')}
                    onClick={()=>{
                        setSelected(!selected);
                        if (chartRef.current) {
                            chartRef.current.dispatchAction({
                                type: 'downplay',
                            });
                            // use chartRef.current to call Echarts instance
                            chartRef.current.dispatchAction({
                                type: 'highlight',
                                name: 'Back',
                            });
                        }
                    }}               
                >
                    <meshStandardMaterial color={active == 'Back' ? 0xffe9af : "grey"} />
                </animated.mesh>                     
                <animated.mesh
                    name="player_uplegs" castShadow receiveShadow geometry={nodes.Uplegs.geometry} material={nodes.Uplegs.material}
                    onPointerOver={(event) => chooseModel('Uplegs')}
                    onPointerOut={(event) => unchooseModel('Uplegs')}
                    onClick={()=>{
                        setSelected(!selected);
                        if (chartRef.current) {
                            chartRef.current.dispatchAction({
                                type: 'downplay',
                            });
                            // use chartRef.current to call Echarts instance
                            chartRef.current.dispatchAction({
                                type: 'highlight',
                                name: 'Uplegs',
                            });
                        }
                    }}               
                >
                    <meshStandardMaterial color={active == 'Uplegs' ? 0xff0018 : "grey"} />
                </animated.mesh>                     
                <animated.mesh
                    name="player_knees" castShadow receiveShadow geometry={nodes.Knees.geometry} material={nodes.Knees.material}
                    onPointerOver={(event) => chooseModel('Knees')}
                    onPointerOut={(event) => unchooseModel('Knees')}
                    onClick={()=>{
                        setSelected(!selected);
                        if (chartRef.current) {
                            chartRef.current.dispatchAction({
                                type: 'downplay',
                            });
                            // use chartRef.current to call Echarts instance
                            chartRef.current.dispatchAction({
                                type: 'highlight',
                                name: 'Knees',
                            });
                        }
                    }}               
                >
                    <meshStandardMaterial color={active == 'Knees' ? 0xff4343 : "grey"} />
                </animated.mesh>                     
                <animated.mesh
                    name="player_lowerlegs" castShadow receiveShadow geometry={nodes.Lowerlegs.geometry} material={nodes.Lowerlegs.material}
                    onPointerOver={(event) => chooseModel('Lowerlegs')}
                    onPointerOut={(event) => unchooseModel('Lowerlegs')}
                    onClick={()=>{
                        setSelected(!selected);
                        if (chartRef.current) {
                            chartRef.current.dispatchAction({
                                type: 'downplay',
                            });
                            // use chartRef.current to call Echarts instance
                            chartRef.current.dispatchAction({
                                type: 'highlight',
                                name: 'Lowerlegs',
                            });
                        }
                    }}               
                >
                    <meshStandardMaterial color={active == 'Lowerlegs' ? 0xffc899 : "grey"} />
                </animated.mesh>                     
                <animated.mesh
                    name="player_feet" castShadow receiveShadow geometry={nodes.Feet.geometry} material={nodes.Feet.material}
                    onPointerOver={(event) => chooseModel('Feet')}
                    onPointerOut={(event) => unchooseModel('Feet')}
                    onClick={()=>{
                        setSelected(!selected);
                        if (chartRef.current) {
                            chartRef.current.dispatchAction({
                                type: 'downplay',
                            });
                            // use chartRef.current to call Echarts instance
                            chartRef.current.dispatchAction({
                                type: 'highlight',
                                name: 'Feet',
                            });
                        }
                    }}               
                >
                    <meshStandardMaterial color={active == 'Feet' ? 0xff212e : "grey"} />
                </animated.mesh>  
                <primitive object={ball.scene} castShadow receiveShadow position={[-0.5, 0, 0.3]} scale={0.12} />                                     
                <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
                    <meshStandardMaterial/>
                </Circle>
                <OrbitControls target={[0, 1, 0] } enableZoom={false} enablePan = {false}/>
            </Canvas>
    )
}

export default Bodyviewer