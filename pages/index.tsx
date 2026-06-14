import React from 'react';

const LandingPage = () => {
  const referralLink = "https://poke.com/r/NeHhcUAXopo";
  const royalBlue = "rgb(36, 73, 209)";

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">Poke</div>
          <a 
            href={referralLink}
            className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Começar Agora
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            O Cheat Code de Produtividade que você precisava
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Sua central de comando pessoal. Automatize sua vida via WhatsApp e iMessage com o poder da IA.
          </p>
          <div className="pt-4">
            <a 
              href={referralLink}
              style={{ backgroundColor: royalBlue }}
              className="inline-block px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(36,73,209,0.3)]"
            >
              Ativar meu Poke
            </a>
          </div>
        </div>
      </section>

      {/* Mockup Section */}
      <section className="py-20 px-6">
        <div className="max-w-lg mx-auto bg-[#1c1c1e] rounded-[3rem] p-4 border border-white/10 shadow-2xl">
          <div className="bg-black rounded-[2.5rem] p-6 h-[500px] flex flex-col">
            <div className="flex-1 space-y-4 overflow-hidden">
              <div className="flex justify-end">
                <div className="bg-[#262629] px-4 py-2 rounded-2xl rounded-tr-none max-w-[80%] text-sm">
                  Poke, agende um café com o Daniel na terça às 15h. Ele me mandou um email sobre o novo projeto.
                </div>
              </div>
              <div className="flex justify-start">
                <div style={{ backgroundColor: royalBlue }} className="px-4 py-2 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                  Com certeza! Encontrei o email do Daniel sobre o "Projeto Alpha". Agendei o café para terça, 16 de junho, às 15:00 no seu calendário.
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#262629] px-4 py-2 rounded-2xl rounded-tr-none max-w-[80%] text-sm">
                  Ótimo. Se ele responder, me avise.
                </div>
              </div>
              <div className="flex justify-start">
                <div style={{ backgroundColor: royalBlue }} className="px-4 py-2 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                  Combinado. Criei uma automação para te notificar assim que chegar um email dele.
                </div>
              </div>
            </div>
            <div className="mt-4 bg-[#262629] rounded-full px-4 py-3 text-gray-500 text-sm">
              Mensagem...
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Onde você já está",
                desc: "Nada de apps novos. O Poke vive no seu iMessage ou WhatsApp.",
                icon: "💬"
              },
              {
                title: "Lê seus e-mails",
                desc: "Conecta com Gmail e Outlook para agir por você sem que você precise abrir a caixa de entrada.",
                icon: "✉️"
              },
              {
                title: "Agenda Mágica",
                desc: "Detecta compromissos e resolve conflitos no seu calendário automaticamente.",
                icon: "📅"
              },
              {
                title: "Receitas Customizadas",
                desc: "Crie automações poderosas que conectam suas ferramentas favoritas.",
                icon: "⚡"
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-blue-500/30 transition-colors group">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-blue-900/20 to-black border border-blue-500/20 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Pronto para delegar o trabalho chato?</h2>
          <p className="text-xl text-gray-400">Junte-se a milhares de pessoas que já usam o Poke como braço direito.</p>
          <div className="pt-4">
            <a 
              href={referralLink}
              style={{ backgroundColor: royalBlue }}
              className="inline-block px-10 py-5 rounded-full text-xl font-semibold hover:scale-105 transition-transform shadow-xl"
            >
              Começar agora com meu convite
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 text-center text-gray-600 text-sm">
        <p>© 2026 Poke Landing Page. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
