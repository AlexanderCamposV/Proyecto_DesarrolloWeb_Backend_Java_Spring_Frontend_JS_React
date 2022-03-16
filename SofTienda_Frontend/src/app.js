import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Clientes from './pages/clientes';
import Consolidado from './pages/consolidado';
import Inicio from './pages/inicio';
import Login from './pages/login';
import Productos from './pages/productos';
import Proveedores from './pages/proveedores';
import Usuarios from './pages/usuarios';
import Ventas from './pages/ventas';
import Reportes from './pages/reportes';

import './index.css';

const App = () => (
  <main>
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/consolidado" element={<Consolidado />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/reportes" element={<Reportes />} />
      </Routes>
    </Router>
  </main>
)

export default App
