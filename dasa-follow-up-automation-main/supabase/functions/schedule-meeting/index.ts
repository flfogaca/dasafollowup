import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface Recipient {
  name: string;
  email: string;
}

interface MeetingRequest {
  date: string;
  time: string;
  duration: string;
  agenda: string;
  notes: string;
  recipients: Recipient[];
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const body: MeetingRequest = await req.json();
    const { date, time, duration, agenda, notes, recipients } = body;

    const meetingDate = new Date(`${date}T${time}`);
    const formattedDate = meetingDate.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    const formattedTime = meetingDate.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const teamsLink = `https://teams.microsoft.com/l/meetup-join/19%3ameeting_${Date.now()}`;

    const agendaItems = agenda.split('\n').filter(item => item.trim());

    const emailPromises = recipients.map(async (recipient) => {
      const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0891b2 0%, #1e40af 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
    .content { background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; }
    .meeting-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0891b2; }
    .detail-row { display: flex; margin: 10px 0; }
    .detail-label { font-weight: bold; width: 120px; color: #64748b; }
    .detail-value { color: #1e293b; }
    .agenda { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
    .agenda h3 { color: #1e293b; margin-top: 0; }
    .agenda ul { margin: 10px 0; padding-left: 20px; }
    .agenda li { margin: 8px 0; color: #475569; }
    .teams-button { display: inline-block; background: linear-gradient(135deg, #0891b2 0%, #1e40af 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
    .footer { text-align: center; padding: 20px; color: #64748b; font-size: 14px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">Convite: Reunião de Aprovação - PoC</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">Automação Inteligente do Follow-Up do Service Desk</p>
    </div>

    <div class="content">
      <p>Olá <strong>${recipient.name}</strong>,</p>

      <p>Os stakeholders da DASA gostariam de agendar uma reunião de aprovação do projeto de Automação Inteligente do Follow-Up do Service Desk.</p>

      <div class="meeting-details">
        <h3 style="margin-top: 0; color: #1e293b;">Detalhes da Reunião</h3>
        <div class="detail-row">
          <span class="detail-label">Data:</span>
          <span class="detail-value">${formattedDate}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Horário:</span>
          <span class="detail-value">${formattedTime}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Duração:</span>
          <span class="detail-value">${duration} minutos</span>
        </div>
      </div>

      <div class="agenda">
        <h3>Pauta da Reunião</h3>
        <ul>
          ${agendaItems.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      ${notes ? `<div class="agenda"><h3>Observações</h3><p>${notes}</p></div>` : ''}

      <div style="text-align: center;">
        <a href="${teamsLink}" class="teams-button">Entrar na Reunião do Teams</a>
      </div>

      <p style="margin-top: 30px; color: #64748b; font-size: 14px;">
        Ou copie e cole este link no seu navegador:<br>
        <a href="${teamsLink}" style="color: #0891b2;">${teamsLink}</a>
      </p>
    </div>

    <div class="footer">
      <p>Este é um convite automático enviado pelos stakeholders da DASA.</p>
      <p>Equipe DASA: Olavo Gomes, Daniel Gomes, Fabio Alexandre, Jônatan Magno</p>
    </div>
  </div>
</body>
</html>
`;

      const textContent = `
Convite: Reunião de Aprovação - PoC
Automação Inteligente do Follow-Up do Service Desk

Olá ${recipient.name},

Os stakeholders da DASA gostariam de agendar uma reunião de aprovação do projeto de Automação Inteligente do Follow-Up do Service Desk.

Detalhes da Reunião:
- Data: ${formattedDate}
- Horário: ${formattedTime}
- Duração: ${duration} minutos

Pauta da Reunião:
${agendaItems.map(item => `- ${item}`).join('\n')}

${notes ? `Observações:\n${notes}\n` : ''}

Link da Reunião no Teams:
${teamsLink}

Equipe DASA: Olavo Gomes, Daniel Gomes, Fabio Alexandre, Jônatan Magno
`;

      console.log(`Enviando email para ${recipient.email}`);
      console.log(`Assunto: Convite: Reunião de Aprovação - PoC Automação Service Desk`);
      console.log(`Data/Hora: ${formattedDate} às ${formattedTime}`);
      console.log(`Link Teams: ${teamsLink}`);

      return {
        to: recipient.email,
        subject: 'Convite: Reunião de Aprovação - PoC Automação Service Desk',
        html: htmlContent,
        text: textContent,
      };
    });

    const emails = await Promise.all(emailPromises);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Convites enviados com sucesso',
        emails: emails.length,
        meetingDetails: {
          date: formattedDate,
          time: formattedTime,
          duration: `${duration} minutos`,
          teamsLink,
        },
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Erro ao processar agendamento:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Erro desconhecido',
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});
