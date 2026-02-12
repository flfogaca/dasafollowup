const modules = [
  {
    number: '2.1',
    title: 'Modulo 1: Monitoramento Automatico de Tickets',
    description:
      'Sistema que identifica e monitora tickets antigos, analisando usuarios inativos e disparando triggers de escalacao baseados em regras de negocio.',
    features: [
      'Identificacao automatica de tickets com 7+ dias sem atualizacao',
      'Analise de usuarios inativos na rede (integracao com Active Directory)',
      'Trigger de escalacao baseado em regras de negocio configuraveis',
      'Dashboard em tempo real com visibilidade completa do backlog',
      'Integracao nativa com ServiceNow TSM para leitura e atualizacao de tickets',
      'Alertas proativos para gestores de filas responsaveis',
    ],
    deliverables: [
      'Engine de monitoramento com jobs agendados',
      'Dashboard de backlog em tempo real',
      'Regras de negocio configuraveis via interface',
    ],
  },
  {
    number: '2.2',
    title: 'Modulo 2: Categorizacao Inteligente com IA',
    description:
      'Engine de Inteligencia Artificial para classificacao automatica de tickets com alta acuracia, reduzindo retrabalho manual.',
    features: [
      '92% de acuracia em categorizacao automatica',
      'Analise contextual da descricao do ticket usando IA generativa',
      'Deteccao automatica de categorias ausentes no catalogo ServiceNow',
      'Fila de revisao humana para os 8% de tickets incertos',
      'Aprendizado continuo com feedback do time de follow-up',
      'Suporte a multiplos modelos de IA (arquitetura plugavel)',
    ],
    deliverables: [
      'API de categorizacao com IA',
      'Interface de revisao humana para tickets incertos',
      'Dashboard de acuracia e metricas de categorizacao',
    ],
  },
  {
    number: '2.3',
    title: 'Modulo 3: Integracao com Microsoft Teams',
    description:
      'Comunicacao automatica e rastreada via Microsoft Teams, com mensagens padronizadas e evidencias de contato.',
    features: [
      'Envio automatico de mensagens via Teams (Microsoft Graph API)',
      'Mensagens padronizadas e personalizaveis por tipo de ticket',
      'Rastreamento completo de evidencias de contato',
      'Resposta automatica com contexto completo do ticket',
      'Suporte a mensagens individuais e em grupos/canais',
      'Template de mensagens configuravel por categoria',
    ],
    deliverables: [
      'Integracao completa com Microsoft Teams via Graph API',
      'Sistema de templates de mensagens',
      'Dashboard de metricas de resposta via Teams',
    ],
  },
  {
    number: '2.4',
    title: 'Modulo 4: Roteamento e Escalacao Inteligente',
    description:
      'Distribuicao automatica de tickets para grupos responsaveis baseada em criticidade, com escalacao automatica apos tentativas de contato.',
    features: [
      'Roteamento automatico baseado em criticidade do ticket',
      'Escalacao automatica apos 3 tentativas sem resposta',
      'Notificacao automatica do gestor da fila responsavel',
      'Rastreamento de SLA por grupo/tecnico',
      'Regras de escalacao configuraveis (horarios, grupos, criticidade)',
      'Historico completo de escalacoes para auditoria',
    ],
    deliverables: [
      'Engine de roteamento inteligente',
      'Sistema de escalacao automatica',
      'Dashboard de SLA e metricas por grupo',
    ],
  },
  {
    number: '2.5',
    title: 'Modulo 5: Gerenciamento de Tentativas de Contato',
    description:
      'Processo estruturado de 3 tentativas de contato com horarios comerciais e registro de evidencias.',
    features: [
      '1 tentativa por dia util, durante 3 dias consecutivos',
      'Horario comercial configuravel (padrao: 08:00-18:00, exceto 12:00-14:00)',
      'Contato via Teams e telefone (quando disponivel)',
      'Registro automatico de evidencias no chamado ServiceNow',
      'Encerramento automatico apos 3 tentativas sem retorno',
      'Notificacao ao gestor antes do encerramento automatico',
    ],
    deliverables: [
      'Sistema de agendamento de tentativas',
      'Integracao com telefonia (opcional)',
      'Dashboard de metricas de contato',
    ],
  },
  {
    number: '2.6',
    title: 'Modulo 6: Qualidade de Dados e Limpeza',
    description:
      'Limpeza e validacao continua de dados, identificando inconsistencias e melhorando a qualidade do catalogo.',
    features: [
      'Identificacao automatica de usuarios inativos no Active Directory',
      'Validacao de categorias de ticket contra catalogo ServiceNow',
      'Deteccao de tickets em "limbo" (sem categoria, sem responsavel)',
      'Sincronizacao automatica com Active Directory',
      'Auditoria completa de mudancas de status e categoria',
      'Sugestoes automaticas de correcao',
    ],
    deliverables: [
      'Jobs de limpeza e validacao de dados',
      'Dashboard de qualidade de dados',
      'Relatorios de auditoria',
    ],
  },
];

export default function ProposalScope() {
  return (
    <div className="proposal-section">
      <h2 className="proposal-h2">2. Escopo Funcional</h2>

      {modules.map((mod) => (
        <div key={mod.number} className="mb-6">
          <h3 className="proposal-h3">
            {mod.number}. {mod.title}
          </h3>
          <p className="proposal-text mb-3">{mod.description}</p>

          <p className="text-xs font-semibold text-[#1e293b] uppercase tracking-wide mb-2">
            Funcionalidades:
          </p>
          <ul className="list-disc list-inside text-sm text-[#334155] space-y-0.5 mb-3 ml-2">
            {mod.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          <p className="text-xs font-semibold text-[#1e293b] uppercase tracking-wide mb-2">
            Entregas:
          </p>
          <ul className="list-disc list-inside text-sm text-[#475569] space-y-0.5 ml-2">
            {mod.deliverables.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
