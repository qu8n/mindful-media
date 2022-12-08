/* This runs after a web page loads */

// get the current page's URL
var currentHref = document.location.href; 

// activates every time the browser loads
window.onload = function() {

    // select the whole DOM body
    var bodyList = document.querySelector("body")

    // initialize a MutationObserver that watches for DOM changes
    var observer = new MutationObserver(function(mutations) {
        // for each individual DOM change
        mutations.forEach(function(mutation) {
            // if the URL changes => replaceHomePage()
            if (currentHref != document.location.href) {
                currentHref = document.location.href;
                replaceHomePage();
            }
        });
    });
    
    var config = {
        childList: true, // => observe the body's children
        subtree: true // => observe the body's descendants
    };
    
    // ask MutationObserver to observe any changes in the DOM body
    observer.observe(bodyList, config);

    replaceHomePage();
};

// special code for the home page
const replaceHomePage = () => {
  
  // add display:block inline CSS to the body
  // (display:block displays element as a block -- some whitespace above and below it; no HTML elements next to it)
  document.querySelector("body").style.cssText = 'display:block !important';
  
  // if URL == home page
  if (window.location.pathname === "/") {

    // replace the body's content with the following:
    document.querySelector("body").innerHTML = `
    <div class="home-container">

      <div id="nav-logo" class="nav-prime-1 nav-progressive-attribute">
        <a href="/ref=nav_logo" id="nav-logo-sprites" class="nav-logo-link nav-progressive-attribute" aria-label="Amazon">
          <span class="nav-sprite nav-logo-base"></span>
          <span id="logo-ext" class="nav-sprite nav-logo-ext nav-progressive-content"></span>
          <span class="nav-logo-locale">.us</span>
        </a>
        <div id="nav-tagline" class="nav-progressive-content">
          <a href="/ref=nav_logo_prime" aria-label="Prime" class="nav-sprite nav-logo-tagline"></a>
        </div>
      </div>

    </div>
    `;

    const input = document.getElementsByClassName("search-input")[0]
    const searchBtn = document.getElementsByClassName("search-btn")[0]

    // event: when user press Enter after typing in search bar, take them to the search & browse page
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
          const inputValue = input.value;
          window.location.href = `https://www.youtube.com/results?search_query=${inputValue}`
        }
    });

    // event: take users to the search & browse page after they click the search button
    searchBtn.addEventListener("click", function(e) {
      const inputValue = input.value;
      window.location.href = `https://www.youtube.com/results?search_query=${inputValue}`
    });
}
}