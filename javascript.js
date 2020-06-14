var playing = false;
var score;
var action;
var timeremaining ;
var correctAnswer;
//if we click on the start/reset
document.getElementById("startreset").onclick = function(){
    //if we are playing
    if(playing==true){
        //reload page
        location.reload();
    }    
    else{
        //if not playing
        playing = true;
        
        
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        
        
        //show countdown box
        show("timeremaining");
        timeremaining = 60 ;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        //hide game over box
        
        hide("gameover");
        
        //reduce time by 1sec in loops Or Count down start...
        
        
        startCountdown();
        
        
        //chnge button text to reset
        
        document.getElementById("startreset").innerHTML ="Reset Game";
        
        //new question & ans
        
        generateQA();
            
    }
}
    
        
    
//Clicking on an Answer box;        
        
        
for(i=1;i<=4;i++){
    document.getElementById("box"+i).onclick = function(){
    //if we are playing
    if(playing==true){
        if(this.innerHTML==correctAnswer){
            //correct Answer
            
            //increase score by one.
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            
            //hide wrong box & show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
              hide("correct");  
            },1000);
            
            //Generate new Q&A
            generateQA();
        }
        else{
            //wrong Answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
        }
    }
}           

}        


    //if we are playing
        //correct?
            //yes.
                
                //show correct box for 1sec.
                //generate new Q&A
        //wrong?
            //show try again box for 1sec

//functions

        //start Counter
function startCountdown(){
    action = setInterval(function(){
        timeremaining--;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){
            //Game Over
            stopCountdown();
            show("gameover");
            document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your score is " + score + ".</p>";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML ="Start Game";
        }
    },1000)
}

//stop counter
function stopCountdown(){
    clearInterval(action);
}

//hide an element
function hide(id){
    document.getElementById(id).style.display = "none";
} 


//generate Q & A and multiple ans
function generateQA(){
    var x=1+Math.round(Math.random()*9);
    var y=1+Math.round(Math.random()*9);
    correctAnswer=x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;//fill one box with correct answer.
    
    var answers = [correctAnswer];
    for(i=1;i<5;i++){
        if(i!=correctPosition){
           var wrongAnswer;
            
            
            do{
                wrongAnswer = (1+Math.round(Math.random()*9))*(1+Math.round(Math.random()*9));//wrong Ans each time
            }while(answers.indexOf(wrongAnswer)>-1)//for different wrong Answers
            answers.push(wrongAnswer);
            
            document.getElementById("box"+i).innerHTML = wrongAnswer;
        }
    }
    
    
}


//show an element
function show(id){
    document.getElementById(id).style.display = "block";
}
