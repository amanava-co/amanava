import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Database, FileSpreadsheet, Key, Upload, CheckCircle2 } from 'lucide-react';

export function SetupCenter() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-amanava-black">Setup Center</h1>
        <p className="text-gray-500 mt-1">Gerencie a ingestão de dados e fontes de integração.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Protheus Integration */}
        <Card className="border-amanava-green/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <CheckCircle2 className="w-5 h-5 text-amanava-green" />
          </div>
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-amanava-green/10 flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-amanava-green" />
            </div>
            <CardTitle>ERP Protheus</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-500">
              Conexão ativa via API REST. Sincronização automática D+1 configurada.
            </p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Última sync</span>
                <span className="font-medium text-amanava-black">Hoje, 02:00 AM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Status</span>
                <span className="font-medium text-amanava-green text-xs bg-amanava-green/10 px-2 py-0.5 rounded-full">Ativo</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">Configurar</Button>
          </CardContent>
        </Card>

        {/* Excel / CSV */}
        <Card>
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
              <FileSpreadsheet className="w-6 h-6 text-gray-600" />
            </div>
            <CardTitle>Planilhas (Excel/CSV)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-500">
              Importação manual de dados complementares ou correções em lote.
            </p>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
              <Upload className="w-6 h-6 text-gray-400 mb-2" />
              <p className="text-sm font-medium text-amanava-black">Arraste arquivos ou clique</p>
              <p className="text-xs text-gray-500 mt-1">.xlsx, .csv até 10MB</p>
            </div>
            <Button className="w-full">Importar Arquivo</Button>
          </CardContent>
        </Card>

        {/* Custom API */}
        <Card>
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
              <Key className="w-6 h-6 text-gray-600" />
            </div>
            <CardTitle>API Customizada</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-500">
              Integração via webhook ou chamadas REST customizadas.
            </p>
            <div className="space-y-2">
               <div className="p-3 bg-gray-50 border border-gray-100 rounded-md text-xs font-mono text-gray-600 truncate">
                 https://api.amanava.com.br/v1/ingest/tenant-xx
               </div>
            </div>
            <Button variant="outline" className="w-full mt-auto">Gerar Token</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
