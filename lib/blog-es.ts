export const spanishArticles: Record<string, { title: string; description: string; sections: { title: string; body: string[] }[] }> = {
  "what-is-a-healthy-bmi": {
    title: "Qué es un IMC saludable",
    description: "Guía clara sobre el rango de IMC saludable, categorías adultas y límites de interpretación.",
    sections: [
      {
        title: "Resumen",
        body: [
          "Un IMC saludable en adultos suele situarse entre 18.5 y 24.9. Este rango se usa como referencia general en salud pública porque permite comparar peso y altura de forma rápida.",
          "El IMC no mide directamente grasa corporal ni diagnostica enfermedades. Debe interpretarse junto con cintura, composición corporal, hábitos, historial médico y otros indicadores."
        ]
      }
    ]
  },
  "bmi-vs-body-fat": {
    title: "IMC vs porcentaje de grasa corporal",
    description: "Diferencias entre el IMC y el porcentaje de grasa corporal, y cuándo cada medida puede ser útil.",
    sections: [
      {
        title: "Diferencias principales",
        body: [
          "El IMC compara peso y altura. El porcentaje de grasa corporal intenta estimar qué proporción del cuerpo corresponde a tejido graso.",
          "El IMC es rápido y útil como cribado general, pero puede confundir músculo con grasa. El porcentaje de grasa puede aportar más detalle, aunque depende del método utilizado."
        ]
      }
    ]
  },
  "bmi-for-women": {
    title: "IMC en mujeres",
    description: "Cómo interpretar el IMC en mujeres teniendo en cuenta composición corporal, ciclo menstrual y etapas de vida.",
    sections: [
      {
        title: "Contexto importante",
        body: [
          "La fórmula del IMC es la misma para hombres y mujeres, pero la interpretación puede variar por diferencias de composición corporal, hormonas y distribución de grasa.",
          "El embarazo, el ciclo menstrual y la menopausia pueden influir en peso, agua corporal y composición, por lo que conviene evitar conclusiones rígidas a partir de una sola medición."
        ]
      }
    ]
  },
  "bmi-for-men": {
    title: "IMC en hombres",
    description: "Cómo interpretar el IMC en hombres y por qué masa muscular, cintura y hábitos importan junto al número.",
    sections: [
      {
        title: "Interpretación responsable",
        body: [
          "La fórmula del IMC es la misma para todos los adultos, pero en hombres la masa muscular y la distribución de grasa pueden cambiar la lectura del resultado.",
          "Un IMC elevado no siempre significa exceso de grasa, especialmente en personas con mucho entrenamiento de fuerza. Aun así, la medida de cintura, presión arterial, análisis y hábitos ayudan a completar la interpretación."
        ]
      }
    ]
  },
  "bmi-by-age": {
    title: "IMC por edad",
    description: "Por qué la edad cambia el contexto del IMC y cuándo usar herramientas específicas para niños o adolescentes.",
    sections: [
      {
        title: "Edad y contexto",
        body: [
          "En adultos, las categorías de IMC usan puntos de corte fijos. En niños y adolescentes se usan percentiles por edad y sexo porque el cuerpo sigue creciendo.",
          "En personas mayores, la pérdida de masa muscular puede hacer que un IMC normal no refleje toda la situación. Por eso conviene interpretar el resultado junto con fuerza, movilidad, apetito e historial médico."
        ]
      }
    ]
  },
  "how-to-lower-your-bmi": {
    title: "Cómo bajar el IMC de forma responsable",
    description: "Ideas generales para reducir el IMC mediante hábitos sostenibles sin recurrir a promesas rápidas.",
    sections: [
      {
        title: "Hábitos sostenibles",
        body: [
          "Bajar el IMC suele requerir cambios graduales en alimentación, actividad física, sueño y entorno. Las estrategias extremas pueden ser difíciles de mantener y no son adecuadas para todas las personas.",
          "Un enfoque responsable prioriza comidas saciantes, movimiento regular, seguimiento de tendencias y apoyo profesional cuando existen enfermedades, medicación o antecedentes complejos."
        ]
      }
    ]
  },
  "bmi-limitations": {
    title: "Limitaciones del IMC",
    description: "Qué no puede medir el IMC y por qué debe interpretarse junto con otros indicadores.",
    sections: [
      {
        title: "Lo que el IMC no muestra",
        body: [
          "El IMC no mide grasa corporal directamente y no distingue músculo, hueso, agua o grasa. Tampoco indica dónde se acumula la grasa en el cuerpo.",
          "Por eso puede ser menos preciso en deportistas, adultos mayores, personas embarazadas, niños y personas con cambios importantes de composición corporal."
        ]
      }
    ]
  },
  "bmi-and-heart-disease": {
    title: "IMC y salud cardiovascular",
    description: "Relación general entre IMC, cintura y factores de riesgo cardiovascular.",
    sections: [
      {
        title: "Riesgo cardiovascular",
        body: [
          "Un IMC alto puede asociarse con presión arterial elevada, colesterol alterado y mayor carga sobre el sistema cardiovascular, pero el riesgo personal depende de muchos factores.",
          "La medida de cintura, actividad física, tabaquismo, glucosa, presión arterial e historial familiar son datos importantes para completar la valoración."
        ]
      }
    ]
  },
  "bmi-and-diabetes": {
    title: "IMC y diabetes tipo 2",
    description: "Cómo se relaciona el IMC con riesgo metabólico y por qué la cintura también importa.",
    sections: [
      {
        title: "Contexto metabólico",
        body: [
          "Un IMC elevado puede asociarse con mayor probabilidad de resistencia a la insulina y diabetes tipo 2, aunque no predice el riesgo individual por sí solo.",
          "La grasa abdominal, antecedentes familiares, edad, actividad física, dieta, sueño y resultados de glucosa son parte de una evaluación más completa."
        ]
      }
    ]
  },
  "healthy-weight-loss-rate": {
    title: "Ritmo saludable de pérdida de peso",
    description: "Por qué los cambios graduales suelen ser más sostenibles que la pérdida rápida de peso.",
    sections: [
      {
        title: "Cambios graduales",
        body: [
          "Muchas guías consideran razonable una pérdida gradual y sostenida, evitando restricciones extremas que sean difíciles de mantener o puedan aumentar riesgos.",
          "El ritmo adecuado depende de salud, medicación, punto de partida, preferencias y supervisión profesional. Si la pérdida de peso es rápida o involuntaria, conviene consultar."
        ]
      }
    ]
  },
  "understanding-bmr": {
    title: "Entender la TMB",
    description: "Qué es la tasa metabólica basal y por qué importa para estimar necesidades energéticas.",
    sections: [
      {
        title: "Concepto básico",
        body: [
          "La tasa metabólica basal estima las calorías que el cuerpo utiliza en reposo para mantener funciones esenciales.",
          "Es una base útil para calcular gasto energético diario, pero sigue siendo una estimación afectada por músculo, edad, hormonas, salud y actividad."
        ]
      }
    ]
  },
  "waist-circumference-health": {
    title: "Cintura y salud",
    description: "Por qué la medida de cintura puede aportar información adicional al IMC.",
    sections: [
      {
        title: "Más allá del peso",
        body: [
          "La circunferencia de cintura ayuda a estimar grasa abdominal, que puede relacionarse con riesgo cardiometabólico.",
          "Usar cintura e IMC juntos ofrece una visión más completa que cualquiera de las dos medidas por separado."
        ]
      }
    ]
  }
};

export function getSpanishArticle(slug: string) {
  return spanishArticles[slug];
}
