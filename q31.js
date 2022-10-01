let usernames =[
   
]

if(usernames.length == 0){
    console.log('We need to find some users!')
}
for (let i = 0 ; i < usernames.length; i++){
   
    if(usernames[i] == 'Admin'){
        console.log(`Hello ${usernames[i]}, would you like to see status report?`)
    }
    else {
        console.log(`Hey ${usernames[i]}, Thankyou for logging in`)
    }
}
