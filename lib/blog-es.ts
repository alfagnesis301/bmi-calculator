export type SpanishArticle = {
  title: string;
  description: string;
  reviewed: string;
  sections: { title: string; body: string[] }[];
  faq: { q: string; a: string }[];
  references: { label: string; href: string }[];
  related: { label: string; href: string }[];
};

const defaultReferences = [
  { label: "CDC - About Adult BMI", href: "https://www.cdc.gov/bmi/about/index.html" },
  { label: "NHS - BMI healthy weight calculator", href: "https://www.nhs.uk/health-assessment-tools/calculate-your-body-mass-index/calculate-bmi-for-adults" },
  { label: "WHO - Obesity and overweight", href: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" }
];

const defaultRelated = [
  { label: "Calculadora de IMC", href: "/es" },
  { label: "Categorías de IMC", href: "/es/bmi-categories" },
  { label: "Rango saludable de IMC", href: "/es/healthy-bmi-range" }
];

function article(input: Omit<SpanishArticle, "reviewed" | "references" | "related"> & Partial<Pick<SpanishArticle, "references" | "related">>): SpanishArticle {
  return {
    reviewed: "Revisado: 2 de mayo de 2026",
    references: input.references ?? defaultReferences,
    related: input.related ?? defaultRelated,
    ...input
  };
}

export const spanishArticles: Record<string, SpanishArticle> = {
  "what-is-a-healthy-bmi": article({
    title: "Qué es un IMC saludable",
    description: "Guía completa sobre el rango saludable de IMC, las categorías adultas y cómo interpretar el resultado sin convertirlo en diagnóstico.",
    sections: [
      {
        title: "Qué significa un IMC saludable",
        body: [
          "En adultos, un IMC entre 18.5 y 24.9 se considera habitualmente dentro del rango saludable. Este rango se usa en salud pública porque compara peso y altura de una forma rápida, económica y fácil de repetir con el tiempo.",
          "Un resultado dentro del rango saludable no garantiza por sí solo que una persona tenga buena salud. La presión arterial, la glucosa, el colesterol, la medida de cintura, el sueño, la actividad física y el historial médico también importan."
        ]
      },
      {
        title: "Por qué se utiliza el IMC",
        body: [
          "El IMC se usa porque requiere pocos datos y permite observar tendencias en poblaciones grandes. También puede servir como punto de partida para que una persona entienda si su peso se encuentra por debajo, dentro o por encima de un rango general para su altura.",
          "Su utilidad principal es orientar, no etiquetar. Un profesional sanitario puede usarlo junto con otros datos para decidir si conviene hacer una evaluación más completa."
        ]
      },
      {
        title: "Tabla de categorías adultas",
        body: [
          "Bajo peso: por debajo de 18.5. Peso normal: 18.5 a 24.9. Sobrepeso: 25.0 a 29.9. Obesidad: 30.0 o más.",
          "Estas categorías son rangos de cribado. El riesgo para la salud cambia de forma gradual, no de golpe justo al pasar de una categoría a otra."
        ]
      },
      {
        title: "Ejemplo práctico",
        body: [
          "Una persona de 1.75 m y 70 kg tiene un IMC aproximado de 22.9, dentro del rango de peso normal. Si esa misma persona pesa 85 kg, el IMC sería alrededor de 27.8, dentro del rango de sobrepeso.",
          "El ejemplo ayuda a ver cómo cambia el número, pero no dice nada sobre músculo, cintura, condición física o análisis clínicos."
        ]
      },
      {
        title: "Cuándo interpretarlo con cuidado",
        body: [
          "El IMC puede ser menos representativo en deportistas, adultos mayores, personas embarazadas, niños y adolescentes. También puede variar su significado entre personas con distinta composición corporal.",
          "Si el resultado te preocupa, si cambia rápido sin explicación o si existe una condición médica, conviene pedir orientación profesional."
        ]
      },
      {
        title: "Conclusión responsable",
        body: [
          "Un IMC saludable es una señal útil, pero no una garantía ni una sentencia. Úsalo como un primer dato dentro de una conversación más amplia sobre salud, hábitos y contexto personal."
        ]
      }
    ],
    faq: [
      { q: "¿El IMC saludable es igual para todos?", a: "El rango adulto se usa de forma general, pero la interpretación puede cambiar según edad, composición corporal, embarazo, origen étnico e historial médico." },
      { q: "¿Un IMC normal significa que no tengo riesgos?", a: "No necesariamente. Otros indicadores como cintura, presión arterial, glucosa, colesterol y hábitos también influyen." },
      { q: "¿Debo perseguir un número exacto?", a: "No. El rango saludable es amplio porque el peso adecuado no es un único valor." }
    ]
  }),
  "bmi-vs-body-fat": article({
    title: "IMC vs porcentaje de grasa corporal",
    description: "Diferencias entre IMC y porcentaje de grasa corporal, cuándo usar cada medida y por qué pueden contar historias distintas.",
    sections: [
      { title: "Dos medidas distintas", body: ["El IMC compara peso y altura. El porcentaje de grasa corporal intenta estimar qué parte del cuerpo corresponde a tejido graso.", "Ambas medidas pueden ser útiles, pero responden preguntas diferentes. El IMC es rápido; la grasa corporal ofrece más detalle sobre composición."] },
      { title: "Por qué el IMC puede confundir", body: ["El IMC no distingue músculo, hueso, agua y grasa. Una persona musculosa puede tener un IMC alto sin tener exceso de grasa.", "También puede ocurrir lo contrario: una persona con IMC normal puede tener poca masa muscular y una proporción alta de grasa."] },
      { title: "Ventajas del porcentaje de grasa", body: ["El porcentaje de grasa corporal se acerca más a la composición real. Puede ayudar a evaluar cambios cuando una persona entrena fuerza y el peso no baja aunque mejore su salud.", "Su limitación es que depende del método: cinta métrica, básculas de bioimpedancia, pliegues o DEXA no tienen la misma precisión."] },
      { title: "Ejemplo práctico", body: ["Dos personas de 80 kg y 1.78 m tienen el mismo IMC. Una puede ser sedentaria y otra entrenar fuerza con mucha masa muscular. El IMC será igual, pero el porcentaje de grasa puede ser muy distinto.", "Por eso conviene mirar tendencias y contexto, no un solo número aislado."] },
      { title: "Cuándo usar cada una", body: ["Para cribado rápido, el IMC es suficiente como punto de partida. Para composición corporal, objetivos deportivos o dudas por masa muscular, la grasa corporal puede ser más informativa.", "En decisiones médicas, ninguna medida debería usarse sola."] },
      { title: "Cuándo consultar", body: ["Consulta a un profesional si tienes cambios de peso inexplicables, enfermedades, síntomas o dudas sobre qué medida es más adecuada para tu situación."] }
    ],
    faq: [
      { q: "¿La grasa corporal es siempre mejor que el IMC?", a: "No siempre. Puede ser más específica, pero muchos métodos tienen margen de error." },
      { q: "¿Puedo tener IMC alto y estar saludable?", a: "Puede ocurrir, especialmente con mucha masa muscular, pero conviene revisar otros indicadores." },
      { q: "¿Cuál debo seguir?", a: "Depende del objetivo. Para orientación rápida, IMC. Para composición corporal, porcentaje de grasa y medidas." }
    ],
    related: [
      { label: "Calculadora de grasa corporal", href: "/es/body-fat-calculator" },
      { label: "Calculadora de IMC", href: "/es" },
      { label: "Limitaciones del IMC", href: "/es/blog/bmi-limitations" }
    ]
  }),
  "bmi-for-women": article({
    title: "IMC en mujeres",
    description: "Cómo interpretar el IMC en mujeres considerando composición corporal, ciclo menstrual, embarazo y etapas de vida.",
    sections: [
      { title: "La fórmula es la misma", body: ["El IMC se calcula igual en hombres y mujeres: peso dividido por altura al cuadrado. Lo que puede cambiar es la interpretación.", "Las mujeres suelen tener un porcentaje de grasa esencial mayor por razones hormonales y reproductivas."] },
      { title: "Ciclo menstrual y peso", body: ["El peso puede variar durante el ciclo por retención de líquidos. Esto puede mover ligeramente el IMC sin reflejar un cambio real de grasa.", "Comparar tendencias mensuales suele ser más útil que reaccionar a una sola medición."] },
      { title: "Embarazo", body: ["Las categorías estándar de IMC no deben usarse para juzgar cambios de peso durante el embarazo. El seguimiento debe hacerse con profesionales sanitarios.", "El peso durante el embarazo incluye bebé, placenta, líquido, sangre y reservas necesarias."] },
      { title: "Menopausia y edad", body: ["Con la edad pueden cambiar masa muscular, distribución de grasa y metabolismo. Un mismo IMC puede tener implicaciones distintas a los 25 y a los 65 años.", "El entrenamiento de fuerza, sueño y alimentación adecuada pueden ayudar a mantener masa muscular."] },
      { title: "Medidas complementarias", body: ["Cintura, porcentaje de grasa, presión arterial, glucosa y colesterol pueden completar la lectura del IMC.", "El contexto es especialmente importante si el peso cambia rápido o hay síntomas."] },
      { title: "Uso responsable", body: ["El IMC no debe usarse para vergüenza corporal ni dietas extremas. Es una herramienta de orientación, no una valoración completa de salud."] }
    ],
    faq: [
      { q: "¿El rango saludable cambia en mujeres?", a: "Los puntos de corte adultos son los mismos, pero el contexto corporal puede cambiar la interpretación." },
      { q: "¿Debo calcular IMC durante embarazo?", a: "No con categorías estándar. Consulta seguimiento prenatal." },
      { q: "¿La retención de líquidos cambia el IMC?", a: "Puede cambiar el peso temporalmente y mover el número un poco." }
    ]
  }),
  "bmi-for-men": article({
    title: "IMC en hombres",
    description: "Cómo interpretar el IMC en hombres, especialmente cuando masa muscular y cintura cambian el contexto.",
    sections: [
      { title: "Misma fórmula, distinto contexto", body: ["El cálculo del IMC no cambia por sexo, pero los hombres suelen tener más masa muscular promedio y una distribución de grasa diferente.", "Por eso un IMC elevado puede reflejar músculo, grasa o una combinación de ambos."] },
      { title: "Masa muscular", body: ["La masa muscular pesa más por volumen que la grasa. Personas que entrenan fuerza pueden aparecer en sobrepeso sin tener exceso de grasa corporal.", "En estos casos, cintura y porcentaje de grasa pueden aportar más información."] },
      { title: "Grasa abdominal", body: ["En hombres es común acumular grasa en abdomen. La medida de cintura ayuda a evaluar riesgo cardiometabólico mejor que el IMC por sí solo.", "Un IMC normal con cintura elevada puede requerir atención."] },
      { title: "Ejemplo", body: ["Un hombre de 1.80 m y 88 kg tiene IMC de 27.2. Si es sedentario y tiene cintura alta, el contexto es distinto a si entrena fuerza y tiene cintura baja.", "El número es el mismo, la interpretación no necesariamente."] },
      { title: "Cuándo revisar otros datos", body: ["Presión arterial, glucosa, colesterol, tabaquismo, sueño y antecedentes familiares completan el cuadro.", "Si hay síntomas o cambios de peso inexplicables, consulta."] },
      { title: "Uso práctico", body: ["Usa el IMC como alarma suave, no como etiqueta. Observa tendencias y acompáñalo de medidas corporales y hábitos."] }
    ],
    faq: [
      { q: "¿Un hombre musculoso puede tener IMC alto?", a: "Sí. El IMC no distingue músculo y grasa." },
      { q: "¿La cintura importa?", a: "Sí, especialmente para riesgo metabólico y cardiovascular." },
      { q: "¿Qué hacer si mi IMC está alto?", a: "Revisa contexto, hábitos y otros indicadores; consulta si tienes dudas." }
    ]
  }),
  "bmi-by-age": article({
    title: "IMC por edad",
    description: "Por qué la edad cambia la interpretación del IMC en niños, adultos y personas mayores.",
    sections: [
      { title: "Adultos", body: ["En adultos se usan puntos de corte fijos: bajo peso, normal, sobrepeso y obesidad.", "Estos rangos son útiles, pero no reemplazan una evaluación individual."] },
      { title: "Niños y adolescentes", body: ["En menores de 20 años no se aplican categorías adultas fijas. Se usan percentiles por edad y sexo porque el cuerpo está creciendo.", "Un pediatra puede interpretar curvas de crecimiento y contexto familiar."] },
      { title: "Adultos mayores", body: ["Con la edad puede perderse masa muscular. Una persona mayor puede tener IMC normal y aun así presentar fragilidad o baja masa muscular.", "Fuerza, movilidad, apetito y enfermedades deben considerarse."] },
      { title: "Cambios de peso", body: ["Los cambios bruscos, tanto pérdida como ganancia, merecen atención aunque el IMC final parezca normal.", "La velocidad del cambio puede aportar tanta información como el número."] },
      { title: "Ejemplo", body: ["Un IMC de 22 en un adulto joven activo puede ser una señal distinta a un IMC de 22 en una persona mayor con pérdida de fuerza y apetito.", "El contexto de edad cambia la lectura."] },
      { title: "Cuándo consultar", body: ["Consulta si hay pérdida de peso involuntaria, cambios rápidos, cansancio, problemas de alimentación o dudas sobre crecimiento infantil."] }
    ],
    faq: [
      { q: "¿Los niños usan el mismo IMC?", a: "No. Necesitan percentiles por edad y sexo." },
      { q: "¿El IMC sirve en adultos mayores?", a: "Puede orientar, pero debe combinarse con fuerza, función y nutrición." },
      { q: "¿La edad cambia el cálculo?", a: "No cambia la fórmula adulta, pero sí la interpretación." }
    ]
  }),
  "how-to-lower-your-bmi": article({
    title: "Cómo bajar el IMC de forma responsable",
    description: "Estrategias generales para reducir el IMC con hábitos sostenibles y sin promesas rápidas.",
    sections: [
      { title: "Qué significa bajar el IMC", body: ["Bajar el IMC significa reducir peso en relación con la altura. En adultos, puede ocurrir por pérdida de grasa, agua o músculo.", "El objetivo responsable no es solo bajar el número, sino mejorar salud y mantener hábitos realistas."] },
      { title: "Déficit moderado", body: ["Una reducción gradual de calorías suele ser más sostenible que restricciones extremas.", "Un déficit demasiado agresivo puede aumentar hambre, pérdida muscular, fatiga y abandono."] },
      { title: "Actividad física", body: ["Caminar, entrenar fuerza y aumentar movimiento diario pueden ayudar a mejorar composición corporal.", "El entrenamiento de fuerza es útil para conservar masa muscular mientras se pierde grasa."] },
      { title: "Alimentación saciante", body: ["Proteína suficiente, fibra, frutas, verduras, legumbres y cereales integrales pueden facilitar adherencia.", "No hace falta una dieta perfecta; importa repetir hábitos sostenibles."] },
      { title: "Sueño y estrés", body: ["Dormir poco y vivir con estrés alto puede dificultar regulación del apetito y constancia.", "La gestión del entorno es parte del plan, no un detalle secundario."] },
      { title: "Cuándo pedir ayuda", body: ["Consulta si tienes enfermedades, medicación, embarazo, antecedentes de trastornos alimentarios o si el peso cambia de forma inesperada."] }
    ],
    faq: [
      { q: "¿Cuánto debería bajar por semana?", a: "Depende del punto de partida y salud. Lo gradual suele ser más sostenible." },
      { q: "¿Puedo bajar IMC sin perder músculo?", a: "Ayuda entrenar fuerza, comer suficiente proteína y evitar déficits extremos." },
      { q: "¿El IMC es el único objetivo?", a: "No. Cintura, fuerza, energía y análisis también importan." }
    ],
    related: [
      { label: "Calculadora de calorías", href: "/es/calorie-calculator" },
      { label: "Calculadora de TMB", href: "/es/bmr-calculator" },
      { label: "Calculadora de IMC", href: "/es" }
    ]
  }),
  "bmi-limitations": article({
    title: "Limitaciones del IMC: lo que el índice de masa corporal no puede mostrar",
    description: "Qué mide realmente el IMC, cuándo puede confundir y qué medidas pueden complementarlo.",
    sections: [
      { title: "Qué mide realmente", body: ["El IMC mide la relación entre peso y altura. No mide grasa corporal de forma directa.", "Por eso es útil como cribado rápido, pero limitado para describir composición corporal."] },
      { title: "Músculo y grasa", body: ["El IMC no separa músculo, grasa, hueso y agua. Una persona con mucho músculo puede parecer en sobrepeso.", "Una persona con poca masa muscular puede tener IMC normal y aun así más grasa de la esperada."] },
      { title: "Distribución de grasa", body: ["Dónde se acumula la grasa importa. La grasa abdominal se asocia más con riesgo metabólico que la grasa periférica.", "La cintura puede complementar al IMC."] },
      { title: "Casos especiales", body: ["Niños, adolescentes, embarazo, deportistas y adultos mayores requieren interpretación cuidadosa.", "En niños se usan percentiles, y durante embarazo las categorías estándar no aplican."] },
      { title: "Medidas complementarias", body: ["Cintura, relación cintura-altura, porcentaje de grasa, presión arterial, glucosa y colesterol pueden aportar más contexto.", "Ninguna medida por sí sola describe toda la salud."] },
      { title: "Cuándo consultar", body: ["Consulta si tu resultado está fuera de rango, cambia rápido o no encaja con tu situación corporal y síntomas."] }
    ],
    faq: [
      { q: "¿El IMC puede estar equivocado?", a: "Puede ser incompleto. El cálculo es correcto, pero su interpretación puede no reflejar composición corporal." },
      { q: "¿Qué puedo usar además?", a: "Cintura, porcentaje de grasa, análisis clínicos y evaluación profesional." },
      { q: "¿Debo ignorar el IMC?", a: "No. Úsalo como punto de partida, no como conclusión final." }
    ]
  }),
  "bmi-and-heart-disease": article({
    title: "IMC y salud cardiovascular",
    description: "Relación entre IMC, cintura y factores que pueden influir en riesgo cardiovascular.",
    sections: [
      { title: "Relación general", body: ["Un IMC elevado puede asociarse con mayor probabilidad de presión arterial alta, colesterol alterado y carga cardiovascular.", "La asociación no significa diagnóstico individual."] },
      { title: "La cintura importa", body: ["La grasa abdominal puede relacionarse con riesgo cardiometabólico. Por eso medir cintura junto con IMC puede aportar más información.", "Una cintura elevada puede ser relevante incluso con IMC normal."] },
      { title: "Otros factores", body: ["Tabaquismo, actividad física, sueño, glucosa, colesterol, presión arterial y antecedentes familiares son claves.", "El IMC solo no puede estimar riesgo cardiovascular completo."] },
      { title: "Ejemplo", body: ["Dos personas con IMC 28 pueden tener riesgos distintos si una tiene presión normal, cintura baja y actividad regular, y otra presenta hipertensión y cintura elevada.", "La evaluación completa cambia la interpretación."] },
      { title: "Hábitos útiles", body: ["Movimiento regular, alimentación rica en fibra, manejo de sueño, no fumar y controles médicos pueden ser más importantes que perseguir un número aislado.", "El objetivo debe ser salud sostenible."] },
      { title: "Cuándo consultar", body: ["Consulta si tienes dolor torácico, falta de aire, hipertensión, antecedentes familiares o dudas sobre riesgo cardiovascular."] }
    ],
    faq: [
      { q: "¿Un IMC alto causa enfermedad cardíaca?", a: "No por sí solo. Puede asociarse con factores de riesgo, pero el riesgo depende de muchos datos." },
      { q: "¿La cintura predice mejor?", a: "Puede aportar información adicional, especialmente sobre grasa abdominal." },
      { q: "¿Qué controles importan?", a: "Presión arterial, colesterol, glucosa y valoración médica." }
    ]
  }),
  "bmi-and-diabetes": article({
    title: "IMC y diabetes tipo 2",
    description: "Cómo se relaciona el IMC con riesgo metabólico y por qué la cintura y otros factores también importan.",
    sections: [
      { title: "Relación con riesgo metabólico", body: ["Un IMC alto puede asociarse con resistencia a la insulina y mayor riesgo de diabetes tipo 2 a nivel poblacional.", "No significa que una persona tenga diabetes ni predice el riesgo individual completo."] },
      { title: "Grasa abdominal", body: ["La grasa visceral se relaciona más con alteraciones metabólicas que la grasa subcutánea.", "Por eso la cintura puede complementar al IMC."] },
      { title: "Otros factores", body: ["Edad, antecedentes familiares, actividad física, sueño, alimentación, medicamentos y origen étnico influyen en riesgo.", "El análisis de glucosa o HbA1c da información que el IMC no puede ofrecer."] },
      { title: "Ejemplo", body: ["Una persona con IMC 26 y mucha actividad puede tener un perfil distinto a otra con el mismo IMC, cintura alta y antecedentes familiares.", "El número orienta, pero no cierra la evaluación."] },
      { title: "Hábitos generales", body: ["Caminar, entrenamiento de fuerza, fibra, sueño adecuado y controles médicos pueden apoyar salud metabólica.", "Los cambios deben ser sostenibles y adaptados a la persona."] },
      { title: "Cuándo consultar", body: ["Consulta si tienes sed excesiva, micción frecuente, cansancio, antecedentes familiares o resultados alterados de glucosa."] }
    ],
    faq: [
      { q: "¿El IMC diagnostica diabetes?", a: "No. La diabetes se diagnostica con pruebas clínicas." },
      { q: "¿La cintura es importante?", a: "Sí, puede orientar sobre grasa abdominal y riesgo metabólico." },
      { q: "¿Qué prueba confirma riesgo?", a: "Un profesional puede pedir glucosa, HbA1c u otras pruebas." }
    ]
  }),
  "healthy-weight-loss-rate": article({
    title: "Ritmo saludable de pérdida de peso",
    description: "Qué se considera una pérdida gradual, por qué evitar extremos y cómo hacer cambios sostenibles.",
    sections: [
      { title: "Qué se considera gradual", body: ["Una pérdida de peso saludable suele centrarse en cambios graduales y sostenibles, no en restricciones extremas.", "El ritmo adecuado varía según punto de partida, edad, medicación, historial médico, actividad, sueño, estrés y relación con la comida."] },
      { title: "Por qué la pérdida rápida puede fallar", body: ["Perder peso muy rápido puede aumentar hambre, fatiga, pérdida muscular y rebote.", "También puede hacer difícil cubrir nutrientes esenciales si la restricción es intensa."] },
      { title: "Factores que influyen", body: ["Peso inicial, masa muscular, nivel de actividad, sueño, medicamentos, ciclo menstrual y enfermedades pueden cambiar el ritmo.", "No todas las personas responden igual al mismo déficit calórico."] },
      { title: "Señales de pérdida demasiado rápida", body: ["Mareos, cansancio extremo, caída marcada del rendimiento, obsesión con la comida, pérdida de menstruación o pérdida involuntaria rápida merecen atención.", "Estos signos no deben normalizarse."] },
      { title: "Cambios sostenibles", body: ["Prioriza proteína suficiente, fibra, comidas regulares, movimiento diario, entrenamiento de fuerza y sueño.", "Medir tendencias semanales suele ser más útil que juzgar un día aislado."] },
      { title: "Cuándo consultar", body: ["Consulta si tienes una enfermedad, tomas medicación, estás embarazada, tienes antecedentes de trastornos alimentarios o pierdes peso sin buscarlo."] }
    ],
    faq: [
      { q: "¿Cuánto peso por semana es razonable?", a: "Depende de la persona. Lo gradual y sostenible suele ser más seguro que lo extremo." },
      { q: "¿La báscula debe bajar cada semana?", a: "No siempre. Agua, ciclo menstrual y entrenamiento pueden mover el peso." },
      { q: "¿Necesito contar calorías?", a: "Puede ayudar a algunas personas, pero no es obligatorio ni adecuado para todos." }
    ],
    related: [
      { label: "Calculadora de calorías", href: "/es/calorie-calculator" },
      { label: "Calculadora de TMB", href: "/es/bmr-calculator" },
      { label: "Cómo bajar el IMC", href: "/es/blog/how-to-lower-your-bmi" }
    ]
  }),
  "understanding-bmr": article({
    title: "Entender la TMB: qué es la tasa metabólica basal",
    description: "Qué es la TMB, diferencia con RMR y TDEE, factores que influyen y cómo usarla con responsabilidad.",
    sections: [
      { title: "Qué es la TMB", body: ["La TMB estima las calorías que el cuerpo usa en reposo completo para mantener funciones esenciales.", "Incluye respiración, circulación, reparación celular, temperatura y actividad del sistema nervioso."] },
      { title: "TMB, RMR y TDEE", body: ["La RMR o tasa metabólica en reposo se mide en condiciones menos estrictas y suele ser algo más alta que la TMB.", "El TDEE añade actividad diaria y ejercicio, por eso se acerca más a las calorías reales de mantenimiento."] },
      { title: "Factores que influyen", body: ["Tamaño corporal, masa muscular, edad, sexo, hormonas, medicamentos y enfermedades pueden cambiar la TMB.", "Dos personas con el mismo peso pueden tener gasto distinto si su composición corporal es diferente."] },
      { title: "Fórmulas", body: ["La ecuación Mifflin-St Jeor usa peso, altura, edad y sexo para estimar gasto en reposo.", "Es práctica, pero no exacta para todos los individuos."] },
      { title: "Uso responsable", body: ["La TMB puede ayudar a estimar calorías, pero no debería usarse como una cifra rígida.", "Comer por debajo de la TMB durante periodos largos no suele recomendarse sin supervisión."] },
      { title: "Cuándo consultar", body: ["Consulta si tienes trastornos tiroideos, pérdida o ganancia inesperada de peso, medicación relevante o dudas sobre dieta."] }
    ],
    faq: [
      { q: "¿La TMB cambia?", a: "Sí, puede cambiar con edad, peso, músculo, hormonas y salud." },
      { q: "¿TDEE es lo mismo?", a: "No. TDEE incluye actividad diaria." },
      { q: "¿Puedo usarla para bajar peso?", a: "Sí como referencia, pero no como regla médica exacta." }
    ],
    related: [
      { label: "Calculadora de TMB", href: "/es/bmr-calculator" },
      { label: "Calculadora de calorías", href: "/es/calorie-calculator" },
      { label: "Ritmo saludable de pérdida de peso", href: "/es/blog/healthy-weight-loss-rate" }
    ]
  }),
  "waist-circumference-health": article({
    title: "Cintura y salud: por qué la medida de cintura también importa",
    description: "Qué mide la cintura, por qué la grasa abdominal puede importar y cómo combinar cintura e IMC.",
    sections: [
      { title: "Qué mide la cintura", body: ["La circunferencia de cintura estima el tamaño abdominal y puede orientar sobre acumulación de grasa central.", "Es una medida simple, barata y útil junto con el IMC."] },
      { title: "Grasa abdominal", body: ["La grasa visceral, situada alrededor de órganos, puede relacionarse con riesgo metabólico y cardiovascular.", "La cintura no mide grasa visceral directamente, pero puede servir como indicador práctico."] },
      { title: "Cómo medir", body: ["Usa una cinta flexible, de pie, con abdomen relajado y después de una exhalación normal.", "Mantén la cinta horizontal y no la aprietes. Repite la medida para confirmar."] },
      { title: "Cintura e IMC", body: ["El IMC muestra relación peso-altura. La cintura añade información sobre distribución de grasa.", "Una persona con IMC normal y cintura alta puede tener riesgos que el IMC no muestra."] },
      { title: "Limitaciones", body: ["La técnica de medición puede variar. La cintura tampoco diagnostica enfermedades por sí sola.", "Diferentes grupos pueden tener umbrales de riesgo distintos."] },
      { title: "Cuándo pedir orientación", body: ["Consulta si tu cintura aumenta de forma marcada, si tienes presión alta, glucosa alterada, antecedentes familiares o dudas sobre riesgo."] }
    ],
    faq: [
      { q: "¿La cintura es mejor que el IMC?", a: "No es mejor en todo, pero aporta información complementaria." },
      { q: "¿Dónde debo medir?", a: "Usa una técnica consistente, con cinta horizontal y abdomen relajado." },
      { q: "¿Puede cambiar rápido?", a: "Puede variar por digestión, postura y medición; observa tendencias." }
    ],
    related: [
      { label: "Calculadora de IMC", href: "/es" },
      { label: "Limitaciones del IMC", href: "/es/blog/bmi-limitations" },
      { label: "Calculadora de grasa corporal", href: "/es/body-fat-calculator" }
    ]
  })
};

export function getSpanishArticle(slug: string) {
  return spanishArticles[slug];
}
