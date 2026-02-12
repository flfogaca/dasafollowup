import { Printer, ArrowLeft } from 'lucide-react';
import ProposalCover from '../components/proposal/ProposalCover';
import ProposalSummary from '../components/proposal/ProposalSummary';
import ProposalScope from '../components/proposal/ProposalScope';
import ProposalTech from '../components/proposal/ProposalTech';
import ProposalTimeline from '../components/proposal/ProposalTimeline';
import ProposalTeam from '../components/proposal/ProposalTeam';
import ProposalConditions from '../components/proposal/ProposalConditions';

export default function PropostaPDF() {
  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    window.location.hash = '';
  };

  return (
    <div className="proposal-root bg-white min-h-screen">
      <div className="no-print fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#1e293b] text-white rounded-lg hover:bg-[#334155] transition-colors text-sm font-medium shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#0055a4] text-white rounded-lg hover:bg-[#003d7a] transition-colors text-sm font-medium shadow-lg"
        >
          <Printer className="w-4 h-4" />
          Baixar PDF
        </button>
      </div>

      <div className="proposal-container max-w-[210mm] mx-auto px-8 py-6">
        <ProposalCover />
        <div className="proposal-page-break" />
        <ProposalSummary />
        <div className="proposal-page-break" />
        <ProposalScope />
        <div className="proposal-page-break" />
        <ProposalTech />
        <div className="proposal-page-break" />
        <ProposalTimeline />
        <div className="proposal-page-break" />
        <ProposalTeam />
        <div className="proposal-page-break" />
        <ProposalConditions />
      </div>
    </div>
  );
}
