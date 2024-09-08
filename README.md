# Extensión de Reconocimiento de Voz para Chrome

## Descripción

Esta extensión de Chrome permite convertir voz a texto directamente desde tu navegador. Está diseñada para transcribir tu dictado en tiempo real y mostrar el texto resultante en un área de texto en la interfaz de la extensión. La extensión fue desarrollada con la ayuda de ChatGPT para facilitar el reconocimiento de voz en cualquier sitio web.

## Funcionalidades

- **Iniciar/Detener Reconocimiento de Voz**: Usa un botón para comenzar o detener el reconocimiento de voz.
- **Copiar Texto**: Copia el texto transcrito al portapapeles.
- **Borrar Texto**: Borra el texto del área de texto.
- **Estado de Reconocimiento**: Muestra el estado actual del reconocimiento de voz (Iniciar, Escuchando, o Terminó).

## Instalación

1. Clona este repositorio a tu máquina local:
   ```bash
   git clone git@github.com:anapse/Voice-to-Text.git
   
2. Abre Google Chrome y navega a chrome://extensions/.

3. Activa el modo de desarrollador utilizando el interruptor en la esquina superior derecha.

4. Haz clic en "Cargar descomprimida" y selecciona la carpeta del proyecto que contiene los archivos de la extensión.

5. La extensión debería aparecer en la lista de extensiones y estar lista para usar.

## Uso 

1. Haz clic en el ícono de la extensión en la barra de herramientas de Chrome para abrir la interfaz.

2. Presiona el botón "Iniciar" para comenzar a reconocer tu voz. El estado en el label mostrará "Escuchando".

3. Dicta tu texto. El área de texto se actualizará con la transcripción a medida que hables.

4. Usa el botón "Copiar" para copiar el texto al portapapeles o "Borrar" para eliminar el texto en el área de texto.

5. Presiona el botón nuevamente para detener el reconocimiento. El estado en el label mostrará "Terminó".


Esta extensión fue desarrollada usando tecnologías web estándar y se basa en la API de reconocimiento de voz de Web Speech. El código y el diseño fueron elaborados con la asistencia de ChatGPT.

## Créditos

- **Desarrollado por**: el_herrer0 con la asistencia de ChatGPT.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

