function Color_Funtion() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = "is a geat color!";
    switch(Colors) {
        case "Red":
            Color_Output ="Red" + Color_String;
        break;
        case "Yellow":
            Color_Output ="Yellow" + Color_String;
        case "Green":
            Color_Output ="Green" + Color_String;
        case "Blue":
            Color_Output ="Blue" + Color_String;
        case "Pink":
             Color_Output ="Pink" + Color_String;
        case "Purple":
             Color_Output ="Purple" + Color_String;
            break;
            default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

document.write(3 + "3" +3);

X = 5;
document.write(5);
var X = 10;

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

