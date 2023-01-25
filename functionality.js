var n = Math.floor(Math.random() * 101);
var life = 7;
function result() {
    document.querySelector("body").classList.add("newBody")
    const node = document.createElement("button");
    node.setAttribute("onclick", "location.reload()");
    node.innerHTML = "Main Menu";
    document.querySelector("body").appendChild(node);
}
function checkNum() {
    var x = document.getElementById("num").value;
    life--;
    document.getElementById("life").innerHTML = "❤️ X " + life;
    if (life === 0) {
        document.querySelector("body").style.backgroundColor = "rgb(244, 146, 111)"
        document.querySelector("body").innerHTML = "<h2>😪 Losser number is <h1>" + n + "<br><br> ";
        result();
    }
    if (x < '0') {
        document.getElementById("demo").innerHTML = "please enter no.";
    }
    else if (x > n) {
        document.getElementById("demo").innerHTML = "Hidden Number is Lesser than " + x;
    }
    else if (x < n) {
        document.getElementById("demo").innerHTML = "Hidden Number is Greater than " + x;
        x = null;
    }
    else {
        document.querySelector("body").style.backgroundColor = "rgb(182, 139, 123)";
        document.querySelector("body").innerHTML = "<h1> YOU WON 😊✨</h1><br><br>";
        result();
    }
    document.getElementById("num").value = null;
}
function startGame() {
    document.querySelector("body").style.backgroundColor = " rgb(244, 169, 71)"
    const element = document.getElementById("box1");
    element.remove();
    
    document.getElementById("box2").style.visibility = "inherit";
}
function show(params) {
    document.querySelector("body").style.backgroundColor = "rgb(244, 146, 111)"
    document.querySelector("body").innerHTML = "<h2>😪Losser number is <h1>" + n + "<br><br> ";
    result();
}
