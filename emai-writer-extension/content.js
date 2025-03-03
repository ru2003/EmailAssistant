console.log("Email Writer Extension - Content Script Loaded");


function createAIButton() {
    const button = document.createElement('div');
    button.className = 'T-I J-J5-Ji aoO v7 T-I-atl L3';
    button.style.marginRight = '8px';
    button.innerHTML = 'AI Reply';
    button.setAttribute('data-tooltip' , 'Generate AI Reply');
    return button;
}


function findComposeToolbar() {
    const selectors = [
        '.btC',
        '.IZ',
        '[role="toolbar',
        '.gU.Up'
    ];
    for (const selector of selectors) {
        const toolbar = document.querySelector(selector);
        if (toolbar) {
            return toolbar;
        }
        return null;
    }
}




function injectButton() {
    const existingButton = document.querySelector('.ai-reply-button');
    if (existingButton) existingButton.remove();


    const toolbar = findComposeToolbar();
    if (!toolbar) {
        console.log("Toolbar not found");
        return;
    }

    console.log("Toolbar found , creating AI button");
    const button = createAIButton();
    button.classList.add('ai-reply-button');

    button.addEventListener('click' , async () => {
           try{
            button.innerHTML = 'Generating...';
            button.disabled = true;

            const emailContent = getEmailContent();
           }


    });

    toolbar.insertBefore(button, toolbar.firstChild);
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
