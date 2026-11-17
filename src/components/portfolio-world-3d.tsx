"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import Image from "next/image";
import { ContactShadows, Float, Sparkles } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";

function Portal({ reduced }: { reduced: boolean }) {
  const outer = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (reduced) return;
    if (outer.current) outer.current.rotation.z += delta * 0.12;
    if (inner.current) inner.current.rotation.z -= delta * 0.2;
  });
  return (
    <group position={[0.2, 1.35, -0.45]}>
      <mesh>
        <torusGeometry args={[1.62, 0.12, 18, 120]} />
        <meshStandardMaterial color="#f5eaff" metalness={0.72} roughness={0.22} emissive="#8658ff" emissiveIntensity={0.42} />
      </mesh>
      <group ref={outer}>
        <mesh>
          <torusGeometry args={[1.83, 0.025, 8, 120]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[1.72, 0.035, 8, 96]} />
          <meshBasicMaterial color="#ffb8dc" />
        </mesh>
      </group>
      <group ref={inner}>
        <mesh>
          <torusGeometry args={[1.43, 0.045, 10, 96]} />
          <meshBasicMaterial color="#8beaff" />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 3]}>
          <torusGeometry args={[1.52, 0.018, 8, 96]} />
          <meshBasicMaterial color="#d9c4ff" />
        </mesh>
      </group>
      <mesh position={[0, 0, -0.08]}>
        <circleGeometry args={[1.35, 96]} />
        <meshBasicMaterial color="#d8c9ff" transparent opacity={0.14} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, 0.02]}>
        <circleGeometry args={[0.62, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.55} />
      </mesh>
      <mesh position={[0, 0, 0.08]}>
        <circleGeometry args={[0.52, 64]} />
        <meshStandardMaterial color="#a88af7" emissive="#8e68ff" emissiveIntensity={0.7} roughness={0.3} />
      </mesh>
      <group position={[0, 0, 0.13]}>
        <mesh position={[-0.16, 0.02, 0]}>
          <boxGeometry args={[0.12, 0.48, 0.08]} />
          <meshStandardMaterial color="#ffffff" metalness={0.2} roughness={0.25} />
        </mesh>
        <mesh position={[0.13, 0.12, 0]}>
          <boxGeometry args={[0.12, 0.32, 0.08]} />
          <meshStandardMaterial color="#ffffff" metalness={0.2} roughness={0.25} />
        </mesh>
        <mesh position={[0.02, -0.16, 0]}>
          <boxGeometry args={[0.42, 0.1, 0.08]} />
          <meshStandardMaterial color="#ffffff" metalness={0.2} roughness={0.25} />
        </mesh>
      </group>
    </group>
  );
}

function Island() {
  return (
    <group position={[0.05, -1.2, 0.1]}>
      <mesh scale={[2.25, 0.3, 1.18]}>
        <sphereGeometry args={[1, 48, 24]} />
        <meshStandardMaterial color="#8fdbb8" roughness={0.92} />
      </mesh>
      <mesh position={[0, -0.47, 0]} scale={[1.82, 0.72, 0.96]}>
        <coneGeometry args={[1, 1.7, 7, 1]} />
        <meshStandardMaterial color="#655b86" roughness={0.95} flatShading />
      </mesh>
      <mesh position={[0.15, -0.11, 0.04]} scale={[0.26, 0.7, 0.12]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#7ce4f5" roughness={0.18} transparent opacity={0.78} />
      </mesh>
      {[-1.25, -0.7, 0.9, 1.45].map((x, i) => (
        <group key={x} position={[x, 0.2, i % 2 ? 0.5 : -0.48]}>
          <mesh position={[0, 0.24, 0]}>
            <cylinderGeometry args={[0.045, 0.07, 0.52, 7]} />
            <meshStandardMaterial color="#8a6b58" />
          </mesh>
          <mesh position={[0, 0.62, 0]}>
            <icosahedronGeometry args={[0.28 + (i % 2) * 0.07, 1]} />
            <meshStandardMaterial color={i % 2 ? "#82c99e" : "#a2d9ad"} roughness={0.95} />
          </mesh>
        </group>
      ))}
      {Array.from({ length: 14 }, (_, i) => {
        const a = (i / 14) * Math.PI * 2;
        return <mesh key={i} position={[Math.cos(a) * (1.35 + (i % 3) * 0.15), 0.16, Math.sin(a) * (0.55 + (i % 2) * 0.13)]} scale={0.07}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color={i % 2 ? "#ff9fcb" : "#fff2ac"} emissive={i % 2 ? "#f47bb9" : "#fff2ac"} emissiveIntensity={0.12} />
        </mesh>;
      })}
    </group>
  );
}

function Avatar() {
  return (
    <group position={[-0.58, -0.82, 0.92]} rotation={[0, -0.12, 0]} scale={0.82}>
      <mesh position={[0, 0.36, 0]} scale={[0.43, 0.54, 0.27]}>
        <capsuleGeometry args={[0.35, 0.5, 8, 16]} />
        <meshStandardMaterial color="#f5eee8" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.79, 0.12]} rotation={[0.2, 0, 0]}>
        <torusGeometry args={[0.22, 0.045, 8, 32, Math.PI]} />
        <meshStandardMaterial color="#c8b9ef" roughness={0.55} />
      </mesh>
      <mesh position={[0, 1.16, 0.02]} scale={[0.3, 0.35, 0.29]}>
        <sphereGeometry args={[0.48, 32, 24]} />
        <meshStandardMaterial color="#bd8067" roughness={0.82} />
      </mesh>
      <mesh position={[0, 1.39, -0.02]} scale={[0.34, 0.22, 0.32]}>
        <sphereGeometry args={[0.5, 24, 16]} />
        <meshStandardMaterial color="#28253c" roughness={0.92} />
      </mesh>
      <mesh position={[-0.1, 1.17, 0.285]}><sphereGeometry args={[0.025, 12, 12]} /><meshBasicMaterial color="#26213a" /></mesh>
      <mesh position={[0.1, 1.17, 0.285]}><sphereGeometry args={[0.025, 12, 12]} /><meshBasicMaterial color="#26213a" /></mesh>
      <mesh position={[0, 0.91, 0.04]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.27, 0.035, 8, 32, Math.PI]} />
        <meshStandardMaterial color="#8d6ee8" />
      </mesh>
      <mesh position={[0, -0.03, -0.18]} scale={[0.55, 0.12, 0.4]}>
        <sphereGeometry args={[1, 24, 16]} />
        <meshStandardMaterial color="#8d7cc0" roughness={0.8} />
      </mesh>
      <mesh position={[-0.2, -0.03, 0.27]} rotation={[Math.PI / 2, 0, 0.08]}>
        <capsuleGeometry args={[0.12, 0.52, 8, 16]} />
        <meshStandardMaterial color="#35354f" roughness={0.85} />
      </mesh>
      <mesh position={[0.2, -0.03, 0.27]} rotation={[Math.PI / 2, 0, -0.08]}>
        <capsuleGeometry args={[0.12, 0.52, 8, 16]} />
        <meshStandardMaterial color="#35354f" roughness={0.85} />
      </mesh>
      <mesh position={[-0.2, -0.24, 0.58]} rotation={[0.65, 0, 0]}>
        <capsuleGeometry args={[0.105, 0.38, 8, 16]} />
        <meshStandardMaterial color="#35354f" roughness={0.85} />
      </mesh>
      <mesh position={[0.2, -0.24, 0.58]} rotation={[0.65, 0, 0]}>
        <capsuleGeometry args={[0.105, 0.38, 8, 16]} />
        <meshStandardMaterial color="#35354f" roughness={0.85} />
      </mesh>
      <mesh position={[-0.2, -0.38, 0.77]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[0.22, 0.12, 0.34]} />
        <meshStandardMaterial color="#ffffff" roughness={0.65} />
      </mesh>
      <mesh position={[0.2, -0.38, 0.77]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[0.22, 0.12, 0.34]} />
        <meshStandardMaterial color="#ffffff" roughness={0.65} />
      </mesh>
      {[-0.4, 0.4].map((x) => <mesh key={x} position={[x, 0.48, 0.24]} rotation={[0.9, 0, x * 0.6]}>
        <capsuleGeometry args={[0.09, 0.42, 6, 12]} />
        <meshStandardMaterial color="#f4eee9" roughness={0.9} />
      </mesh>)}
    </group>
  );
}

function Workstation() {
  return (
    <group position={[0.08, -0.48, 2.15]}>
      <mesh position={[0, 0.42, 0]} scale={[1.45, 0.07, 0.48]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#f9f4ff" roughness={0.38} metalness={0.12} />
      </mesh>
      <mesh position={[0, 0.35, 0.02]} scale={[1.48, 0.035, 0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#9b83e8" emissive="#8b6bdf" emissiveIntensity={0.18} />
      </mesh>
      {[-1.18, 1.18].map((x) => <mesh key={x} position={[x, -0.02, 0]} rotation={[0, 0, 0.02]}>
        <cylinderGeometry args={[0.045, 0.055, 0.88, 12]} />
        <meshStandardMaterial color="#d5c8f2" metalness={0.55} roughness={0.3} />
      </mesh>)}
      <mesh position={[0, 1.03, -0.22]} scale={[0.82, 0.49, 0.08]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#252844" metalness={0.35} roughness={0.25} />
      </mesh>
      <mesh position={[0, 1.03, -0.13]} scale={[0.75, 0.41, 0.012]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#4a4b84" />
      </mesh>
      <mesh position={[-0.28, 1.08, -0.11]} scale={[0.12, 0.1, 0.015]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#83e6e6" />
      </mesh>
      <mesh position={[0.18, 1.1, -0.11]} scale={[0.28, 0.018, 0.015]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#f6a6d1" />
      </mesh>
      <mesh position={[0.18, 1.02, -0.11]} scale={[0.34, 0.015, 0.015]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color="#b9a9ff" />
      </mesh>
      <mesh position={[0, 0.58, 0.2]} rotation={[-0.25, 0, 0]} scale={[0.48, 0.035, 0.3]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#dce5ff" metalness={0.3} roughness={0.3} />
      </mesh>
      <mesh position={[0, 0.75, 0.05]} rotation={[-0.25, 0, 0]} scale={[0.48, 0.27, 0.035]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#30334f" metalness={0.35} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.75, 0.072]} rotation={[-0.25, 0, 0]}>
        <planeGeometry args={[0.42, 0.21]} />
        <meshBasicMaterial color="#a6a2ff" />
      </mesh>
    </group>
  );
}

function DistantIslands() {
  return (
    <>
      {[-3.1, 3.05].map((x, index) => (
        <group key={x} position={[x, 0.05 + index * 0.35, -1.6]} scale={0.5 + index * 0.08}>
          <mesh scale={[1.05, 0.2, 0.62]}>
            <sphereGeometry args={[1, 24, 16]} />
            <meshStandardMaterial color="#b5e9d1" roughness={0.9} />
          </mesh>
          <mesh position={[0, -0.3, 0]} scale={[0.78, 0.48, 0.48]}>
            <coneGeometry args={[1, 1, 7]} />
            <meshStandardMaterial color="#82769e" flatShading roughness={0.95} />
          </mesh>
          <mesh position={[0, 0.32, 0]}>
            <icosahedronGeometry args={[0.34, 1]} />
            <meshStandardMaterial color={index ? "#f5b6d8" : "#8ed1a7"} roughness={0.95} />
          </mesh>
        </group>
      ))}
    </>
  );
}

function Robot() {
  const robot = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (robot.current) robot.current.position.y = -0.38 + Math.sin(state.clock.elapsedTime * 1.35) * 0.07;
  });
  return (
    <group ref={robot} position={[1.45, -0.25, 1.3]} scale={0.58}>
      <mesh>
        <sphereGeometry args={[0.55, 32, 24]} />
        <meshStandardMaterial color="#f8f8ff" metalness={0.18} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0.05, 0.45]} scale={[0.86, 0.62, 0.18]}>
        <sphereGeometry args={[0.48, 32, 24]} />
        <meshStandardMaterial color="#242640" metalness={0.4} roughness={0.22} />
      </mesh>
      {[-0.18, 0.18].map((x) => <mesh key={x} position={[x, 0.06, 0.59]}>
        <sphereGeometry args={[0.065, 16, 16]} />
        <meshBasicMaterial color="#65eaff" />
      </mesh>)}
      <mesh position={[0, 0.58, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.18, 12]} />
        <meshStandardMaterial color="#a48bff" />
      </mesh>
      <mesh position={[0, 0.7, 0]}>
        <sphereGeometry args={[0.075, 16, 16]} />
        <meshBasicMaterial color="#ff9acb" />
      </mesh>
      <mesh position={[-0.48, -0.12, 0]} rotation={[0, 0, -0.5]}>
        <capsuleGeometry args={[0.07, 0.23, 5, 10]} />
        <meshStandardMaterial color="#d9d8f5" />
      </mesh>
      <mesh position={[0.48, -0.12, 0]} rotation={[0, 0, 0.5]}>
        <capsuleGeometry args={[0.07, 0.23, 5, 10]} />
        <meshStandardMaterial color="#d9d8f5" />
      </mesh>
    </group>
  );
}

function Scene({ reduced }: { reduced: boolean }) {
  const world = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (reduced || !world.current) return;
    world.current.rotation.y = THREE.MathUtils.lerp(world.current.rotation.y, (state.pointer.x || 0) * 0.08, 0.035);
    world.current.rotation.x = THREE.MathUtils.lerp(world.current.rotation.x, -(state.pointer.y || 0) * 0.035, 0.035);
  });
  return (
    <>
      <color attach="background" args={["#e8e5ff"]} />
      <fog attach="fog" args={["#e8e5ff", 8, 17]} />
      <ambientLight intensity={1.55} />
      <directionalLight position={[4, 7, 6]} intensity={2.1} color="#fff4e9" />
      <pointLight position={[-3, 2, 3]} intensity={1.3} color="#b59aff" distance={9} />
      <pointLight position={[3, 2, -2]} intensity={1.2} color="#8eeaff" distance={8} />
      <group ref={world}>
        <Float speed={reduced ? 0 : 1.1} rotationIntensity={0.025} floatIntensity={reduced ? 0 : 0.14}>
          <Portal reduced={reduced} />
          <Island />
          <DistantIslands />
          <Avatar />
          <Workstation />
          <Robot />
        </Float>
        <Sparkles count={reduced ? 8 : 36} scale={[7, 5, 4]} size={2.5} speed={reduced ? 0 : 0.22} color="#ffffff" opacity={0.8} />
      </group>
      <ContactShadows position={[0, -2.15, 0]} opacity={0.22} scale={7} blur={2.8} far={4} />
    </>
  );
}

export default function PortfolioWorld3D() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return (
    <div className="world world-3d" role="img" aria-label="Interactive 3D floating island with a glowing YP portal, creator avatar and robot companion">
      <div className="world-glow" />
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.55, 9.6], fov: 37 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        fallback={<div className="scene-static-fallback"><Image src="/illustrations/floating-island.svg" alt="" width={900} height={560} unoptimized /><Image src="/illustrations/yp-portal.svg" alt="" width={900} height={900} unoptimized /></div>}
      >
        <Suspense fallback={null}><Scene reduced={reduced} /></Suspense>
      </Canvas>
      <div className="world-panel panel-code"><small>✳ &nbsp; BUILD / CREATE</small><strong>const idea = &quot;possible&quot;;</strong><span>design → develop → launch</span></div>
      <div className="world-panel panel-ai"><small>AI SYSTEMS</small><strong>Thinking beyond.</strong></div>
      <div className="world-tag tag-one">〈/〉 &nbsp; SOFTWARE</div>
      <div className="world-tag tag-two">✧ &nbsp; AI + AUTOMATION</div>
      <div className="world-tag tag-three">◈ &nbsp; GAME WORLDS</div>
      <div className="world-tag tag-four">⬡ &nbsp; 3D STUDIO</div>
    </div>
  );
}
