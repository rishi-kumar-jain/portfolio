import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
// import skyScene from '../assets/3d/sky3.glb'
import skyScene from '../assets/3d/skyfinal.glb'
import { useFrame } from '@react-three/fiber';


const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScene);

    const skyRef = useRef();

    useFrame((_, delta)=>{  ////delta comes directly by passing it as a second parameter in useFrame
        if(isRotating){
            skyRef.current.rotation.y += 0.25 * delta;
        }
    })

  return (
    <mesh ref={skyRef} position={[0,0,0]} scale={[10,10,10]}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky
