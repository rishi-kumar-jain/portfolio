import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../component/Loader'
//suspense used as the wrapper for rendering the loading screen
//Loader - while the 3d model is loading even if optimised will take some time in 
//loading so used this
import Island from '../models/Island'
import { OrbitControls } from '@react-three/drei'
import Sky from './../models/Sky';
import Bird from './../models/Bird';
// import song from "../assets/song.mp3";
import sakura from "../assets/sakura.mp3";


import Plane from './../models/Plane';
import HomeInfo from './../component/HomeInfo';
import { soundoff, soundon } from '../assets/icons'






const Home = () => {  
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating , setIsRotating] = useState(false);

  const [currentStage, setCurrentStage] = useState(1); 
  
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  
useEffect(() => {
  console.log("useEffect triggered");
  if (isPlayingMusic) {
    console.log("Playing audio");
    audioRef.current.play();
  }

  return () => {
    console.log("Cleanup function");
    audioRef.current.pause();
  };
}, [isPlayingMusic]);



  const adjustIslandForScreenSize = () =>{
    let screenScale=null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9];
      
    }else{
      screenScale = [1, 1, 1];
      
    }

    return [screenScale, screenPosition, rotation];
  }


  const adjustPlaneForScreenSize = () =>{
    let screenScale,  screenPosition ;


    if(window.innerWidth < 768){
      screenScale = [1.5, 1.5, 1.5];
      screenPosition=[0 , -1.5, 0];
      
    }else{
      screenScale = [3, 3,3];
      screenPosition=[0 , -4, -4]
      
    }

    return [screenScale, screenPosition];
  }




  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    
    <section className='w-full h-screen relative'>
    <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      {currentStage && <HomeInfo currentStage={currentStage} />}
    </div>

     <Canvas 
     className={`w-full h-full bg-transparent ${isRotating ? 'cursor-grabbing' :' cursor-grab'}`}
     camera={{near: 0.1, far: 1000}}>  

      <Suspense fallback={<Loader />}>

        {/* sunlight */}
        <directionalLight position={[1,1,1]} intensity={2}/>

        <ambientLight intensity={0.5}/>
        
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
        {/* <OrbitControls /> */}

        
        <Bird 
        />
        <Sky 
        isRotating = {isRotating}/>
        
        <Island 
        position={islandPosition}
        scale={islandScale}
        rotation={rotation}
        isRotating={isRotating}
        setIsRotating={setIsRotating}
        setCurrentStage={setCurrentStage}
        />
       <Plane 
       isRotating={isRotating}
       position={planePosition}
       scale={planeScale}
       rotation={[0,20,0]}

       />
      </Suspense>

     </Canvas>
     <div className='absolute bottom-2 left-2' >
      <img 
      src={!isPlayingMusic ? soundoff : soundon} 
      alt="soundon" 
      className='w-10 h-10 cursor-pointer object-contain'
      onClick={()=> setIsPlayingMusic(!isPlayingMusic)}
      />
     </div>
    </section>
  )
}

export default Home
