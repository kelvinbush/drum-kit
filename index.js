let noOfDrumButtons = document.querySelectorAll(".drum").length
for (let i = 0; i < noOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        getPressedKey(this.innerHTML);
    })
}

document.addEventListener("keydown", function (event) {
    getPressedKey(event.key);
})

function getPressedKey(key) {
    switch (key) {
        case 'w':
            new Audio("sounds/tom-1.mp3").play();
            break;
        case 'a':
            new Audio("sounds/tom-2.mp3").play();
            break;
        case 's':
            new Audio("sounds/tom-3.mp3").play();
            break;
        case 'd':
            new Audio("sounds/tom-4.mp3").play();
            break;
        case 'j':
            new Audio("sounds/snare.mp3").play();
            break;
        case 'k':
            new Audio("sounds/crash.mp3").play();
            break;
        case 'l':
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            console.log(key);
            break;
    }
}