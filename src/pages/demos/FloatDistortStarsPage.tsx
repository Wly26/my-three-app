import { Canvas } from '@react-three/fiber'
import { Stars, Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei'

function EnvironmentScene() {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial color="#4338ca" speed={2} distort={0.4} />
        </mesh>
      </Float>
    </>
  )
}

/** Stars 背景 + Float 漂浮 + MeshDistortMaterial 扭曲球体 */
export function FloatDistortStarsPage() {
  return (
    <div className="h-svh w-full bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <color attach="background" args={['#000']} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <EnvironmentScene />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
