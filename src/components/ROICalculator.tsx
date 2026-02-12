import React, { useState, useMemo } from 'react';
import { DollarSign, TrendingUp, Zap } from 'lucide-react';

export default function ROICalculator() {
  const [monthlyTickets, setMonthlyTickets] = useState(7800);
  const [avgTimeManual, setAvgTimeManual] = useState(45);
  const [avgTimeFuture, setAvgTimeFuture] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [implementationCost, setImplementationCost] = useState(85000);

  const calculations = useMemo(() => {
    const currentHoursCost = (monthlyTickets * avgTimeManual) / 60;
    const futureHoursCost = (monthlyTickets * avgTimeFuture) / 60;
    const monthlySavings = (currentHoursCost - futureHoursCost) * hourlyRate;
    const yearlySavings = monthlySavings * 12;
    const monthsToBreakeven = implementationCost / monthlySavings;
    const threeyearROI = (yearlySavings * 3) - implementationCost;
    const roiPercentage = ((threeyearROI / implementationCost) * 100).toFixed(1);

    return {
      currentHoursCost: currentHoursCost.toFixed(1),
      futureHoursCost: futureHoursCost.toFixed(1),
      monthlySavings: monthlySavings.toFixed(0),
      yearlySavings: yearlySavings.toFixed(0),
      monthsToBreakeven: monthsToBreakeven.toFixed(1),
      threeyearROI: threeyearROI.toFixed(0),
      roiPercentage,
    };
  }, [monthlyTickets, avgTimeManual, avgTimeFuture, hourlyRate, implementationCost]);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Calculadora de ROI</h2>
          <p className="text-xl text-slate-400">Customize os parâmetros e veja o impacto financeiro</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Tickets por Mês: <span className="text-cyan-400">{monthlyTickets.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min="1000"
                max="20000"
                step="500"
                value={monthlyTickets}
                onChange={(e) => setMonthlyTickets(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>1k</span>
                <span>20k</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Tempo Manual por Ticket (min): <span className="text-cyan-400">{avgTimeManual}</span>
              </label>
              <input
                type="range"
                min="30"
                max="60"
                step="1"
                value={avgTimeManual}
                onChange={(e) => setAvgTimeManual(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>30m</span>
                <span>60m</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Tempo com IA (min): <span className="text-cyan-400">{avgTimeFuture}</span>
              </label>
              <input
                type="range"
                min="2"
                max="15"
                step="1"
                value={avgTimeFuture}
                onChange={(e) => setAvgTimeFuture(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>2m</span>
                <span>15m</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Custo Hora/Pessoa: <span className="text-cyan-400">R$ {hourlyRate}</span>
              </label>
              <input
                type="range"
                min="25"
                max="100"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>R$25</span>
                <span>R$100</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">
                Custo Implementação: <span className="text-cyan-400">R$ {implementationCost.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min="50000"
                max="200000"
                step="5000"
                value={implementationCost}
                onChange={(e) => setImplementationCost(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>R$50k</span>
                <span>R$200k</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-700/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-green-400" />
                <h3 className="font-semibold text-green-300">Economia Mensal</h3>
              </div>
              <p className="text-4xl font-bold text-green-300 mb-2">R$ {calculations.monthlySavings}</p>
              <p className="text-sm text-green-200">Baseado nos parâmetros selecionados</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-blue-700/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <h3 className="font-semibold text-blue-300">Economia Anual</h3>
              </div>
              <p className="text-4xl font-bold text-blue-300 mb-2">R$ {calculations.yearlySavings}</p>
              <p className="text-sm text-blue-200">Acumulada em 12 meses</p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-700/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-purple-400" />
                <h3 className="font-semibold text-purple-300">Payback</h3>
              </div>
              <p className="text-4xl font-bold text-purple-300 mb-2">{calculations.monthsToBreakeven} meses</p>
              <p className="text-sm text-purple-200">Tempo para recuperar investimento</p>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-700/50 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-orange-400" />
                <h3 className="font-semibold text-orange-300">ROI 3 Anos</h3>
              </div>
              <p className="text-4xl font-bold text-orange-300 mb-2">{calculations.roiPercentage}%</p>
              <p className="text-sm text-orange-200">R$ {calculations.threeyearROI}</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Análise Detalhada</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-slate-400 mb-2">Horas atuais por mês (manual)</p>
              <p className="text-2xl font-bold text-white">{calculations.currentHoursCost}</p>
              <p className="text-xs text-slate-500 mt-1">Custo mensal com processo manual</p>
            </div>
            <div>
              <p className="text-sm text-slate-400 mb-2">Horas futuras por mês (IA)</p>
              <p className="text-2xl font-bold text-cyan-300">{calculations.futureHoursCost}</p>
              <p className="text-xs text-slate-500 mt-1">Custo mensal com automação</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-slate-800/50 to-slate-800/30 border border-slate-700 rounded-xl p-8">
          <h3 className="text-lg font-semibold text-white mb-4">Cenários Recomendados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-slate-900/50 border border-slate-700 rounded-lg hover:border-blue-500 hover:bg-slate-800 transition-all text-left">
              <p className="font-semibold text-blue-300 mb-1">Cenário Conservador</p>
              <p className="text-xs text-slate-400">7.8k tickets, 45min, R$85k impl.</p>
            </button>
            <button className="p-4 bg-slate-900/50 border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-slate-800 transition-all text-left">
              <p className="font-semibold text-cyan-300 mb-1">Cenário Médio</p>
              <p className="text-xs text-slate-400">10k tickets, 40min, R$100k impl.</p>
            </button>
            <button className="p-4 bg-slate-900/50 border border-slate-700 rounded-lg hover:border-green-500 hover:bg-slate-800 transition-all text-left">
              <p className="font-semibold text-green-300 mb-1">Cenário Otimista</p>
              <p className="text-xs text-slate-400">12k tickets, 35min, R$110k impl.</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
