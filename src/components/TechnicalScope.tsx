import React, { useState } from 'react';
import { ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';

export default function TechnicalScope() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const scopes = [
    {
      id: 'automated-monitoring',
      title: 'Monitoramento Automático de Tickets',
      description: 'Sistema que identifica e monitora tickets antigos',
      features: [
        'Identificação de tickets com 7+ dias sem atualização',
        'Análise de usuários inativos na rede',
        'Trigger de escalação baseado em regras de negócio',
        'Dashboard em tempo real com visibilidade de backlog',
        'Integração com ServiceNow TSM',
      ],
    },
    {
      id: 'smart-categorization',
      title: 'Categorização Inteligente com IA',
      description: 'Engine de IA para classificação automática',
      features: [
        '92% de acurácia em categorização automática',
        'Análise contextual de descrição do ticket',
        'Detecção de categorias ausentes no catálogo',
        'Fila de revisão humana para 8% incertos',
        'Aprendizado contínuo com feedback',
      ],
    },
    {
      id: 'teams-integration',
      title: 'Integração com Microsoft Teams',
      description: 'Comunicação automática e rastreada',
      features: [
        'Envio automático de mensagens via Teams',
        'Mensagens padronizadas e personalizáveis',
        'Rastreamento de evidências de contato',
        'Resposta automática com contexto do ticket',
        'Integração com Microsoft Graph API',
      ],
    },
    {
      id: 'escalation-routing',
      title: 'Roteamento e Escalação Inteligente',
      description: 'Distribuição automática para grupos responsáveis',
      features: [
        'Roteamento baseado em criticidade do ticket',
        'Escalação automática após 3 tentativas',
        'Notificação do gestor da fila responsável',
        'Rastreamento de SLA por grupo',
        'Métricas de resposta por técnico (Teams)',
      ],
    },
    {
      id: 'contact-attempts',
      title: 'Gerenciamento de Tentativas de Contato',
      description: 'Processo estruturado de 3 tentativas',
      features: [
        '1 tentativa por dia útil, durante 3 dias',
        'Horário comercial (08:00-18:00, exceto 12:00-14:00)',
        'Contato via Teams e telefone',
        'Registro de evidências no chamado',
        'Encerramento automático após 3 tentativas sem retorno',
      ],
    },
    {
      id: 'data-quality',
      title: 'Qualidade de Dados e Limpeza',
      description: 'Limpeza e validação contínua de dados',
      features: [
        'Identificação de usuários inativos',
        'Validação de categorias de ticket',
        'Detecção de tickets em "limbo"',
        'Sincronização com Active Directory',
        'Auditoria de mudanças de status',
      ],
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Escopo Técnico e Funcional</h2>
          <p className="text-xl text-slate-400">Funcionalidades detalhadas da solução</p>
        </div>

        <div className="space-y-6">
          {scopes.map((scope) => (
            <div key={scope.id} className="bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500 transition-colors">
              <button
                onClick={() => setExpandedSection(expandedSection === scope.id ? null : scope.id)}
                className="w-full p-6 flex items-start justify-between hover:bg-slate-800/60 transition-colors"
              >
                <div className="text-left flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{scope.title}</h3>
                  <p className="text-slate-400">{scope.description}</p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-cyan-400 flex-shrink-0 ml-4 transition-transform ${
                    expandedSection === scope.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedSection === scope.id && (
                <div className="px-6 pb-6 pt-4 border-t border-slate-700">
                  <ul className="space-y-3">
                    {scope.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-900/20 border border-blue-800 rounded-xl p-6 flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-300 mb-2">Dependências e Integrações</h4>
            <p className="text-blue-200 text-sm">
              Requer acesso à API do ServiceNow, Microsoft Teams, Active Directory e base de conhecimento existente. Todas as integrações serão executadas via Edge Functions do Supabase com segurança de nível enterprise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
