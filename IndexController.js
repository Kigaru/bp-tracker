
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
            <div id="calcresult">
                <br>
                <p>--when at tier ${tier}--</p>
                <p>XP left:</p>
                <p>bp % completion:</p>
                <br>
                <p>srGames:</p>
                <p>srMinutes:</p>
                <p>srHours:</p>
                <br>
                <p>uGames:</p>
                <p>uMinutes:</p>
                <p>uHours:</p>
                <p>unrated rounds won:</p>
                <p>unrated rounds lost:</p>
                <br>
                <p>weekly challenges:</p>
                <p>daily challenges:</p>
            </div>
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
    try {
        value = parseInt(value);
    } catch (error) {
        value = 2
    }
    tier = value < 2 || value > 50 ? 2 : value;
    let targetReward = 50;
    let spikeRushMins = 7;
    let unratedMins = 38;
    let unratedXP = 4000;

    //DO NOT MODIFY
    let bpxp = 1372000;
    let total = 0;
    let start = (tier + 2);
    let end = (targetReward + 2);
    let downtime = 1.666;
    let spikeRushXP = 1000; //always 1k xp DO NOT CHANGE

    for (let i = start; i < end + 1; i++) {
        total += (i * 1000);
    }
    let srGames = (total / spikeRushXP);
    let srMinutes = (spikeRushMins + downtime) * (total / spikeRushXP);
    let srHours = (srMinutes / 60);
    let uGames = (total / unratedXP);
    let uMinutes = (unratedMins + downtime) * (total / unratedXP);
    let uHours = (uMinutes / 60);
    document.getElementById("calcresult").innerHTML =
        `
            <br>
            <p>--when at tier ${tier}--</p>
            <p>XP left: ${total}</p>
            <p>bp % completion: ${Math.floor(((bpxp - total) / bpxp) * 10000) / 100}</p>
            <br>
            <p>srGames: ${srGames}</p>
            <p>srMinutes: ${srMinutes}</p>
            <p>srHours: ${srHours}</p>
            <br>
            <p>uGames: ${uGames}</p>
            <p>uMinutes: ${uMinutes}</p>
            <p>uHours: ${uHours}</p>
            <p>unrated rounds won: ${(total / 300)}</p>
            <p>unrated rounds lost: ${(total / 100)}</p>
            <br>
            <p>weekly challenges: ${(total / 12000)}</p>
            <p>daily challenges: ${(total / 2000)}</p>
    `
}

window.onload = CreateIntro;