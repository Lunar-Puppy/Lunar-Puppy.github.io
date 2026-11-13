
// ====================================== MOBILE NAVIGATION ============================================== // 

const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    const icon = menuBtn.querySelector('i');
    icon.classList.toggle('fa-bars', !open);
    icon.classList.toggle('fa-xmark', open);
});

// Close menu when a navigation link is clicked
nav.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuBtn?.setAttribute('aria-expanded', 'false');
        const icon = menuBtn?.querySelector('i');
        icon?.classList.add('fa-bars');
        icon?.classList.remove('fa-xmark');

    });
}); 

// ====================================== ACTIVE NAVIGATION LINK ============================================== // 
const sections = [...document.querySelectorAll('section[id]')];
const links = [...document.querySelectorAll('.nav a')];

const setActive = () => {
    let current = '';
    sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) {
            current = sec.id;
        }
    });

    links.forEach(a => {
        a.classList.toggle(
            'active',
            a.getAttribute('href') === `#${current}`
        );
    });
};

window.addEventListener('scroll', setActive);
setActive();

// ====================================== REVEAL ANIMATIONS ============================================== // 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// ====================================== ACHIEVEMENT ACCORDION ============================================== // 

document.querySelectorAll('.award-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.closest('.award-category');
        const open = category.classList.toggle('active');
        button.setAttribute('aria-expanded', String(open));
    });
});
