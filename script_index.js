document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.team-member');
    let equipoVisited = false;

    function animateTeam() {
        teamMembers.forEach((member, index) => {
            setTimeout(() => {
                member.classList.add('visible');
            }, index * 200);
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

    function handleScroll() {
        if (!equipoVisited && isInViewport(document.getElementById('equipo'))) {
            animateTeam();
            equipoVisited = true;
            window.removeEventListener('scroll', handleScroll);
        }
    }

    const equipoLink = document.querySelector('nav a[href="#equipo"]');
    equipoLink.addEventListener('click', function(event) {
        event.preventDefault();

        const target = document.querySelector('#equipo');
        const offset = 60; // Altura de la barra de navegación
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        if (!equipoVisited) {
            animateTeam();
            equipoVisited = true;
        }
    });

    window.addEventListener('scroll', handleScroll);

    // Script para ajustar la posición de desplazamiento al cargar la página
    window.addEventListener('beforeunload', function () {
        window.scrollTo(0, 0); // Ajusta la posición de desplazamiento al cargar la página
    });
});
