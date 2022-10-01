function show_magicians(arr){

    arr.forEach(element => {
        console.log(element)
    });
}

function make_great(magician_array){

    for(let i = 0 ; i < magician_array.length ; i++){
        magician_array[i] ='the great '+ magician_array[i];
        console.log(magician_array[i]);
    }
}

magician_array =['Alia', 'Nadia', 'Khalil']
show_magicians(magician_array)
make_great(magician_array)