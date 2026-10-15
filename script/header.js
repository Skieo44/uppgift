const header = document.querySelector("#header");
const footer = document.querySelector("#footer");

window.addEventListener("load", function(){
   

    if(window.screen.width > 300){
         header.innerHTML = `
           <nav class="nav">
            <a id="logo" href="../schedule/index.html">FormulaTracker</a>
            <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <div class="nav-links" id="nav-links">
                <a class="nav-link" href="../schedule/index.html">Schedule</a>
                <a class="nav-link" href="../standings/drivers.html">Standings</a>
            </div>
        </nav>
    `
    }else{
        header.innerHTML = ` 
        <nav class="nav">
            <a id="short-logo" href="../schedule/index.html">FT</a>
            <button class="menu-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <div class="nav-links" id="nav-links">
                <a class="nav-link" href="../schedule/index.html">Schedule</a>
                <a class="nav-link" href="../standings/drivers.html">Standings</a>
            </div>
        </nav>
        `

    }
   

  if (footer) {
    footer.innerHTML = 
    `<div class="footer-bar">
          <p>FormulaTracker &copy; 2026</p>
    </div>`;
}
});

document.addEventListener("click", (e) => {
    const toggle = e.target.closest(".menu-toggle");
    if (!toggle) return;

    const links = document.querySelector("#nav-links");
    const isOpen = links.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
});