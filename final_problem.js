const personData = [
  	{id: 1, firstName: 'Steve', familyName: 'Wozniak', favFood: 'Apple', BirthDay: 0812},
  	{id: 2, firstName: 'Steve', familyName: 'Jobs', favFood: 'Apple', BirthDay: 0913},
  	{id: 3, firstName: 'Mark', familyName: 'Zukerberg', favFood: 'Banana', BirthDay: 0322},
  	{id: 4, firstName: 'Elon', familyName: 'Musk', favFood: 'Toast', BirthDay: 1121},
];

//// 1:map
const mappedPersonData = personData.map((person) => {
  return {
    id: person.id,
    fullName: person.firstName + person.familyName,
    favFood: person.favFood
  }
});
console.log('[mappedPersonData]')
console.log(mappedPersonData);

//// 2:find
const id2Person = mappedPersonData.find((person) => {return person.id == 2});
console.log('[person who has id 2]')
console.log(id2Person.fullName);

//// 3:filter
const applePerson = mappedPersonData.filter((person) => {return person.favFood == 'Apple'});
console.log('[people who like Apple]')
applePerson.forEach((person) => {
    console.log(person.fullName);
})
