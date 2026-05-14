#!/usr/bin/env node
// Generates individual SVG playing cards + category composite images for the README.
// Mirrors PlayingCard component: cream parchment, gold borders, pip layouts.

const fs   = require('fs');
const path = require('path');

const CW  = 100;  // card width
const CH  = 140;  // card height
const CR  = 10;   // corner radius
const GAP = 14;   // gap between cards in a composite

function isRed(suit)  { return suit === '♥' || suit === '♦'; }
function isJoker(suit){ return suit === 'JOKER'; }
function isFace(rank) { return rank === 'J' || rank === 'Q' || rank === 'K'; }

function suitColor(suit) {
  if (isJoker(suit)) return '#4a0f1a';
  if (isRed(suit))   return '#9e2a2b';
  return '#1a1410';
}

// Normalised pip positions (0..1 fraction of card W×H); r=1 → rotate 180°
const PIPS = {
  '2':  [{x:.5,y:.19},{x:.5,y:.81,r:1}],
  '3':  [{x:.5,y:.19},{x:.5,y:.5},{x:.5,y:.81,r:1}],
  '4':  [{x:.3,y:.19},{x:.7,y:.19},{x:.3,y:.81,r:1},{x:.7,y:.81,r:1}],
  '5':  [{x:.3,y:.19},{x:.7,y:.19},{x:.5,y:.5},{x:.3,y:.81,r:1},{x:.7,y:.81,r:1}],
  '6':  [{x:.3,y:.19},{x:.7,y:.19},{x:.3,y:.5},{x:.7,y:.5},{x:.3,y:.81,r:1},{x:.7,y:.81,r:1}],
  '7':  [{x:.3,y:.19},{x:.7,y:.19},{x:.5,y:.34},{x:.3,y:.5},{x:.7,y:.5},{x:.3,y:.81,r:1},{x:.7,y:.81,r:1}],
  '8':  [{x:.3,y:.19},{x:.7,y:.19},{x:.5,y:.34},{x:.3,y:.5},{x:.7,y:.5},{x:.5,y:.66,r:1},{x:.3,y:.81,r:1},{x:.7,y:.81,r:1}],
  '9':  [{x:.3,y:.19},{x:.7,y:.19},{x:.3,y:.35},{x:.7,y:.35},{x:.5,y:.5},{x:.3,y:.65,r:1},{x:.7,y:.65,r:1},{x:.3,y:.81,r:1},{x:.7,y:.81,r:1}],
  '10': [{x:.3,y:.19},{x:.7,y:.19},{x:.5,y:.30},{x:.3,y:.37},{x:.7,y:.37},{x:.3,y:.63,r:1},{x:.7,y:.63,r:1},{x:.5,y:.70,r:1},{x:.3,y:.81,r:1},{x:.7,y:.81,r:1}],
};

let _uid = 0;
function nextUid() { return `u${++_uid}`; }

function renderCard(rank, suit, ox, oy) {
  const color = suitColor(suit);
  const joker  = isJoker(suit);
  const face   = isFace(rank);
  const ace    = rank === 'A';
  const gid    = `cg_${nextUid()}`;
  const cx     = ox + CW / 2;
  const cy     = oy + CH / 2;

  const base = `
  <defs>
    <linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0%"   stop-color="#fdfaf2"/>
      <stop offset="55%"  stop-color="#f5ecd7"/>
      <stop offset="100%" stop-color="#e8d9b0"/>
    </linearGradient>
  </defs>
  <rect x="${ox}"   y="${oy}"   width="${CW}"    height="${CH}"    rx="${CR}" fill="url(#${gid})"/>
  <rect x="${ox}"   y="${oy}"   width="${CW}"    height="${CH}"    rx="${CR}" fill="none" stroke="#c9a24a" stroke-width="0.6" stroke-opacity="0.4"/>
  <rect x="${ox+5}" y="${oy+5}" width="${CW-10}" height="${CH-10}" rx="7"    fill="none" stroke="#c9a24a" stroke-width="0.6" stroke-opacity="0.5"/>`;

  const rankFs = rank === '10' ? 13 : 16;
  const rankDx = rank === '10' ? 7  : 9;

  const corner = (flip) => {
    const open = flip ? `<g transform="rotate(180,${cx},${cy})">` : '<g>';
    return `  ${open}
    <text x="${ox+rankDx}" y="${oy+22}" font-family="'Cormorant Garamond',Georgia,serif" font-weight="bold" font-size="${rankFs}" fill="${color}">${rank}</text>
    <text x="${ox+11}"     y="${oy+35}" font-size="13" fill="${color}">${suit}</text>
  </g>`;
  };

  let inner = '';

  if (joker) {
    inner = `
  <text x="${ox+9}"  y="${oy+21}" font-family="'Cormorant Garamond',Georgia,serif" font-weight="bold" font-size="12" fill="#4a0f1a">JKR</text>
  <text x="${ox+13}" y="${oy+33}" font-size="11" fill="#4a0f1a">★</text>
  <rect x="${ox+13}" y="${oy+38}" width="${CW-26}" height="${CH-56}" rx="4" fill="none" stroke="#c9a24a" stroke-width="0.5" stroke-opacity="0.5"/>
  <text x="${cx}" y="${cy-8}"  font-size="34" fill="#6b1228" text-anchor="middle" dominant-baseline="middle">★</text>
  <text x="${cx}" y="${cy+20}" font-family="'Cormorant Garamond',Georgia,serif" font-weight="bold" font-size="10" fill="#4a0f1a" text-anchor="middle" letter-spacing="2">JOKER</text>
  <text x="${cx}" y="${cy+31}" font-size="8"  fill="#c9a24a" text-anchor="middle" fill-opacity="0.7">♦ ♣ ♠ ♥</text>
  <g transform="rotate(180,${cx},${cy})">
    <text x="${ox+9}"  y="${oy+21}" font-family="'Cormorant Garamond',Georgia,serif" font-weight="bold" font-size="12" fill="#4a0f1a">JKR</text>
    <text x="${ox+13}" y="${oy+33}" font-size="11" fill="#4a0f1a">★</text>
  </g>`;
  } else if (ace) {
    inner = `
  ${corner(false)}
  <text x="${cx}" y="${cy}" font-size="50" fill="${color}" text-anchor="middle" dominant-baseline="middle">${suit}</text>
  ${corner(true)}`;
  } else if (face) {
    inner = `
  ${corner(false)}
  <rect x="${ox+16}" y="${oy+40}" width="${CW-32}" height="${CH-55}" rx="4" fill="none" stroke="#c9a24a" stroke-width="0.6" stroke-opacity="0.45"/>
  <rect x="${ox+16}" y="${oy+40}" width="${CW-32}" height="${CH-55}" rx="4" fill="#c9a24a" fill-opacity="0.03"/>
  <text x="${ox+20}" y="${oy+52}" font-size="8" fill="#c9a24a" fill-opacity="0.6">❦</text>
  <text x="${ox+CW-14}" y="${oy+52}" font-size="8" fill="#c9a24a" fill-opacity="0.6" transform="rotate(180,${ox+CW-11},${oy+49})">❦</text>
  <text x="${cx}" y="${cy-4}"  font-family="'Cormorant Garamond',Georgia,serif" font-weight="bold" font-size="36" fill="${color}" text-anchor="middle" dominant-baseline="middle">${rank}</text>
  <text x="${cx}" y="${cy+22}" font-size="18" fill="${color}" text-anchor="middle">${suit}</text>
  ${corner(true)}`;
  } else {
    const pips = (PIPS[rank] || []).map(p => {
      const px = ox + p.x * CW;
      const py = oy + p.y * CH;
      const rot = p.r ? ` transform="rotate(180,${px},${py})"` : '';
      return `  <text x="${px}" y="${py}" font-size="15" fill="${color}" text-anchor="middle" dominant-baseline="middle"${rot}>${suit}</text>`;
    }).join('\n');
    inner = `
  ${corner(false)}
${pips}
  ${corner(true)}`;
  }

  return base + inner;
}

function singleSvg(rank, suit) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${CW}" height="${CH}" viewBox="0 0 ${CW} ${CH}">\n${renderCard(rank, suit, 0, 0)}\n</svg>`;
}

function rowSvg(cards) {
  const totalW = cards.length * CW + (cards.length - 1) * GAP;
  const body = cards.map((c, i) => renderCard(c.rank, c.suit, i * (CW + GAP), 0)).join('\n');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalW}" height="${CH}" viewBox="0 0 ${totalW} ${CH}">\n${body}\n</svg>`;
}

const outDir  = path.join(process.cwd(), 'images', 'cards');
const singles = path.join(outDir, 'singles');
fs.mkdirSync(singles, { recursive: true });

// ── All 54 individual cards ───────────────────────────────────────────────────
const SUITS      = ['♠','♥','♦','♣'];
const RANKS      = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const SUIT_NAMES = { '♠':'spades','♥':'hearts','♦':'diamonds','♣':'clubs' };

for (const suit of SUITS) {
  for (const rank of RANKS) {
    const filename = `${rank}-${SUIT_NAMES[suit]}.svg`;
    fs.writeFileSync(path.join(singles, filename), singleSvg(rank, suit));
  }
}
fs.writeFileSync(path.join(singles, 'joker.svg'), singleSvg('★', 'JOKER'));
console.log(`✓  singles/  (${RANKS.length * 4 + 1} cards)`);

// ── Category composite rows ───────────────────────────────────────────────────
const categories = {
  // Answer cards: 4 5 6 7 9 10 A — varied suits for visual contrast
  'answer-cards': [
    { rank:'4',  suit:'♥' },
    { rank:'5',  suit:'♠' },
    { rank:'6',  suit:'♦' },
    { rank:'7',  suit:'♣' },
    { rank:'9',  suit:'♥' },
    { rank:'10', suit:'♠' },
    { rank:'A',  suit:'♦' },
  ],
  // Question cards: both 8s and both Queens
  'question-cards': [
    { rank:'8', suit:'♦' },
    { rank:'8', suit:'♣' },
    { rank:'Q', suit:'♥' },
    { rank:'Q', suit:'♠' },
  ],
  // Jump cards: all four Jacks
  'jump-cards': [
    { rank:'J', suit:'♠' },
    { rank:'J', suit:'♥' },
    { rank:'J', suit:'♦' },
    { rank:'J', suit:'♣' },
  ],
  // Kickback cards: all four Kings
  'kickback-cards': [
    { rank:'K', suit:'♠' },
    { rank:'K', suit:'♥' },
    { rank:'K', suit:'♦' },
    { rank:'K', suit:'♣' },
  ],
  // Penalty cards: both 2s, both 3s, and the Joker
  'penalty-cards': [
    { rank:'2',  suit:'♠' },
    { rank:'2',  suit:'♥' },
    { rank:'3',  suit:'♦' },
    { rank:'3',  suit:'♣' },
    { rank:'★',  suit:'JOKER' },
  ],
};

for (const [name, cards] of Object.entries(categories)) {
  const out = path.join(outDir, `${name}.svg`);
  fs.writeFileSync(out, rowSvg(cards));
  console.log(`✓  ${name}.svg  (${cards.length} cards)`);
}

console.log('\nDone.');
