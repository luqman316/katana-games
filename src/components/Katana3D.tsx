"use client";
import { OrbitControls, Text3D } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function AnimatedText() {
  const textRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (textRef.current) {
      textRef.current.rotation.y = t * 0.5; // slow Y rotation
      textRef.current.position.y = Math.sin(t * 1.5) * 0.2; // bobbing up & down
    }
  });

  return (
    <>
        <Text3D
            ref={textRef}
            font={"/fonts/helvetiker_regular.typeface.json"}
            size={1}
            height={0.5}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.03}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
        >
            KATANA
            <meshStandardMaterial
                color={"#ff004f"}
                emissive={"#182232"}
                emissiveIntensity={0.3}
                metalness={0.6}
                roughness={0.3}
            />
        </Text3D>
        <Text3D
            // ref={textRef}
            font={"/fonts/helvetiker_regular.typeface.json"}
            size={1}
            height={0.3}
            position={[0, -2.2, 0]} // Adjust Y to appear below "KATANA"
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.03}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
        >
            GAMES
            <meshStandardMaterial
                color={"#ff004f"}
                emissive={"#182232"}
                emissiveIntensity={0.3}
                metalness={0.6}
                roughness={0.3}
            />
        </Text3D>
    </>
  );
}

export default function Katana3D() {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <AnimatedText />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Suspense>
      </Canvas>
    </div>
  );
}
