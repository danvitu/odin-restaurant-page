const contactsPage = () => {
  const content = document.querySelector('#content');

  const h1 = document.createElement('h1');
  h1.textContent = 'Our contacts';
  content.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = 'Kuznetsovo village';
  content.appendChild(p);
}

export { contactsPage };