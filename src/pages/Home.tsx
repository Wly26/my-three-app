import { Link } from 'react-router-dom'

const demos = [
  { 
    path: '/demos/blank', 
    title: '加载模型', 
    description: '加载一个简单的模型',
  },
  {
    path: '/demos/camera-controls-focus',
    title: '相机平滑对焦',
    description: 'CameraControls.setLookAt + Html 按钮转场',
  },
  {
    path: '/demos/html-annotation',
    title: 'Html 标注',
    description: 'drei Html：立方体上的 DOM 标签，距离缩放与遮挡',
  },
  {
    path: '/demos/scroll-controls',
    title: '滚动驱动场景',
    description: 'ScrollControls + useScroll：滚动联动立方体与 HTML 分屏',
  },
  {
    path: '/demos/bloom-postprocess',
    title: 'Bloom 后期',
    description: '自发光球体、EffectComposer 与 Bloom / ToneMapping',
  },
  {
    path: '/demos/leva-box',
    title: 'Leva 调试立方体',
    description: 'Leva 面板调节颜色与转速，点击立方体缩放',
  },
  {
    path: '/demos/wireframe-sphere',
    title: '星空线框球',
    description: 'Stars 背景、线框球体与 OrbitControls',
  },
  {
    path: '/demos/float-distort-stars',
    title: '星空扭曲球',
    description: 'Stars + Float 漂浮 + MeshDistortMaterial',
  },
  {
    path: '/demos/three-text',
    title: '场景 3D 文字',
    description: 'drei Text：Raleway 字体与 FRONTEND DEVELOPER 标题',
  },
  { 
    path: '/demos/spinning-boxes', 
    title: '旋转立方体', 
    description: 'R3F 入门示例：双立方体、交互与阴影' 
  },
]

export function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-2xl flex-col px-6 py-16">
      <header className="mb-12 text-center">
        <h1 className="mb-2 text-3xl font-medium text-[var(--text-h)]">案例导航</h1>
        <p className="text-[var(--text)]">选择一个示例进入全屏场景</p>
      </header>

      <nav aria-label="案例列表" className="flex flex-col gap-3">
        {demos.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="rounded-lg border border-[var(--border)] bg-[var(--social-bg)] px-5 py-4 text-left transition-shadow hover:shadow-[var(--shadow)]"
          >
            <span className="block font-medium text-[var(--text-h)]">{item.title}</span>
            <span className="mt-1 block text-sm text-[var(--text)]">{item.description}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
