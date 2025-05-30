const quotes = [
  "Tonight, PinkPanthress",
  "OFF+ON, veggi feat. Ella Rosa",
  "Crazy Stupid Love, Emei",
  "fasho fashizzy, lil hero",
  "It's Not Over, Daughtry",
  "Glad You Came, We Came As Romans",
  "Glad You Came, The Living Tombstone"
]; // will add more later

const link = document.getElementById('title-click');
const container = document.getElementById('theP');
const quoteSpan = document.getElementById('songName');

let lastIndex = -1;

link.addEventListener('click', function(e) {
  e.preventDefault();

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastIndex && quotes.length > 1);

  lastIndex = randomIndex;
  quoteSpan.textContent = quotes[randomIndex];

  if (container.style.display === 'none') {
    container.style.display = 'block';
  }
});
