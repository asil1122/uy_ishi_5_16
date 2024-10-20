import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Shop } from './pages/shop'
import { Detail } from './pages/detail'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='detail/:id' element={<Detail/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
