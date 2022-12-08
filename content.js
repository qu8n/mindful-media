/* This runs after a web page loads */

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
    const currentUrl = window.location.hostname;
    
    // loop through the list of websites and check if the current website's URL matches any of them
    for (let i = 0; i < websiteList.length; i++) {
        if (currentUrl === websiteList[i]) {
            return true;
        }
    }
    return false;
};

if (ifCurrentWebsiteInList(websiteList)) {
    document.querySelector("body").innerHTML = "";
};



