import "./style.css";
import Experience from "./Experience/Experience.js";

const experience = new Experience(document.querySelector(".experience-canvas"));

////////////////////////////////////////////////////////////////////////////////////

const ctx = document.getElementById('skills');

const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.prepend(cursor);

document.addEventListener('mousemove', (event) => {
  cursor.style.left = event.pageX + 'px';
  cursor.style.top = (event.pageY - window.pageYOffset) + 'px';
});

const links = document.querySelectorAll('a, input, textarea, .toggle-button');
links.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
  });

  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});

const data = {
    labels: [
        'Gestion de la qualité',
        'Lean Management',
        'Gestion de projet',
        'Gestion de maintenance',
        'Management stratégique',
        'Communication',
    ],
    datasets: [{

        data: [85, 75, 85, 90, 60, 90],
        fill: true,
        backgroundColor: 'rgba(17, 111, 177, 0.2)',
        borderColor: 'rgb(17, 111, 177)',
        pointBackgroundColor: 'rgb(17, 111, 177)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(17, 111, 177)'
    }]
};


const config = {
    type: 'radar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
    },
};

new Chart(ctx, config);