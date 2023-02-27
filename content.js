/* This runs after a web page loads */

// TO CONTRIBUTE/GET LATEST FIXES, GO TO https://github.com/quandollar/arc-boost-mindful-media

// SETTINGS -------------------------
// Tweak the following to fit your preferences

var pauseTime = 10; // in seconds

var mainMessage = "Take deep breaths.";

const websiteList = [
    "www.facebook.com",
    "www.reddit.com",
    "www.snapchat.com",
    "www.tumblr.com",
    "www.twitter.com",
    "www.tiktok.com",
    "www.youtube.com",
    "www.pinterest.com",
    "www.9gag.com",
    "www.netflix.com",
    "www.ebay.com",
    "www.amazon.com",
    "www.depop.com"
];

// FUNCTION DEFINITIONS AND HELPERS -------------------------

var bodyStyleDisplay = window.getComputedStyle(document.body, null).getPropertyValue('display');

function currentWebsiteInList(websiteList) {
    var currentUrl = window.location.hostname;

    // If URL doesn't include subdomain "www", add it
    if (currentUrl.indexOf("www.") === -1) {
        currentUrl = "www." + currentUrl
    };

    for (let i = 0; i < websiteList.length; i++) {
        if (currentUrl === websiteList[i]) {
            return true;
        }
    }
    return false;
};

function enableOverlay() {
    var overlayElement = document.createElement("div");

    document.body.style.display = "none";

    overlayElement.id = "overlayElement";

    document.documentElement.appendChild(overlayElement);

    // Breathing animation
    overlayElement.innerHTML += `
    <div class="breathingContainer">
        <div class="breathingBox"></div>
    </div>
    `;

    overlayElement.innerHTML += `
        <p class="paddingHelper"></p>
        <p class="mainMessage">${mainMessage}</p>
    `;

    startCountdownTimer();

};

function startCountdownTimer() {
    overlayElement.innerHTML += `<p id="countdownMessage""></p>`

    let timeleft = pauseTime * 1000; // * 1000 to convert from milliseconds to seconds

    let countdownTimer = setInterval(function(){
        if(timeleft < 0) {
            clearInterval(countdownTimer);
            timeOver();
        } else {
            document.getElementById("countdownMessage").innerHTML = "Resuming in " + timeleft/1000;
        }
        timeleft -= 1000;
    }, 1000);
};

function timeOver() {
    document.body.style.display = bodyStyleDisplay;
    document.getElementById("countdownMessage").style.display = "none";

    // Create and set up the "close tab" button
    let closeButton = document.createElement("button");
    closeButton.id = "closeButton";
    closeButton.innerHTML = "Close this tab";
    closeButton.addEventListener("click", function() {
        window.close()
    });

    // Create and set up the "continue" button
    let hostname = window.location.hostname.replace("www.", "");
    let domainName = hostname.split('.')[0];
    domainName = domainName.charAt(0).toUpperCase() + domainName.slice(1);

    let continueButton = document.createElement("button");
    continueButton.innerHTML = `Continue to ${domainName}`;
    continueButton.id = "continueButton";
    continueButton.addEventListener("click", function() {
        document.getElementById("overlayElement").style.display = "none";
    });

    // To add newline between buttons
    let p = document.createElement("p");

    overlayElement.append(closeButton, p, continueButton);
};

// MAIN -------------------------

if (currentWebsiteInList(websiteList)) {
    enableOverlay();
};
