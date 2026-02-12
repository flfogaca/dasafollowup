export default function ProposalSummary() {
  const metrics = [
    { metric: 'Tempo por ticket', current: '45 min', projected: '5 min', improvement: '-89%' },
    { metric: 'Tickets processados/dia', current: '260', projected: '520+', improvement: '+100%' },
    { metric: 'Taxa de automacao', current: '3%', projected: '52%', improvement: '+49 p.p.' },
    { metric: 'Categorizacao automatica', current: '0%', projected: '92%', improvement: '+92%' },
    { metric: 'Lead time Reset/MFA', current: '35 min', projected: '16 min', improvement: '-55%' },
    { metric: 'SLA Compliance', current: '60%', projected: '95%+', improvement: '+35 p.p.' },
    { metric: 'NPS', current: '65%', projected: '85%', improvement: '+20 pontos' },
  ];

  return (
    <div className="proposal-section">
      <h2 className="proposal-h2">1. Resumo Executivo</h2>

      <h3 className="proposal-h3">1.1. Problema Identificado</h3>
      <p className="proposal-text mb-4">
        O Service Desk da DASA enfrenta desafios operacionais significativos no processo de
        follow-up de tickets, com alto volume de trabalho manual, baixa taxa de automacao e
        acumulo de backlog.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Tickets/dia', value: '260' },
          { label: 'Tempo manual/ticket', value: '45 min' },
          { label: 'Analistas dedicados', value: '30' },
          { label: 'Backlog acumulado', value: '~140.000' },
        ].map((item) => (
          <div key={item.label} className="border border-[#e2e8f0] rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-[#0055a4]">{item.value}</p>
            <p className="text-xs text-[#64748b]">{item.label}</p>
          </div>
        ))}
      </div>

      <h3 className="proposal-h3">1.2. Solucao Proposta</h3>
      <p className="proposal-text mb-3">
        Sistema de automacao inteligente que integra ServiceNow TSM, Microsoft Teams e
        Active Directory, utilizando IA generativa (OpenAI GPT-4) para:
      </p>
      <ol className="list-decimal list-inside text-sm text-[#334155] space-y-1 mb-6 ml-2">
        <li>Monitorar automaticamente tickets antigos (7+ dias sem atualizacao)</li>
        <li>Categorizar tickets com 92% de acuracia usando IA</li>
        <li>Realizar contato automatico via Teams (3 tentativas estruturadas)</li>
        <li>Escalar inteligentemente para grupos responsaveis</li>
        <li>Gerar dashboards e metricas em tempo real</li>
      </ol>

      <h3 className="proposal-h3">1.3. Metricas-Chave Esperadas</h3>
      <table className="proposal-table">
        <thead>
          <tr>
            <th>Metrica</th>
            <th>Estado Atual</th>
            <th>Com Solucao</th>
            <th>Melhoria</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((row) => (
            <tr key={row.metric}>
              <td className="font-medium">{row.metric}</td>
              <td>{row.current}</td>
              <td>{row.projected}</td>
              <td className="font-semibold text-[#0055a4]">{row.improvement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
