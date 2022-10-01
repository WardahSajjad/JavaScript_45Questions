let currUsers=[
    'Wardah',
    'Admin',
    'Anum',
    'Naba',
    'Romaisa'
]

let newUsers=[
    'Anum',
    'Naba',
    'Ayesha',
    'Haya',
    'Areeba'
]

newUsers.forEach(e=>{
    if(e == 'Anum'  || e == 'anum' || e == 'Naba' || e =='naba'){
        console.log('Name has already been used')
    }
    else {
        console.log('Username is available')
    }
})