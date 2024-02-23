"use strict";
// Soal Nomor 1
const reverseStr = (value) => {
    const splitNumber = value.split("").pop();
    const splitStr = value
        .split("")
        .filter((val) => isNaN(Number(val)))
        .reverse()
        .join("");
    return splitStr + splitNumber;
};
// Hasil Nomor 1
const exampleRevers = reverseStr("COBACOBA4");
console.log(exampleRevers);
// Soal Nomor 2
const longest = (value) => {
    const words = value.split(" ");
    let longestWord = "";
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord.length;
};
// Hasil Nomor 2
const exampleLongest = longest("Ini adalah contoh kalimat mencari kata terpanjang dalam sebuah kalimat tapi kalo ada kata dengan panjang yang sama akan di ambil salah satunya");
console.log(exampleLongest);
// Soal Nomor 3
const countQuery = (input, query) => {
    const result = [];
    for (const queryWord of query) {
        const count = input.filter((inputWord) => inputWord === queryWord).length;
        result.push(count);
    }
    return result;
};
// Hasil No 3
const inputArray = ["xc", "dz", "bbb", "dz"];
const queryArray = ["bbb", "ac", "dz"];
console.log(countQuery(inputArray, queryArray));
// Soal no 4
const diagonal = (matrix) => {
    let diagonalOne = 0;
    let diagonalTwo = 0;
    for (let i = 0; i < matrix.length; i++) {
        diagonalOne += matrix[i][i];
        diagonalTwo += matrix[i][matrix.length - 1 - i];
    }
    return Math.abs(diagonalOne - diagonalTwo);
};
// Hasil No 4
console.log(diagonal([
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
]));
