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
      { name: 'Chico Topo', displayName: 'Chico Topo', points: 10, characteristics: 'a2', gender: 'Hombre' },
      { name: 'Chica Eriza', displayName: 'Chica Eriza', points: 10, characteristics: 'a2', gender: 'Mujer' },
      { name: 'Chicos Mangosta', displayName: 'Chicos Mangosta', points: 10, characteristics: 'Ma2', gender: 'Hombre' },
      { name: 'Hombre Águila', displayName: 'Hombre Águila', points: 10, characteristics: 'a:2', gender: 'Hombre' },
      { name: 'Hombre Toro', displayName: 'Hombre Toro', points: 15, characteristics: 'a', gender: 'Hombre' }
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
      '<br>La Cohesión es un valor que va de 1 a 4 (ignora efectos que la suban por encima o por debajo de estos valores) y define lo unida que está la banda Vástagos de Kurgan para seguir a su líder. Empieza con un valor de 3 y puede subir y bajar durante la partida:<br>' +
      '<br><strong>+2</strong> de Cohesión si muere el Líder rival.<br>' +
      '<strong>-2</strong> de Cohesión si muere el Líder de la banda.<br>' +
      '<strong>+1</strong> de Cohesión cuando muera el primer enemigo que no sea invocación cada ronda.<br>' +
      '<strong>-1</strong> de Cohesión si se termina un turno en que ningún enemigo (ignorando invocaciones) haya recibido una herida.<br>' +
      '<br><strong>Cohesión Efecto</strong><br>' +
      '<strong>4:</strong> Todos los aliados activan sus habilidades de Lealtad y pueden recibir órdenes.<br>' +
      '<strong>3:</strong> Todos los aliados que compartan culto con el Líder activan sus habilidades de Lealtad. Todos los aliados pueden recibir órdenes.<br>' +
      '<strong>2:</strong> Solo los aliados que compartan culto con el Líder pueden recibir órdenes.<br>' +
      '<strong>1:</strong> Solo el Líder de la banda puede recibir órdenes.<br>' +
      '<br><strong>Demostración de Fuerza (Orden)</strong><br>' +
      'Esta orden puede darse después de lanzar una tirada de daño con un arma a melé. Repite la tirada de daño.',

    leaders: [
      {
        name: 'Nek`Org el Profeta',
        displayName: '<strong>Nek`Org el Profeta</strong>',
        points: 18,
        characteristics: '\nDOM:2 EST:3 ORD:4 FUR:4 \nMOV:5 DES:4 POT:3 CON:5 ARC:4 HER:6 TAM:4 AME:2 AGA:3',
        extraInfo:
          '<strong>Armas:</strong> Espadón diente\n' +
          '<strong>Impactante:</strong> Reduce en 1 el número objetivo de la Tirada de Daño (mín. 2).\n' +
          '<strong>Intimidante:</strong> Si se obtiene al menos un Sphere en la Tirada de Ataque, obtiene <strong>AME +1</strong> hasta el final de la activación.\n' +
          '<strong>Comunicación Sensorial:</strong> Si el objetivo es un Soimi, la distancia para dar órdenes de este combatiente es de 8".\n' +
          '<strong>Demostración de Poder:</strong> Cuando un enemigo (no invocación) muera a causa de un hechizo a 8" o menos de este combatiente, esta banda aumenta en 1 su Cohesión.\n' +
          '<strong>-Lealtad- Magia Instintiva:</strong> Si la banda tiene suficiente Cohesión, este combatiente puede correr al doble y lanzar hechizos.',
        comment:
          'Armas: Espadón diente\n' +
          'Impactante: Reduce en 1 el número objetivo de la Tirada de Daño (mín. 2).\n' +
          'Intimidante: Si se obtiene al menos un Sphere en la Tirada de Ataque, obtiene AME +1 hasta el final de la activación.\n' +
          'Comunicación Sensorial: Si el objetivo es un Soimi, la distancia para dar órdenes de este combatiente es de 8".\n' +
          'Demostración de Poder: Cuando un enemigo (no invocación) muera a causa de un hechizo a 8" o menos de este combatiente, esta banda aumenta en 1 su Cohesión.\n' +
          'Lealtad - Magia Instintiva: Si la banda tiene suficiente Cohesión, este combatiente puede correr al doble y lanzar hechizos.'
      },
      {
        name: 'Tir`Abe Muro de Hielo',
        displayName: '<strong>Tir`Abe Muro de Hielo</strong>',
        points: 19,
        characteristics: '\nDOM:2 EST:2 ORD:4 FUR:2 \nMOV:5 DES:4 POT:4 CON:5 ARC:4 HER:6 TAM:4 AME:3 AGA:3',
        extraInfo:
          '<strong>Armas:</strong> Maza de Guerra\n' +
          '<strong>Contundente:</strong> Reduce en 1 el número objetivo de la Tirada de Daño (mín. 2); si el ataque tiene POT 4 o más, recibe 1 adicional (2 en total).\n' +
          '<strong>Comunicación Sensorial:</strong> Si el objetivo es un Soimi, la distancia para dar órdenes de este combatiente es de 8".\n' +
          '<strong>Campeón de Kurgan:</strong> Cuando este combatiente mate un enemigo (no invocación) de PB 6 o superior, esta banda aumenta en 1 su Cohesión.\n' +
          '<strong>Aguijones:</strong> Causa una herida automática al objetivo. Sphere: este combatiente se cura una herida.\n' +
          '<strong>Golpe Circular:</strong> Este combatiente elige un enemigo en contacto y combate contra él (combate adicional). No puede combatir dos veces con el mismo oponente durante su activación.\n' +
          '<strong>-Lealtad- Luchador Excepcional:</strong> Si la banda tiene suficiente Cohesión, este combatiente nunca sufre la penalización por cansancio.',
        comment:
          'Armas: Maza de Guerra\n' +
          'Contundente: Reduce en 1 el número objetivo de la Tirada de Daño (mín. 2); si el ataque tiene POT 4 o más, recibe 1 adicional (2 en total).\n' +
          'Comunicación Sensorial: Si el objetivo es un Soimi, la distancia para dar órdenes de este combatiente es de 8".\n' +
          'Campeón de Kurgan: Cuando este combatiente mate un enemigo (no invocación) de PB 6 o superior, esta banda aumenta en 1 su Cohesión.\n' +
          'Aguijones: Causa una herida automática al objetivo. Sphere: este combatiente se cura una herida.\n' +
          'Golpe Circular: Combate adicional contra un enemigo en contacto.'
      },
      { name: 'Líder 4', displayName: 'Líder 4', points: 9, characteristics: 'a' }
    ],

    combatants: [
      {
        name: 'Adorador Gélido',
        displayName: '<strong>Adorador Gélido</strong>',
        points: 9,
        characteristics: '\nFUR:1 \nMOV:5 DES:4 POT:3 CON:4 ARC:4 HER:6 TAM:4 AME:1 AGA:2',
        extraInfo:
          '<strong>Armas:</strong> Espada diente\n' +
          '<strong>Intimidante:</strong> Si se obtiene al menos un Sphere en la Tirada de Ataque, obtiene <strong>AME +1</strong> hasta el final de la activación.\n' +
          '<strong>-Lealtad- Carga Fervorosa:</strong> Si la banda tiene suficiente Cohesión, este combatiente se desplaza 1" adicional cuando cargue.\n' +
          '<strong>Aguijones:</strong> Causa una herida automática al objetivo. Sphere: este combatiente se cura una herida.',
        comment:
          'Armas: Espada diente\n' +
          'Intimidante: Si se obtiene al menos un Sphere en la Tirada de Ataque, obtiene AME +1 hasta el final de la activación.\n' +
          'Carga Fervorosa: Si la banda tiene suficiente Cohesión, este combatiente se desplaza 1" adicional cuando cargue.\n' +
          'Aguijones: Causa una herida automática al objetivo. Sphere: este combatiente se cura una herida.'
      },
      {
        name: 'Enjendro del Hielo',
        displayName: '<strong>Enjendro del Hielo</strong>',
        points: 4,
        characteristics: '\nORD:1 FUR:1 \nMOV:4 DES:2 POT:2 CON:3 ARC:3 HER:5 TAM:3 AME:0 AGA:1',
        extraInfo:
          '<strong>Armas:</strong> Uñas\n' +
          '<strong>Incompetente:</strong> Este combatiente no cansa a los enemigos ni ofrece apoyo en combate.\n' +
          '<strong>Comunicación Sensorial:</strong> Si el objetivo es un Soimi, la distancia para dar órdenes de este combatiente es de 8".\n' +
          '<strong>Transfusión Vital:</strong> Cura una herida al Soimi aliado objetivo.',
        comment:
          'Armas: Uñas\n' +
          'Incompetente: No cansa a los enemigos ni ofrece apoyo en combate.\n' +
          'Comunicación Sensorial: Si el objetivo es un Soimi, la distancia para dar órdenes de este combatiente es de 8".\n' +
          'Transfusión Vital: Cura una herida al Soimi aliado objetivo.'
      }
    ],

    artifacts: [
      {
        name: 'Piel de Sabrash',
        displayName: '<strong>Piel de Sabrash:</strong> -2 DOM-',
        points: 0,
        characteristics:
          'Este combatiente puede correr al doble aunque tenga enemigos a 4". Además, el MOV de este combatiente no puede ser reducido por efectos enemigos.'
      },
      {
        name: 'Pellejo de Olbarak',
        displayName: '<strong>Pellejo de Olbarak:</strong> -1 DOM-',
        points: 0,
        characteristics:
          'Solo líderes de Culto Enur`Anar. Cuando este combatiente quite la última herida a un enemigo con un ataque a melé, recupera 1 herida.'
      },
      { name: 'Furia de Kurgan', displayName: '<strong>Furia de Kurgan:</strong> -1 DOM-', points: 0, characteristics: 'Este combatiente obtiene FUR +1' }
    ],

    veterans: [
      { name: 'Veterano 3', displayName: 'Veterano 3', points: 4, characteristics: 'Ca' },
      { name: 'Veterano 4', displayName: 'Veterano 4', points: 6, characteristics: 'CaF' }
    ]
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
      {
        name: 'Nirlem, el paladín',
        displayName: '<strong>Nirlem, el paladín</strong>',
        points: 15,
        characteristics: '\nDOM:2 EST:3 ORD:3 \nMOV:3 DES:4 POT:3 CON:5 ARC:4 HER:6 TAM:3 AME:1 COR:5',
        extraInfo:
          '<strong>Armas:</strong>\n' +
          '<strong>Ajusticiadora:</strong> <em>Contundente</em>: Reduce en 1 el número objetivo de la Tirada de Daño (mín. 2); si el ataque tiene POT 4 o más, recibe 1 adicional (2 en total).\n' +
          '<strong>Bastión de la Verdad (Defensiva)</strong>: Esta arma no hace tiradas de daño ni provoca tiradas de moral por ganar la tirada en combate.\n' +
          '<strong>¡Levántate y lucha! - 4":</strong> El objetivo aliado que no sea este combatiente sana 1 herida. <strong>Sphere:</strong> Elige un objetivo aliado adicional que no sea este combatiente.',
        comment:
          'Armas: Ajusticiadora (Contundente): Reduce en 1 el número objetivo de la Tirada de Daño (mín. 2); si el ataque tiene POT 4 o más, recibe 1 adicional (2 en total).\n' +
          'Bastión de la Verdad (Defensiva): Esta arma no hace tiradas de daño ni provoca tiradas de moral por ganar la tirada en combate.\n' +
          '¡Levántate y lucha!: El objetivo aliado que no sea este combatiente sana 1 herida. Sphere: Elige un objetivo aliado adicional que no sea este combatiente.'
      },
      {
        name: 'Rodanes, Brazo de metal',
        displayName: '<strong>Rodanes, Brazo de metal</strong>',
        points: 16,
        characteristics: '\nDOM:2 EST:4 ORD:4 \nMOV:3 DES:5 POT:3 CON:5 ARC:4 HER:6 TAM:3 AME:1 COR:5',
        extraInfo:
          '<strong>Armas:</strong>\n' +
          '<strong>Integridad:</strong> <em>Intimidante</em>. Si se obtiene al menos un <strong>Sphere</strong> en la tirada de ataque, este combatiente obtiene <strong>AME +1</strong> hasta el final de la activación.\n' +
          '<strong>¡Legión, con el corazón! - 4":</strong> El objetivo aliado que no sea este combatiente deja de estar cansado. <strong>Sphere:</strong> Elige un objetivo aliado adicional que no sea este combatiente.',
        comment:
          'Armas: Integridad (Intimidante): Si se obtiene al menos un Sphere en la tirada de ataque, este combatiente obtiene AME +1 hasta el final de la activación.\n' +
          '¡Legión, con el corazón!: El objetivo aliado que no sea este combatiente deja de estar cansado. Sphere: Elige un objetivo aliado adicional que no sea este combatiente.'
      },
      {
        name: 'Taem, la carnicera',
        displayName: '<strong>Taem, la carnicera</strong>',
        points: 15,
        characteristics: '\nDOM:2 EST:3 ORD:4 \nMOV:4 DES:4 POT:3 CON:4 ARC:4 HER:6 TAM:3 AME:1 COR:5',
        extraInfo:
          '<strong>Armas:</strong>\n' +
          '<strong>Hacha de carnicera:</strong> <em>Intimidante</em>: Si se obtiene al menos un Sphere en la Tirada de Ataque, obtiene <strong>AME +1</strong> hasta el final de la activación.\n' +
          '<strong>¡Ven aquí! - 4":</strong> Si el objetivo es de <strong>TAM 4</strong> o inferior, desplázalo 4" acercándolo hacia este combatiente. <strong>Sphere:</strong> El objetivo sufre 1 herida.',
        comment:
          'Armas: Hacha de carnicera (Intimidante): Si se obtiene al menos un Sphere en la Tirada de Ataque, obtiene AME +1 hasta el final de la activación.\n' +
          '¡Ven aquí!: Si el objetivo es de TAM 4 o inferior, desplázalo 4" acercándolo hacia este combatiente. Sphere: El objetivo sufre 1 herida.'
      },
      {
        name: 'Laroc, la seductora',
        displayName: '<strong>Laroc, la seductora</strong>',
        points: 14,
        characteristics: '\nDOM:4 EST:2 ORD:3 \nMOV:4 DES:2 POT:2 CON:2 ARC:5 HER:4 TAM:3 AME:1 COR:4',
        extraInfo:
          '<strong>Armas:</strong>\n' +
          '<strong>Báculo Ungido:</strong> <em>Golpe Arcano</em>. Puede elegirse si usar CON o ARC del oponente como número objetivo de la tirada de daño.\n' +
          '<strong>Aura de devoción a Laroc:</strong> Las otras aliadas <strong>Mercenarias de Isha</strong> a 4" o menos de esta combatiente obtienen <strong>CON+1</strong> y <strong>ARC+1</strong>.\n' +
          '<strong>Descarga fulminante - 10":</strong> <em>Proyectil arcano</em>. El objetivo enemigo recibe una tirada de daño de <strong>3d6</strong> contra su <strong>ARC</strong>. <strong>Sphere:</strong> Aumenta el daño a <strong>5d6</strong>.\n' +
          '<strong>Esfera protectora - 10":</strong> Elige un punto dentro del alcance del hechizo y todos los aliados a 4" de dicho punto obtienen 1 de salud temporal hasta el próximo turno aliado.',
        comment:
          'Armas: Báculo Ungido (Golpe Arcano): Puede elegirse si usar CON o ARC del oponente como número objetivo de la tirada de daño.\n' +
          'Aura de devoción a Laroc: Las otras aliadas Mercenarias de Isha a 4" o menos de esta combatiente obtienen CON+1 y ARC+1.\n' +
          'Descarga fulminante - 10": Proyectil arcano. El objetivo enemigo recibe una tirada de daño de 3d6 contra su ARC. Sphere: Aumenta el daño a 5d6.\n' +
          'Esfera protectora - 10": Elige un punto dentro del alcance del hechizo y todos los aliados a 4" de dicho punto obtienen 1 de salud temporal hasta el próximo turno aliado.'
      }
    ],

    combatants: [
      {
        name: 'Laroc, la seductora',
        displayName: '<strong>Laroc, la seductora</strong>',
        points: 12,
        characteristics: '\nMOV:4 DES:2 POT:2 CON:2 ARC:5 HER:4 TAM:3 AME:1 COR:4',
        extraInfo:
          '<strong>Armas:</strong>\n' +
          '<strong>Báculo Ungido:</strong> <em>Golpe Arcano</em>. Puede elegirse si usar CON o ARC del oponente como número objetivo de la tirada de daño.\n' +
          '<strong>Aura de devoción a Laroc:</strong> Las otras aliadas <strong>Mercenarias de Isha</strong> a 4" o menos de esta combatiente obtienen <strong>CON+1</strong> y <strong>ARC+1</strong>.\n' +
          '<strong>Descarga fulminante - 10":</strong> <em>Proyectil arcano</em>. El objetivo enemigo recibe una tirada de daño de <strong>3d6</strong> contra su <strong>ARC</strong>. <strong>Sphere:</strong> Aumenta el daño a <strong>5d6</strong>.\n' +
          '<strong>Esfera protectora - 10":</strong> Elige un punto dentro del alcance del hechizo y todos los aliados a 4" de dicho punto obtienen 1 de salud temporal hasta el próximo turno aliado.',
        comment:
          'Armas: Báculo Ungido (Golpe Arcano): Puede elegirse si usar CON o ARC del oponente como número objetivo de la tirada de daño.\n' +
          'Aura de devoción a Laroc: Las otras aliadas Mercenarias de Isha a 4" o menos de esta combatiente obtienen CON+1 y ARC+1.\n' +
          'Descarga fulminante - 10": Proyectil arcano. El objetivo enemigo recibe una tirada de daño de 3d6 contra su ARC. Sphere: Aumenta el daño a 5d6.\n' +
          'Esfera protectora - 10": Elige un punto dentro del alcance del hechizo y todos los aliados a 4" de dicho punto obtienen 1 de salud temporal hasta el próximo turno aliado.',
        gender: 'Mujer'
      },
      {
        name: 'Róxter, el piloto',
        displayName: '',
        points: 11,
        characteristics: '\nMOV:5 DES:4 POT:3 CON:4 ARC:4 HER:6 TAM:4 AME:1 AGA:2',
        extraInfo:
          '<strong>Armas:</strong>\n' +
          '<strong>Espolones/strong><em>Descenso poderoso<\em> Cuando este combatiente efectúe una carga, este arma obriene <strong>POT+1</strong> hasta el final de la activcion \n' +
          '<em>Impactante:</em> Reduce en <strong>-1</strong> el numero objetivo de la tirada de daño (min. 2)' +
          '<strong>Cañones Icaro</strong> hasta el final de la activación. \n<strong>-Lealtad- Carga Fervorosa: </strong> si la banda tiene suficiente Cohesión, este combatiente se desplaza 1" adicional siempre que cargue. \n<strong>Aguijones:</strong>Causa una herida automática al objetivo. Sphere: este combatiente se cura una herida. ',
        comment: 'Armas: Espadon diente \n Impactante:Reduce en 1 el número objetivo de la Tirada de Daño (mín. 2). \nIntimidante: Si se obtiene al menos un Sphere en la Tirada de Ataque, obtiene AME 1 hasta el final de la activación. \nComunicación Sensorial: Si el objetivo es un Soimi, la distancia para dar órdenes de este combatiente es de 8”. \nDemostración de Poder: Cuando un enemigo(no invocación) muera a causa de un hechizo a 8" o menos de estecombatiente, esta banda aumenta en 1 su Cohesión. \nLealtad Magia Instintiva: Si la banda tiene suficiente Cohesión, este combatiente puede correr al doble y lanzar hechizos.'
        },
      { name: 'Combatiente 1', displayName: 'Combatiente 1', points: 6, characteristics: 'I', gender: 'Mujer' }
    ],

    artifacts: [
      { name: 'Artefacto 7', displayName: 'Artefacto 7', points: 4, characteristics: 'I' },
      { name: 'Artefacto 8', displayName: 'Artefacto 8', points: 7, characteristics: 'J' }
    ],

    veterans: [
      { name: 'Veterano 7', displayName: 'Veterano 7', points: 6, characteristics: 'K' },
      { name: 'Veterano 8', displayName: 'Veterano 8', points: 9, characteristics: 'L' }
    ]
  }
};

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
        '<br>Si el líder de tu banda es un Soimi, puedes contratar un segundo Líder Soimi por su coste original; este segundo combatiente pierde sus atributos de <strong>EST</strong> y <strong>ORD</strong> y deja de considerarse un Líder. Una banda que contenga un segundo Líder adquirido de esta forma empieza la partida con <strong>Cohesión +1</strong>.'
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
    { name: 'Legión de los Mil Corazones', description: 'Esta subfacción se centra en unidades masculinas y reglas de transfusión de heridas.' },
    { name: 'Mercenarias de Isha', description: 'Esta subfacción se centra en combatientes femeninas y reglas de apoyo de Isha.' }
  ]
};

/* --- Variables globales --- */
let selectedPoints = 0;
let maxPoints = 0;
let selectedOption = '';
let selectedFaction = '';
let chicaErizaCount = 0;

/* --- Funciones UI (sin cambios lógicos, pero usando displayName para mostrar) --- */

function setPoints(points) {
  maxPoints = points;
  const pointsList = document.getElementById('points-list');
  if (pointsList) {
    pointsList.innerHTML = `<li>${points} puntos</li>`;
  }
  const factionTitle = document.getElementById('faction-title');
  const factionListEl = document.getElementById('faction-list');
  if (factionTitle) factionTitle.classList.remove('hidden');
  if (factionListEl) factionListEl.classList.remove('hidden');
  showFactions();
}

function showFactions() {
  const factionList = document.getElementById('faction-list');
  if (!factionList) return;
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
  if (!factionList) return;
  factionList.innerHTML = ''; // Limpiar la lista

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
  optionsList.innerHTML = ''; // Limpiar la lista

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
  if (optionsList) optionsList.innerHTML = ''; // Limpiar la lista

  const li = document.createElement('li');
  li.innerHTML = `<strong>${option.name}</strong><br>${option.description}`;
  if (optionsList) optionsList.appendChild(li);

  const leaderTitle = document.getElementById('leader-title');
  const leaderList = document.getElementById('leader-list');
  const veteranTitle = document.getElementById('veteran-title');
  const veteranList = document.getElementById('veteran-list');
  const combatantTitle = document.getElementById('combatant-title');
  const combatantList = document.getElementById('combatant-list');
  const artifactTitle = document.getElementById('artifact-title');
  const artifactList = document.getElementById('artifact-list');

  if (leaderTitle) leaderTitle.classList.remove('hidden');
  if (leaderList) leaderList.classList.remove('hidden');
  if (veteranTitle) veteranTitle.classList.remove('hidden');
  if (veteranList) veteranList.classList.remove('hidden');
  if (combatantTitle) combatantTitle.classList.remove('hidden');
  if (combatantList) combatantList.classList.remove('hidden');
  if (artifactTitle) artifactTitle.classList.remove('hidden');
  if (artifactList) artifactList.classList.remove('hidden');

  showLeaders(faction);
  showVeterans(faction);
  showCombatants(faction);
  showArtifacts(faction);

  // Mostrar la facción y la opción seleccionadas
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
  leaderList.innerHTML = ''; // Limpiar la lista

  factions[faction].leaders.forEach(leader => {
    const li = document.createElement('li');
    const display = leader.displayName || leader.name;
    li.innerHTML = `${display} - PB:${leader.points} ${leader.characteristics.replace(/\n/g, '<br>')}`;
    li.title = leader.comment || '';
    li.onclick = () => addToSelectedList(leader);
    leaderList.appendChild(li);
  });
}

function showVeterans(faction) {
  const veteranList = document.getElementById('veteran-list');
  if (!veteranList) return;
  veteranList.innerHTML = ''; // Limpiar la lista

  if (factions[faction].veterans) {
    factions[faction].veterans.forEach(veteran => {
      const li = document.createElement('li');
      const display = veteran.displayName || veteran.name;
      li.innerHTML = `${display} - PB:${veteran.points} ${veteran.characteristics.replace(/\n/g, '<br>')}`;
      li.title = veteran.comment || '';
      li.onclick = () => addToSelectedList(veteran);
      veteranList.appendChild(li);
    });
  }
}

function showCombatants(faction) {
  const combatantList = document.getElementById('combatant-list');
  if (!combatantList) return;
  combatantList.innerHTML = '';

  factions[faction].combatants.forEach(combatant => {
    // Filtros por subfacción
    if (selectedOption === 'Devotos de Malesur' && combatant.name === 'Chica Eriza') {
      return; // No mostrar Chica Eriza para Devotos de Malesur
    }
    if (selectedOption === 'Legión de los Mil Corazones' && combatant.gender && combatant.gender !== 'Hombre') {
      return; // Mostrar solo hombres para Legión de los Mil Corazones
    }
    if (selectedOption === 'Mercenarias de Isha' && combatant.gender && combatant.gender !== 'Mujer') {
      return; // Mostrar solo mujeres para Mercenarias de Isha
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
  artifactList.innerHTML = ''; // Limpiar la lista

  factions[faction].artifacts.forEach(artifact => {
    const li = document.createElement('li');
    const display = artifact.displayName || artifact.name;
    li.innerHTML = `${display} - PB:${artifact.points} ${artifact.characteristics.replace(/\n/g, '<br>')}`;
    li.title = artifact.comment || '';
    li.onclick = () => addToSelectedList(artifact);
    artifactList.appendChild(li);
  });
}

function addToSelectedList(unit) {
  // Validación para Chica Eriza en Iniciados de Malesur (ejemplo original)
  if (selectedOption === 'Iniciados de Malesur' && unit.name === 'Chica Eriza') {
    if (chicaErizaCount >= 2) {
      alert('Solo puedes añadir un máximo de 2 Chica Eriza.');
      return;
    }
    chicaErizaCount++;
  }

  const selectedList = document.getElementById('selected-list');
  if (!selectedList) return;

  const li = document.createElement('li');
  const display = unit.displayName || unit.name;
  li.innerHTML = `${display} - PB:${unit.points} ${unit.characteristics.replace(/\n/g, '<br>')}<br>${unit.extraInfo ? unit.extraInfo.replace(/\n/g, '<br>') : ''}`;
  li.onclick = () => removeFromSelectedList(unit, li);
  selectedList.appendChild(li);

  selectedPoints += unit.points || 0;
  updateTotalPoints();
}

function removeFromSelectedList(unit, listItem) {
  const selectedList = document.getElementById('selected-list');
  if (!selectedList) return;
  selectedList.removeChild(listItem);

  if (unit.name === 'Chica Eriza') {
    chicaErizaCount = Math.max(0, chicaErizaCount - 1);
  }

  selectedPoints -= unit.points || 0;
  updateTotalPoints();
}

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

/* --- Generar PDF (corregido y cerrado correctamente) --- */
const generateBtn = document.getElementById('generatePDF');
if (generateBtn) {
  generateBtn.addEventListener('click', function () {
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
    if (!selectedContent) {
      alert('No se ha encontrado el contenido a exportar.');
      return;
    }

    // Usar html2canvas para capturar el contenido
    html2canvas(selectedContent).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = doc.internal.pageSize.getWidth() - 3; // márgenes laterales de 1.5 cm
      const pdfHeight = doc.internal.pageSize.getHeight() - 3; // márgenes superior e inferior de 1.5 cm
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const scaleFactor = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

      // Añadir la información del usuario, facción, subfacción y tamaño de lista
      const faction = selectedFaction || '';
      const subfaction = selectedOption || '';
      const listSize = maxPoints + " puntos";

      // Añadir la información en negrita y en tamaño legible
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

      // Añadir la información del usuario
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

      // Añadir la imagen escalada al PDF con márgenes
      doc.addImage(imgData, 'PNG', 2.5, yPosition + 1, imgWidth * scaleFactor, imgHeight * scaleFactor);
      doc.save('lista.pdf');
    }).catch(err => {
      console.error(err);
      alert('Error al generar el PDF.');
    });
  });
}
