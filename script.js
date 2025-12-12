/* ============================================
  Datos completos de Facciones y Subfacciones
============================================ */
const factions = {
  'Adeptos de Malesur': {
    description: 'Los Adeptos de Malesur.',
    subfactions: {
      'Devotos de Malesur': { 
        restriction: {}, // No bloquea nombres, pero costarán +1 PB y ganan ARC+2
        special: { devotos: true } 
      },
      'Iniciados de Malesur': { restriction: {}, special: {} }
    },
    leaders: [
      { name: 'Yenay', points: 5, displayName: 'Yenay', characteristics: 'Característica X', unique: true },
      { name: 'Liehnan', points: 6, displayName: 'Liehnan', characteristics: 'Característica Y', unique: true },
      { name: 'Mihualo, el Hombre Búho', points: 14, displayName: '<strong>Mihualo, el Hombre Búho</strong>', 
        characteristics: 'DOM:4 EST:2 ORD:3 POT:4 MOV:4 DES:2 POT:2 CON:3 ARC:4 HER:4 TAM:3 AME:1 AGA:3', unique: true,
        extraInfo: '<strong>Armas:</strong> Pequeñas Garras<br><strong>Bendición de la Tramontana</strong> - 8": Ignora línea de visión. El objetivo aliado que no esté trabado puede desplazarse 4" en cualquier dirección, ignorando áreas de defensa.<br><strong>Bendición Interior</strong> - 8": El objetivo amigo tiene DES, POT y CON +1 hasta el inicio de la siguiente ronda amiga.'
      }
    ],
    combatants: [
      { name: 'Chico Topo', points: 10, displayName: 'Chico Topo', characteristics: 'a2', gender: 'Hombre', unique: false },
      { name: 'Chica Eriza', points: 10, displayName: 'Chica Eriza', characteristics: 'a2', gender: 'Mujer', unique: false },
      { name: 'Chicos Mangosta', points: 10, displayName: 'Chicos Mangosta', characteristics: 'Ma2', gender: 'Hombre', unique: false },
      { name: 'Hombre Águila', points: 10, displayName: 'Hombre Águila', characteristics: 'a:2', gender: 'Hombre', unique: false },
      { name: 'Hombre Toro', points: 15, displayName: 'Hombre Toro', characteristics: 'a', gender: 'Hombre', unique: false }
    ],
    artifacts: [
      { name: 'Artefacto 1', points: 3, displayName: 'Artefacto 1', characteristics: 'aM', requiresDOM: true },
      { name: 'Artefacto 2', points: 4, displayName: 'Artefacto 2', characteristics: 'Ca N', requiresDOM: true }
    ],
    veterans: [
      { name: 'Artífice veterano', points: 1, displayName: 'Artífice veterano', characteristics: 'El líder obtiene DOM +1' },
      { name: 'Mando veterano', points: 1, displayName: 'Mando veterano', characteristics: 'El líder obtiene ORD +1' },
      { name: 'Arcanista veterano', points: 1, displayName: 'Arcanista veterano', characteristics: 'El líder obtiene POT +2' }
    ]
  },

  'Vástagos de Kurgan': {
    description: 'Los Vástagos de Kurgan.',
    subfactions: {
      'Soimi': { special: { canRecruitSecondLeader: true } },
      'Regor': { special: {} }
    },
    leaders: [
      { name: 'Nek`Org el Profeta', points: 18, displayName: '<strong>Nek`Org el Profeta</strong>', characteristics: 'DOM:2 EST:3 ORD:4 FUR:4 MOV:5 DES:4 POT:3 CON:5 ARC:4 HER:6 TAM:4 AME:2 AGA:3', unique: true },
      { name: 'Tir`Abe Muro de Hielo', points: 19, displayName: '<strong>Tir`Abe Muro de Hielo</strong>', characteristics: 'DOM:2 EST:2 ORD:4 FUR:2 MOV:5 DES:4 POT:4 CON:5 ARC:4 HER:6 TAM:4 AME:3 AGA:3', unique: true }
    ],
    combatants: [
      { name: 'Adorador Gélido', points: 9, displayName: 'Adorador Gélido', characteristics: 'FUR:1 MOV:5 DES:4 POT:3 CON:4 ARC:4 HER:6 TAM:4 AME:1 AGA:2', unique: false },
      { name: 'Enjendro del Hielo', points: 4, displayName: 'Enjendro del Hielo', characteristics: 'ORD:1 FUR:1 MOV:4 DES:2 POT:2 CON:3 ARC:3 HER:5 TAM:3 AME:0 AGA:1', unique: false }
    ],
    artifacts: [
      { name: 'Piel de Sabrash', points: 0, displayName: 'Piel de Sabrash', characteristics: 'Este combatiente puede correr al doble aunque tenga enemigos a 4". El MOV no puede ser reducido.' }
    ],
    veterans: [
      { name: 'Veterano 3', points: 4, displayName: 'Veterano 3', characteristics: 'Ca' }
    ]
  },

  'Manadas de Urueh': {
    description: 'Las Manadas de Urueh.',
    subfactions: {
      'Teokkis': { special: {} },
      'Golothar': { special: {} },
      'Ag-Tharan': { special: {} }
    },
    leaders: [
      { name: 'Líder 5', points: 4, displayName: 'Líder 5', characteristics: 'Característica V', unique: true },
      { name: 'Líder 6', points: 11, displayName: 'Líder 6', characteristics: 'Característica U', unique: true }
    ],
    combatants: [
      { name: 'Combatiente 5', points: 10, displayName: 'Combatiente 5', characteristics: 'Característica E', unique: false },
      { name: 'Combatiente 6', points: 15, displayName: 'Combatiente 6', characteristics: 'F', unique: false }
    ],
    artifacts: [
      { name: 'Artefacto 5', points: 3, displayName: 'Artefacto 5', characteristics: 'Q' },
      { name: 'Artefacto 6', points: 6, displayName: 'Artefacto 6', characteristics: 'R' }
    ],
    veterans: [
      { name: 'Veterano 5', points: 5, displayName: 'Veterano 5', characteristics: 'G' },
      { name: 'Veterano 6', points: 8, displayName: 'Veterano 6', characteristics: 'H' }
    ]
  },

  'Alianza': {
    description: 'La Alianza.',
    subfactions: {
      'La Alianza': { special: {} },
      'Legión de los Mil Corazones': { restriction: { gender: 'Hombre' } },
      'Mercenarias de Isha': { restriction: { gender: 'Mujer' } }
    },
    leaders: [
      { name: 'Nirlem, el paladín', points: 15, displayName: '<strong>Nirlem, el paladín</strong>', characteristics: 'DOM:2 EST:3 ORD:3 MOV:3 DES:4 POT:3 CON:5 ARC:4 HER:6 TAM:3 AME:1 COR:5', unique: true },
      { name: 'Rodanes, Brazo de metal', points: 16, displayName: '<strong>Rodanes, Brazo de metal</strong>', characteristics: 'DOM:2 EST:4 ORD:4 MOV:3 DES:5 POT:3 CON:5 ARC:4 HER:6 TAM:3 AME:1 COR:5', unique: true }
    ],
    combatants: [
      { name: 'Laroc, la seductora', points: 14, displayName: '<strong>Laroc, la seductora</strong>', characteristics: 'DOM:4 EST:2 ORD:3 MOV:4 DES:2 POT:2 CON:2 ARC:5 HER:4 TAM:3 AME:1 COR:4', gender: 'Mujer', unique: true },
      { name: 'Combatiente 2', points: 4, displayName: 'Combatiente 2', characteristics: 'H', gender: 'Hombre', unique: false }
    ],
    artifacts: [
      { name: 'Artefacto 7', points: 4, displayName: 'Artefacto 7', characteristics: 'I' },
      { name: 'Artefacto 8', points: 7, displayName: 'Artefacto 8', characteristics: 'J' }
    ],
    veterans: [
      { name: 'Veterano 7', points: 6, displayName: 'Veterano 7', characteristics: 'K' },
      { name: 'Veterano 8', points: 9, displayName: 'Veterano 8', characteristics: 'L' }
    ]
  }
};

/* ============================================
  Variables globales
============================================ */
let selectedFaction = '';
let selectedSubfaction = '';
let selectedUnits = [];
let selectedPoints = 0;
let maxPoints = 60;

/* ============================================
  Funciones generales
============================================ */

function getAvailableUnits(type) {
  const factionData = factions[selectedFaction];
  const subfData = factionData.subfactions[selectedSubfaction] || { restriction: {} };
  const units = factionData[type] || [];
  return units.filter(unit => {
    if (unit.unique && selectedUnits.some(u => u.name === unit.name)) return false;
    if (subfData.restriction.gender && unit.gender && unit.gender !== subfData.restriction.gender) return false;
    if (unit.requiresDOM && !selectedUnits.some(u => u.characteristics.includes('DOM'))) return false;
    return true;
  });
}

function canAddUnit(unit) {
  if (selectedPoints + unit.points > maxPoints) {
    alert(`No puedes superar ${maxPoints} PB.`);
    return false;
  }
  return true;
}

/* ============================================
  Funciones UI
============================================ */

function showFactions() {
  const factionList = document.getElementById('faction-list');
  factionList.innerHTML = '';
  for (const f in factions) {
    const li = document.createElement('li');
    li.textContent = f;
    li.onclick = () => selectFaction(f);
    factionList.appendChild(li);
  }
}

function selectFaction(f) {
  selectedFaction = f;
  const optionsList = document.getElementById('options-list');
  optionsList.innerHTML = '';
  const subfactions = factions[f].subfactions;
  for (const sub in subfactions) {
    const li = document.createElement('li');
    li.textContent = sub;
    li.onclick = () => selectSubfaction(sub);
    optionsList.appendChild(li);
  }
}

function selectSubfaction(sub) {
  selectedSubfaction = sub;
  selectedUnits = [];
  selectedPoints = 0;
  updateSelectedList();
  showUnits('leaders');
  showUnits('combatants');
  showUnits('artifacts');
  showUnits('veterans');
}

function showUnits(type) {
  const listEl = document.getElementById(`${type}-list`);
  listEl.innerHTML = '';
  getAvailableUnits(type).forEach(unit => {
    const li = document.createElement('li');
    li.innerHTML = `${unit.displayName} - PB:${unit.points} ${unit.characteristics.replace(/\n/g, '<br>')}`;
    li.onclick = () => addUnit(unit);
    listEl.appendChild(li);
  });
}

function addUnit(unit) {
  if (!canAddUnit(unit)) return;
  selectedUnits.push(unit);
  selectedPoints += unit.points;
  updateSelectedList();
}

function removeUnit(unit) {
  selectedUnits = selectedUnits.filter(u => u !== unit);
  selectedPoints -= unit.points;
  updateSelectedList();
}

function updateSelectedList() {
  const listEl = document.getElementById('selected-list');
  listEl.innerHTML = '';
  selectedUnits.forEach(u => {
    const li = document.createElement('li');
    li.innerHTML = `${u.displayName} - PB:${u.points} ${u.characteristics.replace(/\n/g, '<br>')}`;
    li.onclick = () => removeUnit(u);
    listEl.appendChild(li);
  });
  document.getElementById('total-points').textContent = `Total PB: ${selectedPoints} / ${maxPoints}`;
}

/* ============================================
  Generar PDF
============================================ */

function generatePDF() {
  const userName = prompt("Introduce tu nombre:");
  if (!userName) { alert("Se requiere nombre."); return; }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'portrait', unit: 'cm', format: 'a4' });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Usuario:", 1, 1);
  doc.text("Facción:", 1, 2);
  doc.text("Subfacción:", 1, 3);
  doc.text("PB máximo:", 1, 4);

  doc.setFont("helvetica", "normal");
  doc.text(userName, 5, 1);
  doc.text(selectedFaction, 5, 2);
  doc.text(selectedSubfaction, 5, 3);
  doc.text(maxPoints.toString(), 5, 4);

  let yPos = 5;
  selectedUnits.forEach(u => {
    doc.text(`${u.displayName} - PB:${u.points}`, 1, yPos);
    yPos += 0.8;
  });

  doc.save('banda.pdf');
}

/* ============================================
  Inicialización
============================================ */
document.addEventListener('DOMContentLoaded', () => {
  showFactions();
  const pdfBtn = document.getElementById('generatePDF');
  if (pdfBtn) pdfBtn.addEventListener('click', generatePDF);
});
