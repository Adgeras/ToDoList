"use strict";

/*
TODO darba aprasancio objekto savybes:
- description
- created_on
- deadline
- status: todo, in-progres, done 
*/

let todo_list = [
    {
        description: 'Pasigaminti kavos',
        created_on: '2020-05-05 15:01',
        deadline:'2020-05-06 12:55',
        status:'todo'
    },
    {
        description: 'Pravesti paskaita',
        created_on: '2020-05-05 15:01',
        deadline:'2020-05-06 12:55',
        status:'todo'
    },
    {
        description: 'Pradeti generuoti paskaitos irasus',
        created_on: '2020-05-05 15:01',
        deadline:'2020-05-06 12:55',
        status:'todo'
    }
];

for (let i = 0; i < todo_list.length; i++) {
    const todo = todo_list[i];
    const sentence = 'Darbas kuri reikia atlikti yra "xxx" ir ji reikia atlikti iki dddd siuo metu yra busenoje "tttt"';
    console.log(sentence);
}


const obj = {
    //key: 'value'
    description: 'Pasigaminti kavos',
    created_on: '2020-05-05 15:01',
    deadline:'2020-05-06 12:55',
    status:'todo'
}

console.log(todo_list);
console.log(obj);

console.log('Obj description:', obj['description']);
console.log('Obj deadline:', obj['deadline']);
/* tas pats nurodytas kitu metodu: */
console.log('Obj deadline:', obj.deadline);

const people = [
    {
        name: 'Johny Bravo',
        age: 75,
        alive: false
    },
    {
        name: 'Al Pachino',
        age: 30,
        alive: true
    },
    {
        name: 'Chuck Norris',
        age: 80,
        alive: false
    },
    {
        name: 'Bruce Lee',
        age: 45,
        alive: true
    }

];

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    console.log(person);
    
    console.log(`Persona is person);
}

console.log(people);


if ( person.alive)


