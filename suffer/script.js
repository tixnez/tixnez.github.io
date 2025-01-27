const tournamentContainer = document.querySelector('.tournament-container');
let isDragging = false;
let startX, startY, scrollLeft, scrollTop;


tournamentContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - tournamentContainer.offsetLeft;
    startY = e.pageY - tournamentContainer.offsetTop;
    scrollLeft = tournamentContainer.scrollLeft;
    scrollTop = tournamentContainer.scrollTop;
    tournamentContainer.style.cursor = 'grabbing'; 
});

tournamentContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return; 
    e.preventDefault();
    const x = e.pageX - tournamentContainer.offsetLeft;
    const y = e.pageY - tournamentContainer.offsetTop;
    const walkX = (x - startX) * 1; 
    const walkY = (y - startY) * 1; 
    tournamentContainer.scrollLeft = scrollLeft - walkX;
    tournamentContainer.scrollTop = scrollTop - walkY;
});

tournamentContainer.addEventListener('mouseup', () => {
    isDragging = false;
    tournamentContainer.style.cursor = 'grab'; 
});

tournamentContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    tournamentContainer.style.cursor = 'grab'; 
});


