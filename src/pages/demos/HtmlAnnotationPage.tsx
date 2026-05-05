import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'

function AnnotatedBox() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />

      <Html distanceFactor={10} position={[0, 1, 0]} occlude center>
        <div
          style={{
            background: 'white',
            padding: '4px 10px',
            borderRadius: '5px',
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          核心逻辑模块
        </div>
      </Html>
    </mesh>
  )
}

/** drei Html：3D 物体上的 DOM 标签，支持距离缩放与遮挡 */
export function HtmlAnnotationPage() {
  return (
    <div className="h-svh w-full bg-[#1a1a1a]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={['#1a1a1a']} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <AnnotatedBox />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
