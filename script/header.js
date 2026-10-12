const header = document.querySelector("#header");

window.addEventListener("load", function(){

    header.innerHTML = `
         <a id="logo" href="../schedule/index.html">FormulaTracker</a>
        

            <a class="nav-link" href="../schedule/index.html">Schedule</a>
            <a class="nav-link" href="../standings/standings.html">Standings</a>
    `
});