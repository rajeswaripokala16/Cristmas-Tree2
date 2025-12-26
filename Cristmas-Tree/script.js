const treeContainer = document.getElementById('tree-ribbon');
const totalLights = 500;
const spirals = 12; // How many times it wraps around

for (let i = 0; i < totalLights; i++) {
    const light = document.createElement('div');
    light.className = 'light-node';

    // Math for the ribbon shape
    const progress = i / totalLights;
    const angle = progress * Math.PI * 2 * spirals;
    
    // Cone shape math
    const y = progress * 400 - 200; // Move from top to bottom
    const radius = progress * 150;  // Get wider at the bottom
    
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;

    // "Different" Color Logic: HSL Spectrum
    // This creates a rainbow gradient as the ribbon winds down
    const hue = (progress * 360); 
    const color = `hsl(${hue}, 80%, 60%)`;

    light.style.backgroundColor = color;
    light.style.color = color; // For the box-shadow
    light.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    
    // Staggered pulsing animation
    light.style.animation = `pulse ${1 + Math.random()}s infinite ease-in-out`;
    light.style.animationDelay = `${progress * 5}s`;

    treeContainer.appendChild(light);
}

// Add a "Star" at the very top (progress 0)
const star = document.createElement('div');
star.innerHTML = '★';
star.style.position = 'absolute';
star.style.transform = 'translate3d(0, -230px, 0)';
star.style.fontSize = '30px';
star.style.color = '#fff';
star.style.textShadow = '0 0 20px gold';
treeContainer.appendChild(star);