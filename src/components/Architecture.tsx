import React from 'react';
import { Server, Database, Cloud, Shield, GitBranch } from 'lucide-react';

export default function Architecture() {
  const components = [
    {
      layer: 'Frontend',
      icon: Cloud,
      items: [
        'React Dashboard',
        'Interactive PoC Site',
        'Real-time Metrics',
      ],
      color: 'from-blue-600 to-blue-400',
    },
    {
      layer: 'Edge Functions',
      icon: Server,
      items: [
        'Teams Integration',
        'Categorization Engine',
        'Escalation Logic',
      ],
      color: 'from-cyan-600 to-cyan-400',
    },
    {
      layer: 'Database & Storage',
      icon: Database,
      items: [
        'Supabase PostgreSQL',
        'RLS Policies',
        'Event Logging',
      ],
      color: 'from-green-600 to-green-400',
    },
    {
      layer: 'External APIs',
      icon: GitBranch,
      items: [
        'ServiceNow TSM',
        'Microsoft Teams',
        'Active Directory',
      ],
      color: 'from-purple-600 to-purple-400',
    },
  ];

  const integrations = [
    { name: 'ServiceNow', status: 'Critical', icon: '🔗' },
    { name: 'Microsoft Teams', status: 'Critical', icon: '💬' },
    { name: 'Active Directory', status: 'Required', icon: '👥' },
    { name: 'AI/ML Service', status: 'Critical', icon: '🧠' },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Arquitetura Técnica</h2>
          <p className="text-xl text-slate-400">Infraestrutura e integrações de sistema</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-16">
          {components.map((comp, idx) => {
            const Icon = comp.icon;
            return (
              <div key={idx} className="relative">
                <div className={`bg-gradient-to-br ${comp.color} opacity-10 absolute inset-0 rounded-xl blur`} />
                <div className="relative bg-slate-800/60 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
                  <div className={`w-12 h-12 bg-gradient-to-br ${comp.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-4 text-lg">{comp.layer}</h3>
                  <ul className="space-y-2">
                    {comp.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm text-slate-300 flex items-center gap-2">
                        <span className="w-1 h-1 bg-slate-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {idx < components.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-gradient-to-r from-slate-700 to-slate-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-semibold text-white">Segurança e Conformidade</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-300">Row Level Security (RLS) em todas as tabelas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-300">Criptografia de dados em trânsito e em repouso</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-300">Auditoria completa de mudanças</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-300">Conformidade LGPD e segurança healthcare</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Integrações Críticas</h3>
            <div className="space-y-3">
              {integrations.map((integration, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{integration.icon}</span>
                    <span className="text-slate-300 font-medium">{integration.name}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    integration.status === 'Critical'
                      ? 'bg-red-500/20 text-red-300'
                      : 'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {integration.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-700/50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-4">Fluxo de Dados Simplificado</h3>
          <div className="bg-slate-900/50 rounded-lg p-6 font-mono text-sm text-slate-300 overflow-x-auto">
            <div className="flex items-center gap-4 flex-wrap">
              <span>ServiceNow</span>
              <span className="text-cyan-400">→</span>
              <span>Supabase Edge Fn</span>
              <span className="text-cyan-400">→</span>
              <span>AI Categorization</span>
              <span className="text-cyan-400">→</span>
              <span>Teams Notification</span>
              <span className="text-cyan-400">→</span>
              <span>Escalation Logic</span>
              <span className="text-cyan-400">→</span>
              <span>ServiceNow Update</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
