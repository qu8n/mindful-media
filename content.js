/* This runs after a web page loads */

// TODO: format the message to look pretty
// TODO: move variables/appropriate functions to the config section, then ensure that it works in Arc
// TODO: credit https://one-sec.app/
// TODO: add opacity to the countdown text
// TODO: add a breathing circle effect https://vmar76.medium.com/using-css-animations-to-visualize-breathing-techniques-7a20ee0aed5a

// CONFIGURATIONS

let pauseTime = 10; // in seconds

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
    overlayElement.id = "overlayElement";

    // insert mindfulness message
    overlayElement.innerHTML = `
        <div id="overlayContent" style="color: var(--arc-palette-title)">
            <p>Take a deep breath.</p>
            <p>The present moment is filled with joy and happiness. If you are attentive, you will see it.”
            ― Thich Nhat Hanh</p> 
            <p id="countdown" style="opacity: 0.3"></p>
        </div>
    `;

    document.body.appendChild(overlayElement)
};


pauseTime *= 1000;
var timeleft = pauseTime;
let downloadTimer = setInterval(function(){
    if(timeleft < 0) {
        clearInterval(downloadTimer);
        document.getElementById("overlayElement").style.display = "none";
    } else {
        document.getElementById("countdown").innerHTML = "You can resume in " + timeleft/1000 + ".";
    }
    timeleft -= 1000;
}, 1000);
 


// MAIN

if (currentWebsiteInList(websiteList)) {
    enableOverlay();
};