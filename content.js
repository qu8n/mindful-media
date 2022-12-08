/* This runs after a web page loads */

/* Brainstorming space:

MVP scope:
- when visiting a page in list, load the custom page with a mindfulness reminder message (eg "take a deep breath...")
- unlock page in 5 minutes. this applies to any website on the list
- then user can access it for 30 minutes. this applies to any website on the list
- script resets

name the extension "minefulness" as a play on word of "mindfulness"

TODO: look at the extension that tracks twitter visits. how is it persisting the visit count?

*/


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

function ifCurrentWebsiteInList(websiteList) {
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

if (ifCurrentWebsiteInList(websiteList)) {
    // replace content of page
    document.querySelector("body").innerHTML = `
        <br><br><br><br><br>
        <p id="message">
            Take a deep breath.
        </p>
    `;

    // set bg color to black
    document.querySelector("body").setAttribute('style', 'background-color: #000000 !important');
};