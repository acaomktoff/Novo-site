
import React from 'react';
import { 
  MapPin, 
  Users, 
  Navigation, 
  Car, 
  Search, 
  Tv, 
  Smartphone, 
  BarChart3, 
  ShieldCheck, 
  Clock, 
  Camera, 
  BadgeDollarSign 
} from 'lucide-react';
import { Service, SystemBenefit } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ponto-fixo',
    title: 'Panfletagem em Ponto Fixo Ativo',
    description: 'Ação realizada em locais estratégicos, com abordagem ativa ao público.',
    benefits: ['Alto poder de conversão', 'Contato direto com o público-alvo', 'Fortalecimento da marca no ponto certo'],
    icon: <MapPin className="w-8 h-8 text-yellow-400" />
  },
  {
    id: 'eventos',
    title: 'Panfletagem em Eventos',
    description: 'Distribuição direcionada em feiras, eventos e ações de grande fluxo.',
    benefits: ['Grande volume de pessoas em curto período', 'Público segmentado', 'Excelente custo-benefício'],
    icon: <Users className="w-8 h-8 text-yellow-400" />
  },
  {
    id: 'porta-a-porta',
    title: 'Panfletagem Porta a Porta',
    description: 'Entrega planejada em residências e empresas, com rotas inteligentes.',
    benefits: ['Alcance direto e local', 'Forte presença regional', 'Ação organizada e mensurável'],
    icon: <Navigation className="w-8 h-8 text-yellow-400" />
  },
  {
    id: 'semaforo',
    title: 'Panfletagem em Sinal (Semáforo)',
    description: 'Ação rápida em cruzamentos estratégicos.',
    benefits: ['Alto impacto visual', 'Grande fluxo diário', 'Excelente visibilidade da marca'],
    icon: <Clock className="w-8 h-8 text-yellow-400" />
  },
  {
    id: 'para-brisa',
    title: 'Panfletagem em Para-brisa',
    description: 'Distribuição em veículos estacionados em áreas estratégicas.',
    benefits: ['Alcance massivo', 'Baixo custo por impacto', 'Ideal para promoções e lançamentos'],
    icon: <Car className="w-8 h-8 text-yellow-400" />
  },
  {
    id: 'leads',
    title: 'Pesquisa / Captação de Leads',
    description: 'Coleta de dados e contatos qualificados diretamente no campo.',
    benefits: ['Geração de leads reais', 'Apoio direto ao time comercial', 'Dados para ações futuras'],
    icon: <Search className="w-8 h-8 text-yellow-400" />
  },
  {
    id: 'tv',
    title: 'TV Corporativa / Telas Indoor',
    description: 'Veiculação de vídeos e conteúdos institucionais em pontos estratégicos.',
    benefits: ['Comunicação contínua', 'Reforço de marca', 'Alto poder de retenção visual'],
    icon: <Tv className="w-8 h-8 text-yellow-400" />
  }
];

export const SYSTEM_BENEFITS: SystemBenefit[] = [
  { icon: <MapPin className="w-5 h-5" />, text: 'Rotas pré-definidas, evitando desvios e falhas' },
  { icon: <Clock className="w-5 h-5" />, text: 'Monitoramento em tempo real da equipe em campo' },
  { icon: <Camera className="w-5 h-5" />, text: 'Registro de evidências: fotos enviadas direto do app' },
  { icon: <BarChart3 className="w-5 h-5" />, text: 'Mais controle e confiabilidade com dados claros' },
  { icon: <BadgeDollarSign className="w-5 h-5" />, text: 'Redução de custos e desperdício de material' },
];

export const CONTACTS = {
  whatsapp: '5554981045651',
  whatsappDisplay: '54 98104-5651',
  instagram: 'acao.off',
  instagramUrl: 'https://instagram.com/acao.off'
};
