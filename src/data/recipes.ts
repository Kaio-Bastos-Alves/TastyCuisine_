// Import das imagens das receitas criadas
import boloChocolateFitImg from '../assets/bolo-chocolate-fit.svg'
import overnightOatsImg from '../assets/overnight-oats.svg'
import wrapIntegralImg from '../assets/wrap-integral.svg'
import saladaQuinoaImg from '../assets/salada-quinoa.svg'
import curryGraoBicoImg from '../assets/curry-grao-bico.svg'
import estrogonofeCogumelosImg from '../assets/estrogonofe-cogumelos.svg'
import frangoTemperadoImg from '../assets/frango-temperado.svg'
import mousseChocolateImg from '../assets/mousse-chocolate.svg'
import panquecasAveiaImg from '../assets/panquecas-aveia.svg'
import smoothieBowlImg from '../assets/smoothie-bowl.svg'
import hamburguerLentilhaImg from '../assets/hamburguer-lentilha.svg'
import chipsAbobrinhaImg from '../assets/chips-batata-doce.svg'
import lasanhaAbobrinhaImg from '../assets/lasanha-abobrinha.svg'
import smoothieVerdeImg from '../assets/smoothie-verde.svg'
import salmaoLegumesImg from '../assets/salmao-legumes.svg'
import brownieFitImg from '../assets/brownie-fit.svg'
import tapiocaFitImg from '../assets/tapioca-fit.svg'
import bolinhasCocoImg from '../assets/bolinhas-coco.svg'
import omeleteCogumelos from '../assets/omelete-cogumelos.svg'
import aguaDetoxImg from '../assets/agua-detox.svg'
import peruQuinoaImg from '../assets/peru-quinoa.svg'
import pudimChiaImg from '../assets/pudim-chia.svg'
import vitaminaProteicaImg from '../assets/vitamina-proteica.svg'
import mixCastanhasImg from '../assets/mix-castanhas.svg'
import abobrinhaRefogadaImg from '../assets/abobrinha-refogada.svg'
import chaVerdeImg from '../assets/cha-verde.svg'
import tilapiaArrozImg from '../assets/tilapia-arroz.svg'
import sorveteBananaImg from '../assets/sorvete-banana.svg'

// Placeholder SVG como data URL para receitas que ainda não têm imagem específica
const placeholderImg = "data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='200' height='200' fill='%23F6F6F6'/%3E%3Ccircle cx='100' cy='80' r='30' fill='%239B5DE5' opacity='0.3'/%3E%3Crect x='70' y='120' width='60' height='40' rx='8' fill='%239B5DE5' opacity='0.3'/%3E%3Ctext x='100' y='180' text-anchor='middle' fill='%239B5DE5' font-family='Arial, sans-serif' font-size='12'%3ETastyCuisine%3C/text%3E%3C/svg%3E"

export interface Recipe {
  id: number
  title: string
  category: string
  time: string
  difficulty: 'Fácil' | 'Médio' | 'Difícil'
  likes: number
  image: string
}

export const MOCK_RECIPES: Recipe[] = [
  { id: 1, title: 'Bolo de Chocolate Fit', category: 'Sobremesas Saudáveis', time: '30 min', difficulty: 'Fácil', likes: 150, image: boloChocolateFitImg },
  { id: 2, title: 'Overnight Oats com Chia', category: 'Café da Manhã', time: '5 min', difficulty: 'Fácil', likes: 98, image: overnightOatsImg },
  { id: 3, title: 'Wrap Low Carb de Frango', category: 'Low Carb', time: '20 min', difficulty: 'Médio', likes: 120, image: wrapIntegralImg },
  { id: 4, title: 'Salada Detox de Quinoa', category: 'Detox', time: '25 min', difficulty: 'Fácil', likes: 76, image: saladaQuinoaImg },
  { id: 5, title: 'Snacks de Grão-de-Bico Crocante', category: 'Snacks', time: '35 min', difficulty: 'Fácil', likes: 64, image: curryGraoBicoImg },
  { id: 6, title: 'Strogonoff Vegano de Cogumelos', category: 'Veganas', time: '40 min', difficulty: 'Médio', likes: 87, image: estrogonofeCogumelosImg },
  { id: 7, title: 'Marmita Fit de Frango com Batata Doce', category: 'Marmitas Fit', time: '50 min', difficulty: 'Médio', likes: 110, image: frangoTemperadoImg },
  { id: 8, title: 'Mousse de Cacau e Abacate', category: 'Sobremesas Saudáveis', time: '10 min', difficulty: 'Fácil', likes: 140, image: mousseChocolateImg },
  { id: 9, title: 'Panqueca de Banana e Aveia', category: 'Café da Manhã', time: '15 min', difficulty: 'Fácil', likes: 185, image: panquecasAveiaImg },
  { id: 10, title: 'Smoothie Bowl de Açaí', category: 'Café da Manhã', time: '10 min', difficulty: 'Fácil', likes: 167, image: smoothieBowlImg },
  { id: 11, title: 'Salada de Lentilha com Rúcula', category: 'Veganas', time: '30 min', difficulty: 'Fácil', likes: 92, image: hamburguerLentilhaImg },
  { id: 12, title: 'Chips de Abobrinha no Forno', category: 'Snacks', time: '25 min', difficulty: 'Fácil', likes: 78, image: chipsAbobrinhaImg },
  { id: 13, title: 'Lasanha de Abobrinha Low Carb', category: 'Low Carb', time: '45 min', difficulty: 'Médio', likes: 134, image: lasanhaAbobrinhaImg },
  { id: 14, title: 'Suco Verde Detox', category: 'Detox', time: '5 min', difficulty: 'Fácil', likes: 89, image: smoothieVerdeImg },
  { id: 15, title: 'Marmita de Salmão com Legumes', category: 'Marmitas Fit', time: '35 min', difficulty: 'Médio', likes: 156, image: salmaoLegumesImg },
  { id: 16, title: 'Brownie de Batata Doce', category: 'Sobremesas Saudáveis', time: '40 min', difficulty: 'Médio', likes: 198, image: brownieFitImg },
  { id: 17, title: 'Tapioca Recheada Fit', category: 'Café da Manhã', time: '12 min', difficulty: 'Fácil', likes: 143, image: tapiocaFitImg },
  { id: 18, title: 'Curry de Grão-de-Bico', category: 'Veganas', time: '35 min', difficulty: 'Médio', likes: 105, image: curryGraoBicoImg },
  { id: 19, title: 'Bolinha de Coco Proteica', category: 'Snacks', time: '20 min', difficulty: 'Fácil', likes: 112, image: bolinhasCocoImg },
  { id: 20, title: 'Omelete de Claras com Espinafre', category: 'Low Carb', time: '8 min', difficulty: 'Fácil', likes: 127, image: omeleteCogumelos },
  { id: 21, title: 'Água Saborizada Detox', category: 'Detox', time: '2 min', difficulty: 'Fácil', likes: 67, image: aguaDetoxImg },
  { id: 22, title: 'Marmita de Peru com Quinoa', category: 'Marmitas Fit', time: '40 min', difficulty: 'Médio', likes: 138, image: peruQuinoaImg },
  { id: 23, title: 'Pudim de Chia com Manga', category: 'Sobremesas Saudáveis', time: '15 min', difficulty: 'Fácil', likes: 174, image: pudimChiaImg },
  { id: 24, title: 'Vitamina Verde Energética', category: 'Café da Manhã', time: '7 min', difficulty: 'Fácil', likes: 91, image: vitaminaProteicaImg },
  { id: 25, title: 'Hambúrguer de Lentilha', category: 'Veganas', time: '30 min', difficulty: 'Médio', likes: 119, image: hamburguerLentilhaImg },
  { id: 26, title: 'Mix de Castanhas Temperadas', category: 'Snacks', time: '15 min', difficulty: 'Fácil', likes: 83, image: mixCastanhasImg },
  { id: 27, title: 'Frango Grelhado com Abobrinha', category: 'Low Carb', time: '25 min', difficulty: 'Fácil', likes: 145, image: abobrinhaRefogadaImg },
  { id: 28, title: 'Chá Verde com Gengibre', category: 'Detox', time: '10 min', difficulty: 'Fácil', likes: 72, image: chaVerdeImg },
  { id: 29, title: 'Marmita de Tilápia com Brócolis', category: 'Marmitas Fit', time: '30 min', difficulty: 'Fácil', likes: 162, image: tilapiaArrozImg },
  { id: 30, title: 'Sorvete de Banana Fit', category: 'Sobremesas Saudáveis', time: '5 min', difficulty: 'Fácil', likes: 189, image: sorveteBananaImg },
]
