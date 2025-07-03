function initHeaderHero() {
  const hamburger = document.querySelector('button.md\\:hidden');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  // Remove previous listeners if any (by cloning)
  const newHamburger = hamburger.cloneNode(true);
  hamburger.parentNode.replaceChild(newHamburger, hamburger);

  newHamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = mobileMenu.classList.toggle('hidden');
    newHamburger.setAttribute('aria-expanded', !isOpen);
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(e.target) && !newHamburger.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      newHamburger.setAttribute('aria-expanded', 'false');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      mobileMenu.classList.add('hidden');
      newHamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initHeaderHero();
});

// Features Tabs global logic
window.showTab = function(idx) {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabBtns.forEach((btn, i) => btn.classList.toggle('active', i === idx));
  tabContents.forEach((tab, i) => tab.classList.toggle('active', i === idx));
};

// Auto-activate first tab if present after dynamic load
function activateFirstTabIfPresent() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  if (tabBtns.length) window.showTab(0);
}

// Run after each dynamic load
const previewArea = document.getElementById('preview-area');
if (previewArea) {
  const observer = new MutationObserver(() => {
    activateFirstTabIfPresent();
  });
  observer.observe(previewArea, { childList: true, subtree: true });
} 