function convertToBinary() {
    let decimal = document.getElementById("decimalInput").value;

    if (decimal.trim() === "" || isNaN(decimal)) {
        document.getElementById("result").textContent = "Please enter a valid number";
        return;
    }

    decimal = Number(decimal);

    // Handle integer part
    let intPart = Math.floor(decimal);
    let intBinary = intPart.toString(2);

    // Handle decimal part
    let fracPart = decimal - intPart;
    let fracBinary = "";

    if (fracPart > 0) {
        let limit = 15; // limit binary fraction length
        while (fracPart > 0 && limit > 0) {
            fracPart *= 2;
            if (fracPart >= 1) {
                fracBinary += "1";
                fracPart -= 1;
            } else {
                fracBinary += "0";
            }
            limit--;
        }
    }

    let finalBinary = fracBinary ? `${intBinary}.${fracBinary}` : intBinary;

    document.getElementById("result").textContent = `Binary: ${finalBinary}`;
}
