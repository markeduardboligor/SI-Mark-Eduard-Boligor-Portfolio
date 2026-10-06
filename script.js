// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
});

// Network diagram: show the node name on hover or tap
const label = document.getElementById('node-label');
document.querySelectorAll('.node').forEach(node => {
  const show = () => {
    document.querySelectorAll('.node.active').forEach(n => n.classList.remove('active'));
    node.classList.add('active');
    label.textContent = node.dataset.label;
  };
  node.addEventListener('mouseenter', show);
  node.addEventListener('click', show);
})