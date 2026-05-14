// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

if(menuBtn && menu){
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('hidden');
  });
}

const dropdowns = Array.from(document.querySelectorAll('[data-dropdown]'));

const closeDropdowns = (except) => {
  dropdowns.forEach((dropdown) => {
    if (dropdown === except) return;
    dropdown.classList.remove('is-open');
    const trigger = dropdown.querySelector('.nav-dropdown-trigger');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  });
};

dropdowns.forEach((dropdown) => {
  const trigger = dropdown.querySelector('.nav-dropdown-trigger');
  if (!trigger) return;

  trigger.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle('is-open');
    trigger.setAttribute('aria-expanded', String(isOpen));
    closeDropdowns(dropdown);
  });

  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      dropdown.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
      trigger.focus();
    }
  });
});

document.addEventListener('click', () => closeDropdowns());

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeDropdowns();
});


// Header shadow on scroll
const header = document.querySelector('[data-header]');
if (header) {
  const onScroll = () => {
    if (window.scrollY > 8) {
      header.classList.add('shadow-sm', 'is-scrolled');
    } else {
      header.classList.remove('shadow-sm', 'is-scrolled');
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Event list filters
const eventTabs = Array.from(document.querySelectorAll('[data-event-filter]'));
const eventSearch = document.querySelector('[data-event-search]');
const eventCards = Array.from(document.querySelectorAll('[data-event-card]'));

if (eventTabs.length && eventCards.length) {
  let activeFilter = 'all';

  const activeClasses = ['bg-[#2b73b4]', 'text-white'];
  const inactiveClasses = ['bg-[#f3f3f5]', 'text-[#333333]', 'transition-colors', 'duration-200', 'hover:bg-[#e9e9ec]'];

  const setTabState = () => {
    eventTabs.forEach((tab) => {
      const isActive = tab.dataset.eventFilter === activeFilter;
      tab.setAttribute('aria-pressed', String(isActive));
      tab.classList.toggle(activeClasses[0], isActive);
      tab.classList.toggle(activeClasses[1], isActive);
      inactiveClasses.forEach((className) => tab.classList.toggle(className, !isActive));
    });
  };

  const applyEventFilters = () => {
    const query = eventSearch ? eventSearch.value.trim().toLowerCase() : '';

    eventCards.forEach((card) => {
      const categories = (card.dataset.eventCategory || '').split(/\s+/);
      const matchesCategory = activeFilter === 'all' || categories.includes(activeFilter);
      const matchesSearch = !query || card.textContent.toLowerCase().includes(query);
      card.classList.toggle('hidden', !(matchesCategory && matchesSearch));
    });
  };

  eventTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      activeFilter = tab.dataset.eventFilter || 'all';
      setTabState();
      applyEventFilters();
    });
  });

  if (eventSearch) {
    eventSearch.addEventListener('input', applyEventFilters);
  }
}
