/* -------------------------------------------
   SphereWars — Generador de Bandas (script.js)
   Implementación completa según el manual PDF
   ------------------------------------------- */

/* -------------------------
   DATOS (facciones / subfacciones / unidades)
   Nota: los perfiles tienen propiedades clave:
   - points (PB)
   - DOM (si aplica) para líderes
   - domCost (para artefactos)
   - unique (boolean)
   - gender (si aplica)
   - leader (boolean)
   - tags: array de strings (ej. 'Mercenaria de Isha', 'Legión')
*/
const factions = {
  'Adeptos de Malesur': {
    description: 'Los Adeptos de Malesur.',
    subfactions: {
      'Iniciados de Malesur': { id: 'Iniciados de Malesur', description: 'Iniciados: sin reglas especiales', rules: {} },
      'Devotos de Malesur': {
        id: 'Devotos de Malesur',
        description: 'Devotos: los no-líderes cuestan +1 PB; +ARC 2; efectos adicionales sin Sphere; durante actualización sanan hasta 2 aliados.',
        rules: { nonLeaderExtraCost: 1, nonLeaderArcBonus: 2, devotosMode: true }
      }
    },
    leaders: [
      { name: 'Yenay', displayName: 'Yenay', points: 5, leader: true, DOM: 0, unique: true, characteristics: '' },
      { name: 'Liehnan', displayName: 'Liehnan', points: 6, leader: true, DOM: 0, unique: true, characteristics: '' },
      { name: 'Mihualo, el Hombre Búho', displayName: '<strong>Mihualo, el Hombre Búho</strong>', points: 14, leader: true, DOM: 4, unique: true,
        characteristics: 'DOM:4 EST:2 ORD:3 MOV:4 DES:2 POT:2 CON:3 ARC:4 HER:4 TAM:3 AME:1 AGA:3',
        extraInfo: 'Bendición de la Tramontana / Bendición Interior'
      }
    ],
    combatants: [
      { name: 'Chico Topo', displayName: 'Chico Topo', points: 10, gender: 'Hombre', unique: false, tags: [] },
      { name: 'Chica Eriza', displayName: 'Chica Eriza', points: 10, gender: 'Mujer', unique: false, tags: [] },
      { name: 'Chicos Mangosta', displayName: 'Chicos Mangosta', points: 10, gender: 'Hombre', unique: false, tags: [] },
      { name: 'Hombre Águila', displayName: 'Hombre Águila', points: 10, gender: 'Hombre', unique: false, tags: [] },
      { name: 'Hombre Toro', displayName: 'Hombre Toro', points: 15, gender: 'Hombre', unique: false, tags: [] }
    ],
    artifacts: [
      { name: 'Favor de la dualidad', displayName: 'Favor de la dualidad', points: 0, domCost: 1, description: 'Permite cambiar modo Espíritu de la Bestia once per game', tags: [] },
      { name: 'Favor del camuflaje', displayName: 'Favor del camuflaje', points: 0, domCost: 1, description: 'Solo Iniciados', tags: ['Iniciados only'] },
      { name: 'Favor del crecimiento', displayName: 'Favor del crecimiento', points: 0, domCost: 1, description: 'Solo Devotos', tags: ['Devotos only'] }
    ],
    veterans: [
      { name: 'Artífice veterano', displayName: 'Artífice veterano', points: 1, description: 'Líder obtiene DOM +1', leaderOnly: true },
      { name: 'Mando veterano', displayName: 'Mando veterano', points: 1, description: 'Líder obtiene ORD +1', leaderOnly: true },
      { name: 'Arcanista veterano', displayName: 'Arcanista veterano', points: 1, description: 'Líder obtiene POD +2', leaderOnly: true }
    ]
  },

  'Vástagos de Kurgan': {
    description: 'Vástagos de Kurgan. Cohesión inicial 3. Soimi pueden permitir segundo líder modificado.',
    subfactions: {
      'Soimi': { id: 'Soimi', description: 'Soimi: permite reclutar second leader Soimi modificado', rules: { allowSecondSoimi: true } },
      'Regor': { id: 'Regor', description: 'Regor', rules: {} }
    },
    leaders: [
      { name: 'Nek`Org el Profeta', displayName: '<strong>Nek`Org el Profeta</strong>', points: 18, leader: true, DOM: 2, unique: true },
      { name: 'Tir`Abe Muro de Hielo', displayName: '<strong>Tir`Abe Muro de Hielo</strong>', points: 19, leader: true, DOM: 2, unique: true }
    ],
    combatants: [
      { name: 'Adorador Gélido', displayName: '<strong>Adorador Gélido</strong>', points: 9, unique: false },
      { name: 'Enjendro del Hielo', displayName: '<strong>Enjendro del Hielo</strong>', points: 4, unique: false }
    ],
    artifacts: [
      { name: 'Piel de Sabrash', displayName: 'Piel de Sabrash', points: 0, domCost: 0, description: 'Reducciones MOV no aplican' }
    ],
    veterans: [
      { name: 'Veterano 3', displayName: 'Veterano 3', points: 4, description: 'Veterano genérico' }
    ]
  },

  'Manadas de Urueh': {
    description: 'Manadas de Urueh. Elije volcán de origen (Teokkis, Golothar, Ag-Tharan).',
    subfactions: {
      'Teokkis': { id: 'Teokkis', description: 'Si tienes igual o más combatientes que rival, líder obtiene EST +1', rules: { teokkis: true } },
      'Golothar': { id: 'Golothar', description: 'Cuando un enemigo muere se añade +1 contador de orden (más si cuesta >=8 PB)', rules: { golothar: true } },
      'Ag-Tharan': { id: 'Ag-Tharan', description: 'Cenizas aliados MOV +2', rules: { agtharan: true } }
    },
    leaders: [
      { name: 'Líder 5', displayName: 'Líder 5', points: 4, leader: true, unique: true },
      { name: 'Líder 6', displayName: 'Líder 6', points: 11, leader: true, unique: true }
    ],
    combatants: [
      { name: 'Combatiente 5', displayName: 'Combatiente 5', points: 10, unique: false },
      { name: 'Combatiente 6', displayName: 'Combatiente 6', points: 15, unique: false }
    ],
    artifacts: [
      { name: 'Artefacto 5', displayName: 'Artefacto 5', points: 3, domCost: 0 },
      { name: 'Artefacto 6', displayName: 'Artefacto 6', points: 6, domCost: 0 }
    ],
    veterans: [
      { name: 'Veterano 5', displayName: 'Veterano 5', points: 5, description: '' },
      { name: 'Veterano 6', displayName: 'Veterano 6', points: 8, description: '' }
    ]
  },

  'Alianza': {
    description: 'La Alianza.',
    subfactions: {
      'La Alianza': { id: 'La Alianza', description: 'Acceso a todos los combatientes, sin regla especial', rules: {} },
      'Legión de los Cien Corazones': { id: 'Legión de los Cien Corazones', description: 'Solo combatientes Legión (hombres en tu dataset), regla: Latir del Corazón', rules: { requireTag: 'Legión' } },
      'Mercenarias de Isha': { id: 'Mercenarias de Isha', description: 'Solo combatientes Mercenaria de Isha (mujeres), regla: Inquebrantables', rules: { requireTag: 'Mercenaria de Isha' } }
    },
    leaders: [
      { name: 'Nirlem, el paladín', displayName: '<strong>Nirlem, el paladín</strong>', points: 15, leader: true, DOM: 2, unique: true },
      { name: 'Rodanes, Brazo de metal', displayName: '<strong>Rodanes, Brazo de metal</strong>', points: 16, leader: true, DOM: 2, unique: true },
      { name: 'Taem, la carnicera', displayName: '<strong>Taem, la carnicera</strong>', points: 15, leader: true, DOM: 2, unique: true },
      { name: 'Laroc, la seductora', displayName: '<strong>Laroc, la seductora</strong>', points: 14, leader: true, DOM: 4, unique: true, gender: 'Mujer', tags: ['Mercenaria de Isha'] }
    ],
    combatants: [
      { name: 'Laroc, la seductora (combatiente)', displayName: '<strong>Laroc, la seductora</strong>', points: 14, gender: 'Mujer', unique: true, tags: ['Mercenaria de Isha'] },
      { name: 'Combatiente 2', displayName: 'Combatiente 2', points: 4, gender: 'Hombre', unique: false },
      { name: 'Combatiente 1', displayName: 'Combatiente 1', points: 6, gender: 'Mujer', unique: false }
    ],
    artifacts: [
      { name: 'Anillo de sanación', displayName: 'Anillo de sanación', points: 0, domCost: 1, description: 'Sana 1 herida 1 vez' },
      { name: 'Cadena Lucidez Estratégica', displayName: 'Cadena Lucidez Estratégica', points: 0, domCost: 2, description: 'Describe efecto' }
    ],
    veterans: [
      { name: 'Veterano 7', displayName: 'Veterano 7', points: 6, description: '' },
      { name: 'Veterano 8', displayName: 'Veterano 8', points: 9, description: '' }
    ]
  }
};

/* -------------------------
   Estado global
*/
let maxPoints = 0;
let selectedFaction = '';
let selectedSubfaction = '';
let selectedUnits = []; // {unit, type, adjustedPoints, extra: {isSecondSoimi:false, veteranies:[]}}
let selectedLeader = null; // object ref to chosen leader (if any)
let domAvailable = 0;
let domUsed = 0;

/* -------------------------
   Utilidades
*/
const el = id => document.getElementById(id);
function clearChildren(node){ if(!node) return; while(node.firstChild) node.removeChild(node.firstChild); }

/* -------------------------
   Inicialización - cargar facciones en UI
*/
function setPoints(points){
  maxPoints = points;
  el('points-list').innerHTML = `<li class="muted">Lista: ${points} PB</li>`;
  el('faction-title').classList.remove('hidden');
  el('options-title').classList.remove('hidden');
  showFactions();
  updateSummary();
}

function showFactions(){
  const list = el('faction-list');
  clearChildren(list);
  for(const f in factions){
    const li = document.createElement('li');
    li.textContent = f;
    li.onclick = ()=> selectFaction(f);
    list.appendChild(li);
  }
}

/* -------------------------
   Selección facción y subfacción
*/
function selectFaction(faction){
  selectedFaction = faction;
  selectedSubfaction = '';
  selectedLeader = null;
  selectedUnits = [];
  domAvailable = 0;
  domUsed = 0;
  // show description
  el('selected-faction').innerHTML = `<strong>${faction}</strong><br>${factions[faction].description}`;
  el('selected-faction').classList.remove('hidden');

  // show subfactions
  const optionsList = el('options-list');
  clearChildren(optionsList);
  const subfs = factions[faction].subfactions || {};
  for(const s in subfs){
    const li = document.createElement('li');
    li.innerHTML = `<strong>${s}</strong><div class="muted">${subfs[s].description}</div>`;
    li.onclick = ()=> selectSubfaction(s);
    optionsList.appendChild(li);
  }
  el('options-list').classList.remove('hidden');
  el('leader-title').classList.add('hidden');
  el('combatant-title').classList.add('hidden');
  el('veteran-title').classList.add('hidden');
  el('artifact-title').classList.add('hidden');
  updateSummary();
}

function selectSubfaction(sub){
  selectedSubfaction = sub;
  selectedLeader = null;
  selectedUnits = [];
  domAvailable = 0;
  domUsed = 0;
  el('selected-option').innerHTML = `<strong>${sub}</strong><br>${factions[selectedFaction].subfactions[sub].description}`;
  el('selected-option').classList.remove('hidden');
  // show lists
  el('leader-title').classList.remove('hidden');
  el('combatant-title').classList.remove('hidden');
  el('veteran-title').classList.remove('hidden');
  el('artifact-title').classList.remove('hidden');
  showLeaders();
  showCombatants();
  showArtifacts();
  showVeterans();
  updateSummary();
}

/* -------------------------
   Reglas activas summary
*/
function getActiveRules(){
  if(!selectedFaction || !selectedSubfaction) return [];
  const rules = [];
  const sub = factions[selectedFaction].subfactions[selectedSubfaction];
  if(sub?.rules?.nonLeaderExtraCost) rules.push(`Devotos: +${sub.rules.nonLeaderExtraCost} PB a no-líderes`);
  if(sub?.rules?.allowSecondSoimi) rules.push('Soimi: permite reclutar un segundo líder Soimi (convertido en combatiente)');
  if(sub?.rules?.teokkis) rules.push('Teokkis: si tienes igual o más combatientes que rival, líder +EST +1');
  if(sub?.rules?.golothar) rules.push('Golothar: muertes añaden contadores de orden');
  if(sub?.rules?.agtharan) rules.push('Ag-Tharan: Cenizas MOV +2');
  if(factions[selectedFaction].description) rules.push(factions[selectedFaction].description);
  return rules;
}

function updateSummary(){
  const rs = el('rules-summary');
  const active = getActiveRules();
  if(active.length===0){
    rs.classList.add('hidden');
    return;
  }
  rs.classList.remove('hidden');
  rs.innerHTML = `<strong>Reglas activas:</strong><ul>${active.map(r=>`<li>${r}</li>`).join('')}</ul>`;
  // DOM info
  updateDOMInfo();
}

/* -------------------------
   Mostrar unidades (ocultar ilegales)
*/
function showLeaders(){
  const list = el('leader-list');
  clearChildren(list);
  const leaders = (factions[selectedFaction].leaders || []);
  leaders.forEach(l=>{
    if(!isUnitLegal(l,'leaders')) return;
    const li = document.createElement('li');
    li.innerHTML = `${l.displayName || l.name} - PB:${l.points} ${l.DOM ? `(DOM:${l.DOM})` : ''}`;
    li.onclick = ()=> chooseLeader(l);
    list.appendChild(li);
  });
}

function showCombatants(){
  const list = el('combatant-list');
  clearChildren(list);
  const combatants = (factions[selectedFaction].combatants || []);
  combatants.forEach(c=>{
    if(!isUnitLegal(c,'combatants')) return;
    // apply Devotos +1 display if needed
    let displayPoints = c.points;
    const subrules = factions[selectedFaction].subfactions[selectedSubfaction].rules || {};
    if(subrules.nonLeaderExtraCost && !c.leader && !c.unique){
      displayPoints = c.points + subrules.nonLeaderExtraCost;
    }
    const li = document.createElement('li');
    li.innerHTML = `${c.displayName || c.name} - PB:${displayPoints}`;
    li.onclick = ()=> addUnit(c,'combatants');
    list.appendChild(li);
  });
}

function showArtifacts(){
  const list = el('artifact-list');
  clearChildren(list);
  const arts = (factions[selectedFaction].artifacts || []);
  arts.forEach(a=>{
    if(!isUnitLegal(a,'artifacts')) return;
    const li = document.createElement('li');
    li.innerHTML = `${a.displayName || a.name} - PB:${a.points || 0}${typeof a.domCost!=='undefined' ? ` - DOM:${a.domCost}` : ''}<div class="muted">${a.description || ''}</div>`;
    li.onclick = ()=> addUnit(a,'artifacts');
    list.appendChild(li);
  });
}

function showVeterans(){
  const list = el('veteran-list');
  clearChildren(list);
  const vets = (factions[selectedFaction].veterans || []);
  vets.forEach(v=>{
    if(!isUnitLegal(v,'veterans')) return;
    const li = document.createElement('li');
    li.innerHTML = `${v.displayName || v.name} - PB:${v.points || 0} <div class="muted">${v.description || ''}</div>`;
    li.onclick = ()=> addVeteran(v);
    list.appendChild(li);
  });
}

/* -------------------------
   Legality: si una unidad debe ocultarse según subfacción
   (Si no es legal: no aparece como opción seleccionable)
*/
function isUnitLegal(unit, type){
  if(!selectedFaction || !selectedSubfaction) return false;
  // unique check: hide if already selected
  if(unit.unique && selectedUnits.some(su=>su.unit.name===unit.name)) return false;
  const subRules = factions[selectedFaction].subfactions[selectedSubfaction].rules || {};
  // requireTag rule (Alianza subfactions)
  if(subRules.requireTag){
    if(!unit.tags || !unit.tags.includes(subRules.requireTag)) return false;
  }
  // Iniciados / Devotos tags for artifacts (Favor del camuflaje, Favor del crecimiento)
  if(unit.tags && unit.tags.includes('Iniciados only') && selectedSubfaction!=='Iniciados de Malesur') return false;
  if(unit.tags && unit.tags.includes('Devotos only') && selectedSubfaction!=='Devotos de Malesur') return false;
  return true;
}

/* -------------------------
   Selección de líder
*/
function chooseLeader(leader){
  // If a leader is already selected, ask to replace
  if(selectedLeader && selectedLeader.name === leader.name){
    // already selected; nothing
    return;
  }
  // Reset selectedUnits (we'll allow replacing leader and keep others if they fit -> simpler: reset all)
  selectedUnits = [];
  selectedLeader = leader;
  domAvailable = leader.DOM || 0;
  domUsed = 0;
  // Add leader to selectedUnits array as an entry type 'leader' with veteranies
  selectedUnits.push({unit: leader, type:'leader', adjustedPoints: leader.points, extra: { veteranies: [] }});
  selectedPointsRecalc();
  renderSelectedList();
  // refresh artifact list because DOM-based artifacts may become available
  showArtifacts();
  showVeterans();
  updateDOMInfo();
}

/* -------------------------
   Añadir unit/artifact
*/
function addUnit(unit, type){
  // validation: leader must be chosen first for artifacts/veterans maybe?
  if(type === 'artifacts'){
    if(!selectedLeader){
      alert('Debes seleccionar un líder antes de añadir artefactos (para revisar DOM).');
      return;
    }
  }
  // compute adjusted points (Devotos +1 for non-leader non-unique)
  let adjusted = unit.points || 0;
  const subrules = (factions[selectedFaction].subfactions[selectedSubfaction].rules || {});
  if(subrules.nonLeaderExtraCost && type==='combatants' && !unit.leader && !unit.unique){
    adjusted = adjusted + subrules.nonLeaderExtraCost;
  }
  // PB cap
  if( (selectedTotalPoints() + adjusted) > maxPoints ){
    alert('Añadir esta unidad excede el límite de PB de la lista.');
    return;
  }
  // Unique duplication
  if(unit.unique && selectedUnits.some(su=>su.unit.name === unit.name)){
    alert('No puedes reclutar otra copia de ese personaje único.');
    return;
  }
  // Artifacts: check DOM and PB
  if(type === 'artifacts'){
    const domCost = unit.domCost || 0;
    if(domUsed + domCost > domAvailable){
      alert('No tienes DOM suficiente en tu líder para adquirir este artefacto.');
      return;
    }
    domUsed += domCost;
    updateDOMInfo();
  }

  // add unit
  selectedUnits.push({unit, type, adjustedPoints: adjusted, extra: {}});
  selectedPointsRecalc();
  renderSelectedList();

  // If user added a leader (via second Soimi path) ensure behavior: handled separately
}

/* -------------------------
   Veteranies (solo líder)
*/
function addVeteran(vet){
  if(!selectedLeader){ alert('Selecciona un líder antes de añadir veteranías'); return; }
  // can only add to leader; one copy each
  const leaderEntry = selectedUnits.find(su=>su.type==='leader');
  if(!leaderEntry) return;
  if(leaderEntry.extra.veteranies.includes(vet.name)){
    alert('Ya has añadido esa veteranía al líder.');
    return;
  }
  // cost
  if((selectedTotalPoints() + vet.points) > maxPoints){ alert('No hay PB suficientes'); return; }
  leaderEntry.extra.veteranies.push(vet.name);
  // veteranías cost in PB accounted in total by adding a synthetic unit entry for display
  selectedUnits.push({unit: vet, type:'veteran', adjustedPoints: vet.points, extra: { attachedToLeader: true }});
  selectedPointsRecalc();
  renderSelectedList();
}

/* -------------------------
   Remover unidades desde la lista
*/
function removeFromSelected(index){
  if(index <0 || index >= selectedUnits.length) return;
  const entry = selectedUnits[index];
  // if veteran attached: remove from leader's list as well if necessary
  if(entry.type==='veteran' && entry.extra && entry.extra.attachedToLeader){
    // remove name from leader.extra.veteranies
    const leaderEntry = selectedUnits.find(su=>su.type==='leader');
    if(leaderEntry){
      leaderEntry.extra.veteranies = leaderEntry.extra.veteranies.filter(vn => vn !== entry.unit.name);
    }
  }
  // If artifact, free DOM
  if(entry.type === 'artifacts'){
    domUsed -= (entry.unit.domCost || 0);
    if(domUsed < 0) domUsed = 0;
  }
  // remove the item
  selectedUnits.splice(index,1);
  selectedPointsRecalc();
  renderSelectedList();
  updateDOMInfo();
}

/* -------------------------
   Rendering selected list and totals
*/
function renderSelectedList(){
  const list = el('selected-list');
  clearChildren(list);
  selectedUnits.forEach((entry, idx)=>{
    const li = document.createElement('li');
    const u = entry.unit;
    const pts = entry.adjustedPoints || (u.points || 0);
    let html = `<strong>${u.displayName || u.name}</strong> - PB:${pts} <span class="muted">(${entry.type})</span>`;
    if(entry.type === 'leader' && entry.extra.veteranies && entry.extra.veteranies.length){
      html += `<div class="muted">Veteranías: ${entry.extra.veteranies.join(', ')}</div>`;
    }
    li.innerHTML = html;
    li.onclick = ()=> {
      if(confirm(`Quitar ${u.name} de la lista?`)) removeFromSelected(idx);
    };
    list.appendChild(li);
  });
  el('total-points').textContent = `Total de puntos: ${selectedTotalPoints()} / ${maxPoints}`;
  updateDOMInfo();
  showLeaders(); showCombatants(); showArtifacts(); showVeterans();
  updateSummary();
}

function selectedTotalPoints(){
  return selectedUnits.reduce((s, e)=> s + (e.adjustedPoints || (e.unit.points || 0)), 0);
}
function selectedPointsRecalc(){
  // recompute adjustedPoints if devotos affects
  const subrules = (factions[selectedFaction].subfactions[selectedSubfaction] || {}).rules || {};
  selectedUnits.forEach(e=>{
    if(e.type==='combatants' && subrules.nonLeaderExtraCost && !e.unit.leader && !e.unit.unique){
      e.adjustedPoints = e.unit.points + subrules.nonLeaderExtraCost;
    } else if(e.type!=='veteran'){
      e.adjustedPoints = e.unit.points || 0;
    } // veterans already have points set on push
  });
}

/* -------------------------
   DOM info
*/
function updateDOMInfo(){
  if(!selectedLeader){
    el('dom-info').classList.add('hidden');
    return;
  }
  el('dom-info').classList.remove('hidden');
  el('dom-info').textContent = `DOM usado / disponible: ${domUsed} / ${domAvailable}`;
}

/* -------------------------
   Soimi: añadir segundo líder modificado
   (solo visible si subfaction Soimi)
*/
function addSecondSoimiIfAvailable(){
  // only for Vástagos de Kurgan and Soimi
  if(selectedFaction!=='Vástagos de Kurgan' || selectedSubfaction!=='Soimi') return;
  // need a leader chosen that is Soimi? The rule said: if the leader is a Soimi, you can recruit a second leader Soimi
  // We'll allow adding a second leader from the pool of leaders of Vástagos that are Soimi-type (we'll assume all leaders in this faction are Soimi-capable)
  // The second leader will be converted: loses EST and ORD (we'll symbolize by appending note)
  const possible = factions[selectedFaction].leaders.filter(l => l.name !== (selectedLeader && selectedLeader.name));
  if(possible.length===0) return;
  // Show an option in UI inside leader list
  const list = el('leader-list');
  const li = document.createElement('li');
  li.innerHTML = `<strong>Añadir Segundo Líder Soimi (convertido)</strong><div class="muted">Permite elegir entre líderes disponibles para convertir</div>`;
  li.onclick = ()=> {
    // present quick chooser
    const names = possible.map(p=>p.name).join('\n');
    const pick = prompt(`Introduce el nombre exacto del líder Soimi a añadir:\n${names}`);
    const chosen = possible.find(p=>p.name===pick);
    if(!chosen){ alert('Elección inválida'); return; }
    // create modified copy
    const copy = JSON.parse(JSON.stringify(chosen));
    copy._isSecondSoimi = true;
    copy.displayName = (copy.displayName || copy.name) + ' (Segundo Soimi — convertido)';
    // second leader counts as combatant entry, loses EST and ORD in description (we won't alter underlying numbers except mark)
    copy.points = chosen.points; // cost is original
    // Add as combatant-type entry (not leader)
    // check PB cap
    if((selectedTotalPoints() + copy.points) > maxPoints){ alert('No hay PB suficientes para añadir este segundo líder'); return; }
    selectedUnits.push({unit: copy, type:'combatants', adjustedPoints: copy.points, extra:{isSecondSoimi:true}});
    renderSelectedList();
  };
  // insert at top for attention, but avoid duplicates
  const exists = Array.from(list.children).some(li => li.textContent.includes('Segundo Líder Soimi'));
  if(!exists) list.insertBefore(li, list.firstChild);
}

/* -------------------------
   PDF Generation
   - Visual PDF: html2canvas snapshot of .selected-list-content
   - Legal PDF: jsPDF text A4 with structured listing + DOM/PB totals
*/
document.addEventListener('DOMContentLoaded', ()=>{
  // wire buttons
  const btnV = el('visualPDF');
  const btnL = el('legalPDF');
  if(btnV) btnV.addEventListener('click', generateVisualPDF);
  if(btnL) btnL.addEventListener('click', generateLegalPDF);
  // initial UI
  showFactions();
});

function generateVisualPDF(){
  if(selectedUnits.length===0){ alert('Lista vacía'); return; }
  const user = prompt('Introduce tu nombre de usuario:');
  if(!user) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({unit:'cm',format:'a4',orientation:'portrait'});
  const node = document.querySelector('.selected-list-content');
  if(!node){ alert('No se encuentra el contenido a exportar'); return; }
  html2canvas(node, {scale:2}).then(canvas=>{
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
  if(selectedUnits.length===0){ alert('Lista vacía'); return; }
  const user = prompt('Introduce tu nombre de usuario:');
  if(!user) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({unit:'cm',format:'a4',orientation:'portrait'});
  let y = 1;
  doc.setFontSize(12);
  doc.setFont('helvetica','bold');
  doc.text(`BANDA (${maxPoints} PB)`, 1, y); y += 0.8;
  doc.setFont('helvetica','normal');
  doc.text(`Usuario: ${user}`, 1, y); y += 0.7;
  doc.text(`Facción: ${selectedFaction}`, 1, y); y += 0.7;
  doc.text(`Subfacción: ${selectedSubfaction}`, 1, y); y += 0.9;
  // Active rules
  const active = getActiveRules();
  if(active.length){
    doc.setFont('helvetica','bold'); doc.text('Reglas activas:', 1, y); y+=0.6;
    doc.setFont('helvetica','normal');
    active.forEach(r=>{ doc.text(`- ${stripHtml(r)}`,1,y); y+=0.5; if(y>27){ doc.addPage(); y=1; }});
    y+=0.2;
  }
  // Items by category
  const grouped = { leader:[], veterans:[], artifacts:[], combatants:[], others:[] };
  selectedUnits.forEach(e=>{
    if(e.type==='leader') grouped.leader.push(e);
    else if(e.type==='veteran') grouped.veterans.push(e);
    else if(e.type==='artifacts') grouped.artifacts.push(e);
    else if(e.type==='combatants') grouped.combatants.push(e);
    else grouped.others.push(e);
  });
  // Leader
  if(grouped.leader.length){
    doc.setFont('helvetica','bold'); doc.text('Líder:',1,y); y+=0.6;
    doc.setFont('helvetica','normal');
    grouped.leader.forEach(e=>{
      doc.text(`${e.unit.displayName || e.unit.name} — PB:${e.adjustedPoints}`,1,y); y+=0.6;
      if(e.extra.veteranies && e.extra.veteranies.length){
        doc.text(`Veteranías: ${e.extra.veteranies.join(', ')}`,1,y); y+=0.5;
      }
      if(y>27){ doc.addPage(); y=1; }
    });
  }
  // Veteranías (others already listed)
  if(grouped.veterans.length){
    doc.setFont('helvetica','bold'); doc.text('Veteranías (detached):',1,y); y+=0.6;
    doc.setFont('helvetica','normal');
    grouped.veterans.forEach(e=>{ doc.text(`${e.unit.displayName} — PB:${e.adjustedPoints}`,1,y); y+=0.5; if(y>27){ doc.addPage(); y=1; }});
  }
  // Artifacts (list DOM)
  if(grouped.artifacts.length){
    doc.setFont('helvetica','bold'); doc.text('Artefactos:',1,y); y+=0.6;
    doc.setFont('helvetica','normal');
    grouped.artifacts.forEach(e=>{
      const domC = e.unit.domCost || 0;
      doc.text(`${e.unit.displayName || e.unit.name} — PB:${e.adjustedPoints} — DOM:${domC}`,1,y); y+=0.5;
      if(y>27){ doc.addPage(); y=1; }
    });
  }
  // Combatientes
  if(grouped.combatants.length){
    doc.setFont('helvetica','bold'); doc.text('Combatientes:',1,y); y+=0.6;
    doc.setFont('helvetica','normal');
    grouped.combatants.forEach(e=>{
      doc.text(`${e.unit.displayName || e.unit.name} — PB:${e.adjustedPoints}`,1,y); y+=0.5;
      if(y>27){ doc.addPage(); y=1; }
    });
  }
  // Totals
  y += 0.6;
  doc.setFont('helvetica','bold'); doc.text(`TOTAL PB: ${selectedTotalPoints()} / ${maxPoints}`,1,y); y+=0.6;
  doc.text(`DOM usado: ${domUsed} / ${domAvailable}`,1,y);
  doc.save('lista_legal.pdf');
}

function stripHtml(s){ return s.replace(/<\/?[^>]+(>|$)/g, ""); }

