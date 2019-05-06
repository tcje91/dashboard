function handleLayoutChange() {
  const main = document.getElementById('main');
  const layout = document.querySelector('input[name="layout"]:checked').value;
  if (layout === 'table') {
    main.classList.add('table');
  } else if (layout === 'cards') {
    main.classList.remove('table');
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    const main = document.getElementById('main');
    main.classList.remove('table');
    document.getElementById('cards').checked = true;
  }
});
