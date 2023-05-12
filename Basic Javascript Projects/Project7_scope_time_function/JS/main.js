var X ="Hello";

function Time_function() { //Time functions
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply= "It is afternoon!";
    }
    else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

function if_function() { // This is the if function
    if (5 > 4 ) {
        document.getElementById("greater").innerHTML = "5 is greater than 4."
    }
}

function error_function() { // This is the error function
     //console.log(Reply); comment this to get rid of the error.
}