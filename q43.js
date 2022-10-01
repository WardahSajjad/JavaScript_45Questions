function show_magicians(arr){

    arr.forEach(element => {
        console.log(element)
    });
}

function make_great(copy_magician_array){

    for(let i = 0 ; i < copy_magician_array.length ; i++){
        copy_magician_array[i] ='the great '+ copy_magician_array[i];
        //console.log(copy_magician_array[i]);
    }
    return copy_magician_array
}

magician_array =['Alia', 'Nadia', 'Khalil']
copyArray = magician_array.slice()
newArray=make_great(copyArray)
show_magicians(magician_array)
show_magicians(newArray)