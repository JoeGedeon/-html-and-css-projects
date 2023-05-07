// JavaScript source code

alert("Hello, World");
var A = "This is a string";
document.write(A);
document.write("<br>");
var B = "Concatenated" + "String"
document.write(B); 

document.write("<br>");

document.write("Lisa told Bart,\"Knock it off,Bart! Or I'll tell dad!\"<br>\
    \"Eat my shorts!\ Bart responded.");
document.write("<br>");

document.write("\Be who you are and say what you feel,"
    + " because those who mind don\'t matter and those who matter don\'t mind.\""
    + "-Dr.Sues");
document.write("<br>");


var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermorine",
    Daughter = "Penny", Son = "Zorro";
document.write("Dad");

function My_Fist_Function() {              //Defining a function and naming it
    var str = "This is the button text!";  //Defining a variable and giving it 
                                           //a string value
    document.getElementById("Button_Text").innerHTML - str; //Putting the value
                                           //of the variable into the HTML elementFromPoint
                                           //with thr "Button_Text" id
}