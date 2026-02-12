export default function ProposalConditions() {
  const dependencies = [
    { dep: 'Aprovacao API ServiceNow', desc: 'Acesso a API REST do ServiceNow TSM com permissoes de leitura/escrita', resp: 'DASA' },
    { dep: 'Acesso Teams API', desc: 'App Registration no Azure AD com permissoes Microsoft Graph API', resp: 'DASA' },
    { dep: 'Dados AD Sincronizados', desc: 'Acesso ao Active Directory ou Microsoft Graph para sincronizacao', resp: 'DASA' },
    { dep: 'Ambiente de Homologacao', desc: 'Ambiente ServiceNow de homologacao para testes', resp: 'DASA' },
    { dep: 'Credenciais OpenAI', desc: 'API key e configuracao do modelo GPT-4', resp: 'Leega' },
  ];

  const risks = [
    { risk: 'Atraso na aprovacao de APIs', prob: 'Media', impact: 'Alto', mitigation: 'Iniciar processo imediatamente, ambiente de mock para desenvolvimento' },
    { risk: 'Mudancas de escopo', prob: 'Media', impact: 'Medio', mitigation: 'Processo de change request documentado, aprovacao formal' },
    { risk: 'Performance da API de IA', prob: 'Baixa', impact: 'Medio', mitigation: 'Arquitetura plugavel, cache de resultados' },
    { risk: 'Integracao complexa com ServiceNow', prob: 'Media', impact: 'Alto', mitigation: 'PoC tecnica antes do desenvolvimento completo' },
    { risk: 'Resistencia do time', prob: 'Baixa', impact: 'Medio', mitigation: 'Treinamento adequado, envolvimento desde o inicio' },
  ];

  return (
    <div className="proposal-section">
      <h2 className="proposal-h2">7. Dependencias e Riscos</h2>

      <h3 className="proposal-h3">7.1. Dependencias Criticas</h3>
      <table className="proposal-table mb-6">
        <thead>
          <tr>
            <th>Dependencia</th>
            <th>Descricao</th>
            <th>Responsavel</th>
          </tr>
        </thead>
        <tbody>
          {dependencies.map((row) => (
            <tr key={row.dep}>
              <td className="font-medium">{row.dep}</td>
              <td>{row.desc}</td>
              <td>{row.resp}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="proposal-h3">7.2. Riscos Identificados</h3>
      <table className="proposal-table mb-6">
        <thead>
          <tr>
            <th>Risco</th>
            <th>Probabilidade</th>
            <th>Impacto</th>
            <th>Mitigacao</th>
          </tr>
        </thead>
        <tbody>
          {risks.map((row) => (
            <tr key={row.risk}>
              <td className="font-medium">{row.risk}</td>
              <td>{row.prob}</td>
              <td>{row.impact}</td>
              <td>{row.mitigation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="proposal-h2">8. Condicoes Comerciais</h2>

      <h3 className="proposal-h3">8.1. Investimento Total</h3>
      <table className="proposal-table mb-4">
        <thead>
          <tr>
            <th>Componente</th>
            <th>Horas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-medium">Desenvolvimento e Implementacao</td>
            <td>806h</td>
          </tr>
          <tr className="font-bold bg-[#f1f5f9]">
            <td>TOTAL</td>
            <td>806h</td>
          </tr>
        </tbody>
      </table>
      <p className="proposal-text mb-6">
        O investimento sera medido exclusivamente em horas de trabalho da equipe Leega.
        As horas contemplam todas as fases do projeto, desde a descoberta ate o go-live.
      </p>

      <h3 className="proposal-h3">8.2. Condicoes de Pagamento</h3>
      <table className="proposal-table mb-6">
        <thead>
          <tr>
            <th>Marco</th>
            <th>% das Horas</th>
            <th>Horas</th>
            <th>Descricao</th>
          </tr>
        </thead>
        <tbody>
          {[
            { marco: 'Assinatura do contrato', pct: '10%', hours: '80,6h', desc: 'Mobilizacao da equipe' },
            { marco: 'Aprovacao Fase 1', pct: '10%', hours: '80,6h', desc: 'Design e arquitetura aprovados' },
            { marco: 'Entrega Fase 2', pct: '40%', hours: '322,4h', desc: 'Desenvolvimento core entregue' },
            { marco: 'Aprovacao Fase 3', pct: '25%', hours: '201,5h', desc: 'Testes e integracao validados' },
            { marco: 'Go-Live (Fase 5)', pct: '15%', hours: '120,9h', desc: 'Sistema em producao estavel' },
          ].map((row) => (
            <tr key={row.marco}>
              <td className="font-medium">{row.marco}</td>
              <td className="font-semibold text-[#0055a4]">{row.pct}</td>
              <td>{row.hours}</td>
              <td>{row.desc}</td>
            </tr>
          ))}
          <tr className="font-bold bg-[#f1f5f9]">
            <td>TOTAL</td>
            <td>100%</td>
            <td>806h</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <h3 className="proposal-h3">8.3. SLA de Suporte Pos-Deploy</h3>
      <p className="proposal-text mb-3">
        Periodo incluso: 3 meses apos Go-Live (horas ja contabilizadas no escopo).
      </p>
      <table className="proposal-table mb-6">
        <thead>
          <tr>
            <th>Tipo de Suporte</th>
            <th>Tempo de Resposta</th>
            <th>Horario</th>
          </tr>
        </thead>
        <tbody>
          {[
            { type: 'Critico (sistema fora do ar)', time: '2 horas', schedule: '24/7' },
            { type: 'Alto (funcionalidade principal afetada)', time: '4 horas', schedule: 'Horario comercial' },
            { type: 'Medio (funcionalidade secundaria)', time: '8 horas', schedule: 'Horario comercial' },
            { type: 'Baixo (melhorias, duvidas)', time: '24 horas', schedule: 'Horario comercial' },
          ].map((row) => (
            <tr key={row.type}>
              <td className="font-medium">{row.type}</td>
              <td>{row.time}</td>
              <td>{row.schedule}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="proposal-h2">9. Premissas e Exclusoes</h2>

      <h3 className="proposal-h3">9.1. Premissas</h3>
      <ol className="list-decimal list-inside text-sm text-[#334155] space-y-1 mb-4 ml-2">
        <li>Acesso as APIs do ServiceNow sera fornecido pela DASA dentro do prazo acordado</li>
        <li>Ambiente de homologacao ServiceNow disponivel para testes</li>
        <li>Acesso ao Active Directory ou Microsoft Graph API sera fornecido pela DASA</li>
        <li>Time DASA disponivel para validacoes e feedback durante o projeto</li>
        <li>Volume de tickets e metricas atuais sao precisos conforme informado</li>
        <li>Infraestrutura de rede e seguranca da DASA suporta as integracoes propostas</li>
        <li>Aprovacoes internas da DASA ocorrerao dentro dos prazos definidos</li>
      </ol>

      <h3 className="proposal-h3">9.2. Exclusoes</h3>
      <ol className="list-decimal list-inside text-sm text-[#334155] space-y-1 mb-4 ml-2">
        <li>Integracao com sistemas nao mencionados (ex: WhatsApp Business)</li>
        <li>Customizacoes especificas do ServiceNow alem das integracoes de API</li>
        <li>Treinamento extensivo alem do grupo piloto</li>
        <li>Migracao de dados historicos</li>
        <li>Desenvolvimento de funcionalidades nao especificadas neste documento</li>
        <li>Infraestrutura de servidores proprios</li>
        <li>Licencas de software de terceiros (ServiceNow, Teams, OpenAI)</li>
      </ol>

      <h3 className="proposal-h3">9.3. Change Requests</h3>
      <p className="proposal-text mb-4">
        Mudancas de escopo durante o projeto serao tratadas via Change Request formal.
        Cada solicitacao sera avaliada, estimada em horas adicionais e requer aprovacao
        formal da DASA antes da implementacao.
      </p>

      <h2 className="proposal-h2">10. Proximos Passos</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h3 className="proposal-h3">10.1. Aprovacao da Proposta</h3>
          <ol className="list-decimal list-inside text-sm text-[#334155] space-y-1 ml-2">
            <li>Revisao interna DASA desta proposta</li>
            <li>Alinhamento de expectativas e esclarecimento de duvidas</li>
            <li>Negociacao comercial</li>
            <li>Assinatura do contrato e inicio do projeto</li>
          </ol>
        </div>
        <div>
          <h3 className="proposal-h3">10.2. Kick-off do Projeto</h3>
          <ol className="list-decimal list-inside text-sm text-[#334155] space-y-1 ml-2">
            <li>Reuniao de kick-off com stakeholders</li>
            <li>Definicao de cronograma detalhado</li>
            <li>Setup de ambientes e acesso as APIs</li>
            <li>Inicio da Fase 1: Descoberta e Design</li>
          </ol>
        </div>
      </div>

      <div className="border-t border-[#e2e8f0] pt-4 mt-8 text-center">
        <p className="text-xs text-[#94a3b8]">
          Este documento e confidencial e destinado exclusivamente a DASA.
          Qualquer divulgacao nao autorizada e proibida.
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <span className="text-sm font-bold text-[#0055a4]">Leega</span>
          <span className="text-[#cbd5e1]">|</span>
          <span className="text-sm font-bold text-[#1e293b]">DASA</span>
        </div>
      </div>
    </div>
  );
}
