/* This runs after a web page loads */

// SETTINGS

var pauseTime = 10; // in seconds

var mindfulnessMessage = "Inhale. Exhale. Repeat.";

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
    var overlayElement = document.createElement("div");
    overlayElement.id = "overlayElement";
    document.body.appendChild(overlayElement);
    
    overlayElement.innerHTML += `
    <div class="breathingContainer">
        <div class="breathingBox"></div>
    </div>
    `;

    // insert mindfulness message
    overlayElement.innerHTML += `
        <p id="paddingHelper"></p>
        <p id="mainMessage">${mindfulnessMessage}</p>
    `;
    
    startCountdownTimer();
    
};

function startCountdownTimer() {
    overlayElement.innerHTML += `<p id="countdownMessage""></p>`
    let timeleft = pauseTime * 1000;
    let countdownTimer = setInterval(function(){
        if(timeleft < 0) {
            clearInterval(countdownTimer);
            timeOver();
        } else {
            document.getElementById("countdownMessage").innerHTML = "Resuming in " + timeleft/1000;
        }
        timeleft -= 1000;
    }, 1000);
}
 
function timeOver() {
    document.getElementById("countdownMessage").style.display = "none";

    let closeButton = document.createElement("button");
    closeButton.id = "closeButton";
    closeButton.innerHTML = "Close this tab";
    closeButton.addEventListener("click", function() {
        window.close()
    });

    let continueButton = document.createElement("button");
    continueButton.innerHTML = "Continue to website";
    continueButton.id = "continueButton";
    continueButton.addEventListener("click", function() {
        document.getElementById("overlayElement").style.display = "none";
    });

    let p = document.createElement("p");
    overlayElement.append(closeButton, p, continueButton);
};

// MAIN

if (currentWebsiteInList(websiteList)) {
    enableOverlay();
};
