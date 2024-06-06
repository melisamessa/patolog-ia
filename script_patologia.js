document.addEventListener('DOMContentLoaded', function() {
    const organs = document.querySelectorAll('.option');
    const organNames = document.querySelectorAll('.organ-name');
    const title = document.querySelector('.title');
    const imageUploadSection = document.querySelector('.image-upload-section');
    const backButton = document.getElementById('backButton');
    let selectedOrgan = null;

    // Ocultar el botón de volver al cargar la página
    backButton.style.display = 'none';

    if (!imageUploadSection) {
        console.error('No se encontró el elemento con la clase "image-upload-section".');
        return;
    }

    organs.forEach(organ => {
        organ.addEventListener('click', function(event) {
            selectedOrgan = this;
            const selectedOrganName = selectedOrgan.querySelector('.organ-name').innerText;
            console.log(selectedOrganName);
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

            // Ocultar el título "Elige una opción"
            title.style.display = 'block';

            // Mostrar la sección de carga de imagen
            imageUploadSection.style.display = 'block';

            // Mostrar el botón de volver
            backButton.style.display = 'block';

            // Mostrar el nombre del órgano seleccionado como título
            console.log(title);
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

        title.innerText = 'Elige una opción';

        // Reiniciar la variable selectedOrgan
        selectedOrgan = null;
    });
});
