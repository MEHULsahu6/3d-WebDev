import React, { useRef } from 'react';
import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from "three";

const Scene = () => {
    let tex = useTexture("./ff2.png");

    let scene = useRef(null);

    useFrame((state, delta) => {
        scene.current.rotation.y += delta * 0.5; // Rotate the cylinder
    });

    return (
        <>
            {/* Add ambient light for overall warmth */}
            <ambientLight intensity={0.2} color="#FFDAB9" />
            {/* Add point light for a glowing effect */}
            <pointLight 
                position={[0, 3, 3]} 
                intensity={0.8} 
                distance={10} 
                decay={2} 
                color="#FF6347" 
            />
            <group position={[1, 0, 0]} rotation={[0, 1.5, 0.3]}>
                <mesh ref={scene}>
                    {/* Adjust the dimensions here: args = [topRadius, bottomRadius, height, radialSegments, heightSegments] */}
                    <cylinderGeometry args={[4.8, 5, 3.2, 90, 90, true]} />
                    <meshStandardMaterial
                        map={tex}
                        transparent
                        side={THREE.DoubleSide}
                       
                    />
                </mesh>
            </group>
        </>
    );
};

export default Scene;