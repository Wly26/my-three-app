import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { BlankDemoPage } from './pages/demos/BlankDemoPage'
import { SpinningBoxesPage } from './pages/demos/SpinningBoxesPage'
import { WireframeSpherePage } from './pages/demos/WireframeSpherePage'
import { FloatDistortStarsPage } from './pages/demos/FloatDistortStarsPage'
import { ThreeTextPage } from './pages/demos/ThreeTextPage'
import { LevaBoxPage } from './pages/demos/LevaBoxPage'
import { BloomPostprocessPage } from './pages/demos/BloomPostprocessPage'
import { ScrollControlsPage } from './pages/demos/ScrollControlsPage'
import { HtmlAnnotationPage } from './pages/demos/HtmlAnnotationPage'
import { CameraControlsFocusPage } from './pages/demos/CameraControlsFocusPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demos/blank" element={<BlankDemoPage />} />
        <Route path="/demos/camera-controls-focus" element={<CameraControlsFocusPage />} />
        <Route path="/demos/html-annotation" element={<HtmlAnnotationPage />} />
        <Route path="/demos/scroll-controls" element={<ScrollControlsPage />} />
        <Route path="/demos/bloom-postprocess" element={<BloomPostprocessPage />} />
        <Route path="/demos/leva-box" element={<LevaBoxPage />} />
        <Route path="/demos/wireframe-sphere" element={<WireframeSpherePage />} />
        <Route path="/demos/float-distort-stars" element={<FloatDistortStarsPage />} />
        <Route path="/demos/three-text" element={<ThreeTextPage />} />
        <Route path="/demos/spinning-boxes" element={<SpinningBoxesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
