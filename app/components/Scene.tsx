'use client'
import { Canvas } from "@react-three/fiber"
import { Experience } from "./Experience"
export default function Scene() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  )
}
