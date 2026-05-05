import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'

/** 星空背景 + 线框球体 + 轨道控制 */
export function WireframeSpherePage() {
  return (
    <div className="h-svh w-full bg-black">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="aqua" wireframe />
        </mesh>

        <Stars />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
