/* This runs after a web page loads */

// CONFIGURATIONS

// any websites in this list will receive the mindfulness effect
const websiteList = [
    "www.4chan.org",
    "www.9gag.com",
    "www.facebook.com",
    "www.instagram.com",
    "www.linkedin.com",
    "www.myspace.com",
    "www.reddit.com",
    "www.snapchat.com",
    "www.tumblr.com",
    "www.twitter.com",
    "www.tiktok.com",
    "www.youtube.com",
    "www.pinterest.com",
];

// FUNCTION DEFINITIONS AND HELPERS

function currentWebsiteInList(websiteList) {
    // get the current website's URL
    let currentUrl = window.location.hostname;

    // if URL doesn't include subdomain "www", add it
    if (currentUrl.indexOf("www.") === -1) {
        currentUrl = "www." + currentUrl
    };
    
    // loop through the list of websites and check if the current website's URL matches any of them
    for (let i = 0; i < websiteList.length; i++) {
        if (currentUrl === websiteList[i]) {
            return true;
        }
    }
    return false;
};

function enableOverlay() {
    // create the overlay parent element
    let overlayElement = document.createElement("div");
    overlayElement.id = "mindfulnessOverlay";

    // insert mindfulness message
    overlayElement.innerHTML = `
        <div id="message">
            <p>Take a deep breath.</p>
            <br>
            <q>“The present moment is filled with joy and happiness. If you are attentive, you will see it.”
            ― Thich Nhat Hanh</q> 
        </div>
    `;

    document.body.appendChild(overlayElement)
};

function disableOverlay() {
    document.getElementById("mindfulnessOverlay").style.display = "none";
};

// MAIN

if (currentWebsiteInList(websiteList)) {
    enableOverlay();
    setTimeout(function() {
        disableOverlay()
    }, 1000 * 5);
};