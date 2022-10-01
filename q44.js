function sandwich(){
    console.log('your sandwich has the following items:')
    for(let i =0; i < arguments.length ; i++){
    console.log(arguments[i])
    }
}
sandwich('ketchup', 'mayouneese')
sandwich('tomato', 'potato', 'onion', 'egg')
sandwich('cucumber', 'red chilli sauce','onion')