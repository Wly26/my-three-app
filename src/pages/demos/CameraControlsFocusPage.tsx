import { useRef, type ComponentRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { CameraControls, Html } from '@react-three/drei'

function Scene() {
  const controlsRef = useRef<ComponentRef<typeof CameraControls>>(null)

  const focusPart = (x: number, y: number, z: number) => {
    controlsRef.current?.setLookAt(x, y, z + 5, x, y, z, true)
  }

  return (
    <>
      <CameraControls ref={controlsRef} makeDefault />

      <mesh position={[0, 0, 0]} onClick={() => focusPart(0, 0, 0)}>
        <boxGeometry />
        <meshBasicMaterial color="red" />
      </mesh>

      {/* 按钮目标点附近放一个标记，便于看出转场 */}
      <mesh position={[5, 2, -3]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshBasicMaterial color="dodgerblue" />
      </mesh>

      <Html>
        <button
          type="button"
          onClick={() => focusPart(5, 2, -3)}
          style={{
            position: 'fixed',
            top: 20,
            left: 16,
            padding: '8px 12px',
            cursor: 'pointer',
            borderRadius: 6,
            border: '1px solid #ccc',
            background: '#fff',
          }}
        >
          查看详情位置
        </button>
      </Html>
    </>
  )
}

/** CameraControls：setLookAt 平滑对焦 + Html 按钮触发 */
export function CameraControlsFocusPage() {
  return (
    <div className="h-svh w-full bg-[#1a1a1a]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <color attach="background" args={['#1a1a1a']} />
        <Scene />
      </Canvas>
    </div>
  )
}
