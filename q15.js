let guest=[
    'Rukhe',
    'Romiasa',
    'Naba',
    'Sana'
]

for (let i =0; i < guest.length; i++){
    console.log(`Hey ${guest[i]}, please come to dinner at my home`)
}
console.log('_______________________________________________________')
console.log('Unfortunately, Romaisa cannot make it to our dinner :(')
console.log('_______________________________________________________')

guest.splice(1,1, 'Hadiqa')

for (let i =0; i < guest.length; i++){
    console.log(`Hey ${guest[i]}, please come to dinner at my home`)
}