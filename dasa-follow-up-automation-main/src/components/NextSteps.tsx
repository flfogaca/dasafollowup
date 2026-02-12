import React, { useState } from 'react';
import { CheckSquare, AlertCircle, Users, FileText, Zap } from 'lucide-react';
import SchedulingModal from './SchedulingModal';

export default function NextSteps() {
  const [selectedTab, setSelectedTab] = useState('immediate');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const actionItems = {
    immediate: [
      {
        id: 1,
        title: 'Aprovação do Escopo',
        owner: 'Olavo Gomes, Daniel Gomes, Fabio Alexandre, Jônatan Magno',
        deadline: 'Até Segunda (17/02)',
        priority: 'CRÍTICA',
        description: 'Revisão final do escopo técnico e funcional com stakeholders',
        icon: CheckSquare,
      },
      {
        id: 2,
        title: 'Documentação Detalhada',
        owner: 'Jonathan Magno',
        deadline: 'Até Segunda (17/02)',
        priority: 'CRÍTICA',
        description: 'Enviar planilha de Follow-Up, base de conhecimento e prints de tela',
        icon: FileText,
      },
      {
        id: 3,
        title: 'Alinhamento de Arquitetura',
        owner: 'Renan + Tech Team',
        deadline: 'Terça/Quarta (18-19/02)',
        priority: 'ALTA',
        description: 'Reunião técnica para validar integrações ServiceNow, Teams e AD',
        icon: Zap,
      },
      {
        id: 4,
        title: 'Confirmação de Equipe',
        owner: 'Gestão',
        deadline: 'Até Quarta (19/02)',
        priority: 'ALTA',
        description: 'Definir recursos para desenvolvimento - 3 desenvolvedores',
        icon: Users,
      },
    ],
    week2: [
      {
        id: 5,
        title: 'Início do Design',
        owner: 'Tech Lead + Architect',
        deadline: 'Semana de 24/02',
        priority: 'ALTA',
        description: 'Iniciar design detalhado e arquitetura completa',
      },
      {
        id: 6,
        title: 'Setup de Ambientes',
        owner: 'DevOps',
        deadline: 'Semana de 24/02',
        priority: 'ALTA',
        description: 'Provisionar dev, homolog e staging com acesso às APIs',
      },
      {
        id: 7,
        title: 'Prototipagem de IA',
        owner: 'AI Team',
        deadline: 'Semana de 24/02',
        priority: 'MÉDIA',
        description: 'Validar modelo de IA para categorização com dados reais',
      },
      {
        id: 8,
        title: 'Plano de Segurança',
        owner: 'Security/Compliance',
        deadline: 'Semana de 24/02',
        priority: 'ALTA',
        description: 'Definir RLS, criptografia e conformidade LGPD',
      },
    ],
    governance: [
      {
        id: 9,
        title: 'Comitê de Aprovação',
        owner: 'Ana Terra',
        deadline: 'Semanal',
        priority: 'CRÍTICA',
        description: 'Reunião de gestão de incidentes com exposição de backlog',
      },
      {
        id: 10,
        title: 'Reunião Técnica',
        owner: 'Daniel + Tech Lead',
        deadline: 'Bi-semanal',
        priority: 'ALTA',
        description: 'Review técnico de progresso e resolução de blockers',
      },
      {
        id: 11,
        title: 'Reunião de Stakeholders',
        owner: 'Todas as áreas',
        deadline: 'Bi-semanal (Ter/Qua)',
        priority: 'ALTA',
        description: 'Apresentação de progresso e alinhamento com equipes',
      },
      {
        id: 12,
        title: 'Painel de Métricas',
        owner: 'Renan',
        deadline: 'Semanal',
        priority: 'MÉDIA',
        description: 'Acompanhar KPIs do projeto vs. planejado',
      },
    ],
  };

  const getTabContent = () => {
    const items = actionItems[selectedTab as keyof typeof actionItems];
    return items.map((item) => {
      const Icon = item.icon || CheckSquare;
      return (
        <div key={item.id} className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 hover:border-cyan-500 transition-all">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-start gap-3 flex-1">
              <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                item.priority === 'CRÍTICA' ? 'text-red-400' :
                item.priority === 'ALTA' ? 'text-orange-400' :
                'text-yellow-400'
              }`} />
              <div className="flex-1">
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="text-sm text-slate-400 mt-1">{item.description}</p>
              </div>
            </div>
            <span className={`text-xs px-3 py-1 rounded-full flex-shrink-0 ml-4 ${
              item.priority === 'CRÍTICA' ? 'bg-red-500/20 text-red-300 font-bold' :
              item.priority === 'ALTA' ? 'bg-orange-500/20 text-orange-300' :
              'bg-yellow-500/20 text-yellow-300'
            }`}>
              {item.priority}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 border-t border-slate-700 pt-3 mt-3">
            <span>👤 {item.owner}</span>
            <span>📅 {item.deadline}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Próximos Passos</h2>
          <p className="text-xl text-slate-400">Roadmap de ações imediatas e plano de governança</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8 border-b border-slate-700 pb-4">
          <button
            onClick={() => setSelectedTab('immediate')}
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${
              selectedTab === 'immediate'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Imediato (Esta Semana)
          </button>
          <button
            onClick={() => setSelectedTab('week2')}
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${
              selectedTab === 'week2'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Próxima Semana
          </button>
          <button
            onClick={() => setSelectedTab('governance')}
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${
              selectedTab === 'governance'
                ? 'bg-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Governança Contínua
          </button>
        </div>

        <div className="space-y-4 mb-16">
          {getTabContent()}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-900/30 to-green-900/10 border border-green-700/50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <CheckSquare className="w-6 h-6 text-green-400" />
              <h3 className="text-lg font-semibold text-green-300">Deliverables Esperados</h3>
            </div>
            <ul className="space-y-2 text-sm text-green-200">
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Documentação técnica completa
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Plano de project detalhado
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Confirma de equipe e timeline
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Aprovação de arquitetura
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Setup de ambientes OK
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-blue-900/10 border border-blue-700/50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-blue-400" />
              <h3 className="text-lg font-semibold text-blue-300">Decisões Pendentes</h3>
            </div>
            <ul className="space-y-2 text-sm text-blue-200">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">!</span>
                Aprovar escopo e timeline final
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">!</span>
                Alocar recursos (3 desenvolvedores)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">!</span>
                Definir grupo piloto
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">!</span>
                Orçamento de investimento
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">!</span>
                Data de go-live objetivo
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-700/50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Pronto para Começar?</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Este projeto tem potencial transformador para o Service Desk da DASA. Com a aprovação dos stakeholders e alocação de recursos, podemos iniciar a implementação na próxima semana.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            <Zap className="w-5 h-5" />
            Agendar Reunião de Aprovação
          </button>
        </div>
      </div>

      <SchedulingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
