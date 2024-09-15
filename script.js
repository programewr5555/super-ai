function processInput() {
    const input = document.getElementById('inputField').value;
    const output = document.getElementById('output');

    if (isMathEquation(input)) {
        output.textContent = `Solution: ${eval(input)}`;
    } else {
        output.textContent = `Essay on "${input}": This is a placeholder for an essay on the topic "${input}".`;
    }
}

function isMathEquation(input) {
    return /^[0-9+\-*/().\s]+$/.test(input);
}
