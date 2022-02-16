
const people = [ 
    {name: 'Sandra', age: 18}, 
    {name: 'Erin', age: 28}, 
    {name: 'Carl', age: 42}, 
    {name: 'Lloyd', age: 12}, 
    {name: 'Samuel', age: 31}, 
    {name: 'William', age: 65}, 
    {name: 'Ric', age: 53}, 
    {name: 'Mick', age: 12}, 
    {name: 'Ludwig', age: 74},
    {name: 'Hilaire', age: 10}, 
    {name: 'Menachem', age: 4}, 
    {name: 'Saul', age: 52}, 
    {name: 'Robert', age: 65}, 
    {name: 'Blair', age: 12}, 
    {name: 'Robert', age: 81}, 
    {name: 'Peter', age: 69}
];

people.forEach(item =>  console.log(item))
people.forEach(item =>  console.log(item.name))

const minorPeople = people.filter(item => item.age < 18)
console.log(minorPeople)

const oldPeople = people.filter(item => item.age >= 50)
console.log(oldPeople)

const futurePeople = people.filter(item => item.age += 30)
console.log(futurePeople)

const deadPeople = futurePeople.map(item => {item.age > 100 ? item.isDead = true : item.isDead = false
return item})
console.log(deadPeople)

const averageAge = people.reduce((accum, item, index, array) => accum + item.age / array.length, 0)
console.log(averageAge)