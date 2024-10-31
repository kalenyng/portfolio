document.getElementById("check-btn").addEventListener("click", function() {
    const input = document.getElementById("text-input").value.trim();
    const result = document.getElementById("result");

    if (input === "") {
        alert("Please input a value");
        return;
    }

    const originalInput = document.getElementById("text-input").value;
    const normalizedInput = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversedInput = normalizedInput.split("").reverse().join("");

    if (normalizedInput === reversedInput) {
        result.textContent = `${originalInput} is a palindrome`;
    } else {
        result.textContent = `${originalInput} is not a palindrome`;
    }
});
