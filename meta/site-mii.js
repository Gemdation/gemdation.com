document.addEventListener("DOMContentLoaded", () => {
    const miiImg = document.querySelector('a img#mii');
    const miiLink = miiImg.closest('a');
    
    const hoverImages = [
        'media/mii/mii-angry.png',
        'media/mii/mii-blink.png',
        'media/mii/mii-default.png',
        'media/mii/mii-sad.png',
        'media/mii/mii-shock.png',
        'media/mii/mii-smile.png',
        'media/mii/mii-surprise.png',
        'media/mii/mii-wink.png',
        'media/mii/mii-yawn.png'
    ];
    
    let isClicked = false;

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * hoverImages.length);
        return hoverImages[randomIndex];
    }

    miiImg.addEventListener('mouseenter', () => {
        if (isClicked) return;
        miiImg.src = getRandomImage();
    });

    miiLink.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        if (isClicked) return; 
        isClicked = true;
        
        miiImg.src = 'media/mii/mii-fustrate.png';
        
        miiImg.classList.add('active');
        miiLink.classList.add('active');
        
        const targetUrl = miiLink.href;

        setTimeout(() => {
            window.location.href = targetUrl;
        }, 150); 
    });
});