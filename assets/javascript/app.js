$(document).ready(function() {

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text( "Time Remaining:" + seconds + "seconds");

        if (--timer < 0) {
          
           timer = seconds;
          $("#one").fadeOut();
           ShowAnswers();

          $('#results').html('Time Up Princess');


        }
    }, 1000);


}

var StopTimer = function() {
            clearInterval(startTimer(intervalId));
    }





  
 var Questions = [
    {
   questions:'In Which kingdom do Anna and Elsa Live?',
     answer:{
         a:'Arenadelle',
         b:' Weselton',
         c:'Tooth Blue',
         d:'Castlevania'

     },

     correctanswer: 'a'
   },

    {


   questions:'Who helped young Anna recover from being hit by Elsas powers ?',

     answer:{
         a:'Maurice',             
         b: 'Grand Pabbie',
         c: 'Tramp',
         d: 'Prince Eric'
         

     },

     correctanswer: 'b'

     },

     {


    questions:'Who likes warm hugs?',

     answer:{
         a: 'Sven',
         b: 'Anna',
         c: 'Elsa',
         d: 'Olaf'
         

     },

     correctanswer: 'd'

     },

    {


    questions:'What is Svens favourite snack?',
         answer:{
         a: 'Chocolate',
         b: 'Bread',
         c: 'Carrots',
         d: 'Ice'
         

     },

     correctanswer: 'c'

     },

    {


    questions:'Which animals chase after Anna, Kristoff and Sven when they begin to search for Elsa?',
        
    
         answer:{
         a: 'Lions',
         b: 'Wolves',
         c: 'Hyenas',
         d: 'Bears'
         

     },

     correctanswer: 'b'

     },

   {


    questions:'What is Olafs favourite season?',
        
    
       answer:{
        a: 'Summer',
        b: 'Fall',
        c: 'Winter',
        d: 'Spring'
        
         },

     correctanswer: 'a'

     },

  {


    questions:'What animal does Olaf dance with in his song about Summer?',
        
    
       answer:{
        a: 'Dolphins',
        b: 'Sharks',
        c: 'Seagulls',
        d: 'Crabs'
        
         },

     correctanswer: 'c'

     },


     {


    questions:'What is the name of the enormous icy Snowman Elsa creates',
        
    answer:{
        a: 'Sleigh',
        b: 'Ice palace',
        c: 'Marshmallow',
        d: 'Balls'
        
         },

     correctanswer: 'c'

     },

    {


    questions:'What part of Annas body did Elsa hit with her powers when they were young?',
        
    answer:{
        a: 'Head',
        b: 'Neck',
        c: 'Eyes',
        d: 'Schoulder'
        
         },

     correctanswer: 'a'

     },

    {


    questions:'Who does the crazy dance with Anna at Elsas coronation?',
        
        
    answer:{
        a: 'Prince Eric',
        b: 'Prince Philip',        
        c: 'Prince Hans',
        d: 'The Duke of Weselton'
        
         },
     correctanswer: 'd'

     }


];


  $("#start").on("click", function() {
  

        $("#start").fadeOut();

        setTimeout(ShowQuestions, 1000 * 1);

       



          });







function ShowQuestions(){

  jQuery(function ($) {
    var fiftyseconds = 50 ,
        display = $('#timer');
    startTimer(fiftyseconds, display);
 });




 // A place to store output and answer choices
 var output=[];
 var answers;

// for every question with answer choices we want to attach a radio button.


for(var i= 0; i< Questions.length; i++){
     // reset answer choices
  answers=[];




for(letter in Questions[i].answer){

  //add a radio button to the letters
answers.push(
                '<label>'
          + '<input type="radio" name="question'+i+'" value="'+letter+'">'
          + letter + ': '
          + Questions[i].answer[letter]
        + '</label>'
      );

  }
   // add questions and answers  to the output

   output.push(
          '<div class= "question">'+ Questions[i].questions + '</div>'
       + '<div class= "answers">' + answers.join('')+ '</div>'

      );





}

// to show our combined output in html

quizContainer = $('#one')
quizContainer.html(output.join(''));
quizContainer.append('<button id ="get">' + "DONE" + '</button>');

 
 $("#get").on("click", function() {
      $("#one").fadeOut();
      $("#timer").fadeOut();
       ShowAnswers();
       

          });
      


}

 

 
   function ShowAnswers(){

 
    //var Unanswered ="";
    counter =0;
    numCorrect=0;
    numWrong=0;
    numUnaswered=0;
    var updatenumCorrect = function(){$('#correctans').html('Correct Answers:'+ numCorrect);};
    var updatenumWrong =  function(){$('#wrongans').html('Wrong Answers:'+ numWrong);};
    var updateUnaswered = function(){$('#unanswered').html('Unanswered:'+ numUnaswered);};
   



    // pick the correct answers from the answer container

       // for each 

     for(var i = 0; i < Questions.length; i++ ) {


   
       


      var userAnswer = $('input:radio[name="question'+i+'"]:checked').val();
      //var checked = false;   
       if(!userAnswer ){
        numUnaswered++;
        updateUnaswered();

         } else{
              if (userAnswer === Questions[i].correctanswer){
                  numCorrect++;
                  updatenumCorrect();
                  $('#results').html('All Done');
                 // checked = true;
                  //AnswerContainer[i].style.color = 'lightgreen';
                  console.log(userAnswer);
              }else {    
                   numWrong++;
                   updatenumWrong();
                   $('#results').html('All Done');
                  //AnswerContainer[i].style.color = 'red';

                    }  
            
                 }  

       
       };
     }

      
       
    

});