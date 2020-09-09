function AnimateStart() {
    var elem = document.getElementById("bp-select");
    var pos = 350;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        } else {
            pos--;
            elem.style.top = pos + "px";
        }
    }
}

function BPSelect(input) {
    switch (input) {
        case "valorant":
            document.getElementById("bp-select-container").remove();
            break;

        default:
            break;
    }
}

function CreateIntro() {
    var mainbody = document.getElementById("main-body");
    mainbody.innerHTML =
        `
    <div id="bp-select-container">
            <div id="bp-select" onclick='BPSelect("valorant")'>
                <img src="assets/valologo.png" alt="valorant logo" id="bp-logo">
                <span class="circle"></span>
            </div>
        </div>
    `;
    AnimateStart();
}

window.onload = CreateIntro;