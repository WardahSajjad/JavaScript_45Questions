let places =[
    'US',
    'Turkey',
    'Maldives',
    'China',
    'Dubai'
]

places.forEach(e=>{
    console.log(e)
})
let alphabeticalOrder = places.slice().sort() //make a copy and then sort so the original array will not effected
console.log('Array in alphabetical order : '+alphabeticalOrder)
console.log('Original array: ' +places)
let reverseAlphabeticalOrder = places.slice().sort().reverse()
console.log('Array in reverse alphabetical order: '+ reverseAlphabeticalOrder); //revers ealphabetical order
console.log('Original array:' +places)

let reversedOrder = places.slice().reverse()
console.log('Reversed array: '+reversedOrder)
let againReverse =reversedOrder.reverse()
console.log('Again reversed: ' + againReverse)
console.log(againReverse.sort())
console.log(againReverse.sort().reverse())
