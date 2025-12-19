const factions = {'Adeptos de Malesur': {
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
      { name: 'Chico Topo', displayName: 'Chico Topo', points: 10, characteristics: 'a2',},
      { name: 'Chica Eriza', displayName: 'Chica Eriza', points: 10, characteristics: 'a2',},
      { name: 'Chicos Mangosta', displayName: 'Chicos Mangosta', points: 10, characteristics: 'Ma2',},
      { name: 'Hombre Águila', displayName: 'Hombre Águila', points: 10, characteristics: 'a:2',},
      { name: 'Hombre Toro', displayName: 'Hombre Toro', points: 15, characteristics: 'a',}
    ],
    artifacts: [
      { name: 'Artefacto 1', displayName: 'Artefacto 1', points: 3, characteristics: 'aM' },
      { name: 'Artefacto 2', displayName: 'Artefacto 2', points: 4, characteristics: 'Ca N' }
    ],
    veterans: [
      { name: 'Artífice veterano', displayName: '<strong>Artífice veterano</strong>', points: 1, characteristics: 'El líder obtiene <strong>DOM +1</strong>' },
      { name: 'Mando veterano', displayName: '<strong>Mando veterano</strong>', points: 1, characteristics: 'El líder obtiene <strong>ORD +1</strong>' },
      { name: 'Arcanista veterano', displayName: '<strong>Arcanista veterano</strong>', points: 1, characteristics: 'El líder obtiene <strong>POD +2</strong>' }
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
      { name: 'Artífice veterano', displayName: '<strong>Artífice veterano</strong>', points: 1, characteristics: 'El líder obtiene <strong>DOM +1</strong>' },
      { name: 'Mando veterano', displayName: '<strong>Mando veterano</strong>', points: 1, characteristics: 'El líder obtiene <strong>ORD +1</strong>' },
      { name: 'Arcanista veterano', displayName: '<strong>Arcanista veterano</strong>', points: 1, characteristics: 'El líder obtiene <strong>POD +2</strong>' }
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
      { name: 'Artífice veterano', displayName: '<strong>Artífice veterano</strong>', points: 1, characteristics: 'El líder obtiene <strong>DOM +1</strong>' },
      { name: 'Mando veterano', displayName: '<strong>Mando veterano</strong>', points: 1, characteristics: 'El líder obtiene <strong>ORD +1</strong>' },
      { name: 'Arcanista veterano', displayName: '<strong>Arcanista veterano</strong>', points: 1, characteristics: 'El líder obtiene <strong>POD +2</strong>' }
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
          '<strong>Habilidades:</strong>\n' +
          '<strong>- Formación de ataque:</strong> Mientras dos aliados <strong>Legión de los Cien Corazones</strong> estén en contacto, ignora la distancia maxima para considerar su carga impetuosa.\n' +
          '<strong>- Posición ofensiva:</strong> Este combatiente ignora la distancia maxima para considear su carga impetuosa.\n' +
          '<strong>Armas:</strong>\n' +
          '<strong>- Ajusticiadora:</strong> <em>Contundente:</em> Reduce en 1 el número objetivo de la Tirada de Daño (mín. 2); si el ataque tiene POT 4 o más, recibe 1 adicional (2 en total).\n' +
          '<strong>- Bastión de la Verdad:</strong><em> Defensiva:</em> Esta arma no hace tiradas de daño ni provoca tiradas de moral por ganar la tirada en combate.\n' +
          '<strong>Hazañas:</strong>\n' +
          '<strong>- ¡Levántate y lucha! - 4"</strong>: El objetivo aliado que no sea este combatiente sana 1 herida. <strong>Sphere:</strong> Elige un objetivo aliado adicional que no sea este combatiente.',
        comment:
          'Armas: Ajusticiadora (Contundente): Reduce en 1 el número objetivo de la Tirada de Daño (mín. 2); si el ataque tiene POT 4 o más, recibe 1 adicional (2 en total).\n' +
          'Bastión de la Verdad (Defensiva): Esta arma no hace tiradas de daño ni provoca tiradas de moral por ganar la tirada en combate.\n' +
          '¡Levántate y lucha!: El objetivo aliado que no sea este combatiente sana 1 herida. Sphere: Elige un objetivo aliado adicional que no sea este combatiente.',
        gender: 'Hombre'
      },
      {
        name: 'Rodanes, Brazo de metal',
        displayName: '<strong>Rodanes, Brazo de metal</strong>',
        points: 16,
        characteristics: '\nDOM:2 EST:4 ORD:4 \nMOV:3 DES:5 POT:3 CON:5 ARC:4 HER:6 TAM:3 AME:1 COR:5',
        extraInfo:
          '<strong>Habilidades:</strong>\n' +
          '<strong>- Formación de defensa:</strong>Mientras dos aliados <strong>Legión de los Cien Corazones</strong> estén en contacto, se anulan los modificadores por carga impetuosa de los enemigos en contacto.\n' +
          '<strong>- Posición defensiva:</strong>se anulan los modificadores por carga impetuosa de los enemigos en contacto.\n' +
          '<strong>Armas:</strong>\n' +
          '<strong>- Integridad:</strong> <em>Intimidante:</em>. Si se obtiene al menos un <strong>Sphere</strong> en la tirada de ataque, este combatiente obtiene <strong>AME +1</strong> hasta el final de la activación.\n' +
          '<strong>Hazañas:</strong>\n' +
          '<strong>- ¡Legión, con el corazón! - 4":</strong> El objetivo aliado que no sea este combatiente deja de estar cansado. <strong>Sphere:</strong> Elige un objetivo aliado adicional que no sea este combatiente.',
        comment:
          'Armas: Integridad (Intimidante): Si se obtiene al menos un Sphere en la tirada de ataque, este combatiente obtiene AME +1 hasta el final de la activación.\n' +
          '¡Legión, con el corazón!: El objetivo aliado que no sea este combatiente deja de estar cansado. Sphere: Elige un objetivo aliado adicional que no sea este combatiente.',
        gender: 'Hombre'
      },
      {
        name: 'Taem, la carnicera',
        displayName: '<strong>Taem, la carnicera</strong>',
        points: 15,
        characteristics: '\nDOM:2 EST:3 ORD:4 \nMOV:4 DES:4 POT:3 CON:4 ARC:4 HER:6 TAM:3 AME:1 COR:5',
        extraInfo:
          '<strong>Habilidades:</strong>\n' +
          '<strong>- Aura de devoción a Taem</strong>Las otras aliadas <strong>Mercenarias de Isha</strong> a 4" o menos de esta combatiente, obtienen <strong>AME+1</strong>.\n' +
          '<strong>- Corpulenta:</strong>Las tiradas de daño contra la CON de esta combatiente obtiene <strong>-1d6</strong>(mín.1).\n' +  
          '<strong>Armas:</strong>\n' +
          '<strong>- Hacha de carnicera:</strong> <em>Intimidante:</em> Si se obtiene al menos un Sphere en la Tirada de Ataque, obtiene <strong>AME +1</strong> hasta el final de la activación.\n' +
          '<strong>Hazañas:</strong>\n' +
          '<strong>- ¡Ven aquí! - 4":</strong> Si el objetivo es de <strong>TAM 4</strong> o inferior, desplázalo 4" acercándolo hacia este combatiente. <strong>Sphere:</strong> El objetivo sufre 1 herida.',
        comment:
          'Armas: Hacha de carnicera (Intimidante): Si se obtiene al menos un Sphere en la Tirada de Ataque, obtiene AME +1 hasta el final de la activación.\n' +
          '¡Ven aquí!: Si el objetivo es de TAM 4 o inferior, desplázalo 4" acercándolo hacia este combatiente. Sphere: El objetivo sufre 1 herida.',
        gender: 'Mujer'
      },
      {
        name: 'Laroc, la seductora',
        displayName: '<strong>Laroc, la seductora</strong>',
        points: 14,
        characteristics: '\nDOM:4 EST:2 ORD:3 \nMOV:4 DES:2 POT:2 CON:2 ARC:5 HER:4 TAM:3 AME:1 COR:4',
        extraInfo:
          '<strong>Armas:</strong>\n' +
          '<strong>- Báculo Ungido:</strong> <em>Golpe Arcano</em>. Puede elegirse si usar CON o ARC del oponente como número objetivo de la tirada de daño.\n' +
          '<strong>Habilidades:</strong>\n' +
          '<strong>- Aura de devoción a Laroc:</strong> Las otras aliadas <strong>Mercenarias de Isha</strong> a 4" o menos de esta combatiente obtienen <strong>CON+1</strong> y <strong>ARC+1</strong>.\n' +
          '<strong>Hechizos:</strong>\n' +
          '<strong>- Descarga fulminante - 10":</strong> <em>Proyectil arcano:</em> El objetivo enemigo recibe una tirada de daño de <strong>3d6</strong> contra su <strong>ARC</strong>. <strong>Sphere:</strong> Aumenta el daño a <strong>5d6</strong>.\n' +
          '<strong>- Esfera protectora - 10":</strong> Elige un punto dentro del alcance del hechizo y todos los aliados a 4" de dicho punto obtienen 1 de salud temporal hasta el próximo turno aliado.',
        comment:
          'Armas: Báculo Ungido (Golpe Arcano): Puede elegirse si usar CON o ARC del oponente como número objetivo de la tirada de daño.\n' +
          'Aura de devoción a Laroc: Las otras aliadas Mercenarias de Isha a 4" o menos de esta combatiente obtienen CON+1 y ARC+1.\n' +
          'Descarga fulminante - 10": Proyectil arcano. El objetivo enemigo recibe una tirada de daño de 3d6 contra su ARC. Sphere: Aumenta el daño a 5d6.\n' +
          'Esfera protectora - 10": Elige un punto dentro del alcance del hechizo y todos los aliados a 4" de dicho punto obtienen 1 de salud temporal hasta el próximo turno aliado.',
        unique: true, 
        gender: 'Mujer'
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
          '<strong>- Báculo Ungido:</strong> <em>Golpe Arcano</em>. Puede elegirse si usar CON o ARC del oponente como número objetivo de la tirada de daño.\n' +
          '<strong>Habilidades:</strong>\n' +
          '<strong>- Aura de devoción a Laroc:</strong> Las otras aliadas <strong>Mercenarias de Isha</strong> a 4" o menos de esta combatiente obtienen <strong>CON+1</strong> y <strong>ARC+1</strong>.\n' +
          '<strong>Hechizos:</strong>\n' +
          '<strong>- Descarga fulminante - 10":</strong> <em>Proyectil arcano:</em> El objetivo enemigo recibe una tirada de daño de <strong>3d6</strong> contra su <strong>ARC</strong>. <strong>Sphere:</strong> Aumenta el daño a <strong>5d6</strong>.\n' +
          '<strong>- Esfera protectora - 10":</strong> Elige un punto dentro del alcance del hechizo y todos los aliados a 4" de dicho punto obtienen 1 de salud temporal hasta el próximo turno aliado.',
        comment:
          'Armas: Báculo Ungido (Golpe Arcano): Puede elegirse si usar CON o ARC del oponente como número objetivo de la tirada de daño.\n' +
          'Aura de devoción a Laroc: Las otras aliadas Mercenarias de Isha a 4" o menos de esta combatiente obtienen CON+1 y ARC+1.\n' +
          'Descarga fulminante - 10": Proyectil arcano. El objetivo enemigo recibe una tirada de daño de 3d6 contra su ARC. Sphere: Aumenta el daño a 5d6.\n' +
          'Esfera protectora - 10": Elige un punto dentro del alcance del hechizo y todos los aliados a 4" de dicho punto obtienen 1 de salud temporal hasta el próximo turno aliado.',
        unique: true, 
        gender: 'Mujer'
      },
      {
        name: 'Róxter, el piloto',
        displayName: '<strong>Róxter, el piloto</strong>',
        points: 11,
        characteristics: '\nMOV:5 DES:4 POT:3 CON:4 ARC:4 HER:6 TAM:4 AME:1 COR:5',
        extraInfo:
          '<strong>Habilidades:</strong>\n' +
          '<em>- Volador:</em> Durante su fase de movimiento, esta combatiente se reubica en lugar de desplazarse, además, no tiene área de defensa\n' +
          '<strong>Armas:</strong>\n' +
          '<strong>- Espolones</strong>-<em>Descenso poderoso:</em> Cuando este combatiente efectúe una carga, este arma obriene <strong>POT+1</strong> hasta el final de la activcion \n' +
          '<em>Impactante:</em> Reduce en <strong>-1</strong> el numero objetivo de la tirada de daño (min. 2)\n' +
          '<strong>- Cañones Icaro - 10" DES:4 POT:3</strong>\n' +
          '<em>Penetracion:</em> Reduce en <strong>-1</strong> el numero objetivo de la tirada de daño (min. 2)',
        comment: 
          'Armas:' +
          'Espolones - Descenso poderoso: Cuando este combatiente efectúe una carga, este arma obriene POT+1 hasta el final de la activcion \n' +
          'Impactante: Reduce en -1 el numero objetivo de la tirada de daño (min. 2)' +
          'Cañones Icaro - 10" DES:4 POT:3 \n' +
          'Penetracion: Reduce en <strong>-1</strong> el numero objetivo de la tirada de daño (min. 2)'
      },
      {
        name: 'Mayira y furia de Darlime',
        displayName: '<strong>Mayira y furia de Darlime</strong>',
        points: 11,
        characteristics: '\nMOV:5 DES:4 POT:3 CON:4 ARC:5 HER:5 TAM:5 AME:1 COR:5',
        extraInfo:
          '<strong>Habilidades:</strong>\n' +
          '<em>- Voladora:</em> Durante su fase de movimiento, esta combatiente se reubica en lugar de desplazarse, además, no tiene área de defensa\n' +
          '<strong>Hechizos:</strong>\n' +
          '<strong>- Instigar duelo: - 4"</strong>El objetivo enemigo esdesplazado acercándose hacia este combatiente por la ruta mas corta hasta quedar en contacto. Este combatiente debe lucha contra el objetivo esta activacion, si puede.\n' +
          '<strong>Armas:</strong>\n' +
          '<strong>- Lanza de las Mercenarias</strong>' +
          '<em>Impactante:</em> Reduce en <strong>-1</strong> el numero objetivo de la tirada de daño (min. 2).\n' +
          '<em>Contracarga:</em> anulan los modificadores por carga impetuosa de los enemigos contra los que se luche.\n' +
          '<strong>- Jabalina - 8" DES:4 POT:2</strong>\n' +
          '<em>Disparo a la carrera:</em> Este combatiente obitiene el modificado de ataque a distancia po no haber movido, aunque lo haya hecho como maniobra.',
        comment: 
          'Voladora: Durante su fase de movimiento, esta combatiente se reubica en lugar de desplazarse, además, no tiene área de defensa\n' +
          'Armas:\n' +
          'Lanza de las Mercenarias' +
          'Impactante: Reduce en -1 el numero objetivo de la tirada de daño (min. 2)\n' +
          'Jabalina - 8" DES:4 POT:2\n' +
          'Disparo a la carrera: Este combatiente obitiene el modificado de ataque a distancia po no haber movido, aunque lo haya hecho como maniobra.',
        gender: 'Mujer'
      },
      {
        name: 'Postulante raso',
        displayName: '<strong>Postulante raso</strong>',
        points: 4,
        characteristics: '\nMOV:4 DES:4 POT:2 CON:3 ARC:2 HER:5 TAM:3 AME:0 COR:3',
        extraInfo:
          '<strong>Habilidades:</strong>\n' +
          '<strong>- Luchador Inexperto:</strong> Este combatiente no aporta modificadores de apoyo en ataques cuerpo a cuerpo.\n' +
          '<strong>- Posicion segura:</strong> Mientras este combatiente esté a 2" o menos de un objetivo obiene <strong>+1d6</strong> durante las tiradas de empujar.\n' +
          '<strong>- Unidad (Cohorte):</strong> Este combatiente solo puede reclutarse en unidades formadas por <strong>1 Corazon Postulante</strong> y <strong>1-2 Postulantes rasos</strong>\n' +
          '<strong>Armas:</strong>\n' +
          '<strong>- Espada Larga</strong>',
        comment: 
          'Luchador Inexperto: Este combatiente no aporta modificadores de apoyo en ataques cuerpo a cuerpo.\n' +
          'Posicion segura: Mientras este combatiente esté a 2" o menos de un objetivo obiene <strong>+1d6</strong> durante las tiradas de empujar.\n' +
          'Unidad (Cohorte): Este combatiente solo puede reclutarse en unidades formadas por <strong>1 Corazon Postulante</strong> y <strong>1-2 Postulantes rasos</strong>\n' +
          'Armas: Espada Larga',
        gender: 'Hombre'
      },
    {
        name: 'Corazón Postulante',
        displayName: '<strong>Corazón Postulante</strong>',
        points: 5,
        characteristics: '\nMOV:4 DES:4 POT:2 CON:3 ARC:2 HER:5 TAM:3 AME:0 COR:3',
        extraInfo:
          '<strong>Habilidades:</strong>\n' +
          '<strong>- Posicion segura:</strong> Mientras este combatiente esté a 2" o menos de un objetivo obiene <strong>+1d6</strong> durante las tiradas de empujar.\n' +
          '<strong>- Unidad (Cohorte):</strong> Este combatiente solo puede reclutarse en unidades formadas por <strong>1 Corazon Postulante</strong> y <strong>1-2 Postulantes rasos</strong>\n' +
          '<strong>Armas:</strong>\n' +
          '<strong>- Espada Larga</strong>' +
          '<strong>- Escudo Corazón</strong>: <em>Defensiva:</em> Este arma no hace ninguna tirada de daño ni provoca tiradas de moral por ganar la tirada de combate.',
        comment: 
          'Posicion segura: Mientras este combatiente esté a 2" o menos de un objetivo obiene <strong>+1d6</strong> durante las tiradas de empujar.\n' +
          'Unidad (Cohorte): Este combatiente solo puede reclutarse en unidades formadas por <strong>1 Corazon Postulante</strong> y <strong>1-2 Postulantes rasos</strong>\n' +
          'Armas: Espada Larga' +
          'Escudo Corazón: Defensiva: Este arma no hace ninguna tirada de daño ni provoca tiradas de moral por ganar la tirada de combate.',
        gender: 'Hombre'
      },
    {
        name: 'Escudero',
        displayName: '<strong>Escudero</strong>',
        points: 6,
        characteristics: '\nMOV:4 DES:3 POT:2 CON:3 ARC:2 HER:5 TAM:3 AME:0 COR:3',
        extraInfo:
          '<strong>Habilidades:</strong>\n' +
          '<strong>- Cadena de mando:</strong> Si tu <strong>Líder</strong> es retiirado como baja puedes elegir un aliado con esta regla para que se convierta en tu nuevo <strong>Líder</strong>, dicho combatiente obtiene <strong>EST +2</strong> y <strong>EST +2</strong> y <strong>ORD +1</strong> hasta el final de la partida. Además los aliados a 4" del aliado elegido no necesitan superar una tirada de moral (COR) por perder al anterior Líder\n' +
          '<strong>- Consejo táctico:</strong> Si tienes uno o más combatientes con esta habilidad a 6" o menos de tu <strong>Líder</strong> (que no sean tu propio Líder), tira <strong>+1d6</strong> en las tiradas de iniciativa\n' +
          '<strong>Armas:</strong>\n' +
          '<strong>- Espada corta</strong>' +
          '<strong>Hazañas:</strong>\n' +
          '<strong>Primeros auxilios</strong>: El objetivo aliado que no sea este combatiente sana 1 herida.',
        comment: 
          'Posicion segura: Mientras este combatiente esté a 2" o menos de un objetivo obiene <strong>+1d6</strong> durante las tiradas de empujar.\n' +
          'Unidad (Cohorte): Este combatiente solo puede reclutarse en unidades formadas por <strong>1 Corazon Postulante</strong> y <strong>1-2 Postulantes rasos</strong>\n' +
          'Armas: Espada Larga',
        gender: 'Hombre'
      }
    ],

    artifacts: [
      { name: 'Anillo de sanación', displayName: '<strong>Anillo de sanación</strong>', characteristics: 'DOM:1', extraInfo: 'Una vez por partida, durante la activación de este combatiente, puede elegirse un aliado a 4" o menos para que sane una herida.' },
      { name: 'Cadena Lucidez Estratégica', displayName: '<strong>Cadena Lucidez Estratégica</strong>', characteristics: 'DOM:2', extraInfo: '<em>Solo líderes Mercenaria de Isha</em>. Este combatiente obtiene <strong>EST +1</strong>.', gender: 'Mujer' },
      { name: 'Capa Comedolor', displayName: '<strong>Capa Comedolor</strong>', characteristics: 'DOM:2', extraInfo: 'Este combatiente obtiene <strong>HER +1</strong>.' },
      { name: 'Medallón de ligereza', displayName: '<strong>Medallón de ligereza</strong>', characteristics: 'DOM:1', extraInfo: 'Durante su activación, este combatiente se desplaza 4” (en lugar de 2”) y tira <strong>+2d6</strong>.' },
      { name: 'Runa de protección', displayName: '<strong>Runa de protección</strong>', characteristics: 'DOM:1', extraInfo: '<em>Solo si la banda es Legión de los Cien Corazones</em>. Cuando este combatiente use el Latir del Corazón, podrá transferir o ser transeferido heridas a 8“ (en vez de 4“).', gender: 'Hombre' },
      { name: 'Sello de autoridad', displayName: '<strong>Sello de autoridad</strong>', characteristics: 'DOM:1', extraInfo: '<em>Solo si la banda es La Alianza</em>. Este combatiente cuenta como si costara PB +2 para capturar objetivos.',gender: 'Alianza' },
      { name: 'Sortija reluciente', displayName: '<strong>Sortija reluciente</strong>', characteristics: 'DOM:2', extraInfo: '<em>Solo si la banda es La Alianza</em>. La distancia para dar órdenes de este combatiente es de 8”.',gender: 'Alianza' },
      { name: 'Colgante Brillo Carmesí', displayName: '<strong>Colgante Brillo Carmesí</strong>', characteristics: 'DOM:1', extraInfo: '<em>Solo líderes Legión de los Cien Corazones</em>. Este combatiente obtiene <strong>AME +1</strong> y supera automáticamente todas las tiradas de moral.', gender: 'Hombre' }
    ],

    veterans: [
      { name: 'Artífice veterano', displayName: '<strong>Artífice veterano</strong>', points: 1, characteristics: 'El líder obtiene <strong>DOM +1</strong>' },
      { name: 'Mando veterano', displayName: '<strong>Mando veterano</strong>', points: 1, characteristics: 'El líder obtiene <strong>ORD +1</strong>' },
      { name: 'Arcanista veterano', displayName: '<strong>Arcanista veterano</strong>', points: 1, characteristics: 'El líder obtiene <strong>POD +2</strong>' }
    ]
  }};
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
    { name: 'La Alianza', 
     description: 'Esta subfacción tiene acceso a todos los combatientes de la facción, pero no obtiene <strong>ninguna regla especial</strong>.'},
    { name: 'Legión de los Mil Corazones', 
     description: 'Si se elige esta subfacción, solo se pueden reclutar combatientes <strong>Legión de los Cien Corazones</strong>. A cambio, se obtiene la regla especial:\n<br>' +
                  '<strong>Latir del Corazón</strong>: \n Cuando un aliado vaya a sufrir una herida, puede prevenirse dicha herida y elegir un aliado a hasta 4" para que sufra una herida en su lugar.\n<br>' +
                  'Un combatiente no puede ser elegido para sufrir heridas de esta forma si solo le queda una.\n<br>' +
                  'Si un combatiente sufre múltiples heridas a la vez, puede transferir solo la primera.<br>'+
                  '\n<br> <strong>Grito de la Legión (Orden)</strong>: \n El aliado que reciba esta orden obtiene <strong>DES +1</strong> y <strong>AME +1</strong> en sus armas cuerpo a cuerpo hasta el final de la activación.<br>\n'
          },
    { name: 'Mercenarias de Isha', description: 'Si se elige esta subfacción, solo se pueden reclutar combatientes <strong>Mercenaria de Isha</strong>. A cambio, se obtiene la regla especial <strong>Inquebrantables</strong>.' }
  ]};
/***********************
 * ESTADO GLOBAL
 ***********************/
let maxPoints = 0;
let usedPoints = 0;
let currentDOM = 0;

let selectedFaction = null;
let selectedOption = null;

let selectedLeader = null;
let selectedCombatants = [];
let selectedArtifacts = [];
let selectedVeterans = [];

const errorBox = createErrorBox();

/***********************
 * FLUJO PRINCIPAL
 ***********************/
function setPoints(points) {
  maxPoints = points;
  usedPoints = 0;
  currentDOM = 0;

  selectedFaction = null;
  selectedOption = null;
  selectedLeader = null;
  selectedCombatants = [];
  selectedArtifacts = [];
  selectedVeterans = [];

  show('faction-title');
  show('faction-list');

  renderFactions();
  updatePoints();
}

function renderFactions() {
  const list = el('faction-list');
  list.innerHTML = '';

  Object.keys(factions).forEach(f => {
    const li = document.createElement('li');
    li.textContent = f;
    li.onclick = () => selectFaction(f);
    list.appendChild(li);
  });
}

function selectFaction(faction) {
  selectedFaction = faction;
  selectedOption = null;

  show('options-title');
  show('options-list');

  renderOptions();
}

/***********************
 * OPCIONES / SUBFACCIONES
 ***********************/
function renderOptions() {
  const list = el('options-list');
  list.innerHTML = '';

  if (!options[selectedFaction]) return;

  options[selectedFaction].forEach(opt => {
    const li = document.createElement('li');
    li.innerHTML = opt.name;
    li.onclick = () => selectOption(opt.name);
    list.appendChild(li);
  });
}

function selectOption(option) {
  selectedOption = option;

  show('leader-title');
  show('leader-list');

  renderLeaders();
}

/***********************
 * LÍDERES
 ***********************/
function renderLeaders() {
  const list = el('leader-list');
  list.innerHTML = '';

  if (selectedLeader) return;

  factions[selectedFaction].leaders.forEach(l => {
    if (!genderAllowed(l)) return;

    const li = createUnitLI(l.displayName || l.name, () => {
      selectedLeader = l;
      usedPoints += l.points;
      currentDOM = extractDOM(l.characteristics);

      show('artifact-title');
      show('artifact-list');
      show('veteran-title');
      show('veteran-list');
      show('combatant-title');
      show('combatant-list');

      renderArtifacts();
      renderVeterans();
      renderCombatants();
      renderSelected();
      updatePoints();
    });

    list.appendChild(li);
  });
}

/***********************
 * ARTEFACTOS (DOM)
 ***********************/
function renderArtifacts() {
  const list = el('artifact-list');
  list.innerHTML = '';

  if (!selectedLeader) return;

  factions[selectedFaction].artifacts.forEach(a => {
    if (!genderAllowed(a)) return;
    if (selectedArtifacts.some(x => x.name === a.name)) return;

    const cost = extractDOM(a.characteristics);
    if (getUsedDOM() + cost > currentDOM) return;

    const li = createUnitLI(a.displayName || a.name, () => {
      selectedArtifacts.push(a);
      renderArtifacts();
      renderSelected();
    });

    list.appendChild(li);
  });
}

/***********************
 * VETERANÍAS
 ***********************/
function renderVeterans() {
  const list = el('veteran-list');
  list.innerHTML = '';

  if (!selectedLeader) return;

  factions[selectedFaction].veterans.forEach(v => {
    if (selectedVeterans.some(x => x.name === v.name)) return;

    const li = createUnitLI(v.displayName || v.name, () => {
      selectedVeterans.push(v);
      usedPoints += v.points;
      renderVeterans();
      renderSelected();
      updatePoints();
    });

    list.appendChild(li);
  });
}

/***********************
 * COMBATIENTES
 ***********************/
function renderCombatants() {
  const list = el('combatant-list');
  list.innerHTML = '';

  factions[selectedFaction].combatants.forEach(c => {
    if (!genderAllowed(c)) return;

    const li = createUnitLI(c.displayName || c.name, () => {
      selectedCombatants.push(c);
      usedPoints += c.points;
      renderCombatants();
      renderSelected();
      updatePoints();
    });

    list.appendChild(li);
  });
}

/***********************
 * SELECCIONADOS
 ***********************/
function renderSelected() {
  const list = el('selected-list');
  list.innerHTML = '';

  if (selectedLeader) addSelected(list, 'Líder', selectedLeader);
  selectedArtifacts.forEach(a => addSelected(list, 'Artefacto', a));
  selectedVeterans.forEach(v => addSelected(list, 'Veteranía', v));
  selectedCombatants.forEach(c => addSelected(list, 'Combatiente', c));
}

function addSelected(list, type, unit) {
  const li = document.createElement('li');
  li.innerHTML = `<strong>${type}</strong>: ${unit.name}`;
  list.appendChild(li);
}

/***********************
 * PDF
 ***********************/
document.getElementById('generatePDF')?.addEventListener('click', generatePDF);

function generatePDF() {
  clearError();

  if (!selectedLeader) return showError('Falta líder');
  if (usedPoints > maxPoints) return showError('Puntos excedidos');
  if (getUsedDOM() > currentDOM) return showError('DOM excedido');

  const name = prompt('Nombre de la lista');
  if (!name) return;

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  let y = 20;
  pdf.setFontSize(14);
  pdf.text(name, 15, y);

  y += 6;
  pdf.setFontSize(10);
  pdf.text(`Puntos: ${usedPoints}/${maxPoints}`, 15, y);
  y += 5;
  pdf.text(`Facción: ${selectedFaction}`, 15, y);
  y += 5;
  pdf.text(`Subfacción: ${selectedOption}`, 15, y);
  y += 10;

  y = pdfSection(pdf, 'LÍDER', [selectedLeader], y);
  y = pdfSection(pdf, 'COMBATIENTES', selectedCombatants, y);
  y = pdfSection(pdf, 'ARTEFACTOS', selectedArtifacts, y);
  y = pdfSection(pdf, 'VETERANÍAS', selectedVeterans, y);

  pdf.save(`${name}.pdf`);
}

function pdfSection(pdf, title, items, y) {
  if (!items.length) return y;

  const h = pdf.internal.pageSize.height;
  pdf.setFontSize(12);
  pdf.text(title, 15, y);
  y += 6;

  pdf.setFontSize(10);
  items.forEach(i => {
    if (y > h - 20) {
      pdf.addPage();
      y = 20;
    }
    pdf.text(`- ${i.name}`, 15, y);
    y += 5;
  });

  return y + 5;
}

/***********************
 * HELPERS
 ***********************/
function genderAllowed(unit) {
  if (!unit.gender) return true;
  if (selectedOption === 'Mercenarias de Isha') return unit.gender === 'Mujer';
  if (selectedOption === 'Legión de los Mil Corazones') return unit.gender === 'Hombre';
  return true;
}

function extractDOM(text = '') {
  const match = text.match(/DOM:?(\d+)/i);
  return match ? parseInt(match[1], 10) : 0;
}

function getUsedDOM() {
  return selectedArtifacts.reduce((s, a) => s + extractDOM(a.characteristics), 0);
}

function createUnitLI(content, onClick) {
  const li = document.createElement('li');
  li.innerHTML = content;
  li.onclick = onClick;
  return li;
}

function el(id) {
  return document.getElementById(id);
}

function show(id) {
  el(id)?.classList.remove('hidden');
}

/***********************
 * ERRORES
 ***********************/
function createErrorBox() {
  const box = document.createElement('div');
  box.style.color = 'red';
  box.style.margin = '10px 0';
  document.querySelector('.main')?.prepend(box);
  return box;
}

function showError(msg) {
  errorBox.textContent = msg;
}

function clearError() {
  errorBox.textContent = '';
}

function updatePoints() {
  el('total-points').textContent = `Total: ${usedPoints}/${maxPoints}`;
}
