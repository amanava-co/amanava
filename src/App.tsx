/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { SetupCenter } from './pages/SetupCenter';
import { CurationControl } from './pages/CurationControl';
import { DRE } from './pages/DRE';
import { Balanco } from './pages/Balanco';
import { CashFlow } from './pages/CashFlow';
import Login from './pages/Login';

// 1. IMPORTAR O PROTECTED ROUTE AQUI
import ProtectedRoute from './components/ProtectedRoute'; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Pública (Qualquer um acessa) */}
        <Route path="/login" element={<Login />} />

        {/* Rotas Privadas (Protegemos o Layout inteiro!) */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="setup" element={<SetupCenter />} />
          <Route path="curation" element={<CurationControl />} />
          <Route path="dre" element={<DRE />} />
          <Route path="balanco" element={<Balanco />} />
          <Route path="fluxo" element={<CashFlow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

