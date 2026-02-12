import React, { useState } from 'react';
import {
  Calendar,
  Rocket,
  Target,
  TrendingUp,
  Zap,
  Globe,
  Users,
  Bot,
  Shield,
  Sparkles,
  CheckCircle2,
  Circle,
  Clock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function Roadmap() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

  const phases = [
    {
      id: 0,
      quarter: 'Q1 2026',
      title: 'PoC - Prova de Conceito',
      subtitle: 'Janeiro - Março 2026',
      status: 'in_progress',
      icon: Rocket,
      color: 'blue',
      progress: 35,
      milestones: [
        {
          title: 'Fase 1: Descoberta e Design',
          duration: '2 semanas',
          status: 'completed',
          deliverables: ['Documento de arquitetura', 'Protótipos UI/UX', 'Backlog priorizado'],
        },
        {
          title: 'Fase 2: Desenvolvimento Core',
          duration: '5 semanas',
          status: 'in_progress',
          deliverables: ['API funcional', 'Dashboard operacional', 'Integração ServiceNow/Teams'],
        },
        {
          title: 'Fase 3: Integração e Testes',
          duration: '2 semanas',
          status: 'pending',
          deliverables: ['Sistema integrado', 'Relatórios de testes', 'Documentação técnica'],
        },
        {
          title: 'Fase 4: Piloto e Validação',
          duration: '2 semanas',
          status: 'pending',
          deliverables: ['Sistema validado', 'Relatório de piloto', 'Plano de rollout'],
        },
        {
          title: 'Fase 5: Deploy e Go-Live',
          duration: '1 semana',
          status: 'pending',
          deliverables: ['Sistema em produção', 'Documentação completa', 'Plano de suporte'],
        },
      ],
      metrics: [
        { label: 'Categorias suportadas', value: '10' },
        { label: 'Taxa de automação', value: '52%' },
        { label: 'Redução de tempo', value: '55%' },
      ],
    },
    {
      id: 1,
      quarter: 'Q2 2026',
      title: 'MVP - Produto Mínimo Viável',
      subtitle: 'Abril - Junho 2026',
      status: 'planned',
      icon: Target,
      color: 'cyan',
      progress: 0,
      milestones: [
        {
          title: 'Expansão de Categorias',
          duration: '4 semanas',
          status: 'planned',
          deliverables: ['Suporte a 30+ categorias', 'Refinamento de IA', 'Novos modelos de classificação'],
        },
        {
          title: 'Otimização de Performance',
          duration: '3 semanas',
          status: 'planned',
          deliverables: ['Processamento < 1s', 'Cache inteligente', 'Otimização de queries'],
        },
        {
          title: 'Dashboard Avançado',
          duration: '3 semanas',
          status: 'planned',
          deliverables: ['Power BI integrado', 'Métricas em tempo real', 'Alertas configuráveis'],
        },
        {
          title: 'Integração WhatsApp',
          duration: '4 semanas',
          status: 'planned',
          deliverables: ['WhatsApp Business API', 'Templates de mensagem', 'Fluxo de follow-up'],
        },
      ],
      metrics: [
        { label: 'Categorias suportadas', value: '30+' },
        { label: 'Taxa de automação', value: '65%' },
        { label: 'Acurácia IA', value: '96%' },
      ],
    },
    {
      id: 2,
      quarter: 'Q3-Q4 2026',
      title: 'Escala - Produção Completa',
      subtitle: 'Julho - Dezembro 2026',
      status: 'planned',
      icon: TrendingUp,
      color: 'green',
      progress: 0,
      milestones: [
        {
          title: 'Auto-Resolução Inteligente',
          duration: '8 semanas',
          status: 'planned',
          deliverables: ['IA resolve tickets simples', 'Workflows automáticos', 'Aprovação de ações'],
        },
        {
          title: 'Suporte Multi-Idioma',
          duration: '4 semanas',
          status: 'planned',
          deliverables: ['Português, Inglês, Espanhol', 'Tradução automática', 'Detecção de idioma'],
        },
        {
          title: 'Machine Learning Avançado',
          duration: '6 semanas',
          status: 'planned',
          deliverables: ['Predição de problemas', 'Análise de tendências', 'Recomendações proativas'],
        },
        {
          title: 'Integração CMDB',
          duration: '6 semanas',
          status: 'planned',
          deliverables: ['Contexto de infraestrutura', 'Correlação de eventos', 'Auto-diagnóstico'],
        },
      ],
      metrics: [
        { label: 'Categorias suportadas', value: '50+' },
        { label: 'Taxa de automação', value: '80%' },
        { label: 'Auto-resolução', value: '35%' },
      ],
    },
    {
      id: 3,
      quarter: '2027',
      title: 'Plataforma - Expansão Estratégica',
      subtitle: 'Janeiro - Dezembro 2027',
      status: 'future',
      icon: Globe,
      color: 'purple',
      progress: 0,
      milestones: [
        {
          title: 'Plataforma Multi-Tenant',
          duration: '12 semanas',
          status: 'future',
          deliverables: ['Arquitetura multi-tenant', 'Isolamento de dados', 'Customização por área'],
        },
        {
          title: 'Automação Cross-Department',
          duration: '10 semanas',
          status: 'future',
          deliverables: ['Workflows entre áreas', 'Aprovações automatizadas', 'Orquestração complexa'],
        },
        {
          title: 'API Pública e Marketplace',
          duration: '8 semanas',
          status: 'future',
          deliverables: ['API documentada', 'SDK para desenvolvedores', 'Marketplace de plugins'],
        },
        {
          title: 'IA Generativa Avançada',
          duration: '16 semanas',
          status: 'future',
          deliverables: ['Assistente virtual avançado', 'Aprendizado contínuo', 'Geração de soluções'],
        },
      ],
      metrics: [
        { label: 'Áreas atendidas', value: '5+' },
        { label: 'Taxa de automação', value: '95%' },
        { label: 'Auto-resolução', value: '45%' },
      ],
    },
  ];

  const futureVision = [
    {
      icon: Sparkles,
      title: 'Autonomia Total',
      description: 'Sistema capaz de resolver 95% dos tickets sem intervenção humana',
    },
    {
      icon: Bot,
      title: 'IA Contextual',
      description: 'Assistente que entende contexto completo e histórico do usuário',
    },
    {
      icon: Shield,
      title: 'Compliance Máximo',
      description: 'Certificações ISO 27001, SOC2, HIPAA e conformidade total LGPD',
    },
    {
      icon: Users,
      title: 'Self-Service Completo',
      description: 'Portal onde usuários resolvem 80% dos problemas sozinhos',
    },
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      completed: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
      in_progress: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
      pending: { bg: 'bg-slate-500/20', text: 'text-slate-400', border: 'border-slate-500/30' },
      planned: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30' },
      future: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' },
    };
    return colors[status as keyof typeof colors] || colors.planned;
  };

  const getPhaseColor = (color: string) => {
    const colors = {
      blue: { bg: 'from-blue-900/40 to-slate-900/40', border: 'border-blue-500/30', text: 'text-blue-400', icon: 'bg-blue-500/20' },
      cyan: { bg: 'from-cyan-900/40 to-slate-900/40', border: 'border-cyan-500/30', text: 'text-cyan-400', icon: 'bg-cyan-500/20' },
      green: { bg: 'from-green-900/40 to-slate-900/40', border: 'border-green-500/30', text: 'text-green-400', icon: 'bg-green-500/20' },
      purple: { bg: 'from-purple-900/40 to-slate-900/40', border: 'border-purple-500/30', text: 'text-purple-400', icon: 'bg-purple-500/20' },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getStatusIcon = (status: string) => {
    if (status === 'completed') return CheckCircle2;
    if (status === 'in_progress') return Zap;
    return Circle;
  };

  return (
    <section id="roadmap" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-500/20 rounded-full px-4 py-2 mb-4">
            <Calendar className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-400">Planejamento Estratégico</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Roadmap de Evolução 2026-2027
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Visão completa da jornada de transformação do Service Desk, desde o PoC até a plataforma enterprise
          </p>
        </div>

        <div className="relative space-y-6 mb-12">
          {phases.map((phase) => {
            const Icon = phase.icon;
            const colorClasses = getPhaseColor(phase.color);
            const isExpanded = expandedPhase === phase.id;

            return (
              <div key={phase.id} className="relative">
                <div className={`bg-gradient-to-br ${colorClasses.bg} border ${colorClasses.border} rounded-xl overflow-hidden`}>
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`hidden md:block p-3 ${colorClasses.icon} rounded-lg border ${colorClasses.border} relative z-10`}>
                        <Icon className={`w-6 h-6 ${colorClasses.text}`} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className={`text-2xl font-bold ${colorClasses.text}`}>{phase.title}</h3>
                              <span className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusColor(phase.status).bg} ${getStatusColor(phase.status).text} border ${getStatusColor(phase.status).border}`}>
                                {phase.status === 'in_progress' ? 'Em Andamento' : phase.status === 'completed' ? 'Concluído' : phase.status === 'planned' ? 'Planejado' : 'Futuro'}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                              <Calendar className="w-4 h-4" />
                              {phase.quarter} • {phase.subtitle}
                            </div>
                          </div>

                          <button
                            onClick={() => setExpandedPhase(isExpanded ? null : phase.id)}
                            className="p-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-colors"
                          >
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-slate-400" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-slate-400" />
                            )}
                          </button>
                        </div>

                        {phase.progress > 0 && (
                          <div className="mb-4">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-slate-400">Progresso</span>
                              <span className={`font-bold ${colorClasses.text}`}>{phase.progress}%</span>
                            </div>
                            <div className="w-full bg-slate-800 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full bg-gradient-to-r ${phase.color === 'blue' ? 'from-blue-600 to-cyan-500' : phase.color === 'cyan' ? 'from-cyan-600 to-blue-500' : phase.color === 'green' ? 'from-green-600 to-cyan-500' : 'from-purple-600 to-pink-500'}`}
                                style={{ width: `${phase.progress}%` }}
                              />
                            </div>
                          </div>
                        )}

                        <div className="grid grid-cols-3 gap-4">
                          {phase.metrics.map((metric, index) => (
                            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-3">
                              <p className="text-xs text-slate-400 mb-1">{metric.label}</p>
                              <p className={`text-xl font-bold ${colorClasses.text}`}>{metric.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-slate-700 animate-fade-in">
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-cyan-400" />
                          Marcos e Entregas
                        </h4>
                        <div className="space-y-3">
                          {phase.milestones.map((milestone, index) => {
                            const StatusIcon = getStatusIcon(milestone.status);
                            const statusColor = getStatusColor(milestone.status);

                            return (
                              <div
                                key={index}
                                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-slate-600 transition-colors"
                              >
                                <div className="flex items-start gap-3 mb-3">
                                  <StatusIcon className={`w-5 h-5 mt-0.5 ${statusColor.text}`} />
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                      <h5 className="font-semibold text-white">{milestone.title}</h5>
                                      <div className="flex items-center gap-2 text-xs text-slate-400">
                                        <Clock className="w-3 h-3" />
                                        {milestone.duration}
                                      </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                      {milestone.deliverables.map((deliverable, dIndex) => (
                                        <span
                                          key={dIndex}
                                          className="text-xs bg-slate-900 border border-slate-700 text-slate-300 px-2 py-1 rounded"
                                        >
                                          {deliverable}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Visão de Futuro</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {futureVision.map((vision, index) => {
              const Icon = vision.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 text-center hover:border-purple-500/50 transition-colors"
                >
                  <div className="inline-flex p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg mb-3">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{vision.title}</h4>
                  <p className="text-xs text-slate-400">{vision.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
