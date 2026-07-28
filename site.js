// TEU — shared site data. Plain ES module, no dependencies.

export const BRAND = {
  gold: '#B08D57',
  goldLight: '#D8BD8A',
  cream: '#F6F1E7',
  ink: '#171106',
  black: '#000000',
  email: 'infoteupt@gmail.com',
  emailAlt: 'afonsocanas2023@gmail.com',
  phone: '+351 926 177 287',
  phoneHref: '+351926177287',
  address: 'Rua Emília das Neves A 43, Estrada de Benfica',
  city: 'Lisboa, Portugal'
};

export const STRENGTHS = [100, 70, 50, 30];

// ingredients are formulaic across the whole range
function ing(fruit, gender, pct, lang) {
  const fresh = lang === 'en' ? '' : (gender === 'f' ? ' fresca' : ' fresco');
  const F = lang === 'en' ? fruit.en : fruit.pt + fresh;
  const water = lang === 'en' ? 'water' : 'água';
  const sugar = lang === 'en' ? 'sugar' : 'açúcar';
  if (pct === 100) return `${F} (100%).`;
  if (pct === 70) return `${F} (70%), ${water} (25%), ${sugar} (5%).`;
  if (pct === 50) return `${F} (50%), ${water} (42%), ${sugar} (8%).`;
  return `${water[0].toUpperCase() + water.slice(1)} (58%), ${F.toLowerCase()} (30%), ${sugar} (12%).`;
}

// nutrition rows: [kJ, kcal, lipidos, saturados, hc, acucares, fibra, proteinas]
const N = {
  pessego:   { 100:[167,40,0.3,0.0,9.5,8.4,1.5,0.9], 70:[202,48,0.2,0.0,12,11,1.0,0.6], 50:[225,53,0.2,0.0,13,13,0.8,0.5], 30:[248,59,0.1,0.0,15,14,0.4,0.3] },
  maracuja:  { 100:[213,51,0.4,0.1,11,9.8,2.0,1.2], 70:[234,56,0.3,0.1,13,12,1.4,0.8], 50:[248,59,0.2,0.1,14,13,1.0,0.6], 30:[262,62,0.1,0.0,15,15,0.6,0.4] },
  manga:     { 100:[226,54,0.3,0.1,13,12,1.0,0.5], 70:[243,58,0.2,0.1,14,13,0.7,0.4], 50:[255,60,0.2,0.1,15,14,0.5,0.3], 30:[266,63,0.1,0.0,16,15,0.3,0.2] },
  morango:   { 100:[134,32,0.3,0.0,7.0,5.8,1.4,0.7], 70:[179,42,0.2,0.0,9.9,9.1,1.0,0.5], 50:[209,49,0.2,0.0,12,11,0.7,0.4], 30:[239,56,0.1,0.0,14,13,0.4,0.2] },
  tangerina: { 100:[180,43,0.2,0.0,10,9.0,1.0,0.7], 70:[211,50,0.1,0.0,12,11,0.7,0.5], 50:[232,55,0.1,0.0,13,13,0.5,0.4], 30:[252,60,0.1,0.0,15,14,0.3,0.2] },
  coco:      { 100:[159,38,1.5,1.3,8.0,6.5,1.0,0.6], 70:[196,47,1.0,0.9,11,9.6,0.7,0.4], 50:[221,52,0.8,0.7,12,12,0.5,0.3], 30:[246,58,0.4,0.4,14,14,0.3,0.2] },
  framboesa: { 100:[159,38,0.4,0.0,8.5,6.0,4.0,0.9], 70:[196,47,0.3,0.0,11,9.2,2.8,0.6], 50:[221,52,0.2,0.0,13,11,2.0,0.5], 30:[246,58,0.1,0.0,14,13,1.2,0.3] },
  cereja:    { 100:[209,50,0.2,0.0,12,11,1.0,0.8], 70:[231,55,0.1,0.0,13,12,0.7,0.6], 50:[246,58,0.1,0.0,14,14,0.5,0.4], 30:[261,62,0.1,0.0,15,15,0.3,0.2] },
  goiaba:    { 100:[184,44,0.6,0.1,9.5,7.5,3.5,1.2], 70:[214,51,0.4,0.1,12,10,2.4,0.8], 50:[234,55,0.3,0.1,13,12,1.8,0.6], 30:[254,60,0.2,0.0,15,14,1.1,0.4] }
};

const PRICE_A = { 100:'13,50', 70:'10,50', 50:'8,50', 30:'6,50' };
const PRICE_B = { 100:'16,00', 70:'12,50', 50:'10,00', 30:'7,50' };

const RAW = [
  { slug:'maracuja', pt:'Maracujá', en:'Passion fruit', g:'m', accent:'#D9A036',
    liq:['#F7B02A','#D97016'], seeds:true, tier:'A', dil:'1:5 – 1:7',
    nota:{ pt:'O mais pedido da casa. Polpa e sementes de maracujá fresco — aroma tropical intenso e uma acidez viva que corta o álcool. Cor que se vê do outro lado do balcão.',
           en:'The house favourite. Fresh passion fruit pulp and seeds — intense tropical aroma and a live acidity that cuts through spirits. A colour you can see from across the bar.' },
    serve:{ pt:['Sour de maracujá com gin ou cachaça','Espumante + 2 cl de concentrado','Iced tea de maracujá sem álcool'],
            en:['Passion fruit sour with gin or cachaça','Sparkling wine + 2 cl of concentrate','Alcohol-free passion fruit iced tea'] } },
  { slug:'pessego', pt:'Pêssego', en:'Peach', g:'m', accent:'#EFA46B',
    liq:['#EFB275','#D9873A'], tier:'A', dil:'1:4 – 1:6',
    nota:{ pt:'Pêssego amarelo maduro, de aroma floral e doçura redonda com acidez discreta. Corpo aveludado que segura bem gin, espumante e chá gelado.',
           en:'Ripe yellow peach — floral on the nose, round sweetness, discreet acidity. A velvety body that carries gin, sparkling wine and iced tea.' },
    serve:{ pt:['Bellini com espumante bem frio','Iced tea de pêssego, hortelã e limão','Whisky sour com um toque de pêssego'],
            en:['Bellini with well-chilled sparkling wine','Peach iced tea with mint and lemon','Whisky sour with a touch of peach'] } },
  { slug:'manga', pt:'Manga', en:'Mango', g:'f', accent:'#F0B03A',
    liq:['#F8C534','#E09A12'], tier:'A', dil:'1:4 – 1:6',
    nota:{ pt:'Manga madura, doce e amanteigada, com um final ligeiramente resinoso. Casa com destilados brancos, espumante e lima.',
           en:'Ripe mango — sweet, buttery, with a faintly resinous finish. Made for white spirits, sparkling wine and lime.' },
    serve:{ pt:['Margarita de manga com sal de chili','Mango & tonic com lima','Lassi de manga sem álcool'],
            en:['Mango margarita with chilli salt','Mango & tonic with lime','Alcohol-free mango lassi'] } },
  { slug:'morango', pt:'Morango', en:'Strawberry', g:'m', accent:'#C9364A',
    liq:['#D6415A','#8E1024'], tier:'B', dil:'1:4 – 1:6',
    nota:{ pt:'Morango de época, prensado a frio. Vermelho profundo, aroma a fruta acabada de cortar e acidez que não deixa a bebida ficar pesada.',
           en:'Seasonal strawberry, cold-pressed. Deep red, the smell of just-cut fruit, and enough acidity to keep the drink from turning heavy.' },
    serve:{ pt:['Daiquiri de morango sem xaropes','Spritz de morango com Aperol','Limonada de morango e manjericão'],
            en:['Strawberry daiquiri with no syrups','Strawberry spritz with Aperol','Strawberry and basil lemonade'] } },
  { slug:'tangerina', pt:'Tangerina', en:'Tangerine', g:'f', accent:'#E88434',
    liq:['#F79338','#D95A10'], tier:'A', dil:'1:5 – 1:7',
    nota:{ pt:'Sumo e raspa de tangerina. Cítrico luminoso, ligeiramente amargo na ponta — o concentrado mais versátil da gama.',
           en:'Tangerine juice and zest. Luminous citrus with a faint bitter edge — the most versatile concentrate in the range.' },
    serve:{ pt:['Mimosa de tangerina ao brunch','Negroni com um fio de tangerina','Soda de tangerina e alecrim'],
            en:['Tangerine mimosa at brunch','Negroni with a thread of tangerine','Tangerine and rosemary soda'] } },
  { slug:'coco', pt:'Coco', en:'Coconut', g:'m', accent:'#E3D8C2',
    liq:['#F7F1E5','#DED2BC'], opaque:true, tier:'A', dil:'1:3 – 1:5',
    nota:{ pt:'Coco fresco, opaco e sedoso. Sem aromas artificiais: o que se prova é gordura de coco verdadeira. Base para piña coladas e batidos.',
           en:'Fresh coconut — opaque and silky. No artificial aroma: what you taste is real coconut fat. The base for piña coladas and shakes.' },
    serve:{ pt:['Piña colada com ananás fresco','Café gelado com coco','Batido de coco e manga'],
            en:['Piña colada with fresh pineapple','Iced coffee with coconut','Coconut and mango shake'] } },
  { slug:'framboesa', pt:'Framboesa', en:'Raspberry', g:'f', accent:'#B23A6B',
    liq:['#C74A7C','#821F4A'], tier:'B', dil:'1:5 – 1:7',
    nota:{ pt:'Framboesa inteira, com grainha filtrada. Acidez alta, aroma perfumado e uma cor magenta que nenhum xarope industrial consegue.',
           en:'Whole raspberry, seeds filtered out. High acidity, perfumed aroma, and a magenta no industrial syrup can reach.' },
    serve:{ pt:['Clover club clássico','Gin fizz de framboesa','Kombucha de framboesa'],
            en:['Classic clover club','Raspberry gin fizz','Raspberry kombucha'] } },
  { slug:'cereja', pt:'Cereja', en:'Cherry', g:'f', accent:'#7E1F2E',
    liq:['#A02637','#54101C'], tier:'B', dil:'1:5 – 1:7',
    nota:{ pt:'Cereja escura, profunda e quase amadeirada, com o amargor discreto do caroço — feita para whisky, vermute e sours.',
           en:'Dark cherry — deep, almost woody, with the discreet bitterness of the stone. Built for whisky, vermouth and sours.' },
    serve:{ pt:['Manhattan com um fio de cereja','Cherry cola artesanal','Sour de bourbon e cereja'],
            en:['Manhattan with a thread of cherry','Craft cherry cola','Bourbon and cherry sour'] } },
  { slug:'goiaba', pt:'Goiaba', en:'Guava', g:'f', accent:'#E56A57',
    liq:['#EE8163','#CF4638'], tier:'A', dil:'1:4 – 1:6',
    nota:{ pt:'Goiaba rosa, densa e perfumada. Doçura tropical com um travo floral; excelente com rum, tequila e água com gás.',
           en:'Pink guava — dense and perfumed. Tropical sweetness with a floral edge; excellent with rum, tequila and soda.' },
    serve:{ pt:['Daiquiri de goiaba','Paloma de goiaba com toranja','Soda de goiaba e lima'],
            en:['Guava daiquiri','Guava paloma with grapefruit','Guava and lime soda'] } }
];

export const FLAVOURS = RAW.map(f => {
  const price = f.tier === 'B' ? PRICE_B : PRICE_A;
  return {
    ...f,
    href: f.slug,
    strengths: STRENGTHS.map(p => ({
      pct: p,
      price: price[p],
      n: N[f.slug][p],
      ing: { pt: ing({ pt: f.pt, en: f.en }, f.g, p, 'pt'), en: ing({ pt: f.pt, en: f.en }, f.g, p, 'en') }
    }))
  };
});

export const BY_SLUG = Object.fromEntries(FLAVOURS.map(f => [f.slug, f]));

export const CLIENTS = ['House of Pilates', 'Food Fighters', 'Bairro do Avillez'];
