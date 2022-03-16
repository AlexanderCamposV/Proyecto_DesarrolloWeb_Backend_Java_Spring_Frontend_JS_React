import React, { useState } from 'react';
import Header from '../components/header';
import ReporteVentas from '../components/reporte-ventas';
import ListadoClientes from '../components/listado-clientes';

import 'primeflex/primeflex.css';
import '../static/css/reportes.css';

const Reportes = () => {
  const [showClientes, setShowClientes] = useState(true)

  const onClickMostrarClientes = () => setShowClientes(true)
  const onClickMostrarVentas = () => setShowClientes(false)

  return (
    <div style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
      <Header />
      <div className="grid p-5 buttons">
        <div className="col-12 md:col-6 lg:col-6">
            <button onClick={onClickMostrarClientes}>Listado de Clientes</button>
        </div>
        <div className="col-12 md:col-6 lg:col-6">
            <button onClick={onClickMostrarVentas}>Reporte de Ventas</button>
        </div>
      </div>
      { showClientes ? <ListadoClientes /> : <ReporteVentas /> }
    </div>
  )
}

export default Reportes
