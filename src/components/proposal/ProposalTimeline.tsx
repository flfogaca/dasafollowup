const phases = [
  {
    name: 'Fase 1: Descoberta e Design',
    duration: '2 semanas',
    weeks: 'Semanas 1-2',
    hours: 104,
    activities: [
      { name: 'Levantamento e analise de requisitos', hours: 16 },
      { name: 'Definicao da arquitetura tecnica', hours: 10 },
      { name: 'Prototipacao de interfaces (UI/UX)', hours: 20 },
      { name: 'Planejamento de sprints e backlog', hours: 10 },
      { name: 'Matriz de integracoes e dependencias', hours: 10 },
      { name: 'Plano de testes', hours: 10 },
      { name: 'Reunioes e alinhamentos com stakeholders', hours: 28 },
    ],
    deliverables: [
      'Documento de arquitetura tecnica',
      'Prototipos UI/UX das principais telas',
      'Backlog priorizado com estimativas',
      'Plano de testes',
      'Matriz de integracoes',
    ],
    milestone: 'Aprovacao do design e arquitetura pela DASA',
  },
  {
    name: 'Fase 2: Desenvolvimento Core',
    duration: '5 semanas',
    weeks: 'Semanas 3-7',
    hours: 416,
    activities: [
      { name: 'Schema e modelagem de banco de dados', hours: 10 },
      { name: 'Edge Functions - monitoramento de tickets', hours: 26 },
      { name: 'Edge Functions - categorizacao IA', hours: 20 },
      { name: 'Edge Functions - follow-up via Teams', hours: 32 },
      { name: 'Edge Functions - escalacao inteligente', hours: 20 },
      { name: 'Edge Functions - analytics e metricas', hours: 16 },
      { name: 'Integracao ServiceNow TSM', hours: 42 },
      { name: 'Integracao Microsoft Teams (Graph API)', hours: 32 },
      { name: 'Integracao Active Directory', hours: 20 },
      { name: 'Integracao OpenAI GPT-4', hours: 20 },
      { name: 'Dashboard operacional (metricas tempo real)', hours: 32 },
      { name: 'Tela de backlog e gestao de tickets', hours: 26 },
      { name: 'Tela de revisao humana (categorizacao)', hours: 20 },
      { name: 'Tela de configuracao de regras de negocio', hours: 20 },
      { name: 'Autenticacao OAuth2 e RBAC', hours: 32 },
      { name: 'Testes unitarios', hours: 32 },
      { name: 'Buffer tecnico', hours: 16 },
    ],
    deliverables: [
      'API totalmente funcional',
      'Dashboard operacional com metricas em tempo real',
      'Integracao ServiceNow/Teams funcional',
      'Engine de categorizacao IA operacional',
      'Testes unitarios com cobertura >80%',
    ],
    milestone: 'Backend e integracoes funcionando em homologacao',
  },
  {
    name: 'Fase 3: Integracao e Testes',
    duration: '2 semanas',
    weeks: 'Semanas 8-9',
    hours: 156,
    activities: [
      { name: 'Testes de integracao E2E', hours: 32 },
      { name: 'Testes de carga e performance', hours: 20 },
      { name: 'Testes de seguranca e LGPD', hours: 20 },
      { name: 'Testes de usabilidade', hours: 10 },
      { name: 'Bug fixes e otimizacoes', hours: 32 },
      { name: 'Documentacao tecnica', hours: 20 },
      { name: 'Reunioes de validacao', hours: 22 },
    ],
    deliverables: [
      'Relatorio completo de testes',
      'Evidencias de seguranca e conformidade LGPD',
      'Plano de producao e runbooks',
      'Documentacao tecnica de operacao',
    ],
    milestone: 'Todos os testes passando, sistema pronto para piloto',
  },
  {
    name: 'Fase 4: Piloto com Grupo Select',
    duration: '2 semanas',
    weeks: 'Semanas 10-11',
    hours: 78,
    activities: [
      { name: 'Deploy em ambiente de homologacao', hours: 6 },
      { name: 'Treinamento do grupo piloto DASA', hours: 10 },
      { name: 'Monitoramento durante 2 semanas', hours: 26 },
      { name: 'Coleta e analise de feedback', hours: 10 },
      { name: 'Ajustes baseados em feedback', hours: 20 },
      { name: 'Relatorio de piloto', hours: 6 },
    ],
    deliverables: [
      'Relatorio de piloto com metricas',
      'Feedback coletado e acoes tomadas',
      'Go/No-Go para producao',
      'Plano de rollout completo',
    ],
    milestone: 'Validacao positiva do piloto',
  },
  {
    name: 'Fase 5: Deploy e Go-Live',
    duration: '1 semana',
    weeks: 'Semana 12',
    hours: 52,
    activities: [
      { name: 'Deploy em producao', hours: 6 },
      { name: 'Monitoramento intensivo', hours: 20 },
      { name: 'Ajustes em tempo real', hours: 10 },
      { name: 'Documentacao final e runbooks', hours: 10 },
      { name: 'Handover para equipe DASA', hours: 6 },
    ],
    deliverables: [
      'Sistema em producao estavel',
      'Documentacao completa de runbooks',
      'Plano de suporte pos-deploy',
      'Relatorio de sucesso com metricas finais',
    ],
    milestone: 'Sistema em producao, Go-Live bem-sucedido',
  },
];

const totalHours = phases.reduce((sum, p) => sum + p.hours, 0);

export default function ProposalTimeline() {
  return (
    <div className="proposal-section">
      <h2 className="proposal-h2">4. Cronograma, Fases e Distribuicao de Horas</h2>

      <h3 className="proposal-h3">4.1. Visao Geral</h3>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="border border-[#e2e8f0] rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-[#0055a4]">12 semanas</p>
          <p className="text-xs text-[#64748b]">Duracao total (~3 meses)</p>
        </div>
        <div className="border border-[#e2e8f0] rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-[#0055a4]">2 devs</p>
          <p className="text-xs text-[#64748b]">Full-Stack Senior</p>
        </div>
        <div className="border border-[#e2e8f0] rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-[#0055a4]">{totalHours}h</p>
          <p className="text-xs text-[#64748b]">Total de horas</p>
        </div>
      </div>

      <h3 className="proposal-h3">4.2. Resumo por Fase</h3>
      <table className="proposal-table mb-6">
        <thead>
          <tr>
            <th>Fase</th>
            <th>Duracao</th>
            <th>Periodo</th>
            <th>Horas</th>
            <th>% do Total</th>
          </tr>
        </thead>
        <tbody>
          {phases.map((phase) => (
            <tr key={phase.name}>
              <td className="font-medium">{phase.name}</td>
              <td>{phase.duration}</td>
              <td>{phase.weeks}</td>
              <td className="font-semibold">{phase.hours}h</td>
              <td>{((phase.hours / totalHours) * 100).toFixed(1)}%</td>
            </tr>
          ))}
          <tr className="font-bold bg-[#f1f5f9]">
            <td>TOTAL</td>
            <td>12 semanas</td>
            <td>Semanas 1-12</td>
            <td>{totalHours}h</td>
            <td>100%</td>
          </tr>
        </tbody>
      </table>

      {phases.map((phase, phaseIdx) => (
        <div key={phase.name} className="mb-6">
          <h3 className="proposal-h3">
            4.{phaseIdx + 3}. {phase.name}
          </h3>
          <div className="flex gap-4 text-sm text-[#475569] mb-3">
            <span>
              <strong>Duracao:</strong> {phase.duration}
            </span>
            <span>
              <strong>Periodo:</strong> {phase.weeks}
            </span>
            <span>
              <strong>Esforco:</strong> {phase.hours} horas
            </span>
          </div>

          <p className="text-xs font-semibold text-[#1e293b] uppercase tracking-wide mb-2">
            Distribuicao de Horas por Atividade:
          </p>
          <table className="proposal-table mb-3">
            <thead>
              <tr>
                <th>Atividade</th>
                <th className="w-20 text-right">Horas</th>
                <th className="w-20 text-right">%</th>
              </tr>
            </thead>
            <tbody>
              {phase.activities.map((act) => (
                <tr key={act.name}>
                  <td>{act.name}</td>
                  <td className="text-right font-medium">{act.hours}h</td>
                  <td className="text-right text-[#64748b]">
                    {((act.hours / phase.hours) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
              <tr className="font-bold bg-[#f1f5f9]">
                <td>Subtotal</td>
                <td className="text-right">{phase.hours}h</td>
                <td className="text-right">100%</td>
              </tr>
            </tbody>
          </table>

          <p className="text-xs font-semibold text-[#1e293b] uppercase tracking-wide mb-1">
            Entregas:
          </p>
          <ul className="list-disc list-inside text-sm text-[#475569] space-y-0.5 ml-2 mb-2">
            {phase.deliverables.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>

          <p className="text-sm text-[#0055a4] font-medium">
            Marco Go/No-Go: {phase.milestone}
          </p>
        </div>
      ))}

      <h3 className="proposal-h3">4.8. Marcos Principais</h3>
      <table className="proposal-table">
        <thead>
          <tr>
            <th>Marco</th>
            <th>Semana</th>
            <th>Descricao</th>
            <th>Criterio de Aprovacao</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: 'M1', week: '2', desc: 'Design Aprovado', criteria: 'Arquitetura e prototipos aprovados pela DASA' },
            { id: 'M2', week: '7', desc: 'Desenvolvimento Completo', criteria: 'Backend e integracoes funcionando' },
            { id: 'M3', week: '9', desc: 'Testes OK', criteria: 'Todos os testes passando, sistema validado' },
            { id: 'M4', week: '11', desc: 'Piloto OK', criteria: 'Validacao positiva do piloto' },
            { id: 'M5', week: '12', desc: 'Go-Live', criteria: 'Sistema em producao estavel' },
          ].map((m) => (
            <tr key={m.id}>
              <td className="font-bold text-[#0055a4]">{m.id}</td>
              <td>Semana {m.week}</td>
              <td className="font-medium">{m.desc}</td>
              <td>{m.criteria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
