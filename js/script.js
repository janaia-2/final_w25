const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  document.querySelector('nav').classList.toggle('dark-mode');
  const footer = document.querySelector('footer');
  if (footer) {
    footer.classList.toggle('dark-mode');
  }
});

const footer = document.createElement('footer');
footer.innerHTML = `
  <p>SI 539 Final Project 2025</p>
  <p>Remembering Records. Built with love for Physical Media.</p>
`;

document.body.appendChild(footer);

const sections = document.querySelectorAll('main section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(section => {
  observer.observe(section);
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});