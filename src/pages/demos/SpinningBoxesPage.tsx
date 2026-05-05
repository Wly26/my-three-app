import { useRef, useState } from 'react'
import type { ThreeElements } from '@react-three/fiber'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

// 1. 定义一个受逻辑驱动的立方体组件
function Box(props: ThreeElements['mesh']) {
  // 使用 Ref 引用底层的 Three.js Mesh 对象
  const meshRef = useRef<THREE.Mesh>(null!)

  // 状态管理：是否被悬停，是否被点击
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // 渲染循环逻辑：每一帧让立方体旋转（类似 requestAnimationFrame）
  useFrame((_state, delta) => {
    meshRef.current.rotation.x += delta
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {/* 结构建模：几何体 + 材质 */}
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

// 2. 主场景（路由页：须使用命名导出 SpinningBoxesPage，与 App.tsx 中 import 一致）
export function SpinningBoxesPage() {
  return (
    <div className="h-svh w-full bg-[#111]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* 光照系统 */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

        {/* 逻辑物体 */}
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />

        {/* 辅助工具：阴影与轨道控制器 */}
        <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={10} blur={1} far={10} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
