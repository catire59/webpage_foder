// script.js

const files = [
    'san_rafael.pdf',
    'san_jose.pdf',
    // Añade aquí más nombres de archivos
];

const fileList = document.getElementById('fileList');
files.forEach(file => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `carpeta/${file}`;
    link.textContent = file;
    link.target = "_blank";
    listItem.appendChild(link);
    fileList.appendChild(listItem);
});

// Función para obtener la URL del archivo
function obtenerArchivo(nombre) {
    return `carpeta/${nombre}`;
}

// Ejemplo de uso:
// Para acceder al archivo "documento1.pdf", solo necesitas la URL
console.log(obtenerArchivo('documento1.pdf'));




function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('es-ES', options);

    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

setInterval(updateTime, 1000);
updateTime();

