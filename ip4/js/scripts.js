//Business Logic
var diceArray = [1, 2, 3, 4, 5, 6];

function random(array) {
    var randomNumber = array[Math.floor(Math.random() * array.length)];
    return randomNumber;

}
var scores = function(randomNumber, points) {
    if (randomNumber === 1 || randomNumber === 6) {
        points = 0;
    } else {
        points += randomNumber;
    };
    return points
};

var nextplayer = function() {
        $("#roll").click(function() {
            var number = randomness(diceArray);
            $("#player2").append("<li>" + number + "</li>");
            if (number === 1) {
                $("#player2").empty();
                $("#player2").append("<li>" + 0 + "</li>");
                alert("Player One's Turn");
            }
        });

        //User Interface Logic
        $(document).ready(function() {

                }
                $(document).ready(function() {
                    $("#roll").click(function() {
                        var number = randomness(diceArray);
                        $("#output1").append("<li>" + number + "</li>");
                        if (number === 1) {
                            $("#output1").empty();
                            $("#output1").append("<li>" + 0 + "</li>");
                            alert("Player Twos Turn");
                            nextplayer();
                        }
                    });
                });
