import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas, useLoader, useThree} from '@react-three/fiber'
import { useSpring, animated } from "@react-spring/three"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import React, { useRef, useEffect, useState} from 'react';
import { Raycaster, Vector2, Vector3 } from 'three';
import * as THREE from 'three';

function Bodyviewer(props) {
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
    
    Models.Head = useLoader(GLTFLoader, 'models/playerHead.glb');
    Models.Body = useLoader(GLTFLoader, 'models/playerBody.glb');
    Models.Feet = useLoader(GLTFLoader, 'models/playerFeet.glb');
    Models.Uplegs = useLoader(GLTFLoader, 'models/playerUplegs.glb');
    Models.Lowerlegs = useLoader(GLTFLoader, 'models/playerLowerlegs.glb');
    Models.Back = useLoader(GLTFLoader, 'models/playerBack.glb');
    Models.Knees = useLoader(GLTFLoader, 'models/playerKnees.glb');
    Models.Arms = useLoader(GLTFLoader, 'models/playerArms.glb');
    
    const mesh = useRef();
    const {bodypart, onModelChose, onModelLeave} = props;

    const [active, setActive] = useState('None');

    const {nodes} = useLoader(GLTFLoader, 'models/PlayerModel.glb'); //use 'nodes' to extract attributes from glb file
    // const [hovered, setHover] = useState(false);

    return (
            <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
                <directionalLight
                    position={[0, 1.0, 5]}
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
                    name="player_head" castShadow receiveShadow geometry={nodes.Head.geometry} material={nodes.Head.material}
                    onPointerOver={(event) => setActive('Head')}
                    onPointerOut={(event) => setActive('None')}
                    onClick={() => {onModelChose('Head');}}               
                >
                    <meshStandardMaterial color={active == 'Head' ? "hotpink" : "orange"} />
                </animated.mesh>                     
                <animated.mesh
                    name="player_body" castShadow receiveShadow geometry={nodes.Body.geometry} material={nodes.Body.material}
                    onPointerOver={(event) => setActive('Body')}
                    onPointerOut={(event) => setActive('None')}
                    onClick={() => {onModelChose('Body');}}               
                >
                    <meshStandardMaterial color={active == 'Body' ? "hotpink" : "orange"} />
                </animated.mesh>                     
                <animated.mesh
                    name="player_arms" castShadow receiveShadow geometry={nodes.Arms.geometry} material={nodes.Arms.material}
                    onPointerOver={(event) => setActive('Arms')}
                    onPointerOut={(event) => setActive('None')}
                    onClick={() => {onModelChose('Arms');}}               
                >
                    <meshStandardMaterial color={active == 'Arms' ? "hotpink" : "orange"} />
                </animated.mesh>                     
                <animated.mesh
                    name="player_back" castShadow receiveShadow geometry={nodes.Back.geometry} material={nodes.Back.material}
                    onPointerOver={(event) => setActive('Back')}
                    onPointerOut={(event) => setActive('None')}
                    onClick={() => {onModelChose('Back');}}               
                >
                    <meshStandardMaterial color={active == 'Back' ? "hotpink" : "orange"} />
                </animated.mesh>                     
                <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
                    <meshStandardMaterial />
                </Circle>
                <mesh ref={mesh} position={[2,0,0]}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color={bodypart == 'None' ? "hotpink" : "orange"} />
                </mesh>
                <OrbitControls target={[0, 1, 0] } enableZoom={false} enablePan = {false}/>
            </Canvas>
    )
}

export default Bodyviewer