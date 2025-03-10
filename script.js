
const linkCounts = {};

const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        const linkText = link.textContent;

        if (linkCounts[linkText]) {
            linkCounts[linkText]++;
        } else {
            linkCounts[linkText] = 1;
        }

        alert(`Você clicou em ${linkText} ${linkCounts[linkText]} vez(es)`);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const toggleButton = document.querySelector('#toggle-theme');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Carregar a preferência de tema armazenada
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

const notifyUser = (message) => {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 3000); // Remover após 3 segundos
};

const importantLink = document.querySelector('.important-link');
importantLink.addEventListener('click', () => {
    notifyUser('Você clicou em um link importante!');
});

fetch('https://api.example.com/links')
    .then(response => response.json())
    .then(data => {
        const linksContainer = document.querySelector('.links-container');
        data.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            linksContainer.appendChild(linkElement);
        });
    });

window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.animatable');
  elements.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add('animate');
    }
  });
});
