let scaleFactor = 1; 
const tournament = document.querySelector('.tournament');


window.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault(); 

        if (event.deltaY < 0) {
            scaleFactor += 0.1; 
        } else {
            scaleFactor -= 0.1; 
        }

        scaleFactor = Math.max(0.5, Math.min(scaleFactor, 2)); 
        tournament.style.transform = `scale(${scaleFactor})`; 
    }
});

// Mobil
let startDistance = 0;
let initialScale = scaleFactor;

window.addEventListener('touchstart', function(event) {
    if (event.touches.length === 2) { 
        startDistance = getDistance(event.touches[0], event.touches[1]);
        initialScale = scaleFactor;
    }
});

window.addEventListener('touchmove', function(event) {
    if (event.touches.length === 2) { 
        event.preventDefault(); 

        const currentDistance = getDistance(event.touches[0], event.touches[1]);
        const scaleChange = (currentDistance - startDistance) / 200; 

        scaleFactor = initialScale + scaleChange; 
        scaleFactor = Math.max(0.5, Math.min(scaleFactor, 2)); 
        tournament.style.transform = `scale(${scaleFactor})`; 
    }
});

function getDistance(touch1, touch2) {
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
}


const zoomInBtn = document.getElementById('zoomIn');
const zoomOutBtn = document.getElementById('zoomOut');
const resetZoomBtn = document.getElementById('resetZoom');


zoomInBtn.addEventListener('click', function() {
    scaleFactor += 0.1; 
    scaleFactor = Math.min(scaleFactor, 2); 
    tournament.style.transform = `scale(${scaleFactor})`; 
});


zoomOutBtn.addEventListener('click', function() {
    scaleFactor -= 0.1; 
    scaleFactor = Math.max(scaleFactor, 0.3); 
    tournament.style.transform = `scale(${scaleFactor})`; 
});


resetZoomBtn.addEventListener('click', function() {
    scaleFactor = 1; 
    tournament.style.transform = `scale(${scaleFactor})`; 
});
