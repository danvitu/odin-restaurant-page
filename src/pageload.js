const mainPage = () => {
  const content = document.querySelector('#content');
  
  const h1 = document.createElement('h1');
  h1.textContent = 'Petuh Grill bar in Kuznetsovo village';
  content.appendChild(h1);

  const img = document.createElement('img');
  img.src = './img/beau-carpenter-jr55i362bMg-unsplash.jpg';
  content.appendChild(img);

  const p = document.createElement('p');
  p.textContent = 'Welcome to our sizzling grill bar, where the aroma of perfectly seared steaks and the sound of crackling flames create an unforgettable dining experience. At our grill bar, we take pride in using only the finest cuts of meat, seasoned to perfection and grilled to your preference. Whether you\'re a fan of juicy burgers, tender ribs, or succulent seafood, our diverse menu offers something to satisfy every craving.'
  content.appendChild(p);
}
export { mainPage };

