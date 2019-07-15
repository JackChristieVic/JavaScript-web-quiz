var person = prompt("please enter your name","");
var person1 = +localStorage.getItem("person1", person);

if(person1 == null){
	localStorage.setItem("person1");
	}
function submitAnswers(){
	var total = 5;
	var score = 0;
	
	var answer1 = document.forms["quizForm"]["answer1"].value;
	var answer2 = document.forms["quizForm"]["answer2"].value;
	var answer3 = document.forms["quizForm"]["answer3"].value;
	var answer4 = document.forms["quizForm"]["answer4"].value;
	var answer5 = document.forms["quizForm"]["answer5"].value;

	for(i = 1; i <= total; i++){
		if(eval('answer' + i) == null || eval('answer' + i )== ''){
			alert("Missed question " + i + ". Please choose one answer for that question");
			return false;
		}
	}
	
	var answers =["A", "A", "C", "B", "A"];
	for(i = 1; i <= total; i++){
		if(eval('answer' + i)== answers[i -1]){
			score++;
		}
	}
	

	var results = document.getElementById("results");
	
	results.innerHTML= 'RESULTS: You scored' + score + ' out of ' + total + '.';
	
	return false;
}
	$(document).ready(function(){
    $("#results").slideDown("slow");
	});
