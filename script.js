
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    });
});

const sections = [...document.querySelectorAll('section[id]')];
const links = [...document.querySelectorAll('.nav a')];

const setActive = () => {
    let current = '';
    sections.forEach(sec => {
    const top = sec.offsetTop - 120;
    if (window.scrollY >= top) current = sec.id;
    });

    links.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
};

window.addEventListener('scroll', setActive);
setActive();

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll(".award-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const category = button.parentElement;
        category.classList.toggle("active");
    });
});
