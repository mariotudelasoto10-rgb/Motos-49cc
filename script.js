function mostrarInfo(moto) {
    // Definimos qué motos son automáticas (puedes añadir más a la lista)
    const automaticas = ["Yamaha Aerox", "Piaggio Zip", "Jog RR"];
    
    // Determinamos si es automática o de marchas
    let transmision = automaticas.includes(moto) 
        ? "⚙️ Ajuste de variador y rodillos" 
        : "⚙️ Revisión de kit de arrastre (cadena)";

    // Construimos el mensaje dinámico
    const mensaje = `Información de reparación para ${moto}:

🔧 MANTENIMIENTO:
- Cambio de aceite de transmisión
- Limpieza de carburador
- Limpieza de filtro de aire
- Revisión de bujía

🚀 PREPARACIÓN RECOMENDADA:
${transmision}
- Escape deportivo
- Ajuste de carburación (Chiclé)`;

    alert(mensaje);
}
