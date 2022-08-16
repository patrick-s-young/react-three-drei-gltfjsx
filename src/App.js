// react
import { Suspense } from "react";
// react three
import { Canvas } from "@react-three/fiber";
// physics
import { Physics } from '@react-three/cannon';
// model + animation
import Dancer from './Dancer';
// animation event timer
import EventTimer  from './EventTimer';
// styles
import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, .25, 2], rotation: [Math.PI/8, 0, 0] }}>
        <color attach="background" args={['lightblue']} />
        <Physics defaultContactMaterial={{ friction: 0.3, restitution: 0.5 }}>
            <Suspense fullback={null}>
              <EventTimer />
              <Dancer />
            </Suspense>
        </Physics>
        <hemisphereLight args={[0x606060, 0x404040]} />
        <directionalLight position={[1, 1, 1]}/>
      </Canvas>
    </div>
  );
}