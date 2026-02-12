import React from 'react';
import { Users, Calendar, Clock, DollarSign, Target, TrendingUp, Layers, Zap, Shield, Globe } from 'lucide-react';

export default function EffortEstimate() {
  const teamMembers = [
    { name: 'Flamarion Fogaça', role: 'Desenvolvedor Full-Stack', hours: 640 },
    { name: 'Renan Jordão', role: 'Desenvolvedor Full-Stack', hours: 640 },
    { name: 'Jhonathan Ducatti', role: 'Desenvolvedor Full-Stack', hours: 640 },
  ];

  const principles = [
    {
      title: 'Arquitetura Atemporal',
      description: 'Cérebro, mãos e canais independentes — IA e orquestradores podem ser trocados',
      icon: Layers,
      color: 'blue',
    },
    {
      title: 'IA Plugável',
      description: 'OpenAI hoje, Gemini ou Claude amanhã — sem reescrever o sistema',
      icon: Zap,
      color: 'purple',
    },
    {
      title: 'API-First + Governança',
      description: 'Segurança corporativa (RBAC, OAuth2, auditoria)',
      icon: Shield,
      color: 'green',
    },
    {
      title: 'Foco em ROI',
      description: 'Dashboards em Power BI demonstrando economia de FTE e tempo',
      icon: TrendingUp,
      color: 'orange',
    },
    {
      title: 'Escalabilidade',
      description: 'Padrão multi-canal, pronto para escalar de PoC a produção',
      icon: Globe,
      color: 'red',
    },
  ];

  const phases = [
    {
      name: 'Fase 1: Descoberta e Design',
      duration: '2 semanas',
      weeks: 2,
      tasks: [
        'Análise detalhada dos requisitos',
        'Definição da arquitetura técnica',
        'Prototipação de interfaces',
        'Planejamento de sprints',
      ],
      deliverables: 'Documento de arquitetura, Protótipos UI/UX, Backlog priorizado',
    },
    {
      name: 'Fase 2: Desenvolvimento Core',
      duration: '6 semanas',
      weeks: 6,
      tasks: [
        'Setup da infraestrutura',
        'Desenvolvimento da API e integrações',
        'Implementação do dashboard',
        'Sistema de categorização IA',
      ],
      deliverables: 'API funcional, Dashboard operacional, Integração ServiceNow/Teams',
    },
    {
      name: 'Fase 3: Integração e Testes',
      duration: '4 semanas',
      weeks: 4,
      tasks: [
        'Testes de integração',
        'Testes de performance',
        'Testes de segurança',
        'Ajustes e refinamentos',
      ],
      deliverables: 'Sistema integrado, Relatórios de testes, Documentação técnica',
    },
    {
      name: 'Fase 4: Piloto e Validação',
      duration: '2 semanas',
      weeks: 2,
      tasks: [
        'Deploy em ambiente de homologação',
        'Testes com usuários reais',
        'Coleta de feedback',
        'Ajustes finais',
      ],
      deliverables: 'Sistema validado, Relatório de piloto, Plano de rollout',
    },
    {
      name: 'Fase 5: Deploy e Go-Live',
      duration: '2 semanas',
      weeks: 2,
      tasks: [
        'Deploy em produção',
        'Monitoramento intensivo',
        'Suporte ao usuário',
        'Otimizações pós-lançamento',
      ],
      deliverables: 'Sistema em produção, Documentação completa, Plano de suporte',
    },
  ];

  const totalHours = teamMembers.reduce((sum, member) => sum + member.hours, 0);

  return (
    <section id="effort-estimate" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4">
            <Calendar className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Planejamento Detalhado</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Estimativa de Esforço e Cronograma
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Planejamento completo de recursos humanos, tempo e custos para implementação da solução
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-600/20 rounded-lg">
                <Clock className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white">Duração Total</h3>
            </div>
            <p className="text-3xl font-bold text-blue-400 mb-1">16 semanas</p>
            <p className="text-sm text-slate-400">~4 meses de desenvolvimento</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/40 to-slate-900/40 border border-cyan-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-cyan-600/20 rounded-lg">
                <Users className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="font-semibold text-white">Equipe</h3>
            </div>
            <p className="text-3xl font-bold text-cyan-400 mb-1">3 devs</p>
            <p className="text-sm text-slate-400">{totalHours.toLocaleString()}h totais</p>
          </div>

          <div className="bg-gradient-to-br from-green-900/40 to-slate-900/40 border border-green-500/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-600/20 rounded-lg">
                <Target className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="font-semibold text-white">Meta PoC</h3>
            </div>
            <p className="text-3xl font-bold text-green-400 mb-1">52%</p>
            <p className="text-sm text-slate-400">Automação resolutiva</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" />
              Princípios do Projeto
            </h3>
            <div className="space-y-3">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                const colorClasses = {
                  blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
                  purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
                  green: 'bg-green-500/20 text-green-400 border-green-500/30',
                  orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
                  red: 'bg-red-500/20 text-red-400 border-red-500/30',
                };
                return (
                  <div
                    key={index}
                    className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${colorClasses[principle.color as keyof typeof colorClasses]}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{principle.title}</h4>
                        <p className="text-sm text-slate-400">{principle.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" />
              Equipe e Alocação
            </h3>
            <div className="space-y-3">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-white">{member.name}</h4>
                      <p className="text-sm text-slate-400">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Clock className="w-4 h-4" />
                    {member.hours}h totais
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-cyan-400" />
            Cronograma de Fases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
              >
                <div className="mb-3">
                  <h4 className="font-semibold text-white mb-2">{phase.name}</h4>
                  <span className="text-sm font-medium text-cyan-400">
                    {phase.duration}
                  </span>
                </div>
                <ul className="space-y-1 mb-3">
                  {phase.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      {task}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-slate-700">
                  <p className="text-xs text-slate-500">
                    <span className="text-slate-400 font-medium">Entregas:</span> {phase.deliverables}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-blue-900/20 border border-blue-500/30 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">ROI Esperado (PoC)</h3>
            <p className="text-slate-400">Impacto mensurável em eficiência operacional e redução de custos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white">% automação</h4>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-slate-400 mb-1">As Is</p>
                  <p className="text-2xl font-bold text-red-400">3%</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Meta</p>
                  <p className="text-2xl font-bold text-cyan-400">52%</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Benefício</p>
                  <p className="text-2xl font-bold text-yellow-400">+49 p.p.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h4 className="text-lg font-semibold text-white">Lead time (Reset/MFA)</h4>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-slate-400 mb-1">As Is</p>
                  <p className="text-2xl font-bold text-red-400">35 min</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Meta</p>
                  <p className="text-2xl font-bold text-cyan-400">16 min</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Benefício</p>
                  <p className="text-2xl font-bold text-green-400">-55%</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <DollarSign className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-white">Custo por atendimento</h4>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-slate-400 mb-1">As Is</p>
                  <p className="text-xl font-bold text-red-400">100% humano</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Meta</p>
                  <p className="text-2xl font-bold text-cyan-400">-50%</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Benefício</p>
                  <p className="text-xl font-bold text-yellow-400">Redução direta</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white">Headcount</h4>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-slate-400 mb-1">As Is</p>
                  <p className="text-xl font-bold text-red-400">30 analistas</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Meta</p>
                  <p className="text-xl font-bold text-cyan-400">15 equiv.</p>
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">Benefício</p>
                  <p className="text-xl font-bold text-yellow-400">Efic. 50%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
