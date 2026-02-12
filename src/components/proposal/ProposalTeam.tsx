export default function ProposalTeam() {
  const kpis = [
    { kpi: '% Automacao Resolutiva', current: '3%', target: '52%', improvement: '+49 p.p.' },
    { kpi: 'Lead Time (Reset/MFA)', current: '35 min', target: '16 min', improvement: '-55%' },
    { kpi: 'Headcount Equivalente', current: '30 analistas', target: '15 equiv.', improvement: 'Eficiencia 50%' },
    { kpi: 'Categorizacao Automatica', current: '0%', target: '92%', improvement: '+92%' },
    { kpi: 'Tempo Manual por Ticket', current: '45 min', target: '5 min', improvement: '-89%' },
    { kpi: 'Tickets Processados/Dia', current: '260', target: '520+', improvement: '+100%' },
    { kpi: 'NPS', current: '65%', target: '85%', improvement: '+20 pontos' },
    { kpi: 'SLA Compliance', current: '60%', target: '95%+', improvement: '+35 p.p.' },
  ];

  return (
    <div className="proposal-section">
      <h2 className="proposal-h2">5. Equipe e Alocacao</h2>

      <h3 className="proposal-h3">5.1. Composicao da Equipe</h3>
      <p className="proposal-text mb-4">
        A equipe sera composta por 2 Desenvolvedores Full-Stack Senior da Leega,
        com experiencia comprovada em integracoes corporativas, IA e desenvolvimento
        de sistemas de automacao.
      </p>

      <table className="proposal-table mb-6">
        <thead>
          <tr>
            <th>Papel</th>
            <th>Quantidade</th>
            <th>Horas por Profissional</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-medium">Desenvolvedor Full-Stack Senior</td>
            <td>2</td>
            <td>403h</td>
            <td className="font-semibold">806h</td>
          </tr>
          <tr className="font-bold bg-[#f1f5f9]">
            <td>TOTAL EQUIPE</td>
            <td>2</td>
            <td>-</td>
            <td>806h</td>
          </tr>
        </tbody>
      </table>

      <h3 className="proposal-h3">5.2. Alocacao por Fase</h3>
      <table className="proposal-table mb-6">
        <thead>
          <tr>
            <th>Fase</th>
            <th>Horas</th>
            <th>Horas/Dev</th>
            <th>% do Total</th>
          </tr>
        </thead>
        <tbody>
          {[
            { phase: 'Fase 1: Descoberta e Design', hours: 104 },
            { phase: 'Fase 2: Desenvolvimento Core', hours: 416 },
            { phase: 'Fase 3: Integracao e Testes', hours: 156 },
            { phase: 'Fase 4: Piloto', hours: 78 },
            { phase: 'Fase 5: Deploy e Go-Live', hours: 52 },
          ].map((row) => (
            <tr key={row.phase}>
              <td className="font-medium">{row.phase}</td>
              <td>{row.hours}h</td>
              <td>{Math.round(row.hours / 2)}h</td>
              <td>{((row.hours / 806) * 100).toFixed(1)}%</td>
            </tr>
          ))}
          <tr className="font-bold bg-[#f1f5f9]">
            <td>TOTAL</td>
            <td>806h</td>
            <td>403h</td>
            <td>100%</td>
          </tr>
        </tbody>
      </table>

      <h2 className="proposal-h2">6. KPIs e Metricas de Sucesso</h2>

      <h3 className="proposal-h3">6.1. KPIs Principais</h3>
      <table className="proposal-table mb-6">
        <thead>
          <tr>
            <th>KPI</th>
            <th>Estado Atual</th>
            <th>Meta Projetada</th>
            <th>Melhoria</th>
          </tr>
        </thead>
        <tbody>
          {kpis.map((row) => (
            <tr key={row.kpi}>
              <td className="font-medium">{row.kpi}</td>
              <td>{row.current}</td>
              <td>{row.target}</td>
              <td className="font-semibold text-[#0055a4]">{row.improvement}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="proposal-h3">6.2. Criterios de Sucesso</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-semibold text-[#1e293b] uppercase tracking-wide mb-2">
            Medicao de Sucesso
          </p>
          <ul className="text-sm text-[#334155] space-y-1 list-disc list-inside ml-2">
            <li>Reducao &gt;80% no tempo manual por ticket</li>
            <li>Acuracia de categorizacao &gt;90%</li>
            <li>SLA compliance &gt;95%</li>
            <li>NPS +15+ pontos em relacao ao baseline</li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold text-[#1e293b] uppercase tracking-wide mb-2">
            Impacto Esperado
          </p>
          <ul className="text-sm text-[#334155] space-y-1 list-disc list-inside ml-2">
            <li>Economias mensuraveis de horas/mes</li>
            <li>Aumento da satisfacao do usuario</li>
            <li>Melhoria na retencao de clientes</li>
            <li>Aumento da produtividade do time</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
