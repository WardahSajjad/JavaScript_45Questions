let usernames =[
    'Wardah',
    'Admin',
    'Anum',
    'Naba',
    'Romaisa'
]

usernames.forEach(e=>{
    if(e == 'Admin'){
        console.log(`Hello ${e}, would you like to see status report?`)
    }
    else {
        console.log(`Hey ${e}, Thankyou for logging in`)
    }
})