import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Center, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const PUBLIC_MODEL = '/tree01.glb'
/** 与 `public/draco/` 一致，禁止用默认的 gstatic Draco CDN */
const DRACO_DECODER_PATH = '/draco/'

function Model() {
  const { scene } = useGLTF(PUBLIC_MODEL, DRACO_DECODER_PATH)
  const rootRef = useRef<THREE.Object3D>(null!)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    rootRef.current.rotation.y = Math.sin(t / 4) * 0.2
  })

  return <primitive ref={rootRef} object={scene} scale={1.5} />
}

function Loader() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color="gray" wireframe />
    </mesh>
  )
}

export function BlankDemoPage() {
  return (
    <div className="h-svh w-full bg-[#e8e8e8]">
      <Canvas camera={{ position: [0, 2.5, 6], fov: 45 }}>
        <color attach="background" args={['#e8e8e8']} />

        <hemisphereLight color="#ffffff" groundColor="#606060" intensity={1.1} />
        <ambientLight intensity={0.45} />
        <directionalLight position={[8, 12, 6]} intensity={1.6} />

        <Suspense fallback={<Loader />}>
          <Center>
            <Model />
          </Center>
        </Suspense>

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  )
}
