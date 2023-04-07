console.log("JS File is working..");

function makeSound(key) {
    var path = 'sounds/'+key+'.mp3';
    var audio = new Audio(path);
    audio.play();
}
for(var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    var num = i;
    document.querySelectorAll(".drum")[i].addEventListener("click" , function (num) {
        var btn = num.target.innerHTML;
        makeSound(btn);
    });
}

window.addEventListener("keypress" , function (event) {
    if(event.key === 'a' || event.key === 'd' || event.key === 'j' || event.key === 'k' || event.key === 's' || event.key === 'l' || event.key === 'w') {
    var btn = event.key;
    makeSound(btn);
    }
    else {
        console.log("play other keys to see the magic...");
    }
});

// document.getElementById("status").addEventListener("click", () => {console.log(1);}, true);
// document.getElementById("status").addEventListener("click", () => {console.log(2);}, false);