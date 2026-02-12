import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 border-b border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-bold text-blue-400">Leega</h3>
                <h3 className="text-lg font-bold text-white">para Dasa</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Transformando Service Desk com automação inteligente e IA generativa para maximizar eficiência operacional
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">Contato</h4>
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                <h5 className="text-white font-semibold mb-3">Leega Tecnologia</h5>
                <a
                  href="mailto:contato@leega.com.br"
                  className="flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  contato@leega.com.br
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-slate-800">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © 2026 <span className="text-blue-400 font-semibold">Leega</span>. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacidade</a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Termos</a>
            <span className="text-slate-700">•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Feedback</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
