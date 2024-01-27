const menuPage = () => {
  const content = document.querySelector('#content');

  const h1 = document.createElement('h1');
  h1.textContent = 'Our menu';
  content.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = 'Chicken wings';
  content.appendChild(p);
}

export { menuPage };