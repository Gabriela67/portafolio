// Modo oscuro/claro
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? ' Modo Claro' : ' Modo Oscuro';
});

// Desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación al hacer scroll
const sections = document.querySelectorAll('section');

const revealSections = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealSections);

// Mostrar la animación de las secciones al cargar la página
revealSections();
///////////////////////////////////////////////////////////////

const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

// projects-animation.js

document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');

    // Animación de entrada cuando se hace scroll hacia los proyectos
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2
    });

    projects.forEach(project => {
        observer.observe(project);
    });

    // Efecto hover: rotar y elevar la tarjeta del proyecto
    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            project.classList.add('hovered');
        });

        project.addEventListener('mouseleave', () => {
            project.classList.remove('hovered');
        });
    });
});
///lenguajes de programacion
function showInfo(title, description) {
    const infoContainer = document.getElementById('infoContainer');
    const infoTitle = document.getElementById('infoTitle');
    const infoDescription = document.getElementById('infoDescription');

    // Mostrar información
    infoTitle.textContent = title;
    infoDescription.textContent = description;
    infoContainer.style.display = 'block';
}
//mensaje sobre mi
function showDetails() {
    const details = document.getElementById('details');
    if (details.style.display === 'block') {
        details.style.display = 'none';
    } else {
        details.style.display = 'block';
    }
}

