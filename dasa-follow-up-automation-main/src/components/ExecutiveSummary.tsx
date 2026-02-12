import React from 'react';
import { BarChart3, TrendingUp, Users, Award } from 'lucide-react';

export default function ExecutiveSummary() {
  const metrics = [
    {
      title: 'Redução de Tempo Manual',
      before: '45 min/ticket',
      after: '5 min/ticket',
      improvement: '89%',
      icon: Clock,
      color: 'from-blue-600 to-blue-400',
    },
    {
      title: 'Taxa de Categorização',
      before: '100% manual',
      after: '92% automático',
      improvement: '92%',
      icon: BarChart3,
      color: 'from-cyan-600 to-cyan-400',
    },
    {
      title: 'Aumento de Produtividade',
      before: '260 tickets',
      after: '520+ tickets',
      improvement: '100%',
      icon: TrendingUp,
      color: 'from-green-600 to-green-400',
    },
    {
      title: 'Satisfação do Usuário',
      before: '65% NPS',
      after: '85% NPS',
      improvement: '20 pts',
      icon: Award,
      color: 'from-purple-600 to-pink-400',
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Resumo Executivo</h2>
          <p className="text-xl text-slate-400">Impacto mensurável da automação inteligente</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-slate-800/40 border border-slate-700 rounded-xl p-8 backdrop-blur-sm hover:border-cyan-500 transition-all group">
                <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-4">{metric.title}</h3>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-900/50 rounded-lg p-3">
                    <p className="text-xs text-slate-400 mb-1">Atual</p>
                    <p className="text-sm font-semibold text-slate-300">{metric.before}</p>
                  </div>
                  <div className="bg-cyan-900/30 rounded-lg p-3">
                    <p className="text-xs text-cyan-300 mb-1">Com IA</p>
                    <p className="text-sm font-semibold text-cyan-200">{metric.after}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Melhoria</span>
                  <span className="text-lg font-bold text-green-400">+{metric.improvement}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 border border-slate-700 rounded-xl p-12">
          <h3 className="text-2xl font-bold text-white mb-8">Casos de Uso Principais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Monitoramento Automático
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Identificação automática de tickets antigos (7+ dias) sem atualizações e escalação inteligente ao gestor responsável
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Categorização Inteligente
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                IA classifica automaticamente tickets em categorias corretas, com análise humana para os 8% restantes
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Contato Automático via Teams
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Três tentativas automáticas de contato com usuário/gestor com mensagens padronizadas e evidências registradas
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                Escalação Inteligente
              </h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Escalonamento automático para o grupo solucionador responsável com contexto completo do ticket
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Clock } from 'lucide-react';
