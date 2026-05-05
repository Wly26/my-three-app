import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Leva, useControls } from 'leva'
import * as THREE from 'three'

function InteractiveBox() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [active, setActive] = useState(false)

  const { boxColor, speed } = useControls({
    boxColor: '#6366f1',
    speed: { value: 1, min: 0, max: 5 },
  })

  useFrame((_state, delta) => {
    const m = meshRef.current
    if (!m) return
    m.rotation.x += delta * speed * 0.5
    m.rotation.y += delta * speed * 0.3
  })

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => {
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto'
      }}
    >
      <boxGeometry />
      <meshStandardMaterial color={active ? 'hotpink' : boxColor} />
    </mesh>
  )
}

/** Leva 面板 + 可点击立方体（颜色与转速可调） */
export function LevaBoxPage() {
  return (
    <div className="relative h-svh w-full bg-[#1a1a1a]">
      <Leva />
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <InteractiveBox />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
