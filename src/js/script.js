// Mobile menu toggle
const menuBtn = document.querySelector('[data-menu-btn]');
const menu = document.querySelector('[data-menu]');
if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
}

// Header shadow on scroll
const header = document.querySelector('[data-header]');
if (header) {
  const onScroll = () => {
    if (window.scrollY > 8) header.classList.add('shadow-sm');
    else header.classList.remove('shadow-sm');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}