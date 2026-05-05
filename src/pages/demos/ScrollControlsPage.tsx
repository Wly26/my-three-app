import { useRef, type CSSProperties } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Scroll, useScroll } from '@react-three/drei'
import * as THREE from 'three'

function ScrollingModel() {
  const scroll = useScroll()
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    const offset = scroll.offset
    meshRef.current.rotation.y = offset * Math.PI * 2
    meshRef.current.position.x = Math.sin(offset * Math.PI) * 2
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

const headingStyle: CSSProperties = {
  position: 'absolute',
  left: '10vw',
  margin: 0,
  color: '#f3f4f6',
  fontSize: 'clamp(0.2rem, 4vw, 1rem)',
  fontWeight: 500,
  maxWidth: '120vw',
}

/** ScrollControls：滚动驱动立方体 + HTML 分屏文案 */
export function ScrollControlsPage() {
  return (
    <div className="h-svh w-full bg-[#111]">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <color attach="background" args={['#111']} />
        <ambientLight intensity={0.55} />
        <pointLight position={[10, 10, 10]} intensity={0.9} />

        <ScrollControls pages={3} damping={0.1}>
          <ScrollingModel />

          <Scroll html>
            <h1 style={{ ...headingStyle, top: '20vh' }}>第一屏：结构化建模</h1>
            <h1 style={{ ...headingStyle, top: '120vh' }}>第二屏：逻辑驱动动画</h1>
            <h1 style={{ ...headingStyle, top: '220vh' }}>第三屏：性能优化</h1>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  )
}
