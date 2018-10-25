const data = [
  	{id: 1, first:'Steve', family:'Wozniak', favFood:'Apple', BirthDay:0812},
  	{id: 2, first:'Steve', family:'Jobs', favFood:'Apple', BirthDay:0913},
  	{id: 3, first:'Mark', family:'Zukerberg', favFood:'Banana', BirthDay:0322},
  	{id: 4, first:'Elon', family:'Musk', favFood:'Toast', BirthDay:1121},
];

//// 1:map
const people = data.map((person) => {
  return {id: person.id, name:person.first+person.family, favFood:person.favFood}
});
console.log(data);
console.log(people);

//// 2:find
const id2Person = people.find((person) => {return person.id == 2});
console.log(id2Person);

//// 3:filter
const applePerson = people.filter((person) => {return person.favFood == 'Apple'});
console.log(applePerson);
