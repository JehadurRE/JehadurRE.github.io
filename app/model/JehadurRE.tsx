import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";


type GLTFResult = GLTF & {
  nodes: {
    EyeLeft: THREE.SkinnedMesh;
    EyeRight: THREE.SkinnedMesh;
    Wolf3D_Head: THREE.SkinnedMesh;
    Wolf3D_Teeth: THREE.SkinnedMesh;
    Wolf3D_Hair: THREE.SkinnedMesh;
    Wolf3D_Beard: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top: THREE.SkinnedMesh;
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh;
    Wolf3D_Body: THREE.SkinnedMesh;
    Hips: THREE.Bone;
  };
  materials: {
    Wolf3D_Eye: THREE.MeshStandardMaterial;
    Wolf3D_Skin: THREE.MeshStandardMaterial;
    Wolf3D_Teeth: THREE.MeshStandardMaterial;
    Wolf3D_Hair: THREE.MeshStandardMaterial;
    Wolf3D_Beard: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial;
    Wolf3D_Body: THREE.MeshPhysicalMaterial;
  };
};


type JehadurREProps = JSX.IntrinsicElements["group"] & { animStyle: string };

export function JehadurRE(props:JehadurREProps) {
    const { animStyle } = props;
    console.log(animStyle);
  
   
    const { headfollow, cursorFollow, wireFrame } = useControls({
    headfollow: false,
    cursorFollow: false,
    wireFrame: false,
  });

  const group = useRef<THREE.Group>(null);


  console.log(process.env.NEXT_PUBLIC_BASE_PATH);
  const { nodes, materials } = useGLTF(`${process.env.NEXT_PUBLIC_BASE_PATH}/model/JehadurRE.glb`) as GLTFResult;
  const typingAnimation = useFBX("animations/Typing.fbx").animations;
  typingAnimation[0].name = "Typing";


  const fallingAnimation = useFBX("animations/Falling Idle.fbx").animations;
  fallingAnimation[0].name = "Falling Idle";
  const idle = useFBX("animations/Idle.fbx").animations;
  idle[0].name = "Idle";

  console.log(typingAnimation);
  const { actions } = useAnimations(
    [typingAnimation[0], fallingAnimation[0],idle[0]],
    group
  );

  useFrame((state) => {
    if (headfollow) {
      group.current?.getObjectByName("Neck")?.lookAt(state.camera.position);
    }
    if (cursorFollow) {
      const mouse3D = new THREE.Vector3(state.pointer.x, state.pointer.y, 1);
      group.current?.getObjectByName("Neck")?.lookAt(mouse3D);
    }
  });

  useEffect(() => {
    actions[animStyle]?.reset().fadeIn(0.5).play();

    return () => {
      actions[animStyle]?.fadeOut(0.5);
    };
  }, [animStyle]);

  useEffect(() => {
    if (group.current) {
      group.current.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.material.wireframe = wireFrame;
        }
      });
    }
  }, [wireFrame]);

  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        frustumCulled={false}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        frustumCulled={false}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        frustumCulled={false}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        frustumCulled={false}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
        frustumCulled={false}
      />
      <skinnedMesh
        name="Wolf3D_Beard"
        geometry={nodes.Wolf3D_Beard.geometry}
        material={materials.Wolf3D_Beard}
        skeleton={nodes.Wolf3D_Beard.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Beard.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Beard.morphTargetInfluences}
        frustumCulled={false}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        frustumCulled={false}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        frustumCulled={false}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        frustumCulled={false}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
        frustumCulled={false}
      />
    </group>
  );
}

useGLTF.preload(`${process.env.NEXT_PUBLIC_BASE_PATH}/model/JehadurRE.glb`);
