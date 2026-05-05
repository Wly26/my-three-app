import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import * as THREE from 'three'

function PostProcessingScene() {
  return (
    <>
      <color attach="background" args={['#050505']} />

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial emissive="cyan" emissiveIntensity={10} toneMapped={false} />
      </mesh>

      <EffectComposer>
        <Bloom intensity={1.5} luminanceThreshold={1} mipmapBlur />
        <ToneMapping />
      </EffectComposer>
    </>
  )
}

/** 高亮自发光球体 + Bloom + ToneMapping 后期 */
export function BloomPostprocessPage() {
  return (
    <div className="h-svh w-full bg-[#050505]">
      <Canvas gl={{ toneMapping: THREE.NoToneMapping }} camera={{ position: [0, 0, 2.5], fov: 50 }}>
        <PostProcessingScene />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
