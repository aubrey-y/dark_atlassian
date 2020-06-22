let hexDigits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\s*\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if(!rgb) return '#000000';
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

document.body.style.backgroundColor = '#172b4d';

let elems = ["header", "div"];
console.log(elems);
$(function() {
    for(let i = 0; i < elems.length; i++) {
        $(elems[i]).each(function () {
            let $this = $(this);
            if(rgb2hex($this.css('background-color')) === '#ffffff') {
                $this.css('background-color', '#172b4d');
            }
        });
    }
});

$("li").each(function () {
    let $this = $(this);
    if($this.className === "ghx-column" && rgb2hex($this.css('background-color')) === '#ffffff') {
        $this.css('background-color', '#172b4d');
    }
})

let menus = document.querySelectorAll("span.css-t5emrf");
for(let i = 0; i < menus.length; i++) {
    try {
        menus[i].style.color = "white";
    }
    catch (e) {
        console.log("Couldn't modify " + menus[i]);
    }
}

// TODO button hover transitions
// let menuButtons = document.querySelectorAll("button.css-17jvs9k");
// for(let i = 0; i < menuButtons.length; i++) {
//     try {
//         menuButtons[i].style.transition = "background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;"
//     }
// }

let stories = document.querySelectorAll("section.ghx-summary");
console.log(stories);
for(let i = 0; i < stories.length; i++) {
    try {
        console.log(stories[i])
        stories[i].style.color = "white";
    }
    catch (e) {
        console.log("Couldn't modify " + stories[i]);
    }
}

document.querySelector("span.subnavigator-title").style.color = "white";
let mid_buttons = document.querySelectorAll("button.css-1b1powe");
for(let i = 0; i < mid_buttons.length; i++) {
    try {
        mid_buttons[i].style.background = "#172b4d";
    }
    catch (e) {
        console.log("Couldn't modify " + mid_buttons[i]);
    }
}
