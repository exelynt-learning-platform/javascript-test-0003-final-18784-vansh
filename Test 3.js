function printBinaryTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let rowOutput = "";
        
        for (let j = 1; j <= i; j++) {
            if ((i + j) % 2 === 0) {
                rowOutput += "1 ";
            } else {
                rowOutput += "0 ";
            }
        }
        console.log(rowOutput.trim());
    }
}
printBinaryTriangle(6);
