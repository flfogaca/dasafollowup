export default function ProposalTech() {
  const integrations = [
    {
      name: 'ServiceNow TSM',
      status: 'Critica',
      description: 'API REST para gestao de tickets',
      deps: 'Aprovacao de API key, permissoes de leitura/escrita',
    },
    {
      name: 'Microsoft Teams',
      status: 'Critica',
      description: 'Microsoft Graph API para envio de mensagens',
      deps: 'App Registration no Azure AD, permissoes Teams',
    },
    {
      name: 'Active Directory',
      status: 'Necessaria',
      description: 'Sincronizacao de usuarios e grupos',
      deps: 'Acesso LDAP ou Microsoft Graph API',
    },
    {
      name: 'AI/ML Service',
      status: 'Critica',
      description: 'OpenAI GPT-4 ou equivalente',
      deps: 'API key, creditos/configuracao',
    },
  ];

  return (
    <div className="proposal-section">
      <h2 className="proposal-h2">3. Escopo Tecnico</h2>

      <h3 className="proposal-h3">3.1. Stack Tecnologica</h3>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="border border-[#e2e8f0] rounded-lg p-4">
          <h4 className="text-sm font-bold text-[#0055a4] mb-2">Frontend</h4>
          <ul className="text-sm text-[#334155] space-y-1">
            <li>React 18.3 com TypeScript</li>
            <li>Vite 5 (Build Tool)</li>
            <li>Tailwind CSS 3.4</li>
            <li>Lucide React (Icons)</li>
          </ul>
        </div>
        <div className="border border-[#e2e8f0] rounded-lg p-4">
          <h4 className="text-sm font-bold text-[#0055a4] mb-2">Backend</h4>
          <ul className="text-sm text-[#334155] space-y-1">
            <li>Supabase (PostgreSQL + Edge Functions)</li>
            <li>Deno Runtime</li>
            <li>Row Level Security (RLS)</li>
            <li>RESTful APIs</li>
          </ul>
        </div>
        <div className="border border-[#e2e8f0] rounded-lg p-4">
          <h4 className="text-sm font-bold text-[#0055a4] mb-2">Inteligencia Artificial</h4>
          <ul className="text-sm text-[#334155] space-y-1">
            <li>OpenAI GPT-4 (modelo principal)</li>
            <li>Arquitetura plugavel (Gemini, Claude)</li>
            <li>API-first, troca sem reescrita</li>
          </ul>
        </div>
        <div className="border border-[#e2e8f0] rounded-lg p-4">
          <h4 className="text-sm font-bold text-[#0055a4] mb-2">Integracoes</h4>
          <ul className="text-sm text-[#334155] space-y-1">
            <li>ServiceNow TSM (API REST)</li>
            <li>Microsoft Teams (Graph API)</li>
            <li>Active Directory (LDAP/Graph)</li>
            <li>Power BI (opcional)</li>
          </ul>
        </div>
      </div>

      <h3 className="proposal-h3">3.2. Arquitetura da Solucao</h3>
      <div className="border border-[#e2e8f0] rounded-lg p-4 mb-6 text-sm font-mono text-[#334155] space-y-2">
        <div className="border border-[#bfdbfe] bg-[#eff6ff] rounded p-2 text-center">
          <span className="font-semibold text-[#0055a4]">FRONTEND LAYER</span>
          <br />
          React Dashboard | Interactive PoC | Real-time Metrics
        </div>
        <div className="text-center text-[#94a3b8]">&#8597;</div>
        <div className="border border-[#bfdbfe] bg-[#eff6ff] rounded p-2 text-center">
          <span className="font-semibold text-[#0055a4]">EDGE FUNCTIONS LAYER</span>
          <br />
          Teams Integration | Categorization Engine | Escalation Logic
        </div>
        <div className="text-center text-[#94a3b8]">&#8597;</div>
        <div className="border border-[#bfdbfe] bg-[#eff6ff] rounded p-2 text-center">
          <span className="font-semibold text-[#0055a4]">DATABASE & STORAGE LAYER</span>
          <br />
          Supabase PostgreSQL | RLS Policies | Event Logging
        </div>
        <div className="text-center text-[#94a3b8]">&#8597;</div>
        <div className="border border-[#bfdbfe] bg-[#eff6ff] rounded p-2 text-center">
          <span className="font-semibold text-[#0055a4]">EXTERNAL APIs LAYER</span>
          <br />
          ServiceNow TSM | Microsoft Teams | Active Directory
        </div>
      </div>

      <h3 className="proposal-h3">3.3. Integracoes Criticas</h3>
      <table className="proposal-table">
        <thead>
          <tr>
            <th>Integracao</th>
            <th>Prioridade</th>
            <th>Descricao</th>
            <th>Dependencias</th>
          </tr>
        </thead>
        <tbody>
          {integrations.map((row) => (
            <tr key={row.name}>
              <td className="font-medium">{row.name}</td>
              <td>{row.status}</td>
              <td>{row.description}</td>
              <td>{row.deps}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="proposal-h3">3.4. Seguranca e Conformidade</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs font-semibold text-[#1e293b] uppercase tracking-wide mb-2">
            Autenticacao e Autorizacao
          </p>
          <ul className="text-sm text-[#334155] space-y-1 list-disc list-inside ml-2">
            <li>OAuth2 com Azure AD (SSO corporativo)</li>
            <li>RBAC com niveis: Admin, Analista, Viewer</li>
            <li>Row Level Security em todas as tabelas</li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold text-[#1e293b] uppercase tracking-wide mb-2">
            Protecao de Dados
          </p>
          <ul className="text-sm text-[#334155] space-y-1 list-disc list-inside ml-2">
            <li>TLS 1.3 para todas as comunicacoes</li>
            <li>AES-256 para dados sensiveis</li>
            <li>Conformidade LGPD</li>
            <li>Auditoria completa de acessos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
