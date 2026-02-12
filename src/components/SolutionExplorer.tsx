import React, { useState } from 'react';
import {
  Workflow,
  Bot,
  MessageSquare,
  BarChart3,
  Database,
  Zap,
  CheckCircle2,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

export default function SolutionExplorer() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    {
      id: 1,
      title: 'Captura de Tickets',
      icon: Database,
      color: 'blue',
      description: 'Tickets são capturados automaticamente do ServiceNow via webhook em tempo real.',
      details: [
        'Integração nativa com ServiceNow API',
        'Webhook configurado para eventos de criação e atualização',
        'Processamento assíncrono para alta performance',
        'Validação e normalização de dados',
      ],
      metrics: { label: 'Tempo de captura', value: '< 2s' },
    },
    {
      id: 2,
      title: 'Análise por IA',
      icon: Bot,
      color: 'purple',
      description: 'IA generativa analisa o conteúdo do ticket e identifica categoria, prioridade e ações recomendadas.',
      details: [
        'GPT-4 para análise semântica avançada',
        'Classificação em 10+ categorias principais',
        'Detecção automática de urgência e impacto',
        'Extração de entidades (usuário, sistema, erro)',
      ],
      metrics: { label: 'Acurácia', value: '92%' },
    },
    {
      id: 3,
      title: 'Categorização Inteligente',
      icon: Workflow,
      color: 'cyan',
      description: 'Sistema categoriza automaticamente e define o fluxo de tratamento ideal para cada tipo de ticket.',
      details: [
        'Regras de negócio configuráveis',
        'Roteamento automático por categoria',
        'Priorização baseada em SLA',
        'Sugestão de analista especializado',
      ],
      metrics: { label: 'Categorias', value: '10+' },
    },
    {
      id: 4,
      title: 'Follow-Up Automatizado',
      icon: MessageSquare,
      color: 'green',
      description: 'Mensagens de follow-up são enviadas automaticamente via Teams após 7 dias sem resposta do usuário.',
      details: [
        'Integração com Microsoft Teams Bot',
        'Mensagens personalizadas por categoria',
        'Até 3 tentativas de contato',
        'Escalation automático se sem resposta',
      ],
      metrics: { label: 'Taxa de resposta', value: '68%' },
    },
    {
      id: 5,
      title: 'Monitoramento e Analytics',
      icon: BarChart3,
      color: 'orange',
      description: 'Dashboard em tempo real monitora KPIs, tendências e eficiência do sistema de automação.',
      details: [
        'Dashboards executivos em Power BI',
        'Métricas em tempo real',
        'Alertas configuráveis',
        'Relatórios automáticos diários/semanais',
      ],
      metrics: { label: 'Economia de tempo', value: '89%' },
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Redução de 89% no tempo',
      description: 'Processamento de tickets 10x mais rápido',
      color: 'blue',
    },
    {
      icon: TrendingUp,
      title: '52% de automação',
      description: 'Tickets resolvidos sem intervenção manual',
      color: 'green',
    },
    {
      icon: Users,
      title: '50% de eficiência',
      description: 'Equipe pode focar em casos complexos',
      color: 'purple',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-500/20', text: 'text-blue-400', border: 'border-blue-500/30' },
      purple: { bg: 'bg-purple-500/20', text: 'text-purple-400', border: 'border-purple-500/30' },
      cyan: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/30' },
      green: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/30' },
      orange: { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/30' },
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      const interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev === steps.length - 1) {
            setIsPlaying(false);
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 3000);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsPlaying(false);
  };

  return (
    <section id="solution-explorer" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-600/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-4">
            <Workflow className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">Tour Interativo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explorando a Solução
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Veja passo a passo como funciona o sistema de automação inteligente do Service Desk
          </p>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white">Fluxo de Automação</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePlayPause}
                className={`p-2 rounded-lg transition-colors ${
                  isPlaying
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button
                onClick={handleReset}
                className="p-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const colorClasses = getColorClasses(step.color);
                const isActive = index === activeStep;
                const isCompleted = index < activeStep;

                return (
                  <React.Fragment key={step.id}>
                    <button
                      onClick={() => setActiveStep(index)}
                      className={`flex flex-col items-center gap-2 transition-all ${
                        isActive ? 'scale-110' : 'scale-100 opacity-60'
                      }`}
                    >
                      <div
                        className={`p-3 rounded-lg border-2 transition-all ${
                          isActive
                            ? `${colorClasses.bg} ${colorClasses.border}`
                            : isCompleted
                            ? 'bg-green-500/20 border-green-500/30'
                            : 'bg-slate-800 border-slate-700'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6 text-green-400" />
                        ) : (
                          <Icon className={`w-6 h-6 ${isActive ? colorClasses.text : 'text-slate-400'}`} />
                        )}
                      </div>
                      <span className={`text-xs font-medium ${isActive ? 'text-white' : 'text-slate-500'}`}>
                        Etapa {step.id}
                      </span>
                    </button>
                    {index < steps.length - 1 && (
                      <div className="flex-1 h-0.5 bg-slate-700 mx-2">
                        <div
                          className={`h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500 ${
                            index < activeStep ? 'w-full' : 'w-0'
                          }`}
                        />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
              {steps.map((step, index) => {
                if (index !== activeStep) return null;
                const Icon = step.icon;
                const colorClasses = getColorClasses(step.color);

                return (
                  <div key={step.id} className="animate-fade-in">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-lg ${colorClasses.bg} border ${colorClasses.border}`}>
                        <Icon className={`w-8 h-8 ${colorClasses.text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-slate-300 mb-4">{step.description}</p>
                        <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2">
                          <TrendingUp className={`w-4 h-4 ${colorClasses.text}`} />
                          <span className="text-sm text-slate-400">{step.metrics.label}:</span>
                          <span className={`text-sm font-bold ${colorClasses.text}`}>{step.metrics.value}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-start gap-3 bg-slate-800/50 border border-slate-700/50 rounded-lg p-4"
                        >
                          <ChevronRight className={`w-5 h-5 mt-0.5 ${colorClasses.text} flex-shrink-0`} />
                          <span className="text-sm text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colorClasses = getColorClasses(benefit.color);
            return (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors"
              >
                <div className={`p-3 rounded-lg ${colorClasses.bg} border ${colorClasses.border} inline-flex mb-4`}>
                  <Icon className={`w-6 h-6 ${colorClasses.text}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-400">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Pronto para ver em ação?</h3>
              <p className="text-sm text-slate-400">Explore a demonstração interativa completa do sistema</p>
            </div>
            <button
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Demo Interativa
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
