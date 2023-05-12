var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet","Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Pictures =[];
    Cat_Pictures[0] = "Sleeping";
    Cat_Pictures[1] = "playing";
    Cat_Pictures[2] = "eating";
    Cat_Pictures[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Pictures[2] + ".";
}

function myFunction() {
    var carName = "Corvette";
    document.getElementById("Example").innerHTML = carName;
}

function myLoop() {
    var Loop1 = 1;
    var number ="";
    while (Loop1 < 11) {
        number += "<br>" + Loop1;
        Loop1 ++;
    }
    document.getElementById("Loop").innerHTML =  number;
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
       Musical_Instrument.type + Musical_Instrument.price;
}

// const X = 10;
// X = 2;
// document.write(X);
document.write("<br>");


var X = 10;
X = 7;
document.write(X);

document.write("<br>");


var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" +X);

document.write("<br>");


var X = 82;
document.write(X);
{
    var X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);


let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red" ,
    description : function() {
        return "The car is a " + this.color + this.make + this.model;
    }

};
document.getElementById("Car_Object").innerHTML = car.description();

// for (let i = 0; i++) {
//     if (i === 3) { break; }
//     text += "The number is " + i + "<br>"
// }

