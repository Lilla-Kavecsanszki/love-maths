document.addEventListener ("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener('click', function(){
            if (this.getAttribute("data-type") === "submit") {
                alert('Your clicked submit!');
            }else{
                let gametype = this.getAttribute('data-type');
                alert(`You clicked ${gametype}`);
            }
            }
        )
    }

})

function runGame () {
   let num1 = Math.floor(Math.random() * 25) + 1;
   let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer () {
    
}

function calculateCorrectAnswer () {
    
}

function incrementScore () {
    
}

function incrementWrongAnswer () {
    
}

function displayAdditionQuestion () {
    
}

function displaySubtractQuestion () {
    
}

function displayMultiplyQuestion () {
    
}

function displayDivisionQuestion () {
    
}