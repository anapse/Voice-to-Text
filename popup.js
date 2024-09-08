document.addEventListener("DOMContentLoaded", () => {
  const textContainer = document.getElementById("textContainer");
  const toggleButton = document.getElementById("toggleButton");
  const copyButton = document.getElementById("copyButton");
  const clearButton = document.getElementById("clearButton");
  const statusLabel = document.getElementById("statusLabel");

  if (!("webkitSpeechRecognition" in window)) {
    textContainer.value =
      "La API de reconocimiento de voz no está soportada en este navegador.";
    toggleButton.disabled = true;
    copyButton.disabled = true;
    clearButton.disabled = true;
    statusLabel.textContent = "Reconocimiento de voz no soportado";
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "es-ES"; // Configura el idioma
  recognition.interimResults = true; // Muestra resultados intermedios
  recognition.continuous = true; // Mantener escuchando

  let isListening = false;
  let interimTranscript = "";

  recognition.onstart = () => {
    console.log("Reconocimiento de voz iniciado");
    statusLabel.textContent = "Escuchando...";
    toggleButton.textContent = "Detener";
    isListening = true;
    interimTranscript = "";
  };

  recognition.onresult = (event) => {
    let transcript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const result = event.results[i];
      if (result.isFinal) {
        // Si el resultado es final, agrégalo al texto transcrito
        interimTranscript += result[0].transcript + " ";
      } else {
        // Si el resultado es intermedio, muestra el texto intermedio en el textarea
        transcript = result[0].transcript;
      }
    }
    // Muestra el texto final y el texto intermedio en el textarea
    textContainer.value = interimTranscript + transcript;
  };

  recognition.onerror = (event) => {
    console.log("Error en el reconocimiento de voz:", event.error);
    textContainer.value += " Error en el reconocimiento de voz: " + event.error;
  };

  recognition.onend = () => {
    console.log("Reconocimiento de voz terminado.");
    if (isListening) {
      statusLabel.textContent = "Reconocimiento de voz terminado.";
      toggleButton.textContent = "Iniciar";
      isListening = false;
    }
  };

  toggleButton.addEventListener("click", () => {
    if (isListening) {
      console.log("Deteniendo reconocimiento de voz...");
      recognition.stop();
    } else {
      console.log("Iniciando reconocimiento de voz...");
      recognition.start();
    }
  });

  copyButton.addEventListener("click", () => {
    textContainer.select();
    document.execCommand("copy");
    console.log("Texto copiado al portapapeles.");
  });

  clearButton.addEventListener("click", () => {
    textContainer.value = "";
    console.log("Texto borrado.");
  });
});
