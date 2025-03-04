const factions = {
    'Adeptos de Malesur': {
        description: 'Los Adeptosa.',
        leaders: [
            { name: 'Yenay', points: 5, characteristics: 'Característica X' },
            { name: 'Liehnan', points: 6, characteristics: 'Característica Y' },
	    { name: '<strong>Mihualo, el Hombre Búho</strong>', points: 14, characteristics: ' \nDOM:4 EST:2 ORD:3 POD:4 \nMOV:45 DES:2 POT:2 CON:3 ARC:4 HER:4 TAM:3 AME:1 AGA:3', extraInfo: '<strong>Armas:</strong> Pequeñas Garras \n <strong>Bendicion de la tramontana</strong> - 8" \nIgnora linea de vision. El objetvo amigo que no este trabado puede desplazarse 4" en cualquier direccion, ignorando areas de defensa. \n<strong>Bendicion Interior</strong> - 8" \nIgnora linea de vision. El objetivo amigo tiene <strong>DES,POT y CON +1</strong>, hasta el inicio de la siguiente ronda amiga', comment: 'Armas: Pequeñas Garras \nBendicion de la tramontana - 8" \nIgnora linea de vision. El objetvo amigo que no este trabado puede desplazarse 4" en cualquier direccion, ignorando areas de defensa. \nBendicion Interior- 8" \nIgnora linea de vision. El objetivo amigo tiene DES,POT y CON +1, hasta el inicio de la siguiente ronda amiga' }
        ],
        combatants: [
            { name: 'Chico Topo', points: 10, characteristics: 'a2' },
            { name: 'Chica Eriza', points: 10, characteristics: 'a2' },
            { name: 'Chicos Mangosta', points: 10, characteristics: 'Ma2' },
            { name: 'Hombre Aguila', points: 10, characteristics: 'a:2' },
            { name: 'Hombre Toro', points: 15, characteristics: 'a' }
        ],
        artifacts: [
            { name: 'Artefacto 1', points: 3, characteristics: 'aM' },
            { name: 'Artefacto 2', points: 4, characteristics: 'Ca N' }
        ],
        veterans: [
            { name: 'Veterano 1', points: 5, characteristics: 'a' },
            { name: 'Veterano 2', points: 7, characteristics: 'a' }
        ]
    },
    'Vástagos de Kurgan': {
        description: `<STRONG>Cohesión por la Profecía</STRONG><br>

<br>La Cohesión es un valor que va de 1 a 4 (ignora efectos que la suban por encima o por debajo de estos valores) y que define lo unida que está la banda Vástagos de Kurgan para seguir a su líder. Empieza con un valor de 3 y puede subir y bajar durante la partida:<br>

<br><STRONG>+2</STRONG> de Cohesión si muere el Líder rival.
<br><STRONG>-2</STRONG> de Cohesión si muere el Líder de la banda.
<br><STRONG>+1</STRONG> de Cohesión cuando muera el primer enemigo que no sea invocación cada ronda.
<br><STRONG>-1</STRONG> de Cohesión si se termina un turno en que ningún enemigo (ignorando invocaciones) haya recibido una herida.<br>

<br><STRONG>Cohesión Efecto</STRONG>

<br><STRONG>4:</STRONG> Todos los aliados activan sus habilidades de Lealtad y pueden recibir órdenes.
<br><STRONG>3:</STRONG> Todos los aliados que compartan culto con el Líder activan sus habilidades de Lealtad. Todos los aliados pueden recibir órdenes.
<br><STRONG>2:</STRONG> Solo los aliados que compartan culto con el Líder pueden recibir órdenes.
<br><STRONG>1:</STRONG> Solo el Líder de la banda puede recibir órdenes.<br>

<br><STRONG>Demostración de Fuerza (Orden)</STRONG>

<br>Esta orden puede darse después de lanzar una tirada de daño con un arma a melé. Repite la tirada de daño.`,

        leaders: [
            { name: '<strong>Nek`Org el Profeta</strong>', points: 18, characteristics: '\nDOM:2 EST:3 ORD:4 FUR:4 \nMOV:5 DES:4 POT:3 CON:5 ARC:4 HER:6 TAM:4 AME:2 AGA:3', extraInfo: '<strong>Armas:</strong> Espadon diente \n <strong>Impactante:</strong>Reduce en 1 el número objetivo de la Tirada de Daño (mín. 2). \n<strong>Intimidante:</strong> Si se obtiene al menos un Sphere en la Tirada de Ataque, obtiene <strong>AME 1</strong> hasta el final de la activación. \n<strong>Comunicación Sensorial:</strong> Si el objetivo es un Soimi, la distancia para dar órdenes de este combatiente es de 8”. \n<strong>Demostración de Poder:</strong> Cuando un enemigo(no invocación) muera a causa de un hechizo a 8" o menos de estecombatiente, esta banda aumenta en 1 su Cohesión. \n<strong>-Lealtad- Magia Instintiva:</strong> Si la banda tiene suficiente Cohesión, este combatiente puede correr al doble y lanzar hechizos.', comment: 'Armas: Espadon diente \n Impactante:Reduce en 1 el número objetivo de la Tirada de Daño (mín. 2). \nIntimidante: Si se obtiene al menos un Sphere en la Tirada de Ataque, obtiene AME 1 hasta el final de la activación. \nComunicación Sensorial: Si el objetivo es un Soimi, la distancia para dar órdenes de este combatiente es de 8”. \nDemostración de Poder: Cuando un enemigo(no invocación) muera a causa de un hechizo a 8" o menos de estecombatiente, esta banda aumenta en 1 su Cohesión. \n-Lealtad- Magia Instintiva: Si la banda tiene suficiente Cohesión, este combatiente puede correr al doble y lanzar hechizos.' },
	    {  name: '<strong>Tir`Abe Muro de Hielo</strong>', points: 19, characteristics: '\nDOM:2 EST:2 ORD:4 FUR:2 \nMOV:5 DES:4 POT:4 CON:5 ARC:4 HER:6 TAM:4 AME:3 AGA:3', extraInfo: '<strong>Armas:</strong> Maza de Guerra \n <strong>Contundente:</strong>Reduce en 1 el número objetivo de la Tirada de Daño (mín. 2); si el ataque tiene POT 4 o más, recibe un 1 adicional (2 en total). \n<strong>Comunicación Sensorial:</strong> Si el objetivo es un Soimi, la distancia para dar órdenes de este combatiente es de 8”. \n<strong>Campeón de Kurgan:</strong> Cuando este combatiente mate un enemigo (no invocación) de PB 6 o superior, esta banda aumenta en 1 su Cohesión. \n<strong>Aguijones:</strong>Causa una herida automática al objetivo. Sphere: este combatiente se cura una herida. \n<strong>Golpe Circular</strong> Este combatiente elige un enemigo en contacto y combate contra él (este es un combate adicional además del de cada activación). Este combatiente no puede combatir dos veces con el mismo oponente durante su activación. \n<strong>-Lealtad- Luchador Excepcional:</strong>si la banda tiene suficiente Cohesión, este combatiente nunca sufre la penalización por cansancio.', comment: 'Armas: Espadon diente \n Impactante:Reduce en 1 el número objetivo de la Tirada de Daño (mín. 2). \nIntimidante: Si se obtiene al menos un Sphere en la Tirada de Ataque, obtiene AME 1 hasta el final de la activación. \nComunicación Sensorial: Si el objetivo es un Soimi, la distancia para dar órdenes de este combatiente es de 8”. \nDemostración de Poder: Cuando un enemigo(no invocación) muera a causa de un hechizo a 8" o menos de estecombatiente, esta banda aumenta en 1 su Cohesión. \nLealtad Magia Instintiva: Si la banda tiene suficiente Cohesión, este combatiente puede correr al doble y lanzar hechizos.'  },
            { name: 'Líder 4', points: 9, characteristics: 'a' }
        ],
        combatants: [
            { name: '<strong>Adorador Gélido</strong>', points: 9, characteristics: '\nFUR:1 \nMOV:5 DES:4 POT:3 CON:4 ARC:4 HER:6 TAM:4 AME:1 AGA:2', extraInfo: '<strong>Armas:</strong> Espada diente \n<strong>Intimidante:</strong> Si se obtiene al menos un Sphere en la Tirada de Ataque, obtiene <strong>AME 1</strong> hasta el final de la activación. \n<strong>-Lealtad- Carga Fervorosa: </strong> si la banda tiene suficiente Cohesión, este combatiente se desplaza 1" adicional siempre que cargue. \n<strong>Aguijones:</strong>Causa una herida automática al objetivo. Sphere: este combatiente se cura una herida. ', comment: 'Armas: Espadon diente \n Impactante:Reduce en 1 el número objetivo de la Tirada de Daño (mín. 2). \nIntimidante: Si se obtiene al menos un Sphere en la Tirada de Ataque, obtiene AME 1 hasta el final de la activación. \nComunicación Sensorial: Si el objetivo es un Soimi, la distancia para dar órdenes de este combatiente es de 8”. \nDemostración de Poder: Cuando un enemigo(no invocación) muera a causa de un hechizo a 8" o menos de estecombatiente, esta banda aumenta en 1 su Cohesión. \nLealtad Magia Instintiva: Si la banda tiene suficiente Cohesión, este combatiente puede correr al doble y lanzar hechizos.' },
            {  name: '<strong>Enjendro del Hielo</strong>', points: 4, characteristics: '\nORD:1 FUR:1 \nMOV:4 DES:2 POT:2 CON:3 ARC:3 HER:5 TAM:3 AME:0 AGA:1', extraInfo: '<strong>Armas:</strong> Uñas \n<strong>Incompetente:</strong> Este combatiente no cansa a los enemigos ni ofrece apoyo en combate.\n<strong>Comunicación Sensorial:</strong> Si el objetivo es un Soimi, la distancia para dar órdenes de este combatiente es de 8”. \n<strong>Transfusión Vital:</strong> Cura una herida al Soimi aliado objetivo.', comment: 'Armas: Espadon diente \n Impactante:Reduce en 1 el número objetivo de la Tirada de Daño (mín. 2). \nIntimidante: Si se obtiene al menos un Sphere en la Tirada de Ataque, obtiene AME 1 hasta el final de la activación. \nComunicación Sensorial: Si el objetivo es un Soimi, la distancia para dar órdenes de este combatiente es de 8”. \nDemostración de Poder: Cuando un enemigo(no invocación) muera a causa de un hechizo a 8" o menos de estecombatiente, esta banda aumenta en 1 su Cohesión. \nLealtad Magia Instintiva: Si la banda tiene suficiente Cohesión, este combatiente puede correr al doble y lanzar hechizos.'  }
        ],
        artifacts: [
            { name: '<strong>Piel de Sabrash:</strong> -2 DOM-', points: 0, characteristics: 'Este combatiente puede correr al doble aunque tenga enemigos a 4". Además, el MOV de este combatiente no puede ser reducido por efectos enemigos.' },
            { name: '<strong>Pellejo de Olbarak:</strong> -1 DOM-', points: 0, characteristics: 'Solo líderes de Culto Enur`Anar. Cuando este combatiente quite la última herida a un enemigo con un ataque a melé, recupera 1 herida.' },
	    { name: '<strong>Furia de Kurgan:</strong> -1 DOM-', points: 0, characteristics: 'Este combatiente obtiene FUR 1' }
        ],
        veterans: [
            { name: 'Veterano 3', points: 4, characteristics: 'Ca' },
            { name: 'Veterano 4', points: 6, characteristics: 'CaF' }
        ]
    },
    'Manadas de Urueh': {
        description: 'Las Manadasa',
        leaders: [
            { name: 'Líder 5', points: 4, characteristics: 'Característica V' },
            { name: 'Líder 6', points: 11, characteristics: 'Característica U' }
        ],
        combatants: [
            { name: 'Combatiente 5', points: 10, characteristics: 'Característica E' },
            { name: 'Combatiente 6', points: 15, characteristics: 'F' }
        ],
        artifacts: [
            { name: 'Artefacto 5', points: 3, characteristics: 'Q' },
            { name: 'Artefacto 6', points: 6, characteristics: 'R' }
        ],
        veterans: [
            { name: 'Veterano 5', points: 5, characteristics: 'G' },
            { name: 'Veterano 6', points: 8, characteristics: 'H' }
        ]
    },
    'Alianza': {
        description: 'La Alianzas',
        leaders: [
            { name: 'Líder 7', points: 5, characteristics: 'T' },
            { name: 'Líder 8', points: 6, characteristics: 'S' }
        ],
        combatants: [
            { name: ' 1', points: 5, characteristics: 'G', gender: 'Hombre' },
            { name: '2', points: 4, characteristics: 'H', gender: 'Hombre' },
            { name: ' 1', points: 6, characteristics: ' I', gender: 'Mujer' },
            { name: '2', points: 7, characteristics: 'Característica J', gender: 'Mujer' }
        ],
        artifacts: [
            { name: 'Artefacto 7', points: 4, characteristics: 'I' },
            { name: 'Artefacto 8', points: 7, characteristics: 'J' }
        ],
        veterans: [
            { name: 'Veterano 7', points: 6, characteristics: 'K' },
            { name: 'Veterano 8', points: 9, characteristics: 'L' }
        ]
    }
};
const options = {
    'Adeptos de Malesur': [
        { name: 'Devotos de Malesur', description: 'Lles.' },
        { name: 'Iniciados de Malesur', description: 'Los .' }
    ],
    'Vástagos de Kurgan': [
        { name: 'Soimi', description: `<STRONG>Unidos por la Profecía</STRONG><br>

<br>Si el líder de tu banda es un Soimi, puedes contratar un segundo Líder Soimi por su coste original, este segundo combatiente pierde sus atributos de <STRONG>EST</STRONG> y <STRONG>ORD</STRONG> y deja de considerarse un Líder. Una banda que contenga un segundo Líder adquirido de esta forma empieza la partida con <STRONG>Cohesión +1</STRONG>.` },
        { name: 'Regor', description: `Re.` }
    ],
    'Manadas de Urueh': [
        { name: 'Teokkis', description: 'Te.' },
        { name: 'Golothar', description: 'G.' },
        { name: 'Ag-Tharan', description: 'Ag-.' }
    ],
    'Alianza': [
        { name: 'La Alianza', description: 'Les.' },
        { name: 'Legión de los Mil Corazones', description: 'Laía.' },
        { name: 'Mercenarias de Isha', description: 'Las.' }
    ]
};

let selectedPoints = 0;
let maxPoints = 0;
let selectedOption = '';
let selectedFaction = '';
let chicaErizaCount = 0;

function setPoints(points) {
    maxPoints = points;
    const pointsList = document.getElementById('points-list');
    pointsList.innerHTML = `<li>${points} puntos</li>`;
    document.getElementById('faction-title').classList.remove('hidden');
    document.getElementById('faction-list').classList.remove('hidden');
    showFactions();
}

function showFactions() {
    const factionList = document.getElementById('faction-list');
    factionList.innerHTML = ''; // Limpiar la lista

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
    factionList.innerHTML = ''; // Limpiar la lista

    const li = document.createElement('li');
    li.innerHTML = `<strong>${faction}</strong><br>${factions[faction].description}`;
    factionList.appendChild(li);

    document.getElementById('options-title').classList.remove('hidden');
    document.getElementById('options-list').classList.remove('hidden');
    showOptions(faction);
}

function showOptions(faction) {
    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = ''; // Limpiar la lista

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
    optionsList.innerHTML = ''; // Limpiar la lista

    const li = document.createElement('li');
    li.innerHTML = `<strong>${option.name}</strong><br>${option.description}`;
    optionsList.appendChild(li);

    document.getElementById('leader-title').classList.remove('hidden');
    document.getElementById('leader-list').classList.remove('hidden');
    showLeaders(faction);
    document.getElementById('veteran-title').classList.remove('hidden');
    document.getElementById('veteran-list').classList.remove('hidden');
    showVeterans(faction);
    document.getElementById('combatant-title').classList.remove('hidden');
    document.getElementById('combatant-list').classList.remove('hidden');
    showCombatants(faction);
    document.getElementById('artifact-title').classList.remove('hidden');
    document.getElementById('artifact-list').classList.remove('hidden');
    showArtifacts(faction);

    // Mostrar la facción y la opción seleccionadas
    const selectedFactionDiv = document.getElementById('selected-faction');
    selectedFactionDiv.innerHTML = `<strong>${faction}</strong><br>${factions[faction].description}`;
    selectedFactionDiv.classList.remove('hidden');

    const selectedOptionDiv = document.getElementById('selected-option');
    selectedOptionDiv.innerHTML = `<strong>${option.name}</strong><br>${option.description}`;
    selectedOptionDiv.classList.remove('hidden');
}

function showLeaders(faction) {
    const leaderList = document.getElementById('leader-list');
    leaderList.innerHTML = ''; // Limpiar la lista

    factions[faction].leaders.forEach(leader => {
        const li = document.createElement('li');
        li.innerHTML = `${leader.name} - PB:${leader.points} ${leader.characteristics.replace(/\n/g, '<br>')}`;
        li.title = leader.comment || ''; // Agregar comentario como tooltip
        li.onclick = () => addToSelectedList(leader);
        leaderList.appendChild(li);
    });
}

function showVeterans(faction) {
    const veteranList = document.getElementById('veteran-list');
    veteranList.innerHTML = ''; // Limpiar la lista

    if (factions[faction].veterans) {
        factions[faction].veterans.forEach(veteran => {
            const li = document.createElement('li');
            li.innerHTML = `${veteran.name} - PB:${veteran.points} ${veteran.characteristics.replace(/\n/g, '<br>')}`;
            li.title = veteran.comment || ''; // Agregar comentario como tooltip
            li.onclick = () => addToSelectedList(veteran);
            veteranList.appendChild(li);
        });
    }
}

function showCombatants(faction) {
    const combatantList = document.getElementById('combatant-list');
    combatantList.innerHTML = '';

    factions[faction].combatants.forEach(combatant => {
        if (selectedOption === 'Devotos de Malesur' && combatant.name === 'Chica Eriza') {
            return; // No mostrar Chica Eriza para Devotos de Malesur
        }
        if (selectedOption === 'Legión de los Mil Corazones' && combatant.gender !== 'Hombre') {
            return; // Mostrar solo hombres para Legión de los Mil Corazones
        }
        if (selectedOption === 'Mercenarias de Isha' && combatant.gender !== 'Mujer') {
            return; // Mostrar solo mujeres para Mercenarias de Isha
        }
        const li = document.createElement('li');
        li.innerHTML = `${combatant.name} - PB:${combatant.points} ${combatant.characteristics.replace(/\n/g, '<br>')}`;
        li.title = combatant.comment || ''; // Agregar comentario como tooltip
        li.onclick = () => addToSelectedList(combatant);
        combatantList.appendChild(li);
    });
}

function showArtifacts(faction) {
    const artifactList = document.getElementById('artifact-list');
    artifactList.innerHTML = ''; // Limpiar la lista

    factions[faction].artifacts.forEach(artifact => {
        const li = document.createElement('li');
        li.innerHTML = `${artifact.name} - PB:${artifact.points} ${artifact.characteristics.replace(/\n/g, '<br>')}`;
        li.title = artifact.comment || ''; // Agregar comentario como tooltip
        li.onclick = () => addToSelectedList(artifact);
        artifactList.appendChild(li);
    });
}

function addToSelectedList(unit) {
    if (selectedOption === 'Iniciados de Malesur' && unit.name === 'Chica Eriza') {
        if (chicaErizaCount >= 2) {
            alert('Solo puedes añadir un máximo de 2 Chica Eriza.');
            return;
        }
        chicaErizaCount++;
    }

    const selectedList = document.getElementById('selected-list');
    const li = document.createElement('li');
    li.innerHTML = `${unit.name} - PB:${unit.points} ${unit.characteristics.replace(/\n/g, '<br>')}<br>${unit.extraInfo ? unit.extraInfo.replace(/\n/g, '<br>') : ''}`;
    li.onclick = () => removeFromSelectedList(unit, li);
    selectedList.appendChild(li);

    selectedPoints += unit.points;
    updateTotalPoints();
}

function removeFromSelectedList(unit, listItem) {
    const selectedList = document.getElementById('selected-list');
    selectedList.removeChild(listItem);

    if (unit.name === 'Chica Eriza') {
        chicaErizaCount--;
    }

    selectedPoints -= unit.points;
    updateTotalPoints();
}

function updateTotalPoints() {
    const totalPointsElement = document.getElementById('total-points');
    totalPointsElement.textContent = `Total de puntos: ${selectedPoints}`;

    if (selectedPoints > maxPoints) {
        totalPointsElement.classList.add('over-limit');
    } else {
        totalPointsElement.classList.remove('over-limit');
    }
}

document.getElementById('generatePDF').addEventListener('click', function () {
    const userName = prompt("Por favor, introduce tu nombre de usuario:");
    if (!userName) {
        alert("El nombre de usuario es obligatorio.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'cm',
        format: 'a4'
    });

    // Selecciona el contenido debajo de la lista seleccionada
    const selectedContent = document.querySelector('.selected-list-content');

    // Usar html2canvas para capturar el contenido
    html2canvas(selectedContent).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdfWidth = doc.internal.pageSize.getWidth() - 3; // Descontar márgenes laterales de 1.5 cm cada uno
        const pdfHeight = doc.internal.pageSize.getHeight() - 3; // Descontar márgenes superior e inferior de 1.5 cm cada uno
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const scaleFactor = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

        // Añadir la información del usuario, facción, subfacción y tamaño de lista
        const faction = selectedFaction;
        const subfaction = selectedOption;
        const listSize = maxPoints + " puntos";

        // Añadir la información en negrita y en Arial 12
        doc.setFont("Arial", "bold");
        doc.setFontSize(12);
        let yPosition = 1; 
        doc.text("Usuario:", 1, yPosition); // 
        yPosition += 1.2; 
        doc.text("Facción:", 1, yPosition); // 4 puntos en cm
        yPosition += 1.2; 
        doc.text("Subfacción:", 1, yPosition); // 4 puntos en cm
        yPosition += 1.2; 
        doc.text("Tamaño de lista:", 1, yPosition); // 4 puntos en cm
        yPosition += 0.2;

        // Añadir la información del usuario
        doc.setFont("Arial", "normal");
        yPosition = 1.6; 
        doc.text(userName, 1, yPosition); 
        yPosition += 1.2;
        doc.text(faction, 1, yPosition); 
        yPosition += 1.2; 
        doc.text(subfaction, 1, yPosition); 
        yPosition += 1.2; 
        doc.text(listSize, 1, yPosition);
        yPosition += 0.20; 

        // Añadir la imagen escalada al PDF con márgenes de 1.5 cm
        doc.addImage(imgData, 'PNG', 2.5, yPosition + 1, imgWidth * scaleFactor, imgHeight * scaleFactor);
        doc.save('lista.pdf');
    });
});
