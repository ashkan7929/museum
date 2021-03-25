let mouseCursor = document.querySelector(".cursor")
let link = document.querySelectorAll('a')

window.addEventListener("mousemove", cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

link.forEach(link => {
    link.addEventListener('mousemove', () => {
        mouseCursor.classList.add("linked")
    })
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("linked")
    })
});
window.addEventListener("DOMContentLoaded", () => {
    
    const spotlight = document.querySelector('.spotlight');
    
    let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 300px)';
    
    window.addEventListener('mousemove', e => updateSpotlight(e));
    
    window.addEventListener('mousedown', e => {
        
        spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';
        
        updateSpotlight(e);
        
    });
    
    window.addEventListener('mouseup', e => {
        
        spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';
        
        updateSpotlight(e);
        
    });
    
    function updateSpotlight(e) {
        
        spotlight.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / window.innerHeight * 100}%, ${spotlightSize}`;
        
    }
});