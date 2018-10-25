const Numbers = [1, 2, 3, 4];
const Characters = [
  {id: 1, name:'にんじゃわんこ', age: 6},
  {id: 2, name:'ベイビーわんこ', age: 2},
  {id: 3, name:'ひつじ仙人', age: 99},
  {id: 4, name:'とりずきん', age: 21},
];

const evenNumbers = Numbers.filter((number) => { return number % 2 == 0 });
const id2Characters = Characters.filter((character) => { return character.age > 20 });

console.log(evenNumbers);
console.log(id2Characters);
