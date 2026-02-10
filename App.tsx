
import React from 'react';
import { 
  Instagram, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  BarChart, 
  Map as MapIcon,
  Camera,
  Facebook,
  Linkedin
} from 'lucide-react';
import { SERVICES, SYSTEM_BENEFITS, CONTACTS } from './constants';

const App: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${CONTACTS.whatsapp}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-yellow-400 selection:text-black">
      {/* Floating WhatsApp Button */}
      <button 
        onClick={handleWhatsApp}
        className="fixed bottom-8 right-8 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/40 animate-float hover:scale-110 active:scale-90 transition-all group overflow-hidden"
        aria-label="Falar no WhatsApp"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <MessageCircle className="w-8 h-8 relative z-10" />
      </button>

      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center group cursor-pointer">
            <img 
              src="logo.png" 
              alt="Ação MKT Offline Logo" 
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                // Fallback caso a imagem não seja encontrada durante o desenvolvimento
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML += '<span class="font-black text-xl">AÇÃO <span class="text-yellow-400">MKT</span></span>';
              }}
            />
          </div>
          <nav className="hidden lg:flex gap-8 text-sm font-semibold uppercase tracking-widest text-gray-400">
            <a href="#about" className="nav-link hover:text-yellow-400 transition-colors">Sobre</a>
            <a href="#services" className="nav-link hover:text-yellow-400 transition-colors">Serviços</a>
            <a href="#tech" className="nav-link hover:text-yellow-400 transition-colors">Tecnologia</a>
          </nav>
          <button 
            onClick={handleWhatsApp}
            className="bg-yellow-400 text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-300 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-yellow-400/10 hover:shadow-yellow-400/20"
          >
            CONTATO
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-56 md:pb-40 overflow-hidden bg-texture">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
              “Posso te mostrar como gerar clientes <span className="text-yellow-400">fora da internet?</span>”
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium opacity-90">
              Marketing offline estratégico com monitoramento GPS para transparência total e resultados reais.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={handleWhatsApp}
                className="w-full sm:w-auto bg-[#4F46E5] hover:bg-[#4338CA] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/40 animate-soft-pulse active:scale-95 group"
              >
                <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Falar no WhatsApp
              </button>
              <a 
                href="#services"
                className="w-full sm:w-auto bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95 group"
              >
                Nossos Serviços
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-yellow-400/10 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[150px] rounded-full translate-y-1/2 translate-x-1/2"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 space-y-6">
              <div className="inline-block px-4 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-bold uppercase tracking-widest">
                Quem somos
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">O que é a AÇÃO Marketing Offline?</h2>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  Somos uma empresa de <span className="text-white font-semibold underline decoration-yellow-400 decoration-2 underline-offset-4">marketing offline</span>, focada em presença física e contato direto com o público. 
                </p>
                <p>
                  Atuamos de forma estratégica, criando uma conexão real entre a sua marca e o seu cliente, impactando, engajando e encantando no ponto certo.
                </p>
                <p>
                  Apesar de sermos uma empresa "corpo a corpo", também somos tecnológicos. Contamos com um <span className="text-white font-semibold">sistema exclusivo de monitoramento por GPS</span>, que garante total transparência e controle das ações.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {[
                  'Acesso em tempo real às ações',
                  'Rotas inteligentes pré-definidas',
                  'Melhor aproveitamento da ação',
                  'Resultados mensuráveis'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <CheckCircle2 className="text-yellow-400 w-6 h-6 shrink-0 transition-transform group-hover:scale-110" />
                    <p className="text-gray-200 group-hover:text-white transition-colors">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative group">
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
                  alt="Marketing Strategy Session" 
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-xl">
                    <p className="text-xl font-bold mb-2 text-white">Monitoramento Ativo</p>
                    <p className="text-sm text-gray-300">Cada promotor é rastreado via GPS para garantir que sua marca chegue onde planejado.</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-400 rounded-full mix-blend-overlay blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-texture">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Nossos <span className="text-yellow-400">Produtos</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Estratégias variadas para cada tipo de negócio e objetivo de mercado.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className="bg-[#111] border border-white/5 p-8 rounded-3xl hover:border-yellow-400/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/5 transition-all duration-500 group flex flex-col"
              >
                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                  <div className="text-yellow-400 group-hover:text-yellow-300 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">{service.description}</p>
                <div className="space-y-3 pt-6 border-t border-white/5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400/60 mb-1">Impactos:</p>
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-gray-300 group-hover:text-gray-100 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology / Differential Section */}
      <section id="tech" className="py-20 bg-indigo-950/20 relative overflow-hidden group/tech">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Qual é o nosso diferencial?</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Desenvolvemos um <span className="text-yellow-400 font-bold underline decoration-yellow-400/30 underline-offset-8">aplicativo exclusivo</span> para o gerenciamento completo das ações de marketing offline.
              </p>
              <div className="space-y-4">
                <p className="text-gray-400 font-medium">Principais benefícios do nosso sistema:</p>
                {SYSTEM_BENEFITS.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-yellow-400/20 hover:translate-x-3 transition-all duration-300 group"
                  >
                    <div className="text-yellow-400 group-hover:scale-125 transition-transform">{item.icon}</div>
                    <span className="text-gray-200 font-medium group-hover:text-white transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="bg-yellow-400 text-black p-6 rounded-2xl flex items-center gap-4 transform hover:scale-[1.02] transition-transform shadow-xl shadow-yellow-400/5">
                <BarChart className="w-10 h-10 shrink-0" />
                <div>
                  <p className="font-bold text-xl leading-tight">Resultado:</p>
                  <p className="font-medium opacity-80">Mais segurança, eficiência e retorno sobre o investimento em cada ação realizada.</p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative group/phone">
                <div className="absolute inset-0 bg-yellow-400/20 blur-[100px] rounded-full group-hover/phone:opacity-60 transition-opacity"></div>
                <div className="relative bg-[#1a1a1a] p-4 rounded-[3.5rem] border-8 border-[#333] shadow-2xl w-full max-w-[320px] transform hover:rotate-2 transition-transform duration-700">
                  <div className="bg-black aspect-[9/19] rounded-[2.8rem] overflow-hidden relative flex flex-col">
                    <div className="h-8 bg-black flex items-center justify-center">
                      <div className="w-16 h-1 bg-[#222] rounded-full"></div>
                    </div>
                    <div className="flex-1 p-4 flex flex-col gap-4">
                      <div className="h-40 bg-indigo-900/30 rounded-2xl border border-indigo-500/30 flex items-center justify-center overflow-hidden group-hover/phone:bg-indigo-800/40 transition-colors relative">
                         <MapIcon className="w-20 h-20 text-indigo-400 opacity-20" />
                         <div className="absolute flex flex-col items-center">
                            <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping group-hover/phone:animate-[ping_0.5s_infinite]"></div>
                            <div className="w-4 h-4 bg-yellow-400 rounded-full absolute"></div>
                         </div>
                      </div>
                      <div className="h-4 w-2/3 bg-white/10 rounded-full group-hover/phone:bg-white/20 transition-colors"></div>
                      <div className="h-12 bg-white/5 rounded-xl border border-white/10 flex items-center px-4 justify-between group-hover/phone:border-yellow-400/30 transition-colors">
                         <span className="text-[10px] text-gray-400">Promotor: João Silva</span>
                         <span className="text-[10px] text-green-400 flex items-center gap-1">
                           <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                           Ativo
                         </span>
                      </div>
                      <div className="h-12 bg-white/5 rounded-xl border border-white/10 flex items-center px-4 justify-between group-hover/phone:border-yellow-400/30 transition-colors">
                         <span className="text-[10px] text-gray-400">Fotos enviadas: 12</span>
                         <Camera className="w-3 h-3 text-gray-400" />
                      </div>
                      <div className="mt-auto h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-black font-bold text-xs hover:bg-yellow-300 transition-colors cursor-pointer shadow-lg shadow-yellow-400/10">
                        FINALIZAR ROTA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-yellow-400 flex items-center justify-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.03] transition-opacity"></div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-black text-4xl md:text-8xl font-black italic tracking-tighter transform group-hover:scale-105 transition-transform duration-700">
            “CURTIDA NÃO PAGA BOLETO.”
          </h2>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#111] rounded-[3rem] p-10 md:p-20 text-center border border-white/5 relative overflow-hidden group/cta">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-indigo-500 to-yellow-400 transition-all duration-1000 group-hover/cta:h-2"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/10 blur-[100px] rounded-full group-hover/cta:bg-indigo-500/20 transition-all"></div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">Pronto para dominar o <span className="text-yellow-400">OFFLINE?</span></h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">Entre em contato agora e vamos desenhar uma estratégia personalizada para o seu negócio.</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button 
                onClick={handleWhatsApp}
                className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-4 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 active:scale-95 group hover-shine"
              >
                <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8" />
                </div>
                {CONTACTS.whatsappDisplay}
              </button>
              <a 
                href={CONTACTS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-auto bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-8 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-4 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 active:scale-95 group hover-shine"
              >
                <div className="bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <Instagram className="w-8 h-8" />
                </div>
                @{CONTACTS.instagram}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-10 group cursor-default">
            <img 
              src="logo.png" 
              alt="Ação MKT Offline Logo" 
              className="h-16 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML += '<span class="font-black text-2xl">AÇÃO <span class="text-yellow-400">MKT</span> OFFLINE</span>';
              }}
            />
          </div>
          
          <div className="flex justify-center gap-4 mb-10">
            {[
              { icon: <Instagram className="w-5 h-5" />, color: 'hover:bg-pink-600', link: CONTACTS.instagramUrl },
              { icon: <MessageCircle className="w-5 h-5" />, color: 'hover:bg-green-600', link: `https://wa.me/${CONTACTS.whatsapp}` },
              { icon: <Facebook className="w-5 h-5" />, color: 'hover:bg-blue-600', link: '#' },
              { icon: <Linkedin className="w-5 h-5" />, color: 'hover:bg-blue-700', link: '#' },
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:text-white hover:border-transparent hover:-translate-y-1 bg-white/5 backdrop-blur-sm shadow-xl`}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <p className="text-gray-500 text-sm mb-6">© {new Date().getFullYear()} Ação MKT Offline. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-8 text-gray-600 text-[10px] uppercase tracking-[0.3em] font-bold">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Termos</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
