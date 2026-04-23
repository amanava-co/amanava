import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Download, Calendar, ArrowRightLeft } from 'lucide-react';

export function Balanco() {
  const [filterMode, setFilterMode] = useState<'period' | 'accumulated'>('period');
  const [selectedDate, setSelectedDate] = useState('2026-04');
  const [selectedYear, setSelectedYear] = useState('2026');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-amanava-black">Balanço Patrimonial</h1>
          <p className="text-gray-500 mt-1">Posição estática de Ativos, Passivos e Patrimônio Líquido.</p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="outline" className="gap-2">
             <Download className="w-4 h-4" /> Exportar Relatório
           </Button>
        </div>
      </div>

      <Card className="bg-gray-50/50 border-dashed border-gray-200">
        <CardContent className="p-4 flex flex-col sm:flex-row gap-4 items-end">
          <div className="space-y-1.5 flex-1 max-w-[250px]">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Modo de Análise</label>
            <div className="relative">
              <ArrowRightLeft className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <select
                value={filterMode}
                onChange={(e) => setFilterMode(e.target.value as 'period' | 'accumulated')}
                className="pl-9 pr-8 py-2 border border-solid border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amanava-green w-full bg-white appearance-none"
              >
                <option value="period">Período Específico</option>
                <option value="accumulated">Acumulado do Ano</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-1.5 flex-1 max-w-[250px] animate-in fade-in duration-200">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {filterMode === 'period' ? 'Mês Selecionado' : 'Ano Selecionado'}
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              {filterMode === 'period' ? (
                <input
                  type="month"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="pl-9 pr-4 py-2 border border-solid border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amanava-green w-full bg-white"
                />
              ) : (
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="pl-9 pr-8 py-2 border border-solid border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amanava-green w-full bg-white appearance-none"
                >
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                </select>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Ativo Total</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="text-2xl font-bold text-amanava-green">R$ 1.190.000</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Passivo Total</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="text-2xl font-bold text-amanava-coral">R$ 440.000</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Patrimônio Líquido</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="text-2xl font-bold text-amanava-black">R$ 750.000</div>
          </CardContent>
        </Card>
        <Card className="bg-amanava-black text-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">ROE (Return on Equity)</CardTitle>
          </CardHeader>
          <CardContent>
             <div className="text-2xl font-bold text-white">21,3%</div>
             <p className="text-xs text-amanava-gold mt-1">+2.1% a.a.</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="border-b border-gray-100 bg-gray-50/50">
            <CardTitle>Ativo (Onde os recursos estão)</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
             <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 font-semibold text-amanava-black">Ativo Circulante</td>
                    <td className="px-6 py-3 text-right font-semibold">R$ 850.000,00</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 pl-10 text-gray-600">Caixa e Equivalentes</td>
                    <td className="px-6 py-2 text-right">R$ 340.500,00</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 pl-10 text-gray-600">Contas a Receber (Clientes)</td>
                    <td className="px-6 py-2 text-right">R$ 480.000,00</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 pl-10 text-gray-600">Impostos a Recuperar</td>
                    <td className="px-6 py-2 text-right">R$ 29.500,00</td>
                  </tr>

                  <tr className="bg-gray-50 border-t border-gray-200">
                    <td className="px-6 py-3 font-semibold text-amanava-black">Ativo Não Circulante</td>
                    <td className="px-6 py-3 text-right font-semibold">R$ 340.000,00</td>
                  </tr>
                   <tr>
                    <td className="px-6 py-2 pl-10 text-gray-600">Imobilizado (Equipamentos)</td>
                    <td className="px-6 py-2 text-right">R$ 140.000,00</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 pl-10 text-gray-600">Intangível (Software)</td>
                    <td className="px-6 py-2 text-right">R$ 200.000,00</td>
                  </tr>
                </tbody>
             </table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b border-gray-100 bg-gray-50/50">
            <CardTitle>Passivo e PL (Origem dos recursos)</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
             <table className="w-full text-sm">
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-gray-50">
                    <td className="px-6 py-3 font-semibold text-amanava-black">Passivo Circulante</td>
                    <td className="px-6 py-3 text-right font-semibold">R$ 290.000,00</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 pl-10 text-gray-600">Fornecedores</td>
                    <td className="px-6 py-2 text-right">R$ 95.000,00</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 pl-10 text-gray-600">Salários e Encargos</td>
                    <td className="px-6 py-2 text-right">R$ 120.000,00</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 pl-10 text-gray-600">Impostos a Recolher</td>
                    <td className="px-6 py-2 text-right">R$ 75.000,00</td>
                  </tr>

                  <tr className="bg-gray-50 border-t border-gray-200">
                    <td className="px-6 py-3 font-semibold text-amanava-black">Passivo Não Circulante</td>
                    <td className="px-6 py-3 text-right font-semibold">R$ 150.000,00</td>
                  </tr>
                   <tr>
                    <td className="px-6 py-2 pl-10 text-gray-600">Empréstimos Bancários</td>
                    <td className="px-6 py-2 text-right">R$ 150.000,00</td>
                  </tr>

                  <tr className="bg-gray-100 border-t-2 border-gray-300">
                    <td className="px-6 py-4 font-bold text-amanava-black">Patrimônio Líquido</td>
                    <td className="px-6 py-4 text-right font-bold text-amanava-black">R$ 750.000,00</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 pl-10 text-gray-600">Capital Social</td>
                    <td className="px-6 py-2 text-right">R$ 300.000,00</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-2 pl-10 text-gray-600">Reservas de Lucro</td>
                    <td className="px-6 py-2 text-right">R$ 289.430,00</td>
                  </tr>
                   <tr>
                    <td className="px-6 py-2 pl-10 text-gray-600">Lucro do Exercício (YTD)</td>
                    <td className="px-6 py-2 text-right font-medium text-amanava-green">R$ 160.570,00</td>
                  </tr>
                </tbody>
             </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
