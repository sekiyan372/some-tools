import React, { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { TopPage, CalculatorPage, ImageSelectorPage, StopWatchPage } from './pages'

const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/calculator" element={<CalculatorPage />} />
      <Route path="/stop-watch" element={<StopWatchPage />} />
      <Route path="/image-selector" element={<ImageSelectorPage />} />
    </Routes>
  </BrowserRouter>
)

export default Router
