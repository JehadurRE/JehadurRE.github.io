import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { JehadurRE } from "../model/JehadurRE";
import { useControls } from "leva";

export const Experience = () => {
  const { animStyle } = useControls({
    animStyle: { value: "Typing", options: ["Idle", "Typing", "Falling Idle"] },
  });

  const { shadows } = useControls({
    shadows: true,
  });
  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        {
          shadows&&(<ContactShadows
            opacity={1}
            scale={10}
            blur={0.5}
            far={10}
            resolution={256}
            color={"#000000"}
          />)
        }
        <JehadurRE animStyle={animStyle} />
      </group>

      <group position-y={-1}>
        {animStyle === "Typing" && (
          <mesh position-y={-0.1} position-z={-0.2}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        )}

        <mesh
          position-y={-0.001}
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5}
        >
          <planeGeometry />
          <meshStandardMaterial
            color="white"
            opacity={0.2}
            transparent
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </group>
    </>
  );
};
