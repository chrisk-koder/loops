// isCondition boolean
const isCondition = true;

// The beautiful smileys
const smileys = ['😀', '😄', '😁', '😆'];

// Get the container class
const getContainer = document.querySelector(".smileys");

// The condition, if it's true, run the loop
if (isCondition) {

    // Loop through the smileys and create an element for each
    for (let i = 0; i < smileys.length; i++) {
        
        // Create the paragraph element
        const element = document.createElement("p");
        // Set the content to the smiley
        element.textContent = smileys[i];
        // Append it to the container
        getContainer.appendChild(element);
        
        // Event listener for click so script knows when the user has clicked element
        element.addEventListener('click', function() {
            copyToClipboard(smileys[i]);
        });
        
    }
} else {
    // A little extra thing if the condition is false, display text instead
    const error = document.createElement("p");
    error.textContent = "No smileys :(";
    getContainer.appendChild(error);
}

// Copy to clipboard function
function copyToClipboard(smiley) {

    // Copy to clipboard using Clipboard API
    navigator.clipboard.writeText(smiley)
        .then(() => {
            console.log("Copied: " + smiley)
            copiedText(smiley);
        })
        .catch(err => {
            console.log("Failed to copy text", err)
        });

}

// Copied text function (Will make text appear on the website saying copied)
function copiedText(smiley) {

    // Create the copied text element
    const copied = document.createElement("h2");
    copied.textContent = "Copied text: " + smiley;
    getContainer.appendChild(copied);

    // Remove the text element after 2 seconds
    setTimeout(function() {
        getContainer.removeChild(copied);
    }, 2000);

}