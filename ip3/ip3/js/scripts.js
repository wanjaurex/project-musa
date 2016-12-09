var last = [];

function display(userInput) {
    for (i = 1; i <= userInput; i++) {
        last.push(i)
    }

    for (var i = 0; i <= last.length; i++) {
        if (last[i] % 3 === 0 && last[i] % 5 === 0)
            last[i] = "PingPong";
        else if (last[i] % 3 === 0)
            last[i] = "Ping";
        else if (last[i] % 5 === 0)
            last[i] = "Pong";
    };
    console.log(last);
}



$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
        event.preventDefault();

        var userInput = parseInt($("input#luckyNumber").val());

        display(userInput);

        last.forEach(function(i) {
            $("ul").append("<li>" + i + "</li>")
        });

    });
});
