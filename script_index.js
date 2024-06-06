document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
    let equipoVisited = false; // Variable de control para verificar si se ha visitado la sección "Equipo"

    function animateTeam() {
        teamMembers.forEach((member, index) => {
            setTimeout(() => {
                member.classList.add('visible');
            }, index * 200); // Cambia el tiempo de retraso según lo desees
        });
    }

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para manejar el evento de scroll
    function handleScroll() {
        if (!equipoVisited && isInViewport(document.getElementById('equipo'))) {
            animateTeam();
            equipoVisited = true; // Marca la sección "Equipo" como visitada
            // Desvincula el evento de scroll después de la primera animación
            window.removeEventListener('scroll', handleScroll);
        }
    }

    // Agrega un evento de clic al enlace de la sección "Equipo"
    const equipoLink = document.querySelector('nav a[href="#equipo"]');
    equipoLink.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace recargue la página

        // Hace scroll hasta la sección del equipo
        document.querySelector('#equipo').scrollIntoView({ behavior: 'smooth' });

        // Verifica si se ha visitado previamente la sección "Equipo"
        if (!equipoVisited) {
            animateTeam();
            equipoVisited = true; // Marca la sección "Equipo" como visitada
        }
    });

    // Agrega un evento de scroll para manejar la animación cuando se hace scroll hacia abajo
    window.addEventListener('scroll', handleScroll);
});
