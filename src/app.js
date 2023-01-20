/* istanbul ignore file */
try {
    const { isEmpty, checkName } = require("./services/validations");
    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");

    var gamerTagValue;
    var feedbackMessageText;

    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener("click", () => {
        if (isEmpty(gamerTagValue))
            feedbackMessageText = "Gamer tag cannot be empty";
        else {
            feedbackMessageText = !checkName(gamerTagValue)
                ? "Gamer tag is not valid, gamer tag must be at least 8 characters, contain a special character and a number"
                : "Gamer tag is valid";
        }

        feedbackMessage.textContent = feedbackMessageText;
    });
} catch (err) {
    console.error(JSON.stringify(err));
}
