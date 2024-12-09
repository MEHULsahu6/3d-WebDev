import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

const Scene3d = () => {
    return (
      <div
      style={{
          height: "85vh", // 50% of the viewport height
          width: "75vw", // Full viewport width
          display: "flex", // Enables flexbox layout
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
          marginLeft: "-6vw",
          background:"transparent" // Removes any default margins
      }}
  >
      <Canvas
          flat
          camera={{
              fov: 55,
              position: [0, 0, 10], // Camera distance from the scene
          }}
      >
                <OrbitControls enableZoom={false} />
                <ambientLight intensity={10} />
                <Scene />
                <EffectComposer>
                    <Bloom
                        mipmapBlur
                        intensity={0} // Adjust bloom intensity
                        luminanceThreshold={5}
                        luminanceSmoothing={1}
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default Scene3d;