import { useState } from 'react';
import {
  Clock,
  Brain,
  MessageSquare,
  Users,
  AlertTriangle,
  RefreshCw,
  Shield,
  ChevronDown,
  Zap,
  ArrowRight,
} from 'lucide-react';

interface Flow {
  id: string;
  number: number;
  title: string;
  type: string;
  typeColor: string;
  frequency: string;
  module: string;
  icon: React.ElementType;
  iconColor: string;
  trigger: string;
  connectors: string[];
  steps: string[];
}

const flows: Flow[] = [
  {
    id: 'monitoring',
    number: 1,
    title: 'Monitoramento de Tickets Antigos',
    type: 'Scheduled Cloud Flow',
    typeColor: 'bg-blue-500/20 text-blue-300',
    frequency: 'A cada 1h (horario comercial)',
    module: 'Modulo 1',
    icon: Clock,
    iconColor: 'from-blue-600 to-blue-400',
    trigger: 'Recurrence trigger - a cada 60 min, seg-sex, 08h-18h',
    connectors: ['ServiceNow (REST)', 'Supabase (HTTP)', 'Condicoes e loops'],
    steps: [
      'Consultar API REST do ServiceNow para tickets com 7+ dias sem atualizacao',
      'Filtrar por status (aberto, em andamento) e fila',
      'Gravar/atualizar registro no Supabase via HTTP connector',
      'Verificar se o ticket ja esta em processo de follow-up',
      'Se novo, disparar fluxo de Categorizacao (child flow)',
    ],
  },
  {
    id: 'categorization',
    number: 2,
    title: 'Categorizacao Inteligente com IA',
    type: 'Instant Cloud Flow',
    typeColor: 'bg-emerald-500/20 text-emerald-300',
    frequency: 'Sob demanda (child flow)',
    module: 'Modulo 2',
    icon: Brain,
    iconColor: 'from-emerald-600 to-emerald-400',
    trigger: 'HTTP Request - recebe dados do ticket do Fluxo 1',
    connectors: ['HTTP (OpenAI API)', 'ServiceNow', 'Supabase (HTTP)', 'Microsoft Teams'],
    steps: [
      'Extrair descricao e contexto do ticket',
      'Enviar prompt para OpenAI GPT-4 via conector HTTP',
      'Receber categoria sugerida e indice de confianca',
      'Se confianca >= 92%: atualizar categoria no ServiceNow',
      'Se confianca < 92%: inserir na fila de revisao humana e notificar analista via Teams',
      'Registrar log de categorizacao no Supabase',
    ],
  },
  {
    id: 'contact-management',
    number: 3,
    title: 'Gerenciamento de Tentativas de Contato',
    type: 'Scheduled Cloud Flow',
    typeColor: 'bg-blue-500/20 text-blue-300',
    frequency: '2x ao dia (09h e 15h)',
    module: 'Modulo 5',
    icon: Users,
    iconColor: 'from-sky-600 to-sky-400',
    trigger: 'Recurrence - horario comercial (08:00-18:00, exceto 12:00-14:00)',
    connectors: ['Supabase (HTTP)', 'Microsoft Graph (AD)', 'ServiceNow'],
    steps: [
      'Consultar tickets que precisam de contato (tentativa 1, 2 ou 3)',
      'Verificar se ja passou 1 dia util desde a ultima tentativa',
      'Buscar dados do usuario no Active Directory via Microsoft Graph',
      'Verificar se o usuario esta ativo na rede',
      'Disparar Fluxo 4 (envio de mensagem Teams)',
      'Atualizar contador de tentativas e registrar evidencia no ServiceNow',
      'Se 3a tentativa sem resposta: disparar Fluxo 5 (escalacao)',
    ],
  },
  {
    id: 'teams-notification',
    number: 4,
    title: 'Envio de Notificacao via Teams',
    type: 'Instant Cloud Flow',
    typeColor: 'bg-emerald-500/20 text-emerald-300',
    frequency: 'Sob demanda (child flow)',
    module: 'Modulo 3',
    icon: MessageSquare,
    iconColor: 'from-cyan-600 to-cyan-400',
    trigger: 'HTTP Request - recebe dados do ticket e destinatario',
    connectors: ['Microsoft Teams (nativo)', 'Supabase (HTTP)', 'ServiceNow'],
    steps: [
      'Selecionar template de mensagem com base na categoria do ticket',
      'Personalizar com dados do ticket (numero, descricao, urgencia)',
      'Enviar via Microsoft Teams (Post message in a chat or channel)',
      'Registrar timestamp, ID da mensagem e status de entrega',
      'Gravar evidencia completa no Supabase',
      'Atualizar ticket no ServiceNow com nota de trabalho',
    ],
  },
  {
    id: 'escalation',
    number: 5,
    title: 'Escalacao Automatica',
    type: 'Instant Cloud Flow',
    typeColor: 'bg-emerald-500/20 text-emerald-300',
    frequency: 'Sob demanda (child flow)',
    module: 'Modulo 4',
    icon: AlertTriangle,
    iconColor: 'from-amber-600 to-amber-400',
    trigger: 'HTTP Request - recebe ticket ID e historico de tentativas',
    connectors: ['ServiceNow', 'Microsoft Teams', 'Supabase (HTTP)', 'Approvals'],
    steps: [
      'Avaliar criticidade do ticket e regras de escalacao',
      'Determinar grupo responsavel para receber a escalacao',
      'Atualizar assignment group no ServiceNow via API',
      'Enviar notificacao ao gestor da fila via Teams',
      'Se configurado: notificar gestor antes de encerramento automatico (aprovacao 2h)',
      'Registrar cadeia de escalacao no Supabase para auditoria',
    ],
  },
  {
    id: 'ad-sync',
    number: 6,
    title: 'Sincronizacao com Active Directory',
    type: 'Scheduled Cloud Flow',
    typeColor: 'bg-blue-500/20 text-blue-300',
    frequency: '1x ao dia (madrugada)',
    module: 'Modulo 6',
    icon: RefreshCw,
    iconColor: 'from-teal-600 to-teal-400',
    trigger: 'Recurrence diaria - executa as 02h',
    connectors: ['Microsoft Graph (Azure AD)', 'Supabase (HTTP)', 'Microsoft Teams'],
    steps: [
      'Consultar Microsoft Graph API para listar usuarios e status',
      'Comparar com base de usuarios no Supabase',
      'Atualizar registros (status, departamento, gestor, ultimo login)',
      'Identificar usuarios inativos com tickets abertos',
      'Gerar relatorio de inconsistencias',
      'Notificar administradores via Teams',
    ],
  },
  {
    id: 'data-quality',
    number: 7,
    title: 'Limpeza e Qualidade de Dados',
    type: 'Scheduled Cloud Flow',
    typeColor: 'bg-blue-500/20 text-blue-300',
    frequency: '1x por semana (sabado)',
    module: 'Modulo 6',
    icon: Shield,
    iconColor: 'from-slate-500 to-slate-400',
    trigger: 'Recurrence semanal - sabado de madrugada',
    connectors: ['ServiceNow', 'Supabase (HTTP)', 'Microsoft Teams', 'Outlook (opcional)'],
    steps: [
      'Identificar tickets "em limbo" (sem categoria, sem responsavel)',
      'Validar categorias contra catalogo do ServiceNow',
      'Detectar duplicidades e inconsistencias',
      'Gerar relatorio consolidado de qualidade',
      'Enviar relatorio para gestores via Teams ou email',
      'Sugerir correcoes automaticas para dados incompletos',
    ],
  },
];

function FlowCard({ flow, isExpanded, onToggle }: { flow: Flow; isExpanded: boolean; onToggle: () => void }) {
  const Icon = flow.icon;

  return (
    <div className="bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/60 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-start gap-4 hover:bg-slate-800/60 transition-colors"
      >
        <div className={`w-12 h-12 bg-gradient-to-br ${flow.iconColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        <div className="flex-1 text-left min-w-0">
          <div className="flex items-center gap-3 mb-1 flex-wrap">
            <span className="text-xs font-mono text-slate-500">FLUXO {flow.number}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${flow.typeColor}`}>
              {flow.type}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-1">{flow.title}</h3>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {flow.frequency}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline">{flow.module}</span>
          </div>
        </div>

        <ChevronDown
          className={`w-5 h-5 text-cyan-400 flex-shrink-0 mt-1 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 border-t border-slate-700/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-5">
            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Gatilho (Trigger)
              </h4>
              <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-700/50">
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300">{flow.trigger}</span>
                </div>
              </div>

              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-5 mb-3">
                Conectores Utilizados
              </h4>
              <div className="flex flex-wrap gap-2">
                {flow.connectors.map((connector, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-700/50 text-slate-300 px-2.5 py-1 rounded-md border border-slate-600/50"
                  >
                    {connector}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Etapas do Fluxo
              </h4>
              <ol className="space-y-2.5">
                {flow.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-cyan-500/20 text-cyan-300 text-xs rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-medium">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-slate-300 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowDiagram() {
  const diagramSteps = [
    { label: 'ServiceNow', sub: 'Ticket 7+ dias', color: 'bg-blue-500/20 border-blue-500/40 text-blue-300' },
    { label: 'Monitoramento', sub: 'Fluxo 1', color: 'bg-slate-700/50 border-slate-600 text-slate-200' },
    { label: 'IA (GPT-4)', sub: 'Fluxo 2', color: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' },
    { label: 'Teams', sub: 'Fluxos 3-4', color: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300' },
    { label: 'Escalacao', sub: 'Fluxo 5', color: 'bg-amber-500/20 border-amber-500/40 text-amber-300' },
    { label: 'ServiceNow', sub: 'Atualizacao', color: 'bg-blue-500/20 border-blue-500/40 text-blue-300' },
  ];

  return (
    <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6 mb-8">
      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-5">
        Cadeia de Execucao dos Fluxos
      </h3>
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {diagramSteps.map((step, idx) => (
          <div key={idx} className="flex items-center gap-2 flex-shrink-0">
            <div className={`${step.color} border rounded-lg px-4 py-3 text-center min-w-[110px]`}>
              <div className="text-sm font-medium">{step.label}</div>
              <div className="text-xs opacity-70 mt-0.5">{step.sub}</div>
            </div>
            {idx < diagramSteps.length - 1 && (
              <ArrowRight className="w-4 h-4 text-slate-500 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-6 text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-400/50" />
          Agendado (Scheduled)
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400/50" />
          Instantaneo (On-demand)
        </span>
      </div>
    </div>
  );
}

function SummaryTable() {
  const rows = [
    { flow: 'Monitoramento de Tickets', type: 'Agendado', freq: 'A cada 1h', mod: 'Modulo 1' },
    { flow: 'Categorizacao com IA', type: 'Instantaneo', freq: 'Sob demanda', mod: 'Modulo 2' },
    { flow: 'Tentativas de Contato', type: 'Agendado', freq: '2x/dia', mod: 'Modulo 5' },
    { flow: 'Notificacao Teams', type: 'Instantaneo', freq: 'Sob demanda', mod: 'Modulo 3' },
    { flow: 'Escalacao Automatica', type: 'Instantaneo', freq: 'Sob demanda', mod: 'Modulo 4' },
    { flow: 'Sync Active Directory', type: 'Agendado', freq: '1x/dia', mod: 'Modulo 6' },
    { flow: 'Limpeza de Dados', type: 'Agendado', freq: '1x/semana', mod: 'Modulo 6' },
  ];

  return (
    <div className="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-700">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
          Resumo dos Fluxos
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700/50">
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Fluxo</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Tipo</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Frequencia</th>
              <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Modulo</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-b border-slate-700/30 last:border-0 hover:bg-slate-800/40 transition-colors">
                <td className="px-6 py-3 text-slate-200 font-medium">{row.flow}</td>
                <td className="px-6 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    row.type === 'Agendado'
                      ? 'bg-blue-500/20 text-blue-300'
                      : 'bg-emerald-500/20 text-emerald-300'
                  }`}>
                    {row.type}
                  </span>
                </td>
                <td className="px-6 py-3 text-slate-400">{row.freq}</td>
                <td className="px-6 py-3 text-slate-400">{row.mod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PowerAutomateFlows() {
  const [expandedFlow, setExpandedFlow] = useState<string | null>(null);

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-1.5 mb-6">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">Power Automate</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Fluxos de Trabalho
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            7 fluxos orquestrados no Power Automate para automacao completa do follow-up inteligente
          </p>
        </div>

        <FlowDiagram />

        <div className="space-y-4 mb-10">
          {flows.map((flow) => (
            <FlowCard
              key={flow.id}
              flow={flow}
              isExpanded={expandedFlow === flow.id}
              onToggle={() => setExpandedFlow(expandedFlow === flow.id ? null : flow.id)}
            />
          ))}
        </div>

        <SummaryTable />

        <div className="mt-8 bg-amber-900/15 border border-amber-700/40 rounded-xl p-6 flex items-start gap-4">
          <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-amber-300 mb-1.5 text-sm">Requisito de Licenciamento</h4>
            <p className="text-amber-200/80 text-sm leading-relaxed">
              Os conectores HTTP customizado, ServiceNow nativo e Approvals exigem licenca Power Automate Premium
              ou uso de on-premises data gateway. Verificar disponibilidade de licencas antes da implementacao.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
