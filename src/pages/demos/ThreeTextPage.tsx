import { Canvas } from '@react-three/fiber'
import { Text, OrbitControls } from '@react-three/drei'

function Title3D() {
  return (
    <Text
      fontSize={0.5}
      color="white"
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      anchorX="center"
      anchorY="middle"
      position={[0, 2, -2]}
    >
      FRONTEND DEVELOPER
    </Text>
  )
}

/** drei Text：场景内 3D 文字（字体从 URL 加载，可改为 public 下的 .woff/.ttf） */
export function ThreeTextPage() {
  return (
    <div className="h-svh w-full bg-[#0c0c12]">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <color attach="background" args={['#0c0c12']} />
        <ambientLight intensity={0.85} />
        <pointLight position={[8, 8, 8]} intensity={0.6} />
        <Title3D />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
