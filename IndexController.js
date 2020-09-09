
let tier;


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
            CreateValorantBP();
            break;

        default:
            break;
    }
}

function CreateValorantBP() {
    document.getElementById("main-body").innerHTML =
        `
    <div class="bp-calculator">
            <p class="lefty">Tier currently at</p><input oninput="Calculate(value)" class="righty">
            <br>
            <p>--when at tier ${tier}--</p>
            <p>XP left: total</p>
            <p>bp % completion: Math.floor(((bpxp-total)/bpxp)*10000)/100</p>
            <br>
            <p>srGames: srGames</p>
            <p>srMinutes: srMinutes</p>
            <p>srHours: srHours</p>
            <br>
            <p>uGames: uGames</p>
            <p>uMinutes: uMinutes</p>
            <p>uHours: uHours</p>
            <p>unrated rounds won: (total/300))</p>
            <p>unrated rounds lost: (total/100))</p>
            <br>
            <p>weekly challenges: (total / 12000))</p>
            <p>daily challenges: (total / 2000))</p>
    </div>
    `
}

function CreateIntro() {
    document.getElementById("main-body").innerHTML =
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

function Calculate(value) {
    tier = value;
}

window.onload = CreateIntro;