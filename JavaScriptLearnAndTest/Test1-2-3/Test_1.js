function CurrentTime() {
    document.getElementById("currTime").innerHTML = Date();
}

function ChangeFontSize() {
    document.getElementById("currTime").style.fontSize = "25px";
}

function MakeSmallFontSize() {
    document.getElementById("currTime").style.fontSize = "10px";
}

function DrawCircle() {
    var snap = Snap(50, 50);
    var circle = snap.circle(25, 25, 15);
    circle.attr({
        fill: "#555"
    });
}

// Show an alert.
function ShowAlert() {
    var message = "This is an alert!";
    var num = 1;

    window.alert(message + num);
}

function ShowWrite() {
    document.write(55 + 89);
}

function TestFunctIF() {

    var par = document.getElementById("TestIF");
    if ("5" == 5)
        par.innerHTML = "Porovnani: \"5\" == 5 je TRUE!";

    if ("5" === 5)
        par.innerHTML += "Porovnani \"5\" === 5 je TRUE!";
    else
        par.innerHTML += "Porovnani \"5\" === 5 je FALSE! Nejedna se o objekty stejneho typu!";

}

function TestVariables() {

    var num = 125.55;
    var name = "Martin";
    var cars = ["Skoda", "BMW", "Mitsubishi"];
    var obj = { firstName: "Martin", lastName: "Vojik" };

    var stringF = num + " " + name + " " + cars[0] + " " + cars[1] + " " + cars[2];

    document.getElementById("TestVar").innerHTML = stringF;

    var obj1 = { x: 1 };
    var obj2 = { x: 1 };

    if (obj1 == obj2)
        document.getElementById("TestVar").innerHTML = "Je to OK!";


}

