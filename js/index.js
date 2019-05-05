function handleLayoutChange() {
  const main = document.getElementById('main');
  const value = document.querySelector('input[name="layout"]:checked').value;
  if (value === 'table') {
    main.classList.add('table');
  } else if (value === 'cards') {
    main.classList.remove('table');
  }
}
