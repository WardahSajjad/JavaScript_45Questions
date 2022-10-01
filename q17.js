let guest=[
    'Rukhe',
    'Romiasa',
    'Naba',
    'Sana'
]

for (let i =0; i < guest.length; i++){
    console.log(`Hey ${guest[i]}, please come to dinner at my home`)
}
console.log('--------------------****************-----------------------')
console.log('Unfortunately, Romaisa cannot make it to our dinner :(')
console.log('--------------------****************-----------------------')

guest.splice(1,1, 'Hadiqa')

for (let i =0; i < guest.length; i++){
    console.log(`Hey ${guest[i]}, please come to dinner at my home`)
}
console.log('--------------------****************-----------------------')
console.log('Hey guys, We have now found a bigger dinner table :D')
console.log('--------------------****************-----------------------')

guest.unshift('Huda') //add at te start
guest.splice(3,0, 'Hania')//add in the middle
guest.push('Aimen')//add at the end 

for (let i =0; i < guest.length; i++){
    console.log(`Hey ${guest[i]}, please come to dinner at my home`)
}

console.log('--------------------****************-----------------------')
console.log('Unfortunately, we can invite only two people for dinner!')
console.log('--------------------****************-----------------------')

for ( i = 0; i < guest.length+2; i++){

    console.log('Sorry ' + guest.pop() +', I cant invite you on dinner!')
    
}

console.log( guest + ' You both are still invited')


for ( i = 0; i < guest.length+1; i++){

    guest.pop()
    
}

console.log(guest)
