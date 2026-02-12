import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap, TrendingUp, Clock } from 'lucide-react';

export default function Hero() {
  const [ticketCount, setTicketCount] = useState(0);
  const [timePerTicket, setTimePerTicket] = useState(0);

  useEffect(() => {
    const ticketInterval = setInterval(() => {
      setTicketCount((prev) => (prev < 260 ? prev + 8 : 260));
    }, 20);

    const timeInterval = setInterval(() => {
      setTimePerTicket((prev) => (prev < 45 ? prev + 1 : 45));
    }, 30);

    return () => {
      clearInterval(ticketInterval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-cyan-600/5 to-transparent opacity-50" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-600 rounded-full filter blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-slate-300">Transformando Service Desk com IA</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-green-300 bg-clip-text text-transparent leading-tight">
          Automação Inteligente do Follow-Up
        </h1>

        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Reduza a carga manual de monitoramento de tickets, automatize o categorização inteligente e transforme seu Service Desk com IA generativa
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-400 text-sm">Tickets/Dia</span>
            </div>
            <p className="text-3xl font-bold text-white">{ticketCount}</p>
            <p className="text-xs text-slate-500 mt-2">Volume atual de processamento</p>
          </div>

          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-cyan-400" />
              <span className="text-slate-400 text-sm">Min/Ticket</span>
            </div>
            <p className="text-3xl font-bold text-white">{timePerTicket}</p>
            <p className="text-xs text-slate-500 mt-2">Tempo manual reduzido</p>
          </div>

          <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6 backdrop-blur-sm hover:border-green-500 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-5 h-5 text-green-400" />
              <span className="text-slate-400 text-sm">Automação</span>
            </div>
            <p className="text-3xl font-bold text-white">92%</p>
            <p className="text-xs text-slate-500 mt-2">Categorização automática</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById('solution-explorer')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center gap-2 justify-center"
          >
            Explorar Solução
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById('documentation')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-slate-800/50 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:border-slate-600 hover:bg-slate-800 transition-all"
          >
            Ver Documentação
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-800">
          <div>
            <p className="text-2xl font-bold text-white">260+</p>
            <p className="text-sm text-slate-400">Tickets/dia</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">7 dias</p>
            <p className="text-sm text-slate-400">Trigger de monitoramento</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">3x</p>
            <p className="text-sm text-slate-400">Tentativas de contato</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="text-sm text-slate-400">Teams integrado</p>
          </div>
        </div>
      </div>
    </div>
  );
}
