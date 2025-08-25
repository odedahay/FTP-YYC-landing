// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

if(menuBtn && menu){
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
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