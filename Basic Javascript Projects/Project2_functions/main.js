// JavaScript source code
var A = "This is a string";
document.write(A);
window.alert("This is the beginning of the string")

document.write("<br>")

var B = "Concatenate" + "String"
document.write(B);
document.write("and this is the end of the string")

var foo = document.getElementsByTagName("p");

function myFunction() {               //Defining a function and naming it
    var sentence = "I am learning!";  //Defining a variable and giving it
                                      //a string value
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence; //Putting the value
    //of the variable into the HTML elementFromPoint
    //with the "Button_Text" id
}
