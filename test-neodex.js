// lancé par le test « local » de NeoDex : un mot gagné en cliquant les touches dessinées, un mot perdu, le plein écran et la place prise
// (avec NEO_SHOTS : garde des images du jeu)
module.exports = async ({ pj, sleep }) => {
  const C = code => pj(`(() => { const cv = document.getElementById('hgCanvas'), T = cv.__hg, hg = T.st(); ${code} })()`);
  const shot = async n => { if (!process.env.NEO_SHOTS) return; const d = await pj(`document.getElementById('hgCanvas').toDataURL()`); require('fs').writeFileSync(require('path').join(process.env.NEO_SHOTS, 'pendu-' + n + '.png'), Buffer.from(d.split(',')[1], 'base64')); };
  // un clic sur une touche du clavier dessiné, à ses coordonnées dans le canevas
  const click = c => pj(`(() => { const cv = document.getElementById('hgCanvas'), K = cv.__hg.keys().find(k => k.c === '${c}'), r = cv.getBoundingClientRect(), x = r.left + (K.x + K.w / 2) / 320 * r.width, y = r.top + (K.y + K.h / 2) / 240 * r.height;
    for (const t of ['pointermove', 'pointerdown', 'pointerup']) cv.dispatchEvent(new PointerEvent(t, {bubbles: true, clientX: x, clientY: y})); return 0; })()`);
  await pj(`window.__e = []; addEventListener('error', e => __e.push(e.message)); 0`);
  await pj(`document.getElementById('hgNew').click(), 0`); await sleep(400); await shot('0-depart');
  const miss = await C(`return [...'ZYXWKJQV'].filter(c => !hg.plain.includes(c));`);
  await click(miss[0]); await sleep(300);
  if (await C('return hg.wrong;') !== 1) throw new Error('la touche dessinée ne compte pas une erreur');
  for (const c of await C(`return [...new Set(hg.plain.replace(/[^A-Z]/g, ''))];`)) { await click(c); await sleep(60); }
  await sleep(600); await shot('1-gagne');
  if (await C('return hg.done;') !== 'won') throw new Error('mot non gagné : ' + await C('return hg.done + " " + hg.word;'));
  await pj(`document.getElementById('hgNew').click(), 0`); await sleep(200);
  await C(`for (const c of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') if (!hg.plain.includes(c) && !hg.done) T.guess(c); return 0;`); await sleep(700); await shot('2-perdu');
  if (await C('return hg.done;') !== 'lost') throw new Error('mot non perdu');
  const errs = await pj(`window.__e.join(' | ')`); if (errs) throw new Error('erreur : ' + errs);
  await pj(`document.getElementById('hgFs').click(), 0`); await sleep(700);
  const fs = await pj(`(() => { const c = document.getElementById('hgCanvas'), r = c.getBoundingClientRect(); return document.fullscreenElement === c.parentElement && (Math.abs(r.height - innerHeight) < 3 || Math.abs(r.width - innerWidth) < 3); })()`);
  await pj(`document.fullscreenElement && document.exitFullscreen(), 0`); await sleep(300);
  if (!fs) throw new Error('le plein écran ne remplit pas l\'écran');
  const L = await pj(`(() => { const r = document.getElementById('hgCanvas').getBoundingClientRect(); let s = 0; for (let e = document.getElementById('hgCanvas').parentElement; e; e = e.parentElement) s += e.scrollTop; return { bottom: Math.round(r.bottom + s), h: Math.round(r.height), wh: innerHeight, ww: innerWidth, sw: document.documentElement.scrollWidth }; })()`);
  if (L.bottom > L.wh + 1 || L.sw > L.ww + 1 || L.h < 300) throw new Error('le jeu dépasse la fenêtre ou reste petit : ' + JSON.stringify(L));
  return 'mot gagné aux touches dessinées, mot perdu · plein écran · ' + L.h + ' px dans ' + L.ww + '×' + L.wh;
};
