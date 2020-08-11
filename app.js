const startButton = document.getElementById('startbtn')
const questionCon = document.getElementById('questioncon')
const submit = document.getElementById('submitbtn')

startButton.addEventListener('click',startGame)



function startGame(){
   startButton.classList.add('hide');
   questionCon.classList.remove('hide')
}

function submission(){
    const answer = document.getElementsByClassName("ans")
    if( i = answer){
        alert("Correct")
    }
    else{
        alert("Wrong")
    }

}












/*function setNextQuestion(){

}




function selectAnswer(){

}


const questions = [
    {
        question: 'What is 2+2',
        answers:[
            {text:'4'},
            {text:'22'}
        ]
        }
    ]*/

