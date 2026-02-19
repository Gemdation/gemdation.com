const headerData = {
  path: '/meta/',
  files: [
    'header-3dumb.png', 'header-aftershok.png', 'header-asset.png', 'header-barcode.png',
    'header-bloody.png', 'header-borel.png', 'header-bpdots.png', 'header-braille.png',
    'header-cherrycreamsoda.png', 'header-comicsans.png', 'header-dekko.png', 'header-delicious.png',
    'header-droidsans.png', 'header-missfajardose.png', 'header-overload.png', 'header-plasmadrip.png',
    'header-portersans.png', 'header-pressstart.png', 'header-profontwin.png', 'header-ralewaydots.png',
    'header-rampartone.png', 'header-redacted.png', 'header-robotocondense.png', 'header-rubikbeastly.png',
    'header-sarina.png', 'header-sceps3.png', 'header-segoe.png', 'header-sigmarone.png',
    'header-timesnewroman.png', 'header-verdana.png', 'header-walmart.png', 'header-wingdings.png'
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