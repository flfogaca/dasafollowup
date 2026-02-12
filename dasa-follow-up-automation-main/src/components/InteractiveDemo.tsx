import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Send } from 'lucide-react';

interface DemoTicket {
  id: string;
  description: string;
  status: 'novo' | 'categorizado' | 'teams' | 'escalado' | 'fechado';
  category: string;
  attempts: number;
}

export default function InteractiveDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentTicket, setCurrentTicket] = useState<DemoTicket | null>(null);
  const [allTickets, setAllTickets] = useState<DemoTicket[]>([]);
  const [demoStep, setDemoStep] = useState(0);

  const sampleTickets = [
    {
      id: 'INC-001',
      description: 'Usuário não consegue acessar sistemas após mudança de senha',
      category: 'Acesso/AD',
    },
    {
      id: 'INC-002',
      description: 'Relatório de exames não aparece no portal',
      category: 'Sistemas/Exame',
    },
    {
      id: 'REQ-001',
      description: 'Solicitar licença de software Office 365',
      category: 'Requisição',
    },
    {
      id: 'INC-003',
      description: 'Erro ao fazer login no sistema interno',
      category: 'Acesso/Autenticação',
    },
  ];

  useEffect(() => {
    if (!isRunning) return;

    const timer = setTimeout(() => {
      if (demoStep === 0) {
        setCurrentTicket({
          id: sampleTickets[0].id,
          description: sampleTickets[0].description,
          category: '',
          status: 'novo',
          attempts: 0,
        });
        setDemoStep(1);
      } else if (demoStep === 1) {
        if (currentTicket) {
          setCurrentTicket({ ...currentTicket, status: 'categorizado', category: sampleTickets[0].category });
        }
        setDemoStep(2);
      } else if (demoStep === 2) {
        if (currentTicket) {
          setCurrentTicket({ ...currentTicket, status: 'teams', attempts: 1 });
        }
        setDemoStep(3);
      } else if (demoStep === 3) {
        if (currentTicket) {
          setAllTickets([...(currentTicket.status === 'fechado' ? allTickets : [...allTickets, { ...currentTicket, status: 'fechado', attempts: 3 }])]);
          setCurrentTicket(null);
          setDemoStep(0);
        }
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isRunning, demoStep, currentTicket]);

  const resetDemo = () => {
    setIsRunning(false);
    setCurrentTicket(null);
    setAllTickets([]);
    setDemoStep(0);
  };

  const startDemo = () => {
    if (allTickets.length >= sampleTickets.length) {
      resetDemo();
    }
    setIsRunning(!isRunning);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Demo Interativa</h2>
          <p className="text-xl text-slate-400">Veja a automação em ação</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-slate-900/60 border border-slate-700 rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
                <h3 className="font-semibold text-white">Processamento de Ticket</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={startDemo}
                    className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  >
                    {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={resetDemo}
                    className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-8">
                {currentTicket ? (
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <p className="text-xs text-slate-400 mb-1">ID do Ticket</p>
                      <p className="font-mono text-white">{currentTicket.id}</p>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                      <p className="text-xs text-slate-400 mb-1">Descrição</p>
                      <p className="text-slate-200">{currentTicket.description}</p>
                    </div>

                    <div className="space-y-2">
                      <div className={`px-4 py-3 rounded-lg flex items-center gap-3 ${currentTicket.status === 'novo' ? 'bg-yellow-500/20 border border-yellow-600' : 'bg-slate-800/50 border border-slate-700'}`}>
                        <span className={`w-3 h-3 rounded-full ${currentTicket.status === 'novo' ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></span>
                        <span className="text-sm text-slate-200">Recebido</span>
                      </div>

                      <div className={`px-4 py-3 rounded-lg flex items-center gap-3 ${currentTicket.status === 'categorizado' || currentTicket.status === 'teams' || currentTicket.status === 'escalado' || currentTicket.status === 'fechado' ? 'bg-cyan-500/20 border border-cyan-600' : 'bg-slate-800/50 border border-slate-700 opacity-50'}`}>
                        <span className={`w-3 h-3 rounded-full ${currentTicket.status === 'categorizado' || currentTicket.status === 'teams' || currentTicket.status === 'escalado' || currentTicket.status === 'fechado' ? 'bg-cyan-500' : 'bg-slate-600'}`}></span>
                        <span className="text-sm text-slate-200">
                          Categorizado: <span className="font-semibold text-cyan-300">{currentTicket.category || 'Analisando...'}</span>
                        </span>
                      </div>

                      <div className={`px-4 py-3 rounded-lg flex items-center gap-3 ${currentTicket.status === 'teams' || currentTicket.status === 'escalado' || currentTicket.status === 'fechado' ? 'bg-blue-500/20 border border-blue-600' : 'bg-slate-800/50 border border-slate-700 opacity-50'}`}>
                        <span className={`w-3 h-3 rounded-full ${currentTicket.status === 'teams' || currentTicket.status === 'escalado' || currentTicket.status === 'fechado' ? 'bg-blue-500' : 'bg-slate-600'}`}></span>
                        <span className="text-sm text-slate-200">
                          Teams Notification <span className="text-blue-300">(Tentativa {currentTicket.attempts})</span>
                        </span>
                      </div>

                      <div className={`px-4 py-3 rounded-lg flex items-center gap-3 ${currentTicket.status === 'fechado' ? 'bg-green-500/20 border border-green-600' : 'bg-slate-800/50 border border-slate-700 opacity-50'}`}>
                        <span className={`w-3 h-3 rounded-full ${currentTicket.status === 'fechado' ? 'bg-green-500' : 'bg-slate-600'}`}></span>
                        <span className="text-sm text-slate-200">Fechado com Sucesso</span>
                      </div>
                    </div>
                  </div>
                ) : allTickets.length > 0 ? (
                  <div className="space-y-3">
                    <p className="text-slate-400 mb-4">Tickets processados:</p>
                    {allTickets.map((ticket) => (
                      <div key={ticket.id} className="bg-green-500/10 border border-green-700/50 rounded-lg p-4 flex items-center justify-between">
                        <div>
                          <p className="font-mono text-white">{ticket.id}</p>
                          <p className="text-sm text-slate-300">{ticket.category}</p>
                        </div>
                        <span className="text-xs bg-green-500/20 text-green-300 px-3 py-1 rounded-full">Fechado</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-400 mb-4">Clique em "Play" para iniciar a demonstração</p>
                    <button
                      onClick={startDemo}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      Começar Demo
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-4">Fluxo de Processamento</h4>
              <ol className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <span className="text-slate-300">Novo Ticket Recebido</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-cyan-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <span className="text-slate-300">IA Categoriza Automaticamente</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <span className="text-slate-300">Mensagem Enviada via Teams</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                  <span className="text-slate-300">Ticket Processado</span>
                </li>
              </ol>
            </div>

            <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 backdrop-blur-sm">
              <h4 className="font-semibold text-white mb-4">Estatísticas</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Processados</span>
                  <span className="font-semibold text-white">{allTickets.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Taxa de Sucesso</span>
                  <span className="font-semibold text-green-400">100%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Tempo Médio</span>
                  <span className="font-semibold text-cyan-400">~6 seg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400 text-sm">Categorização</span>
                  <span className="font-semibold text-blue-400">92% IA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 border border-slate-700 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6">Cenário Atual vs Futuro</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-red-400 mb-4">Processo Manual (Atual)</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-1">✗</span>
                  <span>Revisão manual de 260+ tickets/dia</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-1">✗</span>
                  <span>45 minutos por ticket em média</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-1">✗</span>
                  <span>Categorização manual propensa a erros</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-1">✗</span>
                  <span>Contato manual sem padronização</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 font-bold mt-1">✗</span>
                  <span>Escalações lentas e inconsistentes</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-green-400 mb-4">Com Automação (Futuro)</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>Processamento automático 24/7</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>Reduzido para 5 minutos por ticket</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>92% acurácia em categorização</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>Contato automático via Teams</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold mt-1">✓</span>
                  <span>Escalação inteligente instantânea</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
