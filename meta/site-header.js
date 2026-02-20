const headerData = {
  path: '/meta/',
  files: [
    'header-2dumb.svg',
    'header-3dumb.svg',
    'header-aftershok.svg',
    'header-akronim.svg',
    'header-anagram.svg',
    'header-asset.svg',
    'header-barcode.png',
    'header-bloody.svg',
    'header-borel.svg',
    'header-bpdots.svg',
    'header-braille.svg',
    'header-cherrycreamsoda.svg',
    'header-comicsans.svg',
    'header-crackman.svg',
    'header-dekko.svg',
    'header-delicious.svg',
    'header-droidsans.svg',
    'header-google.svg',
    'header-missfajardose.svg',
    'header-mojangles.svg',
    'header-overload.svg',
    'header-plasmadrip.svg',
    'header-playstation.svg',
    'header-pacifico.svg',
    'header-portersans.svg',
    'header-pressstart.svg',
    'header-profontwin.svg',
    'header-ralewaydots.svg',
    'header-rampartone.svg',
    'header-redacted.svg',
    'header-robotocondense.svg',
    'header-rubik.svg',
    'header-sarina.svg',
    'header-scribble.svg',
    'header-segoe.svg',
    'header-sigmarone.svg',
    'header-timesnewroman.svg',
    'header-verdana.svg',
    'header-walmart.svg',
    'header-wingdings.svg'
  ]
};

function setDynamicHeader() {
  const lastHeader = localStorage.getItem('lastHeader');
  let availableHeaders = headerData.files;

  if (lastHeader && availableHeaders.length > 1) {
    availableHeaders = availableHeaders.filter(file => file !== lastHeader);
  }

  const randomFile = availableHeaders[Math.floor(Math.random() * availableHeaders.length)];

  document.getElementById('dynamic-header').src = headerData.path + randomFile;

  localStorage.setItem('lastHeader', randomFile);
}

setDynamicHeader();