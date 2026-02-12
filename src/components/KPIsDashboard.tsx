import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Clock, Target, AlertCircle, CheckCircle } from 'lucide-react';

export default function KPIsDashboard() {
  const [stats, setStats] = useState({
    oldTickets: 0,
    automatedRate: 0,
    teamResponseTime: 0,
    npsScore: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        oldTickets: 140000,
        automatedRate: 92,
        teamResponseTime: 4.5,
        npsScore: 85,
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const kpis = [
    {
      title: 'Tickets Antigos Identificados',
      value: stats.oldTickets.toLocaleString(),
      metric: '7+ dias sem atualização',
      trend: 'down',
      trendValue: '35%',
      icon: AlertCircle,
      color: 'from-red-600 to-orange-400',
      description: 'Backlog acumulado que necessita ação imediata',
    },
    {
      title: 'Taxa de Categorização Automática',
      value: `${stats.automatedRate}%`,
      metric: 'Acurácia alcançada',
      trend: 'up',
      trendValue: '92%',
      icon: CheckCircle,
      color: 'from-green-600 to-emerald-400',
      description: 'Redução de retrabalho manual de categorização',
    },
    {
      title: 'Tempo de Resposta (Teams)',
      value: `${stats.teamResponseTime}h`,
      metric: 'Métrica por usuário/grupo',
      trend: 'down',
      trendValue: '75%',
      icon: Clock,
      color: 'from-blue-600 to-cyan-400',
      description: 'Tempo médio de resposta primeira tentativa',
    },
    {
      title: 'Satisfação do Cliente (NPS)',
      value: stats.npsScore,
      metric: 'Net Promoter Score',
      trend: 'up',
      trendValue: '20pts',
      icon: Target,
      color: 'from-purple-600 to-pink-400',
      description: 'Impacto direto na imagem e retenção',
    },
  ];

  const detailedMetrics = [
    {
      name: 'Tickets/Dia Processados',
      current: '260',
      projected: '520+',
      improvement: '+100%',
    },
    {
      name: 'Tempo Manual p/ Ticket',
      current: '45 min',
      projected: '5 min',
      improvement: '-89%',
    },
    {
      name: 'Taxa de Resposta Teams',
      current: '10-15%',
      projected: '85-90%',
      improvement: '+75%',
    },
    {
      name: 'Escalações Automáticas',
      current: '0%',
      projected: '100%',
      improvement: '+100%',
    },
    {
      name: 'Tickets "Limbo"',
      current: '~2000',
      projected: '<50',
      improvement: '-97%',
    },
    {
      name: 'SLA Compliance',
      current: '60%',
      projected: '95%+',
      improvement: '+35%',
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Dashboard de KPIs</h2>
          <p className="text-xl text-slate-400">Métricas chave de sucesso do projeto</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {kpis.map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div key={idx} className="bg-slate-800/40 border border-slate-700 rounded-xl p-8 backdrop-blur-sm hover:border-cyan-500 transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${kpi.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    kpi.trend === 'up'
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-red-500/20 text-red-300'
                  }`}>
                    {kpi.trend === 'up' ? '↑' : '↓'} {kpi.trendValue}
                  </span>
                </div>

                <h3 className="text-sm font-medium text-slate-400 mb-1">{kpi.title}</h3>
                <p className="text-3xl font-bold text-white mb-2">{kpi.value}</p>
                <p className="text-xs text-slate-400 mb-3">{kpi.metric}</p>
                <p className="text-sm text-slate-300 border-t border-slate-700 pt-4 mt-4">{kpi.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden">
          <div className="px-8 py-6 border-b border-slate-700 bg-slate-900/30">
            <h3 className="text-xl font-semibold text-white">Métrica Detalhada: Antes vs Depois</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-8 py-4 text-left text-sm font-semibold text-slate-300">Métrica</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-slate-300">Estado Atual</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-slate-300">Projetado</th>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-green-400">Melhoria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {detailedMetrics.map((metric, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-8 py-4 text-sm text-slate-300 font-medium">{metric.name}</td>
                    <td className="px-8 py-4 text-sm text-slate-400">{metric.current}</td>
                    <td className="px-8 py-4 text-sm text-cyan-300 font-semibold">{metric.projected}</td>
                    <td className="px-8 py-4 text-sm text-green-400 font-bold">{metric.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-700/50 rounded-xl p-6">
            <h4 className="font-semibold text-blue-300 mb-3">Medição de Sucesso</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li>✓ Redução &gt;80% tempo manual</li>
              <li>✓ Acurácia categorização &gt;90%</li>
              <li>✓ SLA compliance &gt;95%</li>
              <li>✓ NPS +15+ pontos</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-600/20 to-green-900/20 border border-green-700/50 rounded-xl p-6">
            <h4 className="font-semibold text-green-300 mb-3">Benefícios Financeiros</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li>• Economias de horas/mês</li>
              <li>• ROI em 6-8 meses</li>
              <li>• Payback positivo Y1</li>
              <li>• Redução custo operacional</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-700/50 rounded-xl p-6">
            <h4 className="font-semibold text-purple-300 mb-3">Impacto Não-Financeiro</h4>
            <ul className="space-y-2 text-sm text-purple-200">
              <li>• Satisfação do usuário</li>
              <li>• Retenção de clientes</li>
              <li>• Imagem DASA</li>
              <li>• Produtividade do time</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
