console.log("Email Writer Extension - Content Script Loaded");

// Define the injectButton function if it's not already defined
function injectButton() {
    
}


const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes); // Fixed typo
        
        const hasComposeElements = addedNodes.some(node =>
            node.nodeType === Node.ELEMENT_NODE && 
            (node.matches('.IZ, .btC, [role="dialog"]') || node.querySelector('.IZ, .btC, [role="dialog"]'))
        );
        

        if (hasComposeElements) { // Fixed variable name
            console.log("Compose Window Detected");
            setTimeout(injectButton, 500); // Ensure injectButton is defined
        }
    }
});

observer.observe(document.body, { // Fixed typo
    childList: true,
    subtree: true
});
