// Event listeners
// addEventListener()
// document , window , element  (html tags)
// element.addEventListener(event, action , useCapture (boolean) )
// events: keydown, keyup, keypress, click, dblclick, resize, 
// action: function that we have to call, when event occurs.
//         3) null, function , object
// useCapture: any event has two phase, 1. true = Capture phase, 2. false = Bubbling Phase
// button click: action -> click -> (capture)
// button click: click -> action -> (bubbling)
// named func, anon func, arrow,
// object = { handleEvent() }

// Multiple event listeners.

document.addEventListener("DOMContentLoaded" , function () {console.log("Document Loaded")});
// document.body.addEventListener("load" , function () {console.log("Body Loaded")});

document.getElementById("status").addEventListener("click", function() {console.log("capture")} , true);
document.getElementById("status").addEventListener("click", function() {console.log("bubble")} , false);

document.getElementById("status").addEventListener("dblclick", function() {console.log("P tag double clicked")});

document.getElementById("status").addEventListener("mouseover", function() {
    document.getElementById("status").style.color = "red";
});
document.getElementById("status").addEventListener("mouseout", function() {
    document.getElementById("status").style.color = "blue";
});

function makeSound(key) {
    var path = 'sounds/'+key+'.mp3'; 
    console.log(path);
    var audio = new Audio(path);
    audio.play();
}

// var drums = document.getElementsByClassName("drum");
for (let i = 0; i < document.getElementsByClassName("drum").length; i++) {
    document.getElementsByClassName("drum")[i].addEventListener("click", (event)=> {
        console.log(event.target.innerHTML);
        makeSound(event.target.innerHTML);
    });
}

window.addEventListener("keypress", (event) => {
    console.log(event.key);
    if(event.key === 'w' || event.key === 's' || event.key === 'a' ||event.key === 'd' ||event.key === 'j' ||event.key === 'k' ||event.key === 'l' ) {
        makeSound(event.key);
    } else {
        console.log("Press w / s / a / d / j / k / l");
    }
})