import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Send } from 'lucide-react';

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SchedulingModal({ isOpen, onClose }: SchedulingModalProps) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    duration: '60',
    agenda: 'Revisão do escopo técnico e funcional\nAprovação do cronograma de 16 semanas\nConfirmação de alocação de recursos (3 desenvolvedores)\nDefinição de orçamento e data de go-live',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const dasaTeam = [
    { name: 'Flamarion Fogaça', email: 'flamarion.fogaca@leega.com.br' },
    { name: 'Renan Jordão', email: 'renan.jordao@leega.com.br' },
    { name: 'Jhonattan Reis', email: 'jhonatta.reis@leega.com.br' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/schedule-meeting`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipients: dasaTeam,
        }),
      });

      if (!response.ok) {
        throw new Error('Falha ao agendar reunião');
      }

      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
        setFormData({
          date: '',
          time: '',
          duration: '60',
          agenda: 'Revisão do escopo técnico e funcional\nAprovação do cronograma de 16 semanas\nConfirmação de alocação de recursos (3 desenvolvedores)\nDefinição de orçamento e data de go-live',
          notes: '',
        });
      }, 2000);
    } catch (error) {
      console.error('Erro ao agendar reunião:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Agendar Reunião de Aprovação</h2>
            <p className="text-sm text-slate-400 mt-1">Os convites serão enviados para a equipe da Dasa</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">Destinatários (Equipe Dasa)</h3>
                <ul className="space-y-1 text-sm text-blue-200">
                  {dasaTeam.map((member, index) => (
                    <li key={index}>
                      {member.name} ({member.email})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Data da Reunião
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                <Clock className="w-4 h-4 inline mr-2" />
                Horário
              </label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Duração (minutos)
            </label>
            <select
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="30">30 minutos</option>
              <option value="60">1 hora</option>
              <option value="90">1 hora e 30 minutos</option>
              <option value="120">2 horas</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Pauta da Reunião
            </label>
            <textarea
              required
              rows={6}
              value={formData.agenda}
              onChange={(e) => setFormData({ ...formData, agenda: e.target.value })}
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Observações Adicionais (opcional)
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Adicione informações extras..."
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 resize-none"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-900/30 border border-green-700/50 rounded-lg p-4 text-green-300 text-sm">
              Convites enviados com sucesso para a equipe da Dasa!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-4 text-red-300 text-sm">
              Erro ao enviar convites. Por favor, tente novamente.
            </div>
          )}

          <div className="flex gap-4 pt-4 border-t border-slate-700">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Enviar Convites
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
