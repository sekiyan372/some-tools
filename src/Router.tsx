import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { TopPage, CalculatorPage, ImageSelectorPage, TimerPage } from './pages'

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/timer" element={<TimerPage />} />
      <Route path="/image-selector" element={<ImageSelectorPage />} />
    </Routes>
  </BrowserRouter>
)

export default Router
