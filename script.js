// Array of fun facts
const facts = [
    "I love hiking and have traveled to five national parks.",
    "I am an avid reader and read around 20 books per year.",
    "I once baked a 3-tiered cake for a family gathering!",
    "I speak three languages fluently.",
    "I’m learning to play the guitar in my free time."
];


// Get DOM elements
const factDisplay = document.getElementById('fact-display');
const generateBtn = document.getElementById('generate-btn');

// Keep track of previously shown fact
let previousFactIndex = -1;

// Function to generate random fact
function generateFact() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * facts.length);
    } while (randomIndex === previousFactIndex && facts.length > 1);
    
    previousFactIndex = randomIndex;
    
    // Remove existing fade class
    factDisplay.classList.remove('fade');
    
    // Trigger reflow
    void factDisplay.offsetWidth;
    
    // Add fade class and update text
    factDisplay.classList.add('fade');
    factDisplay.textContent = facts[randomIndex];
}

// Event listener for button click with debounce
let isAnimating = false;
generateBtn.addEventListener('click', () => {
    if (!isAnimating) {
        isAnimating = true;
        generateFact();
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
});
// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        themeToggle.checked = true;
    }
}

// Theme toggle event listener
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Generate initial fact when page loads
window.addEventListener('load', generateFact);

