const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

function removeOddNumbers(numbers) {
    let newNumbers = numbers.map(function (row) {
        return row.filter(function (num) {
            return num % 2 === 0;
        });
    });
    return newNumbers;
}

const newNumbers = removeOddNumbers(numbers);
console.log(newNumbers);