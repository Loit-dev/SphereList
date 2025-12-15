/* script.js
   JSON embebido + lógica completa del generador
   - Flujo: seleccionar puntos -> facción -> subfacción -> seleccionar líder -> veteranías/artefactos/combatientes
   - Reglas aplicadas: Devotos (+1 PB no-líder), DOM para artefactos, veteranas solo líder + no duplicadas,
     ocultar unidades ilegales por subfacción, Soimi (segundo líder convertido), PB checks, PDF visual y legal.
*/

/* ===========================
   DATA embebida (extraída / reformateada del PDF)
   Formato simple: factions -> { description, subfactions, leaders, combatants, artifacts, veterans }
   =========================== */

const DATA = {
  "Adeptos de Malesur": {
    "description": "Los Adeptos de Malesur.",
    "subfactions": {
      "Iniciados de Malesur": { "description": "Iniciados: sin reglas especiales", "rules": {} },
      "Devotos de Malesur": { "description": "Devotos: los no-líderes cuestan +1 PB; +ARC 2.", "rules": { "nonLeaderExtraCost": 1, "nonLeaderArcBonus": 2 } }
    },
    "leaders": [
      {
        "name": "Mihualo, el Hombre Búho",
        "displayName": "Mihualo, el Hombre Búho",
        "points": 14,
        "unique": true,
        "DOM": 4,
        "stats": { "DOM": 4, "EST": 2, "ORD": 3, "MOV": 4, "DES": 2, "POT": 2, "CON": 3, "ARC": 4, "HER": 4, "TAM": 3, "AME": 1, "AGA": 3 },
        "weapons": [ { "name": "Pequeñas Garras", "rules": ["Ataque básico de melé"] } ],
        "abilities": [
          { "name": "Bendición de la Tramontana", "range": "8\"", "rules": ["Ignora línea de visión", "Objetivo aliado no trabado se desplaza 4\" ignorando áreas de defensa"] },
          { "name": "Bendición Interior", "range": "8\"", "rules": ["Objetivo aliado obtiene DES+1, POT+1 y CON+1 hasta el inicio de la siguiente ronda amiga"] }
        ],
        "tags": ["Malesur"]
      },
      { "name": "Yenay", "displayName": "Yenay", "points": 5, "unique": true, "DOM": 0, "stats": {}, "weapons": [], "abilities": [], "tags": ["Malesur"] },
      { "name": "Liehnan", "displayName": "Liehnan", "points": 6, "unique": true, "DOM": 0, "stats": {}, "weapons": [], "abilities": [], "tags": ["Malesur"] }
    ],
    "combatants": [
      { "name": "Chico Topo", "displayName": "Chico Topo", "points": 10, "gender": "Hombre", "unique": false, "stats": {}, "weapons": [], "abilities": [] },
      { "name": "Chica Eriza", "displayName": "Chica Eriza", "points": 10, "gender": "Mujer", "unique": false, "stats": {}, "weapons": [], "abilities": [] },
      { "name": "Chicos Mangosta", "displayName": "Chicos Mangosta", "points": 10, "gender": "Hombre", "unique": false, "stats": {}, "weapons": [], "abilities": [] },
      { "name": "Hombre Águila", "displayName": "Hombre Águila", "points": 10, "gender": "Hombre", "unique": false, "stats": {}, "weapons": [], "abilities": [] },
      { "name": "Hombre Toro", "displayName": "Hombre Toro", "points": 15, "gender": "Hombre", "unique": false, "stats": {}, "weapons": [], "abilities": [] }
    ],
    "artifacts": [
      { "name": "Favor del poderío", "displayName": "Favor del poderío", "points": 0, "domCost": 1, "description": "Este combatiente obtiene FUR +1." },
      { "name": "Favor del sigilo", "displayName": "Favor del sigilo", "points": 0, "domCost": 2, "description": "Solo bandas de Iniciados de Malesur." },
      { "name": "Favor del viento", "displayName": "Favor del viento", "points": 0, "domCost": 2, "description": "Solo líderes con POD." }
    ],
    "veterans": [
      { "name": "Artífice veterano", "displayName": "Artífice veterano", "points": 1, "leaderOnly": true, "description": "El líder obtiene DOM +1" },
      { "name": "Mando veterano", "displayName": "Mando veterano", "points": 1, "leaderOnly": true, "description": "El líder obtiene ORD +1" },
      { "name": "Arcanista veterano", "displayName": "Arcanista veterano", "points": 1, "leaderOnly": true, "description": "El líder obtiene POD +2" }
    ]
  },

  "Vástagos de Kurgan": {
    "description": "Vástagos de Kurgan. Cohesión inicial 3.",
    "subfactions": {
      "Soimi": { "description": "Soimi: permite reclutar un segundo líder Soimi (convertido)", "rules": { "allowSecondSoimi": true } },
      "Regor": { "description": "Regor", "rules": {} }
    },
    "leaders": [
      { "name": "Nek`Org el Profeta", "displayName": "Nek`Org el Profeta", "points": 18, "unique": true, "DOM": 2, "stats": { "DOM": 2, "EST": 3, "ORD": 4 }, "weapons": [], "abilities": [] },
      { "name": "Tir`Abe Muro de Hielo", "displayName": "Tir`Abe Muro de Hielo", "points": 19, "unique": true, "DOM": 2, "stats": { "DOM": 2, "EST": 2, "ORD": 4 }, "weapons": [], "abilities": [] }
    ],
    "combatants": [
      { "name": "Adorador Gélido", "displayName": "Adorador Gélido", "points": 9, "unique": false, "stats": {}, "weapons": [], "abilities": [] },
      { "name": "Enjendro del Hielo", "displayName": "Enjendro del Hielo", "points": 4, "unique": false, "stats": {}, "weapons": [], "abilities": [] }
    ],
    "artifacts": [
      { "name": "Piel de Sabrash", "displayName": "Piel de Sabrash", "points": 0, "domCost": 1, "description": "Este combatiente puede correr al doble aunque tenga enemigos a 4\". El MOV no puede ser reducido." }
    ],
    "veterans": [
      { "name": "Veterano 3", "displayName": "Veterano 3", "points": 4, "description": "" }
    ]
  },

  "Manadas de Urueh": {
    "description": "Manadas de Urueh.",
    "subfactions": {
      "Teokkis": { "description": "Teokkis", "rules": { "teokkis": true } },
      "Golothar": { "description": "Golothar", "rules": { "golothar": true } },
      "Ag-Tharan": { "description": "Ag-Tharan", "rules": { "agtharan": true } }
    },
    "leaders": [
      { "name": "Líder 5", "displayName": "Líder 5", "points": 4, "unique": true, "stats": {}, "weapons": [], "abilities": [] },
      { "name": "Líder 6", "displayName": "Líder 6", "points": 11, "unique": true, "stats": {}, "weapons": [], "abilities": [] }
    ],
    "combatants": [
      { "name": "Combatiente 5", "displayName": "Combatiente 5", "points": 10, "unique": false, "stats": {}, "weapons": [], "abilities": [] },
      { "name": "Combatiente 6", "displayName": "Combatiente 6", "points": 15, "unique": false, "stats": {}, "weapons": [], "abilities": [] }
    ],
    "artifacts": [
      { "name": "Artefacto 5", "displayName": "Artefacto 5", "points": 3, "domCost": 0 },
      { "name": "Artefacto 6", "displayName": "Artefacto 6", "points": 6, "domCost": 0 }
    ],
    "veterans": [
      { "name": "Veterano 5", "displayName": "Veterano 5", "points": 5 },
      { "name": "Veterano 6", "displayName": "Veterano 6", "points": 8 }
    ]
  },

  "Alianza": {
    "description": "La Alianza.",
    "subfactions": {
      "La Alianza": { "description": "Acceso a todos los combatientes, sin regla especial", "rules": {} },
      "Legión de los Mil Corazones": { "description": "Solo combatientes Legión (hombres)", "rules": { "requireTag": "Legión" } },
      "Mercenarias de Isha": { "description": "Solo combatientes Mercenaria de Isha (mujeres)", "rules": { "requireTag": "Mercenaria de Isha" } }
    },
    "leaders": [
      { "name": "Nirlem, el paladín", "displayName": "Nirlem, el paladín", "points": 15, "unique": true, "DOM": 2, "stats": {}, "weapons": [], "abilities": [] },
      { "name": "Rodanes, Brazo de metal", "displayName": "Rodanes, Brazo de metal", "points": 16, "unique": true, "DOM": 2, "stats": {}, "weapons": [], "abilities": [] },
      { "name": "Taem, la carnicera", "displayName": "Taem, la carnicera", "points": 15, "unique": true, "DOM": 2, "stats": {}, "weapons": [], "abilities": [] },
      { "name": "Laroc, la seductora", "displayName": "Laroc, la seductora", "points": 14, "unique": true, "DOM": 4, "gender": "Mujer", "tags": ["Mercenaria de Isha"], "stats": {}, "weapons": [], "abilities": [] }
    ],
    "combatants": [
      { "name": "Combatiente 2", "displayName": "Combatiente 2", "points": 4, "gender": "Hombre", "unique": false },
      { "name": "Combatiente 1", "displayName": "Combatiente 1", "points": 6, "gender": "Mujer", "unique": false }
    ],
    "artifacts": [
      { "name": "Anillo de sanación", "displayName": "Anillo de sanación", "points": 0, "domCost": 1, "description": "Sana 1 herida 1 vez" },
      { "name": "Cadena Lucidez Estratégica", "displayName": "Cadena Lucidez Estratégica", "points": 0, "domCost": 2, "description": "Efecto especial" }
    ],
    "veterans": [
      { "name": "Veterano 7", "displayName": "Veterano 7", "points": 6 },
      { "name": "Veterano 8", "displayName": "Veterano 8", "points": 9 }
    ]
  }
};

/* ===========================
   Estado global
   =========================== */
let maxPoints = 0;
let selectedFaction = '';
let selectedSubfaction = '';
let selectedUnits = []; // { unit, type, adjustedPoints, extra }
let selectedLeaderEntry = null; // reference to leader entry within selectedUnits
let domAvailable = 0;
let domUsed = 0;

/* ===========================
   Helpers DOM
   =========================== */
const el = id => document.getElementById(id);
function clearChildren(node){ if(!node) return; while(node.firstChild) node.removeChild(node.firstChild); }
function stripHtml(s){ return (s||'').replace(/<\/?[^>]+(>|$)/g, ""); }

/* ===========================
   Punto inicial: setPoints
   =========================== */
function setPoints(points){
  maxPoints = points;
  const pointsList = el('points-list');
  if(pointsList) pointsList.innerHTML = `<li class="muted">Lista: ${points} PB</li>`;
  el('faction-title').classList.remove('hidden');
  el('options-title').classList.remove('hidden');
  showFactions();
  updateSummary();
}

/* ===========================
   Mostrar facciones
   =========================== */
function showFactions(){
  const list = el('faction-list');
  if(!list) return;
  clearChildren(list);
  Object.keys(DATA).forEach(f=>{
    const li = document.createElement('li');
    li.textContent = f;
    li.onclick = ()=> selectFaction(f);
    list.appendChild(li);
  });
  list.classList.remove('hidden');
}

/* ===========================
   Selección facción
   =========================== */
function selectFaction(faction){
  selectedFaction = faction;
  selectedSubfaction = '';
  selectedUnits = [];
  selectedLeaderEntry = null;
  domAvailable = domUsed = 0;

  const factionList = el('faction-list');
  if(factionList) { clearChildren(factionList); const li = document.createElement('li'); li.innerHTML = `<strong>${faction}</strong><br>${DATA[faction].description || ''}`; factionList.appendChild(li); }

  // show subfactions
  const optionsList = el('options-list');
  clearChildren(optionsList);
  const subfs = DATA[faction].subfactions || {};
  Object.keys(subfs).forEach(s=>{
    const li = document.createElement('li');
    li.innerHTML = `<strong>${s}</strong><div class="muted">${subfs[s].description || ''}</div>`;
    li.onclick = ()=> selectSubfaction(s);
    optionsList.appendChild(li);
  });
  optionsList.classList.remove('hidden');

  // hide unit sections until subfaction chosen
  ['leader-title','veteran-title','artifact-title','combatant-title'].forEach(id=>el(id).classList.add('hidden'));
  ['leader-list','veteran-list','artifact-list','combatant-list'].forEach(id=> el(id).classList.add('hidden'));
  updateSummary();
}

/* ===========================
   Selección subfacción -> mostrar listas
   =========================== */
function selectSubfaction(sub){
  selectedSubfaction = sub;
  selectedUnits = [];
  selectedLeaderEntry = null;
  domAvailable = domUsed = 0;

  el('selected-option').innerHTML = `<strong>${sub}</strong><br>${DATA[selectedFaction].subfactions[sub].description || ''}`;
  el('selected-option').classList.remove('hidden');

  // reveal lists
  ['leader-title','veteran-title','artifact-title','combatant-title'].forEach(id=>el(id).classList.remove('hidden'));
  ['leader-list','veteran-list','artifact-list','combatant-list'].forEach(id=> el(id).classList.remove('hidden'));

  renderAllLists();
  updateSummary();
}

/* ===========================
   Resumen reglas activas
   =========================== */
function getActiveRules(){
  if(!selectedFaction || !selectedSubfaction) return [];
  const rules = [];
  const sub = DATA[selectedFaction].subfactions[selectedSubfaction] || {};
  if(sub.rules && sub.rules.nonLeaderExtraCost) rules.push(`Devotos: +${sub.rules.nonLeaderExtraCost} PB a no-líderes`);
  if(sub.rules && sub.rules.allowSecondSoimi) rules.push('Soimi: permite reclutar un segundo líder Soimi (convertido)');
  if(sub.rules && sub.rules.teokkis) rules.push('Teokkis: reglas de origen volcánico aplicables');
  if(DATA[selectedFaction].description) rules.push(stripHtml(DATA[selectedFaction].description));
  return rules;
}
function updateSummary(){
  const rs = el('rules-summary');
  const active = getActiveRules();
  if(active.length===0){ rs.classList.add('hidden'); return; }
  rs.classList.remove('hidden');
  rs.innerHTML = `<strong>Reglas activas:</strong><ul>${active.map(r=>`<li>${r}</li>`).join('')}</ul>`;
  updateDOMInfo();
}

/* ===========================
   Render listas (single column)
   =========================== */
function renderAllLists(){
  renderLeaders(); renderCombatants(); renderArtifacts(); renderVeterans(); renderSelected(); addSoimiButtonIfApplicable();
}

function isUnitLegal(unit){
  if(unit.unique && selectedUnits.some(e=>e.unit && e.unit.name === unit.name)) return false;
  const subRules = (DATA[selectedFaction].subfactions[selectedSubfaction] || {}).rules || {};
  if(subRules.requireTag){
    if(!unit.tags || !unit.tags.includes(subRules.requireTag)) return false;
  }
  if(unit.tags && unit.tags.includes('Iniciados only') && selectedSubfaction !== 'Iniciados de Malesur') return false;
  if(unit.tags && unit.tags.includes('Devotos only') && selectedSubfaction !== 'Devotos de Malesur') return false;
  return true;
}

function renderLeaders(){
  const list = el('leader-list'); clearChildren(list);
  (DATA[selectedFaction].leaders || []).forEach(l=>{
    if(!isUnitLegal(l)) return;
    const li = document.createElement('li');
    li.innerHTML = buildUnitHTML(l,'leader');
    li.onclick = ()=> chooseLeader(l);
    list.appendChild(li);
  });
}

function renderCombatants(){
  const list = el('combatant-list'); clearChildren(list);
  const combs = (DATA[selectedFaction].combatants || []);
  combs.forEach(c=>{
    if(!isUnitLegal(c)) return;
    let displayPoints = c.points || 0;
    const subrules = (DATA[selectedFaction].subfactions[selectedSubfaction] || {}).rules || {};
    if(subrules.nonLeaderExtraCost && !c.leader && !c.unique) displayPoints = c.points + subrules.nonLeaderExtraCost;
    const li = document.createElement('li');
    li.innerHTML = buildUnitHTML(c,'combatant',displayPoints);
    li.onclick = ()=> addUnit(c,'combatant');
    list.appendChild(li);
  });
}

function renderArtifacts(){
  const list = el('artifact-list'); clearChildren(list);
  const arts = (DATA[selectedFaction].artifacts || []);
  arts.forEach(a=>{
    if(!isUnitLegal(a)) return;
    const li = document.createElement('li');
    const domText = (typeof a.domCost !== 'undefined') ? ` - DOM:${a.domCost}` : '';
    li.innerHTML = `<strong>${a.displayName || a.name}</strong> - PB:${a.points || 0}${domText}<div class="unit-section">${a.description || ''}</div>`;
    li.onclick = ()=> addUnit(a,'artifact');
    list.appendChild(li);
  });
}

function renderVeterans(){
  const list = el('veteran-list'); clearChildren(list);
  const vets = (DATA[selectedFaction].veterans || []);
  vets.forEach(v=>{
    if(!isUnitLegal(v)) return;
    const li = document.createElement('li');
    li.innerHTML = `<strong>${v.displayName || v.name}</strong> - PB:${v.points || 0}<div class="unit-section">${v.description || ''}</div>`;
    li.onclick = ()=> addVeteran(v);
    list.appendChild(li);
  });
}

/* ===========================
   Build unit HTML (compact like original)
   =========================== */
function buildUnitHTML(u, type, forcedPoints){
  const pts = (typeof forcedPoints !== 'undefined') ? forcedPoints : (u.points || 0);
  let html = `<strong>${u.displayName || u.name}</strong> - PB:${pts}`;
  if(u.DOM) html += ` <span class="muted">(DOM:${u.DOM})</span>`;
  if(u.stats && Object.keys(u.stats).length){
    const s = Object.entries(u.stats).map(([k,v])=>`${k}:${v}`).join(' · ');
    html += `<div class="unit-stats">${s}</div>`;
  }
  if(u.weapons && u.weapons.length){
    html += `<div class="unit-section"><strong>Armas</strong>`;
    u.weapons.forEach(w=>{
      html += `<div>• <strong>${w.name}</strong>${w.rules && w.rules.length ? ` — ${w.rules.join('; ')}` : ''}</div>`;
    });
    html += `</div>`;
  }
  if(u.abilities && u.abilities.length){
    html += `<div class="unit-section"><strong>Habilidades</strong>`;
    u.abilities.forEach(a=>{
      html += `<div><strong>${a.name}${a.range?` (${a.range})`:''}</strong>`;
      if(a.rules && a.rules.length){
        a.rules.forEach(r=> html += `<div>– ${r}</div>`);
      }
      html += `</div>`;
    });
    html += `</div>`;
  }
  if(u.description) html += `<div class="unit-section">${u.description}</div>`;
  return html;
}

/* ===========================
   Selección líder
   =========================== */
function chooseLeader(leader){
  selectedUnits = [];
  selectedLeaderEntry = { unit: leader, type: 'leader', adjustedPoints: leader.points, extra: { veteranies: [] } };
  selectedUnits.push(selectedLeaderEntry);
  domAvailable = leader.DOM || 0;
  domUsed = 0;
  renderSelected();
  renderArtifacts();
  renderVeterans();
  updateSummary();
}

/* ===========================
   Añadir unidad / artifact / veteran
   =========================== */
function addUnit(unit, type){
  if(type === 'artifact' && !selectedLeaderEntry){ alert('Selecciona un líder antes de añadir artefactos.'); return; }
  let adjusted = unit.points || 0;
  const subrules = (DATA[selectedFaction].subfactions[selectedSubfaction] || {}).rules || {};
  if(subrules.nonLeaderExtraCost && type === 'combatant' && !unit.unique && !unit.leader) adjusted = adjusted + subrules.nonLeaderExtraCost;
  if(selectedTotalPoints() + adjusted > maxPoints){ alert('Añadir esta unidad excede el límite de PB.'); return; }
  if(unit.unique && selectedUnits.some(e=>e.unit.name === unit.name)){ alert('No puedes reclutar otra copia de ese personaje único.'); return; }
  if(type === 'artifact'){
    const domCost = unit.domCost || 0;
    if(domUsed + domCost > domAvailable){ alert('No tienes DOM suficiente en tu líder para adquirir este artefacto.'); return; }
    domUsed += domCost;
  }
  selectedUnits.push({ unit, type, adjustedPoints: adjusted, extra: {} });
  renderSelected();
}

function addVeteran(vet){
  if(!selectedLeaderEntry){ alert('Selecciona un líder antes de añadir veteranías'); return; }
  if(selectedUnits.some(e=>e.type==='veteran' && e.unit.name === vet.name)){ alert('Esa veteranía ya está añadida'); return; }
  if(selectedTotalPoints() + vet.points > maxPoints){ alert('No hay PB suficientes'); return; }
  selectedLeaderEntry.extra.veteranies.push(vet.name);
  selectedUnits.push({ unit: vet, type: 'veteran', adjustedPoints: vet.points, extra: { attachedToLeader: true }});
  renderSelected();
}

/* ===========================
   Soimi: agregar segundo líder convertido
   =========================== */
function addSoimiButtonIfApplicable(){
  if(selectedFaction === 'Vástagos de Kurgan' && selectedSubfaction === 'Soimi' && selectedLeaderEntry){
    const list = el('leader-list');
    const exists = Array.from(list.children).some(li => li.dataset && li.dataset.soimiButton);
    if(!exists){
      const li = document.createElement('li');
      li.dataset.soimiButton = '1';
      li.innerHTML = `<strong>Añadir Segundo Líder Soimi (convertido)</strong><div class="muted">Añade un segundo líder Soimi como combatiente modificado</div>`;
      li.onclick = ()=> handleAddSecondSoimi();
      list.insertBefore(li, list.firstChild);
    }
  }
}

function handleAddSecondSoimi(){
  const options = (DATA[selectedFaction].leaders || []).filter(l => l.name !== selectedLeaderEntry.unit.name);
  const names = options.map(o=>o.name).join('\n');
  const pick = prompt(`Introduce el nombre exacto del líder Soimi a añadir:\n${names}`);
  const chosen = options.find(o=>o.name === pick);
  if(!chosen){ alert('Elección inválida'); return; }
  const copy = JSON.parse(JSON.stringify(chosen));
  copy.displayName = (copy.displayName || copy.name) + ' (Segundo Soimi — convertido)';
  copy._isSecondSoimi = true;
  if(selectedTotalPoints() + copy.points > maxPoints){ alert('No hay PB suficientes para añadir segundo líder'); return; }
  selectedUnits.push({ unit: copy, type: 'combatant', adjustedPoints: copy.points, extra: { isSecondSoimi: true } });
  renderSelected();
}

/* ===========================
   Render selected list y controles
   =========================== */
function renderSelected(){
  const list = el('selected-list');
  clearChildren(list);
  selectedUnits.forEach((e, idx)=>{
    const li = document.createElement('li');
    const u = e.unit;
    const pts = e.adjustedPoints || (u.points || 0);
    let html = `<strong>${u.displayName || u.name}</strong> - PB:${pts} <span class="muted">(${e.type})</span>`;
    if(e.type === 'leader' && e.extra.veteranies && e.extra.veteranies.length){
      html += `<div class="unit-section"><strong>Veteranías:</strong> ${e.extra.veteranies.join(', ')}</div>`;
    }
    if(u.description) html += `<div class="unit-section">${u.description}</div>`;
    li.innerHTML = html;
    li.onclick = ()=> { if(confirm(`Quitar ${u.name}?`)) removeSelectedAt(idx); };
    list.appendChild(li);
  });
  el('total-points').textContent = `Total de puntos: ${selectedTotalPoints()} / ${maxPoints}`;
  updateDOMInfo();
  renderLeaders(); renderCombatants(); renderArtifacts(); renderVeterans();
  updateSummary();
}

function selectedTotalPoints(){ return selectedUnits.reduce((s,e)=> s + (e.adjustedPoints || (e.unit.points || 0)), 0); }

function removeSelectedAt(index){
  const entry = selectedUnits[index];
  if(!entry) return;
  if(entry.type === 'artifact'){ domUsed -= (entry.unit.domCost || 0); if(domUsed < 0) domUsed = 0; }
  if(entry.type === 'veteran' && entry.extra && entry.extra.attachedToLeader){
    if(selectedLeaderEntry && selectedLeaderEntry.extra.veteranies){
      selectedLeaderEntry.extra.veteranies = selectedLeaderEntry.extra.veteranies.filter(v => v !== entry.unit.name);
    }
  }
  if(entry.type === 'leader'){
    selectedUnits = [];
    selectedLeaderEntry = null; domAvailable = domUsed = 0;
    renderSelected(); renderAllLists(); return;
  }
  selectedUnits.splice(index,1);
  renderSelected();
}

/* ===========================
   DOM info
   =========================== */
function updateDOMInfo(){
  const elDom = el('dom-info');
  if(!selectedLeaderEntry){ elDom.classList.add('hidden'); return; }
  elDom.classList.remove('hidden');
  elDom.textContent = `DOM usado / disponible: ${domUsed} / ${domAvailable}`;
}

/* ===========================
   PDF generation
   =========================== */
document.addEventListener('click', (e)=>{
  const id = e.target && e.target.id;
  if(id === 'visualPDF') generateVisualPDF();
  if(id === 'legalPDF') generateLegalPDF();
});

function generateVisualPDF(){
  if(selectedUnits.length === 0){ alert('Lista vacía'); return; }
  const user = prompt('Introduce tu nombre de usuario:'); if(!user) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({unit:'cm', format:'a4', orientation:'portrait'});
  const node = document.querySelector('.selected-list-content');
  if(!node){ alert('No se encuentra el contenido'); return; }
  html2canvas(node, { scale: 2 }).then(canvas=>{
    const img = canvas.toDataURL('image/png');
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const margin = 1.5;
    const maxW = pageW - margin*2;
    const maxH = pageH - margin*2;
    const ratio = Math.min(maxW / canvas.width, maxH / canvas.height);
    const w = canvas.width * ratio;
    const h = canvas.height * ratio;
    doc.setFontSize(12);
    doc.text(`Usuario: ${user}`, margin, 1);
    doc.text(`Facción: ${selectedFaction}`, margin, 1.8);
    doc.text(`Subfacción: ${selectedSubfaction}`, margin, 2.6);
    doc.addImage(img,'PNG', margin, 3.4, w, h);
    doc.save('lista_visual.pdf');
  }).catch(err=>{ console.error(err); alert('Error generando PDF visual'); });
}

function generateLegalPDF(){
  if(selectedUnits.length === 0){ alert('Lista vacía'); return; }
  const user = prompt('Introduce tu nombre de usuario:'); if(!user) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({unit:'cm', format:'a4', orientation:'portrait'});
  let y = 1;
  doc.setFontSize(12);
  doc.setFont('helvetica','bold');
  doc.text(`BANDA (${maxPoints} PB)`, 1, y); y += 0.8;
  doc.setFont('helvetica','normal');
  doc.text(`Usuario: ${user}`, 1, y); y += 0.6;
  doc.text(`Facción: ${selectedFaction}`, 1, y); y += 0.6;
  doc.text(`Subfacción: ${selectedSubfaction}`, 1, y); y += 0.8;

  const active = getActiveRules();
  if(active.length){
    doc.setFont('helvetica','bold'); doc.text('Reglas activas:',1,y); y+=0.6; doc.setFont('helvetica','normal');
    active.forEach(r=>{
      doc.text(`- ${r}`,1,y); y+=0.5; if(y>27){ doc.addPage(); y=1; }
    });
    y+=0.3;
  }

  const grouped = { leader:[], veteran:[], artifact:[], combatant:[] };
  selectedUnits.forEach(e=>{
    if(e.type === 'leader') grouped.leader.push(e);
    else if(e.type === 'veteran') grouped.veteran.push(e);
    else if(e.type === 'artifact') grouped.artifact.push(e);
    else grouped.combatant.push(e);
  });

  if(grouped.leader.length){
    doc.setFont('helvetica','bold'); doc.text('Líder:',1,y); y+=0.6; doc.setFont('helvetica','normal');
    grouped.leader.forEach(e=>{ doc.text(`${stripHtml(e.unit.displayName || e.unit.name)} — PB:${e.adjustedPoints}`,1,y); y+=0.5; if(y>27){ doc.addPage(); y=1; }});
    y+=0.2;
  }
  if(grouped.veteran.length){
    doc.setFont('helvetica','bold'); doc.text('Veteranías:',1,y); y+=0.6; doc.setFont('helvetica','normal');
    grouped.veteran.forEach(e=>{ doc.text(`${stripHtml(e.unit.displayName)} — PB:${e.adjustedPoints}`,1,y); y+=0.5; if(y>27){ doc.addPage(); y=1; }});
    y+=0.2;
  }
  if(grouped.artifact.length){
    doc.setFont('helvetica','bold'); doc.text('Artefactos:',1,y); y+=0.6; doc.setFont('helvetica','normal');
    grouped.artifact.forEach(e=>{ doc.text(`${stripHtml(e.unit.displayName)} — PB:${e.adjustedPoints} — DOM:${e.unit.domCost || 0}`,1,y); y+=0.5; if(y>27){ doc.addPage(); y=1; }});
    y+=0.2;
  }
  if(grouped.combatant.length){
    doc.setFont('helvetica','bold'); doc.text('Combatientes:',1,y); y+=0.6; doc.setFont('helvetica','normal');
    grouped.combatant.forEach(e=>{ doc.text(`${stripHtml(e.unit.displayName || e.unit.name)} — PB:${e.adjustedPoints}`,1,y); y+=0.5; if(y>27){ doc.addPage(); y=1; }});
    y+=0.2;
  }
  doc.setFont('helvetica','bold'); doc.text(`TOTAL PB: ${selectedTotalPoints()} / ${maxPoints}`,1,y); y+=0.6;
  doc.text(`DOM usado: ${domUsed} / ${domAvailable}`,1,y);
  doc.save('lista_legal.pdf');
}

/* ===========================
   Inicial: attach to buttons if present
   =========================== */
document.addEventListener('DOMContentLoaded', ()=>{
  // if points already present in DOM they will call setPoints
  const visual = el('visualPDF'), legal = el('legalPDF');
  if(visual) visual.addEventListener('click', generateVisualPDF);
  if(legal) legal.addEventListener('click', generateLegalPDF);
  // initial faction list (will show after user sets points)
});


