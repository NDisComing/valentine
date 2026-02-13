function moveButton() {
    const noBtn = document.getElementById('no-btn');
    const container = document.querySelector('.container');
    
    // Get container dimensions
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // Calculate max boundaries relative to the viewport/window to keep it visible but erratic
    // We'll move it to a random fixed position
    const maxX = window.innerWidth - btnRect.width - 20;
    const maxY = window.innerHeight - btnRect.height - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Apply new position
    noBtn.style.position = 'fixed'; // Change to fixed to allow free movement
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function goToYes() {
    window.location.href = "yes.html";
}

// Function to create falling petals for the Yes page
function createPetals() {
    const petalsContainer = document.getElementById('petals-container');
    const petalCount = 30;
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 3 + 4 + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        petalsContainer.appendChild(petal);
    }
}

// Check if we are on the yes page to initialize petals
if (document.getElementById('petals-container')) {
    createPetals();
}
