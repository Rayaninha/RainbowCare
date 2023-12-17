import React from 'react'
import { Routes, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import CadastroUsuario from './pages/CadastroUsuario'
import Tags from './pages/Tags'
import Home from './pages/Home'
import CadastroCasas from './pages/CadastroCasas'
import TutorialAdmin from'./pages/TutorialAdmin'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="cadastro" element={<CadastroUsuario />} />
      <Route path="tags" element={<Tags />} />
      <Route path="index" element={<Home />} />
      <Route path="cadastro-casas" element={<CadastroCasas />} />
      <Route path="tutorial-adm" element={<TutorialAdmin />} />
    </Routes>
  )
}

export default AppRoutes
