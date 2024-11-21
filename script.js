"use strict"

// 1 uzd

// let number = 4
// let numberOfNumbers = 0

// while (number < 50) {
//     console.log(number)
//     number += 4
//     numberOfNumbers += 1
// }

// console.log(`number of numbers is: ${numberOfNumbers}`)

/////////////////////////////////////////////////////////////

// 2 uzd

// const words = ['apples', 'pear', 'dragonfruit', 'banana', 'lemons']
// let wordLength = []

// words.forEach((element) => wordLength.push(element.length))

// console.log(words)
// console.log(wordLength)

/////////////////////////////////////////////////////////////

// 3 uzd

const musician = {
    firstName: 'joe',
    lastName: 'jimmy',
    instrument: 'drums',
    albums: {
        first: 'first album',
        second: 'second album',
        third: 'third album'
    }
}

console.log(Object.values(musician.albums))