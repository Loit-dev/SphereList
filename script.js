/* ===== SphereList - JS adaptado a reglas SphereWars (versión para web) =====
   Cambios principales:
   - parseAttributes: convierte la cadena characteristics en objeto con campos numéricos
   - validateSelection: comprueba reglas de facción / subfacción antes de añadir unidad
   - computeBandORD: suma ORD de la banda seleccionada
   - reglas especiales implementadas: limite Chica Eriza, filtros por gender (Legión/Mercenarias),
     Soimi (permite 2º líder bajo condiciones), validaciones DOM/MOV/TAM razonables.
   - placeholders para Cohesión (Vástagos) y para hooks de combate.
   Referencias: Manual SphereWars 3ª edición (atributos, órdenes, perfiles, reglas de facción). 
   
*/

/* -------------------------- Datos (igual que tu versión corregida) -------------------------- */
const factions = {
  'Adeptos de Malesur': {
    description: 'Los Adeptos de Malesur.',
    leaders: [
      { name: 'Yenay', displayName: 'Yenay', points: 5, characteristics: 'Característica X' },
      { name: 'Liehnan', displayName: 'Liehnan', points: 6, characteristics: 'Característica Y' },
      {
        name: 'Mihualo, el Hombre Búho',
        displayName: '<strong>Mihualo, el Hombre Búho</strong>',
        points: 14,
        characteristics: '\nDOM:4 EST:2 ORD:3 POT:4 \nMOV:4 DES:2 POT:2 CON:3 ARC:4 HER:4 TAM:3 AME:1 AGA:3',
        extraInfo:
          '<strong>Armas:</strong> Pequeñas Garras\n' +
          '<strong>Bendición de la Tramontana</strong> - 8":\nIgnora línea de visión. El objetivo aliado que no esté trabado puede desplazarse 4" en cualquier dirección, ignorando áreas de defensa.\n' +
          '<strong>Bendición Interior</strong> - 8":\nEl objetivo amigo tiene <strong>DES, POT y CON +1</strong> hasta el inicio de la siguiente ronda amiga.',
        comment:
          'Armas: Pequeñas Garras\n' +
          'Bendición de la Tramontana - 8": Ignora línea de visión. El objetivo aliado que no esté trabado puede desplazarse 4" en cualquier dirección, ignorando áreas de defensa.\n' +
          'Bendición Interior - 8": El objetivo amigo tiene DES, POT y CON +1 hasta el inicio de la siguiente ronda amiga'
      }
    ],
    combatants: [
      { name: 'Chico Topo', displayName: 'Chico Topo', points: 10, characteristics: 'MOV:4 TAM:2 COR:2', gender: 'Hombre' },
      { name: 'Chica Eriza', displayName: 'Chica Eriza', points: 10, characteristics: 'MOV:4 TAM:2 COR:2', gender: 'Mujer' },
      { name: 'Chicos Mangosta', displayName: 'Chicos Mangosta', points: 10, characteristics: 'MOV:4 TAM:2 COR:2', gender: 'Hombre' },
      { name: 'Hombre Águila', displayName: 'Hombre Águila', points: 10, characteristics: 'MOV:5 TAM:3 COR:2', gender: 'Hombre' },
      { name: 'Hombre Toro', displayName: 'Hombre Toro', points: 15, characteristics: 'MOV:4 TAM:4 COR:3', gender: 'Hombre' }
    ],
    artifacts: [
      { name: 'Artefacto 1', displayName: 'Artefacto 1', points: 3, characteristics: 'aM' },
      { name: 'Artefacto 2', displayName: 'Artefacto 2', points: 4, characteristics: 'Ca N' }
    ],
    veterans: [
      { name: 'Artífice veterano', displayName: 'Artífice veterano', points: 1, characteristics: 'El líder obtiene DOM +1' },
      { name: 'Mando veterano', displayName: 'Mando veterano', points: 1, characteristics: 'El líder obtiene ORD +1' },
      { name: 'Arcanista veterano', displayName: 'Arcanista veterano', points: 1, characteristics: 'El líder obtiene POD +2' }
    ]
  },

  'Vástagos de Kurgan': {
    description:
      '<strong>Cohesión por la Profecía</strong><br>' +
      '... (texto resumido en UI) ...',
    leaders: [
      {
        name: 'Nek`Org el Profeta',
        displayName: '<strong>Nek`Org el Profeta</strong>',
        points: 18,
        characteristics: '\nDOM:2 EST:3 ORD:4 FUR:4 \nMOV:5 DES:4 POT:3 CON:5 ARC:4 HER:6 TAM:4 AME:2 AGA:3',
        extraInfo: '...'
      },
      {
        name: 'Tir`Abe Muro de Hielo',
        displayName: '<strong>Tir`Abe Muro de Hielo</strong>',
        points: 19,
        characteristics: '\nDOM:2 EST:2 ORD:4 FUR:2 \nMOV:5 DES:4 POT:4 CON:5 ARC:4 HER:6 TAM:4 AME:3 AGA:3',
        extraInfo: '...'
      },
      { name: 'Líder 4', displayName: 'Líder 4', points: 9, characteristics: 'MOV:4 TAM:2 COR:2' }
    ],

    combatants: [
      {
        name: 'Adorador Gélido',
        displayName: '<strong>Adorador Gélido</strong>',
        points: 9,
        characteristics: '\nFUR:1 \nMOV:5 DES:4 POT:3 CON:4 ARC:4 HER:6 TAM:4 AME:1 AGA:2',
        extraInfo: '...'
      },
      {
        name: 'Enjendro del Hielo',
        displayName: '<strong>Enjendro del Hielo</strong>',
        points: 4,
        characteristics: '\nORD:1 FUR:1 \nMOV:4 DES:2 POT:2 CON:3 ARC:3 HER:5 TAM:3 AME:0 AGA:1',
        extraInfo: '...'
      }
    ],

    artifacts: [
      {
        name: 'Piel de Sabrash',
        displayName: '<strong>Piel de Sabrash:</strong> -2 DOM-',
        points: 0,
        characteristics: 'Este combatiente puede correr al doble aunque tenga enemigos a 4".'
      },
      {
        name: 'Pellejo de Olbarak',
        displayName: '<strong>Pellejo de Olbarak:</strong> -1 DOM-',
        points: 0,
        characteristics: 'Solo líderes de Culto Enur`Anar. Cuando este combatiente quite la última herida...'
      },
      { name: 'Furia de Kurgan', displayName: '<strong>Furia de Kurgan:</strong> -1 DOM-', points: 0, characteristics: 'Este combatiente obtiene FUR +1' }
    ],

    veterans: [
      { name: 'Veterano 3', displayName: 'Veterano 3', points: 4, characteristics: 'Ca' },
      { name: 'Veterano 4', displayName: 'Veterano 4', points: 6, characteristics: 'CaF' }
    ],

    // RULE: estado de Cohesión (se usa si quieres simular muertes)
    cohesionState: {
      value: 3,
      min: 1,
      max: 4
    }
  },

  'Manadas de Urueh': {
    description: 'Las Manadas de Urueh.',
    leaders: [
      { name: 'Líder 5', displayName: 'Líder 5', points: 4, characteristics: 'Característica V' },
      { name: 'Líder 6', displayName: 'Líder 6', points: 11, characteristics: 'Característica U' }
    ],
    combatants: [
      { name: 'Combatiente 5', displayName: 'Combatiente 5', points: 10, characteristics: 'Característica E' },
      { name: 'Combatiente 6', displayName: 'Combatiente 6', points: 15, characteristics: 'F' }
    ],
    artifacts: [
      { name: 'Artefacto 5', displayName: 'Artefacto 5', points: 3, characteristics: 'Q' },
      { name: 'Artefacto 6', displayName: 'Artefacto 6', points: 6, characteristics: 'R' }
    ],
    veterans: [
      { name: 'Veterano 5', displayName: 'Veterano 5', points: 5, characteristics: 'G' },
      { name: 'Veterano 6', displayName: 'Veterano 6', points: 8, characteristics: 'H' }
    ]
  },

  'Alianza': {
    description: 'La Alianza.',
    leaders: [
      /* ... (igual que tu JS) ... */
    ],
    // deja el resto igual
  }
};

/* -------------------------- Opciones (subfacciones) -------------------------- */
const options = {
  'Adeptos de Malesur': [
    { name: 'Devotos de Malesur', description: 'Los devotos de Malesur.' },
    { name: 'Iniciados de Malesur', description: 'Los iniciados de Malesur.' }
  ],
  'Vástagos de Kurgan': [
    {
      name: 'Soimi',
      description:
        '<strong>Unidos por la Profecía</strong><br>' +
        'Si el líder de tu banda es un Soimi, puedes contratar un segundo Líder Soimi por su coste original; ' +
        'este segundo combatiente pierde EST y ORD y deja de considerarse un Líder. Una banda que contenga ' +
        'un segundo Líder adquirido de esta forma empieza la partida con Cohesión +1.'
    },
    { name: 'Regor', description: 'Regor.' }
  ],
  'Manadas de Urueh': [
    { name: 'Teokkis', description: 'Teokkis.' },
    { name: 'Golothar', description: 'Golothar.' },
    { name: 'Ag-Tharan', description: 'Ag-Tharan.' }
  ],
  'Alianza': [
    { name: 'La Alianza', description: 'Esta subfacción tiene acceso a todos los combatientes de la facción, pero no obtiene ninguna regla especial.' },
    { name: 'Legión de los Mil Corazones', description: 'Subfacción centrada en unidades masculinas y transfusión de heridas.' },
    { name: 'Mercenarias de Isha', description: 'Subfacción centrada en combatientes femeninas y apoyo mágico de Isha.' }
  ]
};

/* -------------------------- Estado de UI / Banda -------------------------- */
let selectedPoints = 0;
let maxPoints = 0;
let selectedOption = '';
let selectedFaction = '';
let chicaErizaCount = 0;
let selectedUnits = []; // array con las unidades añadidas (objetos)
let bandOrdersCount = 0; // suma de ORD según reglas

/* -------------------------- Utilidades / Parsers -------------------------- */

/**
 * parseAttributes(str)
 * Convierte una cadena como "DOM:4 EST:2 ORD:3 MOV:4 DES:2" en un objeto con esos atributos numéricos.
 * Si no hay coincidencias, devuelve {}.
 */
function parseAttributes(str) {
  if (!str || typeof str !== 'string') return {};
  const attrs = {};
  // Buscar tokens como "DOM:4" o "MOV:4" o "DES:4/5"
  const regex = /([A-Z]{2,4}):\s*([0-9]+)(?:\/([0-9]+))?/g;
  let m;
  while ((m = regex.exec(str)) !== null) {
    const key = m[1].trim();
    const val = parseInt(m[2], 10);
    attrs[key] = val;
    if (m[3]) {
      // Si hay formato "4/5" guardamos como array [4,5]
      attrs[key + '_ALT'] = parseInt(m[3], 10);
    }
  }
  return attrs;
}

/* -------------------------- Reglas / Validaciones -------------------------- */

/**
 * computeBandORD()
 * Calcula la suma de ORD de la banda seleccionada (según manual: ORD aporta contadores durante la actualización).
 * RULE: suma ORD de todas las unidades del campo de batalla (aquí: selectedUnits).
 */
function computeBandORD() {
  let sum = 0;
  selectedUnits.forEach(u => {
    const attrs = parseAttributes(u.characteristics || '');
    if (attrs.ORD) sum += attrs.ORD;
  });
  bandOrdersCount = sum;
  // Actualizar UI si procede
  const ordEl = document.getElementById('band-ord-count');
  if (ordEl) ordEl.textContent = `Órdenes en reserva: ${bandOrdersCount}`;
  return bandOrdersCount;
}

/**
 * validateSelection(unit)
 * Comprueba reglas antes de añadir una unidad:
 * - límites por subfacción (ej. Chica Eriza máximo 2 en 'Iniciados de Malesur')
 * - filtros de género para subfacciones Legión / Mercenarias
 * - unicidad de personajes únicos (si se quiere implementar)
 * - PB no negativo, atributos dentro de rangos razonables
 */
function validateSelection(unit) {
  // 1) Si la selectedOption exige sólo hombres/mujeres
  if (selectedOption === 'Legión de los Mil Corazones') {
    if (unit.gender && unit.gender !== 'Hombre') {
      alert('La subfacción "Legión de los Mil Corazones" permite solo combatientes masculinos.');
      return false;
    }
  }
  if (selectedOption === 'Mercenarias de Isha') {
    if (unit.gender && unit.gender !== 'Mujer') {
      alert('La subfacción "Mercenarias de Isha" permite solo combatientes femeninos.');
      return false;
    }
  }

  // 2) Limite de Chica Eriza cuando la opcion es Iniciados de Malesur (ejemplo original)
  if (selectedOption === 'Iniciados de Malesur' && unit.name === 'Chica Eriza') {
    if (chicaErizaCount >= 2) {
      alert('Solo puedes añadir un máximo de 2 Chica Eriza en Iniciados de Malesur.');
      return false;
    }
  }

  // 3) Soimi rule: si la subfacción es Soimi, permitimos (si lo desea) la contratación de
  // un segundo líder Soimi con perdidas de EST/ORD. Aquí validamos: si intentan añadir un
  // segundo líder idéntico y ya existe uno en selectedUnits, avisamos.
  if (selectedOption === 'Soimi' && unitIsLeader(unit)) {
    const existingSoimiLeaders = selectedUnits.filter(u => u.name === unit.name);
    if (existingSoimiLeaders.length >= 1) {
      // permitimos añadir un segundo líder sólo si el usuario confirma la conversión a "segundo líder (no líder)".
      const ok = confirm('Vas a añadir un segundo Líder Soimi (coste original). ¿Deseas convertirlo en "segundo líder" (pierde EST y ORD)? Acepta para añadirlo.');
      if (!ok) return false;
      // aplicar la conversión aquí: clonamos y fuerza EST/ORD a 0 para el añadido
      unit = Object.assign({}, unit, { _forcedSecondSoimi: true });
    }
  }

  // 4) Comprobación de PB / atributos mínimos (regla simple)
  if (typeof unit.points !== 'number' || unit.points < 0) {
    alert('Este combatiente tiene un coste inválido (PB).');
    return false;
  }

  // 5) Parsing de atributos y comprobaciones de rango razonable
  const attrs = parseAttributes(unit.characteristics || '');
  if (attrs.MOV && (attrs.MOV < 1 || attrs.MOV > 8)) {
    // MOV fuera de rango típico
    const ok = confirm(`MOV de ${unit.name} es ${attrs.MOV}. ¿Quieres añadirlo de todas formas? (MOV típico: 1-8)`);
    if (!ok) return false;
  }
  if (attrs.TAM && (attrs.TAM < 1 || attrs.TAM > 6)) {
    alert(`Tamaño (TAM) de ${unit.name} fuera de rango (1-6).`);
    return false;
  }

  // 6) Comprobar puntos totales si excede límite
  if (selectedPoints + (unit.points || 0) > maxPoints) {
    alert('Añadir esta unidad excedería el límite de puntos de la lista.');
    return false;
  }

  // Si pasa todas las comprobaciones
  return true;
}

function unitIsLeader(unit) {
  // regla simple: si tiene EST o si está en la lista leaders original
  const attrs = parseAttributes(unit.characteristics || '');
  if (attrs.EST) return true;
  // también detectamos por estar en el array factions[f].leaders por referencia (si las referencias se mantienen)
  // para simplicidad, devolvemos false por defecto si no tiene EST.
  return false;
}

/* -------------------------- Hook: al añadir unidad (UI) -------------------------- */
function addToSelectedList(unit) {
  // Validar primero
  if (!validateSelection(unit)) return;

  // Implementar reglas específicas (soimi segundo líder)
  let unitToAdd = unit;
  if (selectedOption === 'Soimi' && unitIsLeader(unit)) {
    const sameNameCount = selectedUnits.filter(u => u.name === unit.name).length;
    if (sameNameCount >= 1) {
      // convertir a "segundo líder": quitar EST y ORD (si existen)
      const attrs = parseAttributes(unit.characteristics || '');
      // crear una copia con EST y ORD forzados a 0
      const characteristicsCleaned = unit.characteristics.replace(/EST:\s*\d+/g, 'EST:0').replace(/ORD:\s*\d+/g, 'ORD:0');
      unitToAdd = Object.assign({}, unit, { characteristics: characteristicsCleaned, displayName: (unit.displayName || unit.name) + ' (segundo líder)' });
      // Aumentamos cohesión +1 (regla de opción Soimi)
      applyCohesionChange(1);
    }
  }

  // Añadir al array y a la UI
  selectedUnits.push(unitToAdd);

  // mantener contador Chica Eriza
  if (unitToAdd.name === 'Chica Eriza') chicaErizaCount++;

  // Actualizar puntos y ORD
  selectedPoints += unitToAdd.points || 0;
  updateTotalPoints();
  computeBandORD();

  // Render en UI (reutiliza tu estructura)
  const selectedList = document.getElementById('selected-list');
  if (!selectedList) return;
  const li = document.createElement('li');
  const display = unitToAdd.displayName || unitToAdd.name;
  li.innerHTML = `${display} - PB:${unitToAdd.points} ${(unitToAdd.characteristics || '').replace(/\n/g, '<br>')}<br>${unitToAdd.extraInfo ? unitToAdd.extraInfo.replace(/\n/g, '<br>') : ''}`;
  // Proveer botón de eliminar por item (mejor que usar li.onclick directamente con referencia a objeto)
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Quitar';
  removeBtn.onclick = () => removeFromSelectedList(unitToAdd, li);
  li.appendChild(removeBtn);
  selectedList.appendChild(li);
}

/* -------------------------- Hook: al quitar unidad (UI) -------------------------- */
function removeFromSelectedList(unit, listItem) {
  // eliminar del array
  const idx = selectedUnits.indexOf(unit);
  if (idx !== -1) selectedUnits.splice(idx, 1);

  // UI
  const selectedList = document.getElementById('selected-list');
  if (selectedList && listItem && listItem.parentNode === selectedList) {
    selectedList.removeChild(listItem);
  }

  if (unit.name === 'Chica Eriza') {
    chicaErizaCount = Math.max(0, chicaErizaCount - 1);
  }

  selectedPoints -= unit.points || 0;
  updateTotalPoints();
  computeBandORD();
}

/* -------------------------- Actualizaciones UI básicas -------------------------- */
function updateTotalPoints() {
  const totalPointsElement = document.getElementById('total-points');
  if (!totalPointsElement) return;
  totalPointsElement.textContent = `Total de puntos: ${selectedPoints}`;
  if (selectedPoints > maxPoints) {
    totalPointsElement.classList.add('over-limit');
  } else {
    totalPointsElement.classList.remove('over-limit');
  }
}

/* -------------------------- Funciones de Cohesión (Vástagos) -------------------------- */
/* Estas funciones se dejan como hooks que deberás llamar desde la simulación de combate
   cuando un líder muera, cuando un enemigo muera, etc. Según manual, Cohesión varía:
   +2 si muere líder rival, -2 si muere líder propio, +1 si muere primer enemigo no-invocación cada ronda,
   -1 si se termina turno sin herir enemigos. (resumido). 
*/
function applyCohesionChange(delta) {
  if (!factions['Vástagos de Kurgan'] || !factions['Vástagos de Kurgan'].cohesionState) return;
  const cs = factions['Vástagos de Kurgan'].cohesionState;
  cs.value = Math.max(cs.min, Math.min(cs.max, cs.value + delta));
  // Si quieres mostrarlo en UI:
  const cohesionEl = document.getElementById('v_kurgan_cohesion');
  if (cohesionEl) cohesionEl.textContent = `Cohesión: ${cs.value}`;
}

/* Gancho de muerte: llama a esta función cuando una unidad muera en la simulación */
function onCombatantDeath(deadUnit, teamOwnerIsCurrentPlayer) {
  // ejemplo: si deadUnit es líder rival y owner != current player => +2 cohesion (Vástagos)
  // o -2 si es tu líder
  // implementación dependiente del motor de combate; aquí solo colocamos el stub.
  // applyCohesionChange( +2 or -2 / +1 / -1 ) según el manual.
}

/* -------------------------- Inicialización UI (tu código original adaptado) -------------------------- */

function setPoints(points) {
  maxPoints = points;
  const pointsList = document.getElementById('points-list');
  if (pointsList) pointsList.innerHTML = `<li>${points} puntos</li>`;
  const factionTitle = document.getElementById('faction-title');
  const factionListEl = document.getElementById('faction-list');
  if (factionTitle) factionTitle.classList.remove('hidden');
  if (factionListEl) factionListEl.classList.remove('hidden');
  showFactions();
}

function showFactions() {
  const factionList = document.getElementById('faction-list');
  if (!factionList) return;
  factionList.innerHTML = '';
  for (const faction in factions) {
    const li = document.createElement('li');
    li.textContent = faction;
    li.onclick = () => selectFaction(faction);
    factionList.appendChild(li);
  }
}

function selectFaction(faction) {
  selectedFaction = faction;
  const factionList = document.getElementById('faction-list');
  if (!factionList) return;
  factionList.innerHTML = '';
  const li = document.createElement('li');
  li.innerHTML = `<strong>${faction}</strong><br>${factions[faction].description}`;
  factionList.appendChild(li);
  const optionsTitle = document.getElementById('options-title');
  const optionsList = document.getElementById('options-list');
  if (optionsTitle) optionsTitle.classList.remove('hidden');
  if (optionsList) optionsList.classList.remove('hidden');
  showOptions(faction);
}

function showOptions(faction) {
  const optionsList = document.getElementById('options-list');
  if (!optionsList) return;
  optionsList.innerHTML = '';
  if (!options[faction]) return;
  options[faction].forEach(option => {
    const li = document.createElement('li');
    li.textContent = option.name;
    li.onclick = () => selectOption(faction, option);
    optionsList.appendChild(li);
  });
}

function selectOption(faction, option) {
  selectedOption = option.name;
  chicaErizaCount = 0;
  const optionsList = document.getElementById('options-list');
  if (optionsList) optionsList.innerHTML = '';
  const li = document.createElement('li');
  li.innerHTML = `<strong>${option.name}</strong><br>${option.description}`;
  if (optionsList) optionsList.appendChild(li);
  // mostrar secciones
  ['leader-title','leader-list','veteran-title','veteran-list','combatant-title','combatant-list','artifact-title','artifact-list'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
  });
  showLeaders(faction);
  showVeterans(faction);
  showCombatants(faction);
  showArtifacts(faction);
  // Mostrar selección
  const selectedFactionDiv = document.getElementById('selected-faction');
  if (selectedFactionDiv) {
    selectedFactionDiv.innerHTML = `<strong>${faction}</strong><br>${factions[faction].description}`;
    selectedFactionDiv.classList.remove('hidden');
  }
  const selectedOptionDiv = document.getElementById('selected-option');
  if (selectedOptionDiv) {
    selectedOptionDiv.innerHTML = `<strong>${option.name}</strong><br>${option.description}`;
    selectedOptionDiv.classList.remove('hidden');
  }
}

function showLeaders(faction) {
  const leaderList = document.getElementById('leader-list');
  if (!leaderList) return;
  leaderList.innerHTML = '';
  (factions[faction].leaders || []).forEach(leader => {
    const li = document.createElement('li');
    const display = leader.displayName || leader.name;
    const attrs = parseAttributes(leader.characteristics || '');
    li.innerHTML = `${display} - PB:${leader.points} ${leader.characteristics ? leader.characteristics.replace(/\n/g, '<br>') : ''}`;
    li.title = leader.comment || '';
    li.onclick = () => addToSelectedList(leader);
    leaderList.appendChild(li);
  });
}

function showVeterans(faction) {
  const veteranList = document.getElementById('veteran-list');
  if (!veteranList) return;
  veteranList.innerHTML = '';
  (factions[faction].veterans || []).forEach(veteran => {
    const li = document.createElement('li');
    const display = veteran.displayName || veteran.name;
    li.innerHTML = `${display} - PB:${veteran.points} ${veteran.characteristics.replace(/\n/g, '<br>')}`;
    li.title = veteran.comment || '';
    li.onclick = () => addToSelectedList(veteran);
    veteranList.appendChild(li);
  });
}

function showCombatants(faction) {
  const combatantList = document.getElementById('combatant-list');
  if (!combatantList) return;
  combatantList.innerHTML = '';
  (factions[faction].combatants || []).forEach(combatant => {
    // Filtros por subfacción (RULE)
    if (selectedOption === 'Devotos de Malesur' && combatant.name === 'Chica Eriza') {
      return;
    }
    if (selectedOption === 'Legión de los Mil Corazones' && combatant.gender && combatant.gender !== 'Hombre') {
      return;
    }
    if (selectedOption === 'Mercenarias de Isha' && combatant.gender && combatant.gender !== 'Mujer') {
      return;
    }
    const li = document.createElement('li');
    const display = combatant.displayName || combatant.name;
    li.innerHTML = `${display} - PB:${combatant.points} ${combatant.characteristics.replace(/\n/g, '<br>')}`;
    li.title = combatant.comment || '';
    li.onclick = () => addToSelectedList(combatant);
    combatantList.appendChild(li);
  });
}

function showArtifacts(faction) {
  const artifactList = document.getElementById('artifact-list');
  if (!artifactList) return;
  artifactList.innerHTML = '';
  (factions[faction].artifacts || []).forEach(artifact => {
    const li = document.createElement('li');
    const display = artifact.displayName || artifact.name;
    li.innerHTML = `${display} - PB:${artifact.points} ${artifact.characteristics.replace(/\n/g, '<br>')}`;
    li.title = artifact.comment || '';
    li.onclick = () => addToSelectedList(artifact);
    artifactList.appendChild(li);
  });
}

/* --- PDF generator (tu versión corregida) --- */
const generateBtn = document.getElementById('generatePDF');
if (generateBtn) {
  generateBtn.addEventListener('click', function () {
    const userName = prompt("Por favor, introduce tu nombre de usuario:");
    if (!userName) {
      alert("El nombre de usuario es obligatorio.");
      return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'cm', format: 'a4' });
    const selectedContent = document.querySelector('.selected-list-content');
    if (!selectedContent) {
      alert('No se ha encontrado el contenido a exportar.');
      return;
    }
    html2canvas(selectedContent).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = doc.internal.pageSize.getWidth() - 3;
      const pdfHeight = doc.internal.pageSize.getHeight() - 3;
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const scaleFactor = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const faction = selectedFaction || '';
      const subfaction = selectedOption || '';
      const listSize = maxPoints + " puntos";
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      let yPosition = 1;
      doc.text("Usuario:", 1, yPosition);
      yPosition += 1.2;
      doc.text("Facción:", 1, yPosition);
      yPosition += 1.2;
      doc.text("Subfacción:", 1, yPosition);
      yPosition += 1.2;
      doc.text("Tamaño de lista:", 1, yPosition);
      yPosition += 0.2;
      doc.setFont("helvetica", "normal");
      yPosition = 1.6;
      doc.text(userName, 1, yPosition);
      yPosition += 1.2;
      doc.text(faction, 1, yPosition);
      yPosition += 1.2;
      doc.text(subfaction, 1, yPosition);
      yPosition += 1.2;
      doc.text(listSize, 1, yPosition);
      yPosition += 0.2;
      doc.addImage(imgData, 'PNG', 2.5, yPosition + 1, imgWidth * scaleFactor, imgHeight * scaleFactor);
      doc.save('lista.pdf');
    }).catch(err => {
      console.error(err);
      alert('Error al generar el PDF.');
    });
  });
}

/* -------------------------- Export (si quieres usar como módulo) -------------------------- */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { factions, options, parseAttributes, validateSelection, addToSelectedList, removeFromSelectedList, computeBandORD, applyCohesionChange };
}

