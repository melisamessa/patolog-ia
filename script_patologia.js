document.addEventListener('DOMContentLoaded', function() {
    const organs = document.querySelectorAll('.option');
    const organNames = document.querySelectorAll('.organ-name');
    const title = document.querySelector('.title');
    const imageUploadSection = document.querySelector('.image-upload-section');
    const backButton = document.getElementById('backButton');
    const uploadButton = document.getElementById('uploadButton');
    const resultSection = document.getElementById('resultSection');
    const resultText = document.getElementById('resultText');
    let selectedOrgan = null;

    // Ocultar el botón de volver al cargar la página
    backButton.style.display = 'none';

    if (!imageUploadSection) {
        console.error('No se encontró el elemento con la clase "image-upload-section".');
        return;
    }

    // Manejar la selección de órganos
    organs.forEach(organ => {
        organ.addEventListener('click', function(event) {
            selectedOrgan = this;
            const selectedOrganName = selectedOrgan.querySelector('.organ-name').innerText;

            // Ocultar los nombres de los órganos
            organNames.forEach(name => {
                if (name !== selectedOrgan.nextElementSibling) {
                    name.style.display = 'none';
                }
            });

            // Ocultar todos los órganos excepto el seleccionado
            organs.forEach(otherOrgan => {
                if (otherOrgan !== selectedOrgan) {
                    otherOrgan.style.display = 'none';
                }
            });

            // Mostrar el título "Elige una opción"
            title.style.display = 'block';

            // Mostrar la sección de carga de imagen
            imageUploadSection.style.display = 'block';

            // Mostrar el botón de volver
            backButton.style.display = 'block';

            // Mostrar el nombre del órgano seleccionado como título
            title.innerText = selectedOrganName;

            // Evitar el efecto de agrandamiento de la imagen al pasar el mouse sobre ella
            selectedOrgan.querySelector('img').classList.add('no-hover-effect');
        });
    });

    // Manejar el clic en el botón de volver atrás
    backButton.addEventListener('click', function() {
        // Mostrar nuevamente el título y los nombres de los órganos
        title.style.display = 'block';
        organNames.forEach(name => {
            name.style.display = 'block';
        });

        // Restablecer la visualización de todos los órganos
        organs.forEach(organ => {
            organ.style.display = 'inline-block';
        });

        // Ocultar la sección de carga de imagen
        imageUploadSection.style.display = 'none';

        // Ocultar el botón de volver
        backButton.style.display = 'none';

        // Restaurar el efecto de agrandamiento de la imagen al pasar el mouse sobre ella
        if (selectedOrgan) {
            selectedOrgan.querySelector('img').classList.remove('no-hover-effect');
        }

        // Restaurar el título predeterminado
        title.innerText = 'Elige una opción';

        // Limpiar los resultados mostrados
        resultSection.style.display = 'none';
        resultText.textContent = '';

        // Reiniciar la variable selectedOrgan
        selectedOrgan = null;
    });

    // Manejar la subida de imagen y análisis
    uploadButton.addEventListener('click', function() {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        if (!file) {
            alert('Por favor selecciona una imagen primero.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('organ', selectedOrgan.querySelector('.organ-name').innerText);

        // Simular la petición al backend y mostrar resultados
        // Aquí es donde conectarías con tu backend real para procesar la imagen y obtener resultados
        // En este ejemplo, solo mostramos un mensaje de prueba
        const resultadoPrueba = `Resultado de prueba para ${selectedOrgan.querySelector('.organ-name').innerText}`;
        showResults(resultadoPrueba); // Reemplazar con la lógica real del backend
    });

    // Función para mostrar los resultados (puedes reemplazar con la lógica real del backend)
    function showResults(result) {
        resultText.textContent = result;
        resultSection.style.display = 'block';
    }
});
