const quizQuestions = [

    {
        question: 'Which animal do you prefer?',
        a: 'Cat',
        b: 'Dog', 
        c: 'Bird', 
        d: 'I don\'t like animals'
    }, 
    {
        question: 'How would you like to be known to history?',
        a: 'The Bold',
        b: 'The Good', 
        c: 'The Wise', 
        d: 'The Great'
    }, 
    {
        question: 'Given the choice, would you rather invent a potion that would guarantee you:',
        a: 'Glory',
        b: 'Love', 
        c: 'Wisdom', 
        d: 'Power'
    }, 
    {
        question: 'What kind of instrument most pleases your ear?',
        a: 'Drums',
        b: 'Trumpet', 
        c: 'Piano', 
        d: 'Violin'
    },
    {
        question: 'What smell makes you relax?',
        a: 'The smell of the incense',
        b: 'The wet ground', 
        c: 'The softly pages of a new book', 
        d: 'The salty smell from the sea'
    }, 
    {
        question: 'Which would you rather be?',
        a: 'Trusted',
        b: 'Liked', 
        c: 'Praised', 
        d: 'Feard'
    }, 
    {
        question: 'Which road tempts you most?',
        a: 'The twisting, leaf-strewn path through woods',
        b: 'The wide, sunny, grassy lane', 
        c: 'The cobbled street lined with ancient buildings', 
        d: 'The narrow, dark, lantern-lit alley'
    },
    {
        question: 'Which of your skills are you most proud of?',
        a: 'My ability to keep secrets',
        b: 'My facility to make new friends', 
        c: 'My dexterity to obtain new information', 
        d: 'My aptitude to get everything I want'
    }, 
    {
        question: 'If you could have any power, which would you choose? ',
        a: 'The power of superhuman strength',
        b: 'The power to speak to animals', 
        c: 'The power to read minds', 
        d: 'The power to change the past'
    },
    {
        question: 'And last one! After you have died, what would you most like people to do when they hear your name? ',
        a: 'Ask for more stories about your adventures',
        b: 'Miss you, but smile', 
        c: 'Think with admiration of you achievements', 
        d: 'I don\'t care what people think of me after I\'m dead'
    }

]
const body = document.getElementById('body');

const question = document.getElementById('question');
const a_answer = document.getElementById('a_answer');
const b_answer = document.getElementById('b_answer');
const c_answer = document.getElementById('c_answer');
const d_answer = document.getElementById('d_answer');

const nextQuestion = document.getElementById('next');
const answers = document.querySelectorAll(".answer");

const houses=['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
const motto =['COURAGE AND BRAVERY', 'DEDICATION, PATIENCE AND LOYALTY', 'WIT, LEARNING AND WISDOM', 'PRIDE, AMBITION AND CUNNNING'];

let winner='';
let winnerText='';

let currentQuestion = 0;
let gryffindorPoints = 0, hufflepuffPoints = 0, ravenclawPoints = 0, slytherinPoints = 0;

loadNewQuestion();

function loadNewQuestion(){

    question.innerHTML = quizQuestions[currentQuestion].question;
    a_answer.innerHTML = quizQuestions[currentQuestion].a;
    b_answer.innerHTML = quizQuestions[currentQuestion].b;
    c_answer.innerHTML = quizQuestions[currentQuestion].c;
    d_answer.innerHTML = quizQuestions[currentQuestion].d;
}


function selectAnswer(){

    let currentAnswer = undefined;

    answers.forEach((answer) =>{
        if(answer.checked){
         currentAnswer = answer.id;
         answer.checked=false;
        }
    });

    return currentAnswer;
}

nextQuestion.addEventListener('click', () =>{

    const answer = selectAnswer();
    if(answer){
        switch(answer){
            case "a":
                if(currentQuestion==0){
                    hufflepuffPoints+=0.5;
                    ravenclawPoints+=0.25;
                }else if(currentQuestion==1){
                    gryffindorPoints+=1;
                }else if(currentQuestion==2){
                    gryffindorPoints+=1;
                    slytherinPoints+=0.25;
                    ravenclawPoints+=0.25;
                }else if(currentQuestion==4){
                    ravenclawPoints+=0.25;
                }else if(currentQuestion==9){
                    hufflepuffPoints+=0.25;
                }
                gryffindorPoints++;
                break;
            case "b":
                if(currentQuestion==0){
                    gryffindorPoints+=0.5;
                    ravenclawPoints+=0.5;
                }else if(currentQuestion==1){
                    gryffindorPoints+=0.5;
                    hufflepuffPoints+=1;
                }else if(currentQuestion==2){
                    hufflepuffPoints+=1;
                }else if(currentQuestion==4){
                    gryffindorPoints+=0.25;
                }else if(currentQuestion==5){
                    ravenclawPoints+=0.25;
                }else if(currentQuestion==9){
                    gryffindorPoints+=0.25;
                    ravenclawPoints+=0.25;
                }
                hufflepuffPoints++;
                break;
            case "c":
                if(currentQuestion==0){
                    hufflepuffPoints+=0.25;
                }else if(currentQuestion==1){
                    ravenclawPoints+=1;
                }else if(currentQuestion==2){
                    ravenclawPoints+=1;
                    gryffindorPoints+=0.10;
                }else if(currentQuestion==4){
                    hufflepuffPoints+=0.5;
                }else if(currentQuestion==5){
                    slytherinPoints+=0.25;
                }else if(currentQuestion==8){
                    slytherinPoints+=0.25;
                }else if(currentQuestion==9){
                    slytherinPoints+=0.5;
                }
                ravenclawPoints++;
                break;
            case "d":
                if(currentQuestion==1){
                    ravenclawPoints+=0.25;
                    gryffindorPoints+=0.25;
                }else if(currentQuestion==1){
                    slytherinPoints+=1;
                }else if(currentQuestion==2){
                    slytherinPoints+=1
                    gryffindorPoints+=0.10;
                }else if(currentQuestion==4){
                    gryffindorPoints+=0.5;
                    ravenclawPoints+=0.5;
                    hufflepuffPoints+=0.5;
                }else if(currentQuestion==5){
                    gryffindorPoints-=0.5;
                    hufflepuffPoints-=0.5;
                }else if(currentQuestion==8){
                    ravenclawPoints+=0.25;
                }
                slytherinPoints++;
                break;
        }
        currentQuestion++;

        if(currentQuestion<quizQuestions.length){
            loadNewQuestion();
        }else{
            checkWiner();
            body.innerHTML = 
            `<div class="quiz__container-mod" id ="quiz">
                <p class="quiz__container__winner-main" >You're a</p>
                <p class="quiz__container__winner-house">${winner}</p>
                <div class="quiz__container__winner-image-${winner}"></div>
                <p class="quiz__container__winner-motto">${winnerText}</p
            </div>
            `;
        }
    }
});

function checkWiner(){
    if((gryffindorPoints > hufflepuffPoints) && (gryffindorPoints > ravenclawPoints) && (gryffindorPoints>slytherinPoints)){
        winner=houses[0];
        winnerText = motto[0];
        document.body.style = "background: linear-gradient(0deg, #740001 0%, #ae0001 100%);"
    }else if((hufflepuffPoints > gryffindorPoints) && (hufflepuffPoints > ravenclawPoints) && (hufflepuffPoints>slytherinPoints)){
        winner=houses[1];
        winnerText = motto[1];
        document.body.style = "background: linear-gradient(0deg, #ecb939 0%, #f0c75e 100%);"
    }else if((ravenclawPoints > gryffindorPoints) && (ravenclawPoints > hufflepuffPoints) && (ravenclawPoints>slytherinPoints)){
        winner=houses[2];
        winnerText = motto[2];
        document.body.style = "background: linear-gradient(0deg, #0e1a40 0%, #222f5b 100%);"
    }else if((slytherinPoints > hufflepuffPoints) && (slytherinPoints > ravenclawPoints) && (slytherinPoints>gryffindorPoints)){
        winner=houses[3];
        winnerText = motto[3];
        document.body.style = "background: linear-gradient(0deg, #1a472a 0%, #2a623d 100%);"
    }else{
        var unexpected = Math.floor(Math.random()*houses.length);
        switch(unexpected){
            case 0:
                winner=houses[0];
                winnerText = motto[0];
                document.body.style = "background: linear-gradient(0deg, #740001 0%, #ae0001 100%);"
                break;
            case 1:
                winner=houses[1];
                winnerText = motto[1];
                document.body.style = "background: linear-gradient(0deg, #ecb939 0%, #f0c75e 100%);"
                break;
            case 2:
                winner=houses[2];
                winnerText = motto[2];
                document.body.style = "background: linear-gradient(0deg, #0e1a40 0%, #222f5b 100%);"
                break;
            case 3:
                winner=houses[3];
                winnerText = motto[3];
                document.body.style = "background: linear-gradient(0deg, #1a472a 0%, #2a623d 100%);"
                break;
            default:
                winner=houses[0];
                winnerText = motto[0];
                document.body.style = "background: linear-gradient(0deg, #740001 0%, #ae0001 100%);"
                break;
        }
    }
}