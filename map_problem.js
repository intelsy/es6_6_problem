const Numbers = [1, 2, 3, 4];
const Strings = ['にんじゃわんこ', 'ベイビーわんこ', 'ひつじ仙人', 'とりずきん'];

const squareNumbers = Numbers.map((number) => {return number * number});

const doubleStrings = Strings.map((string) => {return string + string});


console.log(squareNumbers);
console.log(doubleStrings);
