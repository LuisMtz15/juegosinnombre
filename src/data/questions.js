// src/data/questions.js

// Cada entrada: número de pregunta -> { options, correct, explanation }
export const QUESTIONS = {
  1: {
    options: {
      a: "Vive cerca de la empresa",
      b: "Puede influir socialmente en el proyecto",
      c: "Es indispensable para que el proyecto pueda llevarse a cabo",
      d: "Siempre financia el proyecto",
    },
    correct: "c",
    explanation:
      "Los stakeholders primarios son esenciales para que el proyecto funcione; sin ellos no podría ejecutarse.",
  },
  2: {
    options: {
      a: "Solo participa en temas ambientales",
      b: "Forma parte de la estructura organizacional",
      c: "Siempre es un cliente",
      d: "No tiene interacción con el proyecto",
    },
    correct: "b",
    explanation:
      "Los stakeholders internos están dentro de la organización, como empleados, directivos o dueños.",
  },
  3: {
    options: {
      a: "No tiene ningún interés en el proyecto",
      b: "Participa únicamente en temas financieros",
      c: "No pertenece a la estructura formal de la empresa",
      d: "Siempre se opone al proyecto",
    },
    correct: "c",
    explanation:
      "Los stakeholders externos no forman parte de la estructura interna, pero pueden influir o verse afectados por el proyecto.",
  },
  4: {
    options: {
      a: "El inversionista principal",
      b: "El cliente directo",
      c: "Una asociación de consumidores",
      d: "El equipo de trabajo asignado",
    },
    correct: "c",
    explanation:
      "Los secundarios no son indispensables para operar el proyecto, pero sí pueden afectarlo o influir en él.",
  },
  5: {
    options: {
      a: "Controlan únicamente la reputación del proyecto",
      b: "Son necesarios para que el proyecto exista",
      c: "Poseen siempre poder político",
      d: "Tienen interés mínimo",
    },
    correct: "b",
    explanation:
      "Su participación es fundamental para que el proyecto pueda funcionar y avanzar.",
  },
  6: {
    options: {
      a: "Que siempre apoyan el proyecto",
      b: "Que no existe forma de contactarlos",
      c: "Que no se les pueden aplicar mecanismos internos de control",
      d: "Que no influyen en el desempeño",
    },
    correct: "c",
    explanation:
      "Al estar fuera de la estructura interna, la empresa no puede aplicar controles jerárquicos o administrativos sobre ellos.",
  },
  7: {
    options: {
      a: "Falta total de interacción",
      b: "Riesgos que requieren acciones correctivas",
      c: "Que el stakeholder es irrelevante",
      d: "Que debe excluirse del análisis",
    },
    correct: "b",
    explanation:
      "Una relación negativa representa riesgo y requiere acciones para evitar que escale.",
  },
  8: {
    options: {
      a: "Solo monitorearlo ocasionalmente",
      b: "Mantenerlo satisfecho",
      c: "Mantener diálogo constante e intenso",
      d: "Reducir su participación",
    },
    correct: "c",
    explanation:
      "Un stakeholder con alto poder e interés debe estar altamente involucrado mediante comunicación directa.",
  },
  9: {
    options: {
      a: "Manteniéndolo satisfecho",
      b: "Informándolo regularmente",
      c: "Ignorándolo",
      d: "Llevándolo a negociación formal",
    },
    correct: "b",
    explanation:
      "Se recomienda brindarle información continua para mantenerlo comprometido y escuchado.",
  },
  10: {
    options: {
      a: "Una comunidad usando un parque cercano",
      b: "Una empresa que depende de un solo proveedor clave",
      c: "Una autoridad que publica regulaciones",
      d: "Una ONG que monitorea emisiones",
    },
    correct: "b",
    explanation:
      "La dependencia surge cuando el proyecto necesita de un actor para operar o continuar.",
  },
  11: {
    options: {
      a: "Preferencias del público",
      b: "Regulaciones, contratos o códigos de conducta",
      c: "Relaciones informales",
      d: "Opiniones personales",
    },
    correct: "b",
    explanation:
      "Este tipo de relación existe cuando hay compromisos formales, regulatorios o legales.",
  },
  12: {
    options: {
      a: "Generar conflicto automáticamente",
      b: "Tener estructuras colectivas fuertes para influir",
      c: "Tener poco impacto en la empresa",
      d: "Requerir arbitraje inmediato",
    },
    correct: "b",
    explanation:
      "La organización interna aumenta la capacidad del stakeholder para actuar de manera coordinada.",
  },
  13: {
    options: {
      a: "Violencia física o material",
      b: "Lenguaje abiertamente agresivo",
      c: "Diferencias que existen, pero aún no se expresan abiertamente",
      d: "Que el conflicto ya escaló a juicio",
    },
    correct: "c",
    explanation:
      "Un conflicto latente implica tensiones ocultas que aún no se manifiestan públicamente.",
  },
  14: {
    options: {
      a: "Visión de “amigo-enemigo”",
      b: "Polarización",
      c: "Amenazas o ultimátum",
      d: "Respeto mutuo",
    },
    correct: "d",
    explanation:
      "El respeto mutuo indica una relación positiva, no conflictiva.",
  },
  15: {
    options: {
      a: "No involucra a un tercero",
      b: "El mediador impone la solución final",
      c: "Existe un facilitador neutral que guía el proceso",
      d: "Sólo se aplica a conflictos internos",
    },
    correct: "c",
    explanation:
      "La mediación utiliza un tercero neutral que facilita el diálogo sin imponer decisiones.",
  },
  16: {
    options: {
      a: "Cuando no existe conflicto",
      b: "Cuando se necesita un fallo vinculante para resolver la disputa",
      c: "Cuando se quiere evitar escribir acuerdos",
      d: "Cuando el conflicto es menor",
    },
    correct: "b",
    explanation:
      "El arbitraje implica que un tercero emite una resolución final obligatoria escuchando a ambas partes.",
  },
  17: {
    options: {
      a: "Siempre es voluntario",
      b: "Suele ser más rápido y menos costoso que un juicio",
      c: "No requiere reglas ni procedimiento",
      d: "El resultado lo decide la empresa",
    },
    correct: "b",
    explanation:
      "El arbitraje está diseñado para ser más eficiente y especializado que un proceso judicial tradicional.",
  },
  18: {
    options: {
      a: "Imponer decisiones",
      b: "Prevenir rumores y generar confianza",
      c: "Evitar el diálogo",
      d: "Reemplazar procesos legales",
    },
    correct: "b",
    explanation:
      "Comunicar datos claros reduce incertidumbre y fortalece la confianza.",
  },
  19: {
    options: {
      a: "Mantenerlo satisfecho",
      b: "Ignorarlo",
      c: "Comunicarle cada detalle",
      d: "Incluirlo en todas las reuniones",
    },
    correct: "a",
    explanation:
      "Estos stakeholders requieren atención para evitar que pierdan apoyo o se conviertan en opositores.",
  },
  20: {
    options: {
      a: "Tomar decisiones legales",
      b: "Establecer reglas, objetivos y estructura del proceso",
      c: "Determinar culpables",
      d: "Escalar el conflicto",
    },
    correct: "b",
    explanation:
      "La fase previa ordena el proceso definiendo roles, acuerdos y condiciones antes de iniciar formalmente la mediación.",
  },
  21: {
    options: {
      a: "Existe conflicto activo",
      b: "No hay interacción posible",
      c: "La relación no es negativa ni positiva",
      d: "El stakeholder está totalmente alineado al proyecto",
    },
    correct: "c",
    explanation:
      "Una relación neutral indica convivencia sin conflicto pero sin apoyo significativo.",
  },
  22: {
    options: {
      a: "Puede exigir ser parte del equipo",
      b: "Puede intervenir si percibe amenazas al proyecto",
      c: "Siempre se opone",
      d: "No puede influir en nada",
    },
    correct: "b",
    explanation:
      "Aunque tiene poco interés, su alto poder permite que actúe si algo lo afecta.",
  },
  23: {
    options: {
      a: "Incrementar la presión",
      b: "Reducir su acceso a información",
      c: "Identificar causas y abrir un canal de diálogo",
      d: "Ignorar señales hasta que evolucione",
    },
    correct: "c",
    explanation:
      "Detectar y atender señales tempranas evita que el conflicto escale.",
  },
  24: {
    options: {
      a: "Violencia física",
      b: "Lenguaje tenso o confrontativo",
      c: "Ausencia total de comunicación",
      d: "Neutralidad total",
    },
    correct: "b",
    explanation:
      "La discusión incluye tensión verbal, pero aún sin polarización total.",
  },
  25: {
    options: {
      a: "Latencia",
      b: "Discusión leve",
      c: "Polarización",
      d: "Acuerdo",
    },
    correct: "c",
    explanation:
      "La polarización divide las posiciones y dificulta el entendimiento mutuo.",
  },
  26: {
    options: {
      a: "Aumento del respeto mutuo",
      b: "Reducción del interés",
      c: "Interpretaciones negativas constantes del otro",
      d: "Procesos formales de arbitraje",
    },
    correct: "c",
    explanation:
      "La pérdida de empatía conduce a juicios negativos y menos cooperación.",
  },
  27: {
    options: {
      a: "Monitorearlos mínimamente",
      b: "Reunirse diariamente",
      c: "Asignarles decisiones centrales",
      d: "Pasarlos a arbitraje",
    },
    correct: "a",
    explanation:
      "Representan baja influencia y afectan poco al proyecto.",
  },
  28: {
    options: {
      a: "Maximizar utilidades inmediatas",
      b: "Mantener servicios sociales, seguridad y empleos",
      c: "Obtener control administrativo del proyecto",
      d: "Revisar estados financieros",
    },
    correct: "b",
    explanation:
      "La comunidad prioriza impacto social, empleo y bienestar.",
  },
  29: {
    options: {
      a: "Condiciones de producción del cliente",
      b: "Garantías de compra y pagos puntuales",
      c: "Participar en decisiones políticas",
      d: "Establecer regulaciones",
    },
    correct: "b",
    explanation:
      "Su interés clave es estabilidad comercial y pagos confiables.",
  },
  30: {
    options: {
      a: "Incentivos de participación política",
      b: "Calidad, seguridad y confiabilidad del producto",
      c: "Jerarquías laborales internas",
      d: "Acceso a reportes financieros internos",
    },
    correct: "b",
    explanation:
      "Los clientes buscan productos que cumplan estándares claros.",
  },
  31: {
    options: {
      a: "Publicidad del proyecto",
      b: "Presencia mediática",
      c: "Seguridad laboral y condiciones justas",
      d: "Control de proveedores",
    },
    correct: "c",
    explanation:
      "Los empleados buscan estabilidad, trato justo y seguridad.",
  },
  32: {
    options: {
      a: "Proteger su acceso a servicios internos",
      b: "Garantizar condiciones legales y fiscales adecuadas",
      c: "Participar como inversionista mayoritario",
      d: "Controlar operaciones internas",
    },
    correct: "b",
    explanation:
      "El gobierno prioriza cumplimiento legal, impuestos y aspectos urbanos.",
  },
  33: {
    options: {
      a: "Minimizar costos operativos",
      b: "Optimizar ventas",
      c: "Evitar daños ecológicos y proteger ecosistemas",
      d: "Revisar roles internos del equipo",
    },
    correct: "c",
    explanation:
      "Su foco es el impacto ambiental y la protección de recursos.",
  },
  34: {
    options: {
      a: "Se elimina el conflicto automáticamente",
      b: "Se genera una situación propensa al conflicto",
      c: "El proyecto avanza sin afectar relaciones",
      d: "El stakeholder pierde interés",
    },
    correct: "b",
    explanation:
      "Intereses incompatibles pueden desencadenar tensiones o disputas.",
  },
  35: {
    options: {
      a: "Total alineación entre partes",
      b: "Intereses comunes muy claros",
      c: "Percepción de intencionalidad de causar daño",
      d: "Comunicación constante",
    },
    correct: "c",
    explanation:
      "Atribuir intenciones negativas incrementa la tensión.",
  },
  36: {
    options: {
      a: "Falta de voluntad de diálogo",
      b: "Disposición a hacer concesiones",
      c: "Autoridad absoluta del PM",
      d: "Ausencia total de diferencias",
    },
    correct: "b",
    explanation:
      "Negociar implica ceder y encontrar puntos medios.",
  },
  37: {
    options: {
      a: "Evitar reconocer errores",
      b: "Tratar con dureza a las personas involucradas",
      c: "Mantener respeto hacia las personas, pero ser firme en el problema",
      d: "Evitar datos y centrarse en emociones",
    },
    correct: "c",
    explanation:
      "Ayuda a resolver sin deteriorar relaciones humanas.",
  },
  38: {
    options: {
      a: "Producir un fallo legal",
      b: "Transformar pensamientos y generar consensos",
      c: "Imponer decisiones",
      d: "Evitar intercambiar información",
    },
    correct: "b",
    explanation:
      "El diálogo construye entendimiento y acuerdos.",
  },
  39: {
    options: {
      a: "Identificar necesidades y sentimientos de cada parte",
      b: "Definir sanciones",
      c: "Reducir participación del stakeholder",
      d: "Cancelar el proceso",
    },
    correct: "a",
    explanation:
      "La comprensión inicial permite avanzar hacia acuerdos.",
  },
  40: {
    options: {
      a: "De responsabilidad",
      b: "De representación",
      c: "De poder económico",
      d: "Interno obligatorio",
    },
    correct: "b",
    explanation:
      "Las entidades que representan grupos (ONG, sindicatos) influyen en opinión pública.",
  },
  41: {
    options: {
      a: "Dependencia",
      b: "Política",
      c: "Proximidad",
      d: "Representación",
    },
    correct: "c",
    explanation:
      "Este tipo surge cuando el proyecto convive físicamente con un grupo.",
  },
  42: {
    options: {
      a: "Cumplir tareas menores",
      b: "Establecer valores, prevenir riesgos y alinear intereses",
      c: "No depender del stakeholder",
      d: "Interacciones muy casuales",
    },
    correct: "b",
    explanation:
      "Las relaciones estratégicas se enfocan en impactos de alto nivel.",
  },
  43: {
    options: {
      a: "Mayor confianza inmediata",
      b: "Generación de rumores",
      c: "Neutralidad total",
      d: "Aumento automático del compromiso",
    },
    correct: "b",
    explanation:
      "La falta de claridad abre espacio para especulaciones.",
  },
  44: {
    options: {
      a: "Identificar patrones y causas",
      b: "Reducir comunicación",
      c: "Eliminar información previa",
      d: "Aumentar tensiones",
    },
    correct: "a",
    explanation:
      "Comprender el historial permite prevenir nuevos problemas.",
  },
  45: {
    options: {
      a: "Una amenaza potencial",
      b: "Un aliado inmediato",
      c: "Un actor irrelevante",
      d: "Una figura sin impacto",
    },
    correct: "a",
    explanation:
      "Su falta de interés puede cambiar si se siente afectado, y su poder hace ese cambio riesgoso.",
  },
  46: {
    options: {
      a: "Excluirlo de decisiones",
      b: "Dar respuestas tardías",
      c: "Involucrarlo selectivamente en temas relevantes",
      d: "Sobrecargarlo de información",
    },
    correct: "c",
    explanation:
      "Mantenerlo satisfecho requiere darle participación en puntos clave sin saturarlo.",
  },
  47: {
    options: {
      a: "Quiere controlar todos los procesos internos",
      b: "No participa en nada relacionado",
      c: "Evita cualquier tipo de información",
      d: "Sigue de cerca las decisiones que pueden afectarlo",
    },
    correct: "d",
    explanation:
      "El interés se refleja en la atención y seguimiento activo del proyecto.",
  },
  48: {
    options: {
      a: "Percibe impactos que le afectan directamente",
      b: "La empresa limita su acceso",
      c: "No conoce el proyecto",
      d: "Desaparecen todos los riesgos",
    },
    correct: "a",
    explanation:
      "Cuanto más afectado se sienta, mayor interés tendrá.",
  },
  49: {
    options: {
      a: "Mejora la reputación del proyecto",
      b: "Se reducen conflictos",
      c: "El stakeholder puede adoptar posturas más adversas",
      d: "Se fortalece la relación",
    },
    correct: "c",
    explanation:
      "La falta de atención puede convertir riesgos leves en oposición fuerte.",
  },
  50: {
    options: {
      a: "Reducir completamente el riesgo",
      b: "Planificar cómo tratar a cada actor según su influencia e interés",
      c: "Evitar comunicar avances",
      d: "Ignorar conflictos preexistentes",
    },
    correct: "b",
    explanation:
      "Su objetivo es decidir cómo gestionar a cada stakeholder según su posición.",
  },
  51: {
    options: {
      a: "Generar acuerdos rápidos",
      b: "Imponer reglas estrictas",
      c: "Tener alto poder",
      d: "Actuar de forma fragmentada",
    },
    correct: "d",
    explanation:
      "La baja organización dificulta acciones colectivas coordinadas.",
  },
  52: {
    options: {
      a: "Mayor colaboración",
      b: "Neutralidad total",
      c: "Deterioro de la relación",
      d: "Eliminación del conflicto",
    },
    correct: "c",
    explanation:
      "La falta de reconocimiento afecta la confianza y la disposición a cooperar.",
  },
  53: {
    options: {
      a: "Ser tratado igual que antes",
      b: "Evitar todo diálogo",
      c: "Una estrategia específica de recuperación de relación",
      d: "Ignorar los eventos pasados",
    },
    correct: "c",
    explanation:
      "Los eventos críticos requieren acciones específicas para reconstruir confianza.",
  },
  54: {
    options: {
      a: "Mayor riesgo operacional",
      b: "Mayor flujo de información y mejores decisiones",
      c: "Menor compromiso del stakeholder",
      d: "Que desaparezcan todos los conflictos",
    },
    correct: "b",
    explanation:
      "La confianza promueve comunicación clara y cooperación.",
  },
  55: {
    options: {
      a: "Predecir necesidades y posibles tensiones",
      b: "Evitar cualquier comunicación",
      c: "Reducir su interés",
      d: "Limitar la gestión del proyecto",
    },
    correct: "a",
    explanation:
      "Conocer su contexto permite anticipar comportamientos.",
  },
  56: {
    options: {
      a: "Ser ignorado",
      b: "Participar en decisiones estratégicas",
      c: "Recibir información continua y ser escuchado",
      d: "Controlar recursos clave",
    },
    correct: "c",
    explanation:
      "Aunque su influencia es baja, su interés exige comunicación clara.",
  },
  57: {
    options: {
      a: "Suprimir el intercambio de información",
      b: "Compartir datos claros y transparentes",
      c: "Actuar sin considerar opiniones externas",
      d: "Reducir comunicación al mínimo",
    },
    correct: "b",
    explanation:
      "La claridad evita malentendidos que pueden convertirse en conflicto.",
  },
  58: {
    options: {
      a: "Aumentar cooperación",
      b: "Elevar su nivel de oposición",
      c: "Reducir su capacidad de influencia",
      d: "Mantener postura neutral",
    },
    correct: "b",
    explanation:
      "Una percepción de amenaza incrementa resistencia y confrontación.",
  },
  59: {
    options: {
      a: "Resolver problemas con más información y mayor alineación",
      b: "Aumentar la incertidumbre",
      c: "Reducir la visibilidad del proyecto",
      d: "Reemplazar la planificación",
    },
    correct: "a",
    explanation:
      "La colaboración mejora la toma de decisiones y fortalece el proyecto.",
  },
  60: {
    options: {
      a: "Revisar contratos pasados",
      b: "Analizar quién puede afectar o ser afectado por el proyecto",
      c: "Enviar encuestas masivas",
      d: "Pedir aprobación del director general",
    },
    correct: "b",
    explanation:
      "El análisis inicia identificando a quienes tienen impacto o pueden ser impactados.",
  },
  61: {
    options: {
      a: "Totalmente ignorado",
      b: "Puesto en arbitraje",
      c: "Gestionado con participación regular",
      d: "Convertido en stakeholder primario",
    },
    correct: "c",
    explanation:
      "Su posición intermedia requiere interacción frecuente, pero no intensa.",
  },
  62: {
    options: {
      a: "Intereses alineados",
      b: "Falta de expectativas claras",
      c: "Exceso de comunicación",
      d: "Ausencia de diferencias",
    },
    correct: "b",
    explanation:
      "Las expectativas mal definidas generan tensiones desde etapas tempranas.",
  },
  63: {
    options: {
      a: "Practicar escucha activa",
      b: "Silenciar sus comentarios",
      c: "Evitar reuniones",
      d: "Incrementar presión",
    },
    correct: "a",
    explanation:
      "La escucha activa facilita entender necesidades y preocupaciones.",
  },
  64: {
    options: {
      a: "Monitoreo mínimo",
      b: "Comunicación respetuosa y constante",
      c: "Exclusión del proceso",
      d: "Tratamiento igual al equipo directivo",
    },
    correct: "b",
    explanation:
      "Su legitimidad demanda atención y una relación cuidadosa.",
  },
  65: {
    options: {
      a: "Elimina la necesidad de reuniones",
      b: "Reemplaza la toma de decisiones",
      c: "Impide que aparezcan riesgos",
      d: "Facilita priorizar esfuerzos de comunicación",
    },
    correct: "d",
    explanation:
      "Permite enfocar recursos en quienes más influyen o se ven afectados.",
  },
  66: {
    options: {
      a: "Regulaciones fiscales",
      b: "Cobertura pública y percepción social",
      c: "Financiamiento directo",
      d: "Contratos obligatorios",
    },
    correct: "b",
    explanation:
      "La prensa afecta la reputación y opinión pública del proyecto.",
  },
  67: {
    options: {
      a: "Busca beneficio personal cuando surgen oportunidades",
      b: "No participa en el proyecto",
      c: "Siempre apoya al PM",
      d: "Es parte del equipo interno",
    },
    correct: "a",
    explanation:
      "Cambia su apoyo según las condiciones que le favorezcan.",
  },
  68: {
    options: {
      a: "Rumores internos",
      b: "Actas y minutas de reunión",
      c: "Encuestas anónimas",
      d: "Notas informales",
    },
    correct: "b",
    explanation:
      "Los documentos formales clarifican compromisos y responsabilidades.",
  },
  69: {
    options: {
      a: "Poder referencial",
      b: "Poder de recompensa",
      c: "Poder de recursos",
      d: "Poder simbólico",
    },
    correct: "c",
    explanation:
      "Su influencia proviene de su control sobre recursos esenciales.",
  },
  70: {
    options: {
      a: "Apoyo total",
      b: "Interés moderado",
      c: "Resistencia extrema",
      d: "Falta de compromiso",
    },
    correct: "b",
    explanation:
      "Indica interés, pero no oposición directa.",
  },
  71: {
    options: {
      a: "Aumentar la confrontación",
      b: "Imponer decisiones",
      c: "Reducir contacto con stakeholders",
      d: "Negociar intereses, no posiciones",
    },
    correct: "d",
    explanation:
      "Enfocarse en intereses permite encontrar soluciones más flexibles.",
  },
  72: {
    options: {
      a: "Alineación y credibilidad",
      b: "Desconfianza",
      c: "Pérdida de control del proyecto",
      d: "Conflictos automáticos",
    },
    correct: "a",
    explanation:
      "La claridad refuerza la confianza y la cooperación.",
  },
  73: {
    options: {
      a: "Información emocional",
      b: "Conocimientos especializados",
      c: "Conflictos inevitables",
      d: "Regulaciones políticas",
    },
    correct: "b",
    explanation:
      "Su contribución clave es técnica y de alto valor.",
  },
  74: {
    options: {
      a: "Nunca",
      b: "Solo cuando apoye el proyecto",
      c: "Desde etapas tempranas para reducir oposición",
      d: "Después de ejecutar el proyecto",
    },
    correct: "c",
    explanation:
      "Integrarlo temprano disminuye la incertidumbre y resistencia futura.",
  },
  75: {
    options: {
      a: "Desinterés total",
      b: "Posible percepción de riesgo o impacto",
      c: "Que apoya completamente",
      d: "Que perdió poder",
    },
    correct: "b",
    explanation:
      "El interés crece cuando se anticipan consecuencias.",
  },
  76: {
    options: {
      a: "Estrategia comercial",
      b: "Ventas y mercadeo",
      c: "Diseño de producto",
      d: "Condiciones laborales y seguridad",
    },
    correct: "d",
    explanation:
      "Representan derechos laborales y protección de trabajadores.",
  },
  77: {
    options: {
      a: "Intercambio de información abierta",
      b: "Comunicación limitada",
      c: "Retención de datos clave",
      d: "Posturas ocultas",
    },
    correct: "a",
    explanation:
      "La confianza fomenta la apertura de información y colaboración.",
  },
  78: {
    options: {
      a: "Los indiferentes",
      b: "Los altamente influyentes",
      c: "Los internos con bajo interés",
      d: "Los no afectados",
    },
    correct: "b",
    explanation:
      "Su influencia requiere planes para prevenir o manejar riesgos.",
  },
  79: {
    options: {
      a: "Ignorar a los de menor poder",
      b: "Presionar para llegar a decisiones rápidas",
      c: "Facilitar espacios de diálogo",
      d: "Eliminar actores conflictivos",
    },
    correct: "c",
    explanation:
      "El diálogo permite identificar puntos comunes y resolver tensiones.",
  },
  80: {
    options: {
      a: "Detectar cambios en poder o interés",
      b: "Evitar comunicación",
      c: "Eliminar completamente los conflictos",
      d: "Reducir la documentación",
    },
    correct: "a",
    explanation:
      "Los stakeholders cambian con el tiempo, y el mapa debe actualizarse.",
  },
};