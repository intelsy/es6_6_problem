const personData = [
  	{id: 1, firstName: 'Kate', familyName: 'Jones', age: 16, favFood: 'Apple', BirthDay: 0812},
  	{id: 2, firstName: 'John', familyName: 'Smith', age: 67, favFood: 'Apple', BirthDay: 0913},
  	{id: 3, firstName: 'Denis', familyName: 'Hunters', age: 43, favFood: 'Banana', BirthDay: 0322},
  	{id: 4, firstName: 'David', familyName: 'Black', age: 21, favFood: 'Toast', BirthDay: 1121},
];

//// 1:map
const mappedPersonData = personData.map((person) => {
  return {
    id: person.id,
    fullName: person.firstName + person.familyName,
    age: person.age
  }
});
console.log('[編集したデータ]')
console.log(mappedPersonData);

//// 2:find
const id2Person = mappedPersonData.find((person) => {return person.id == 2});
console.log('[idが2の人]')
console.log(id2Person.fullName);

//// 3:filter
const applePerson = mappedPersonData.filter((person) => {return person.age == 21});
console.log('[年齢が21歳の人]')
applePerson.forEach((person) => {
    console.log(person.fullName);
})
