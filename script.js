document.addEventListener('DOMContentLoaded', () => {
    const enterAppBtn = document.getElementById('enterAppBtn');
    const appSection = document.querySelector('#app .app-section');
    const uploadBtn = document.getElementById('uploadBtn');
    const fileInput = document.getElementById('fileInput');

    enterAppBtn.addEventListener('click', () => {
        document.querySelector('.hero-section').scrollIntoView({ behavior: 'smooth' });
        appSection.classList.remove('hidden');
    });

    uploadBtn.addEventListener('click', () => {
        if (fileInput.files.length === 0) {
            alert('Por favor, selecciona una imagen médica.');
        } else {
            // Aquí iría la lógica para subir la imagen y procesarla con la IA
            alert('Imagen subida exitosamente. Procesando...');
        }
    });
});
