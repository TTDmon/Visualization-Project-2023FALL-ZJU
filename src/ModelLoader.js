import { Canvas, useLoader, useThree} from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import React from 'react';


/*export default function modelLoader() {
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
    Models[Head] = useLoader(GLTFLoader, 'models/playerHead.glb');
    Models[Body] = useLoader(GLTFLoader, 'models/playerBody.glb');
    Models[Feet] = useLoader(GLTFLoader, 'models/playerFeet.glb');
    Models[Uplegs] = useLoader(GLTFLoader, 'models/playerUplegs.glb');
    Models[Lowerlegs] = useLoader(GLTFLoader, 'models/playerLowerlegs.glb');
    Models[Back] = useLoader(GLTFLoader, 'models/playerBack.glb');
    Models[Knees] = useLoader(GLTFLoader, 'models/playerKnees.glb');
    Models[Arms] = useLoader(GLTFLoader, 'models/playerArms.glb');
    return Models;
}*/