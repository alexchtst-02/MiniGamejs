function gameRSP(userinput){
    const arrayRSP = ['R', 'P', 'R'] // R stands for rock and etc
    var rd_index = Math.floor(Math.random()*3)
    computer_input = arrayRSP[rd_index]
    var status
    if(theRulesRSP(userinput, computer_input) == 1){
        status = 'Win'
    }
    else if(theRulesRSP(userinput, computer_input) == 0){
        status = 'Draw'
    }
    else{
        status = 'Lose'
    }

    return status
}

function theRulesRSP(input, input_against){
    const condition1 = input == 'R' && input_against == 'S'
    const condition2 = input == 'S' && input_against == 'P'
    const condition3 = input == 'P' && input_against == 'R'
    const condition4 = input == input_against
    var score
    if(condition1 || condition2 || condition3){
        score = 1
    }
    else if(condition4){
        score = 0
    }
    else{
        score = -1
    }

    return score
}

/*
fungsi gameRSP adalah fungsi yang meminta input berupa user input yang 
hanya berupa 'R', 'P', 'S'
dan akan mengeluarkan nilai berupa 'Win', 'Draw', 'Lose' sesuai aturan
permainan Rock Paper Scissors

fungsi theRulesRSP adalah fungsi yang meminta nilai input dan input_against
dan akan mengeluarkan output berupa nilai -1, 0 atau 1 dimana jika
input menang output = 1
input seri = 0
dan input kalah = -1
sesuai dengan aturan permainan Rock Paper Scissors
*/