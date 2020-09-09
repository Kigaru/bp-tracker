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

function BPSelect(input)
{
    switch (input) {
        case "valorant":
            document.getElementById("bp-select-container").remove();
            break;
    
        default:
            break;
    }
}

function CreateIntro()
{

}

window.onload = AnimateStart;