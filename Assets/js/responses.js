function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    //Tour
    if (input == "Tour") {
        return "Nhiều tour lắm";
    } else if (input == "Ừ") {
        return ":)";
    } else if (input == "Xin chào") {
        return "Chào bạn";
    }
    else if (input == "Ê") {
        return "Sao";
    }
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "!";
    }

}