$(document).ready(function(){

var magic8Ball = {};

magic8Ball.answers = ["definitely!", "yes", "why not?", "not yet", "fo sho", "you know it!", "do it", "make it rain!", "of course!"]; 

magic8Ball.askQuestion = function (question){
	var randomNumber = Math.random(); 
	var randomNumberArray = randomNumber * this.answers.length;
	var randomIndex = Math.floor(randomNumberArray);
 	var randomAnswers = this.answers[randomIndex];
	$("#answer").text(randomAnswers);
	console.log(question);
	console.log(randomAnswers);
	$("#answer").hide();
	$("#answer").fadeIn(4000);
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
  $("#8ball").effect( "shake" );
};
  
$("#answer").hide();    

$("#questionButton").click(function(){
  $("#answer").hide(); 
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
  setTimeout(
    function() {
      var question = prompt("Ask a yes or no question");
      magic8Ball.askQuestion(question);
      }, 500);
});
});