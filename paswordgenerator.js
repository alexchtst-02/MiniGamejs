const upperCharacter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCharacter = 'abcdefghijklmnopqrstuvwxyz'
const numberCharacter = '0123456789'
const specialCharacter = '!@#$%^&*'

function paswordGenerator(minupper=3, minlower=2, minnumber=1, minspecial=1, length=5, distinct=false){
    
    var pasword_arr = []
    state1 = minupper + minlower + minnumber + minspecial <= length
    state2 = length > 0 && minupper > 0 && minlower > 0 && minnumber > 0 && minspecial > 0
    state3 = length < 24
    
    if(state1 && state2 && state3 && distinct == false){

        for(let i=0; i<minupper; i++){
            pasword_arr.push(upperCharacter[Math.floor(Math.random()*upperCharacter.length)])
        }
        for(let i=0; i<minlower; i++){
            pasword_arr.push(lowerCharacter[Math.floor(Math.random()*lowerCharacter.length)])
        }
        for(let i=0; i<minnumber; i++){
            pasword_arr.push(numberCharacter[Math.floor(Math.random()*numberCharacter.length)])
        }
        for(let i=0; i<minspecial; i++){
            pasword_arr.push(specialCharacter[Math.floor(Math.random()*specialCharacter.length)])
        }


        for(let i=0; i<length-(minupper+minlower+minnumber+minspecial); i++){
            index_character = Math.floor(Math.random()*4)
            if(index_character == 0){
                pasword_arr.push(upperCharacter[Math.floor(Math.random()*upperCharacter.length)])
            }
            else if(index_character == 1){
                pasword_arr.push(lowerCharacter[Math.floor(Math.random()*lowerCharacter.length)])

            }
            else if(index_character == 2){
                pasword_arr.push(numberCharacter[Math.floor(Math.random()*numberCharacter.length)])

            }
            else{
                pasword_arr.push(specialCharacter[Math.floor(Math.random()*specialCharacter.length)])
            }
        }
    }
    
    else if(state1 && state2 && state3 && distinct == true){
        for(let i=0; i<minupper; i++){
            pasword_arr = getDistinct(upperCharacter, pasword_arr)
        }
        for(let i=0; i<minlower; i++){
            pasword_arr = getDistinct(lowerCharacter, pasword_arr)
        }
        for(let i=0; i<minnumber; i++){
            pasword_arr = getDistinct(numberCharacter, pasword_arr)
        }
        for(let i=0; i<minspecial; i++){
            pasword_arr = getDistinct(specialCharacter, pasword_arr)
        }

        for(let i=0; i<length-(minupper+minlower+minnumber+minspecial); i++){
            index_character = Math.floor(Math.random()*4)
            if(index_character == 0){
                pasword_arr =  getDistinct(upperCharacter ,pasword_arr)
            }
            else if(index_character == 1){
                pasword_arr =  getDistinct(lowerCharacter, pasword_arr)

            }
            else if(index_character == 2){
                pasword_arr =  getDistinct(numberCharacter, pasword_arr)

            }
            else{
                pasword_arr =  getDistinct(specialCharacter, pasword_arr)
            }
        }
    }
    return pasword_arr
}

function randomArangement(array){
    let output = ''
    if(array.length != 0){
        let i_limit = array.length
        for(let i=0; i<i_limit; i++){
            var rd_index = Math.floor(Math.random()*array.length)
            output = output + array[rd_index]
            array.splice(rd_index, 1)
        }
        output = output
    }
    else{
        output = false
    }
    return output
}

function findElement(myarray, element){
    var state = false
    myarray.forEach(items => {
        if(items == element){
            state = true
        }
    })
    return state
}

function getDistinct(purchase, array){
    state = true
    while(state){
        rd_index = Math.floor(Math.random()*purchase.length)
        char = purchase[rd_index]
        if(findElement(array, char)){
            state = true
        } else{
            array.push(char)
            state = false
        }
    }
    return array
}

/*
fungsi paswordGenerator adalah fungsi yang meminta input nilai minimal dari upper, lower, number,
special, length, dan bahkan distinct dari pasword 
dan akan mengenbalikan sebuah output berupa array 
jika minimal nol atau bahkan negatif maka minimal dari character tsb dianggap nol
jika distinct bernilai true maka tidak akan ada character yang sama

fungsi randomArrangement adalah fungsi yang meminta input array
dan akan mengembalikan output string
jika array kosong maka output yang dikembalikan adalah boolean false

fungsi findElement adalah fungsi yang meminta input pertama array dan kedua berupa character
dan akan mengembalikan output berupa boolean
jika elemen ada didalam array maka anak mengeluarkan true dan sebaliknya

fungsi getDistinct adalah fungsi yang meminta input berupa array purchase dan array
dan akan mengembalikan output array yang telah dimasukan
dimana array yang dikembalikan akan mengambil salah satu elemen dari purchase 
yang berbeda dengan setiap elemen dalam array secara random
#WARNING USAHAKAN ARRAY PURCHASE TIDAK SAMA DENGAN ARRAY SEHINGGA AKAN TERUS MELAKUKAN LOOPING
*/