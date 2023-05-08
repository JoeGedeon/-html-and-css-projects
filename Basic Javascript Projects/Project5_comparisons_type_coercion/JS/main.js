// JavaScript source code



function my_Dictionary() {
    var Animal = {
        Species: "Feline",
        Color: "Black",
        Breed: "Panther",
        Age: 5,
        Sound: "Roar!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}
document.write(typeof "Word");

function my_Funtion() {
    document.getElementById("Test").innerHTML = 0 / 0;
}
document.getElementById("Test").innerHTML = isNaN('This is a string');

document.getElementById("Test").innerHTML = isNaN('007');


document.write(2E310);

document.write(-3E310);


document.write(10 > 2);

document.write(10 < 2);


console.log(2 + 2);


document.write(10 == 10);


document.write(3 == 11);

X = 10;
Y = 10;
document.write(X === Y);


X = 82;
Y = "82";
document.write(X === Y);


A = "Magnus";
B = "Magnus";
document.write(A === B);


document.write(5 > 2 && 10 > 4);


document.write(5 > 10 && 10 > 4);


document.write(5 > 10 || 10 > 4);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10 || 10 > 20);
}

document.write(5 > 10 || 10 > 20);


function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}


function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}


function Ride_Funtion() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

class Customer {
    string FullName;
    Boolean Active;
    Customer(string name){
    FullName = name;
    Active = true;
}
}
Customer cust = new Customer("Brenda Smith");

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;

}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustang");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

var X = 10;
var Y = "Charlie";
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() { Starting_point += 1; }
        Plus_one();
        return Starting_point;
    }
}