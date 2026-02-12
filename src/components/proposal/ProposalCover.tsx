export default function ProposalCover() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="proposal-page flex flex-col items-center justify-center min-h-[90vh] text-center">
      <div className="mb-16">
        <div className="flex items-center justify-center gap-4 mb-2">
          <span className="text-4xl font-bold text-[#0055a4]">Leega</span>
          <span className="text-2xl text-[#64748b]">|</span>
          <span className="text-4xl font-bold text-[#1e293b]">DASA</span>
        </div>
        <div className="w-24 h-1 bg-[#0055a4] mx-auto mt-4" />
      </div>

      <h1 className="text-3xl font-bold text-[#1e293b] mb-4 leading-tight max-w-xl">
        Proposta Tecnica-Comercial
      </h1>
      <h2 className="text-xl text-[#0055a4] font-semibold mb-8 max-w-lg">
        Automacao Inteligente do Follow-Up Service Desk DASA
      </h2>

      <p className="text-base text-[#475569] mb-12 max-w-md leading-relaxed">
        Sistema de automacao com Inteligencia Artificial para monitoramento,
        categorizacao e follow-up de tickets do Service Desk
      </p>

      <div className="border border-[#e2e8f0] rounded-lg p-6 inline-block text-left">
        <table className="text-sm text-[#475569]">
          <tbody>
            <tr>
              <td className="font-semibold pr-6 py-1 text-[#1e293b]">Cliente:</td>
              <td className="py-1">DASA</td>
            </tr>
            <tr>
              <td className="font-semibold pr-6 py-1 text-[#1e293b]">Fornecedor:</td>
              <td className="py-1">Leega</td>
            </tr>
            <tr>
              <td className="font-semibold pr-6 py-1 text-[#1e293b]">Data:</td>
              <td className="py-1">{formattedDate}</td>
            </tr>
            <tr>
              <td className="font-semibold pr-6 py-1 text-[#1e293b]">Versao:</td>
              <td className="py-1">1.0</td>
            </tr>
            <tr>
              <td className="font-semibold pr-6 py-1 text-[#1e293b]">Status:</td>
              <td className="py-1">Proposta Tecnica-Comercial</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-[#94a3b8] mt-12">
        Documento confidencial - Destinado exclusivamente a DASA
      </p>
    </div>
  );
}
