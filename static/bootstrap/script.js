function buscarVeladora() {
    const enfermedad = document.getElementById("enfermedad").value.toLowerCase();
    const resultadosDiv = document.getElementById("resultados");
    
    // Aquí se pueden agregar más enfermedades y veladoras
    const veladoras = {
        "Respiracion, Musculos, Anti Bacteria, Anti Microbio, Anti Viral, Sistema Inmunologico, Tos": "Veladora Escencia de Eucalipto: Excelente para infecciones respiratorias, sinisitis, alergias, tos, gripa, congestion, para musculos cansados, reumatismo, artritis entre otras.",

        "Circulacion,Dolor Muscular,Sueño,Hipertension,Funcion Cerebral,Cerebro, Depresion,Alegria,Positivismo,Ansiedad,Nerviosismo,Histeria,Berrinches,Relajacion,Creatividad,Divertido,Niño interno": "Veladora Escencia de Naranja: Ideal para un descanso profundo, la escencia de naranja tiene un aroma fresco y dulce que se utiliza para reducir el estrés y la ansiedad. Se cree que su fragancia mejora el estado de ánimo, promoviendo una sensación de calma y bienestar.",

        "Antiviral, Dolor de dientes, Faringitis, Bronquitis, Agotamiento nervioso, Depresion, Tension, Miedo, Enojo, Furia, Frustacion, Irritabilidad, Limpieza, Purificacion, Energia, Calmar la mente": "Veladora de Arbol de te: La veladora de árbol de té es una herramienta poderosa tanto para la salud física como emocional. Conocida por sus propiedades antimicrobianas y antifúngicas, es ideal para tratar como hongos y pequeñas infecciones. Además, su capacidad para aliviar dolores musculares y mejorar la salud respiratoria lo convierte en un aliado versátil en el cuidado personal. Emocionalmente, su frescura y aroma revitalizante ayudan a reducir el estrés y aumentar la concentración, proporcionando claridad mental y un equilibrio emocional que favorece la calma en momentos de agitación.",

        "Proceso de curacion, Curacion, Inflamaciones,Heridas, Controlar alergias, Alergias, Dolor menstrual, Depresion, Angustia, Ansiedad,Impaciencia,Miedo,Preocupacion,Intucicion,Claridad mental,Equilibrio,Inseguridad,Estimula expresion,Liberacion,Aceptacion de uno mismo,Nerviosismo,Frustacion,Enojo": "Luz de Lavanda: Reduce la ansiedad y proporciona paz.La esencia de lavanda es una de las más populares en el mundo de los aceites esenciales, conocida principalmente por sus potentes propiedades relajantes y calmantes. Se extrae de las flores de la planta de lavanda (Lavandula angustifolia) y tiene un aroma suave, floral y fresco que genera una sensación inmediata de paz y tranquilidad.",

        "Resfriado,Gripe, Regulador de PH,Acidez estomacal,Pesamiento,Claridad,Amargura,Negatividad,Culpa,Relajacion,Tolerancia,Concentracion,Enfoque,Flexibilidad,Confianza,Alegria,Esperanza": "Veladora Escencia de Hierbas de Limon: Excelente veladora con escencia de hierbas de limon es una opción versátil y poderosa tanto para el cuidado físico como emocional. Su frescura y propiedades purificantes lo hacen ideal para mejorar la salud, aumentar la energía y promover el bienestar general.",

        "Dolor,Migraña,Acidez estomacal,Malestar,Mareos,Nauseas,Vias respiratorias,Concentracion,Fiebre,Creatividad,Funcionamiento de ambos hemisferios,Calma la mente,Tristeza,Apatia,Ansiedad,Miedo,Pensamientos negativos,Pereza,Reducir miedos": "Veladora Escencia de Menta: Excelente veladora con escencia de menta es una de las escencias más populares y conocidos por sus potentes efectos refrescantes y energizantes. Se extrae de las hojas de la planta de menta (Mentha piperita) y posee un aroma fresco, mentolado y vigorizante, que lo convierte en un aliado tanto para el bienestar físico como emocional.",
    };

    if (veladoras[enfermedad]) {
        resultadosDiv.innerHTML = `<p>Te recomendamos: ${veladoras[enfermedad]}</p>`;
    } else {
        resultadosDiv.innerHTML = `<p>No tenemos una recomendación para esta condición aún. Intenta con otro término.</p>`;
    }
}
