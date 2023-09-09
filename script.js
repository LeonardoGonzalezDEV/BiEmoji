function textToBinary() {
    const inputText = document.getElementById('inputText').value;
    let binaryText = '';

    for (let i = 0; i < inputText.length; i++) {
        const binaryChar = inputText.charCodeAt(i).toString(2);
        const paddedBinaryChar = binaryChar.padStart(8, '0');
        binaryText += paddedBinaryChar;
    }

    const emojiText = binaryText.replace(/0/g, '😡').replace(/1/g, '😊');
    document.getElementById('outputText').value = emojiText;
}

function emojiToText() {
    const emojiText = document.getElementById('inputText').value;
    const binaryText = emojiText.replace(/😡/g, '0').replace(/😊/g, '1');
    let outputText = '';

    for (let i = 0; i < binaryText.length; i += 8) {
        const binaryChar = binaryText.substr(i, 8);
        const decimalChar = parseInt(binaryChar, 2);
        outputText += String.fromCharCode(decimalChar);
    }

    document.getElementById('outputText').value = outputText;
}

function copyTranslatedText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
}
