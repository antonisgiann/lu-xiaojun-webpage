//create the questions for the quiz

let q1 = { question : "What year did Lu Xiaojun won his Olympic Gold medal?" ,
	answers : [ 2004 , 2008 , 2012 , 2016 ] ,
	correctAnswer : 2012
}

let q2 = { question : "Where was the competition that Lu Xiaojun snatched 177kg to set a new snatch world record?" ,
	answers : ["London" , "Rio de Janeiro" , "Houston" , "Ashgabat"],
	correctAnswer : "Rio de Janeiro"
}

let q3 = { question : "Who is Lu Xiaojun married to?" ,
	answers : ["Li Xiajin" , "Deng Wei" ,"Amanda Lili" ,"Guo Xiyan" ] ,
	correctAnswer : "Guo Xiyan" 
}

let q4 = { question : "What is the current weight class tha Lu Xiaojun is competing?" ,
	answers : [ "77kg" , "73kg" , "81kg" , "85kg" ] ,
	correctAnswer : "81kg"
}

let q5 = { question : "Where did Lu Xiaojun won his first world weightlifting championship?" ,
	answers : [ "Paris,France" , "Wroclaw,Poland" , "Houston,United States" , "Goyang,South Korea" ] ,
	correctAnswer : "Goyang,South Korea"
}

let q6 = { question : "What year Lu Xiaojun was born?" ,
	answers : [ 1990 , 1985 , 1982 , 1984 ] ,
	correctAnswer : 1984
}


//create an array of the questions from which to pick one question at a time
let questions= [ q1 , q2 , q3 , q4 , q5 , q6 ]
//rearrange the appearance of the questions
shuffleArray(questions);
//rearange the apperance of the answers
for(let i of questions){
	shuffleArray(i.answers);
}

const NUMBER_OF_QUESTIONS = questions.length
let correctAnswers = 0;
let ca;

//function to activate-deactivate the answer buttons
function actBtns(value){
	b1.disabled = value;
	b2.disabled = value;
	b3.disabled = value;
	b4.disabled = value;
}

//function for showing a question
function showQ(){

	//if the game is over show the appropriate message and the number of the correct answers
	if(questions.length == 0){
		q.textContent = "correct answers/wrong answers : " + correctAnswers + "/" + (NUMBER_OF_QUESTIONS-correctAnswers) ;
		let div = document.querySelector("#wrapper");
		let header = document.querySelector("#message");
		header.textContent = "END OF THE QUIZ"; 
		div.removeChild(b1);
		div.removeChild(b2);
		div.removeChild(b3);
		div.removeChild(b4);
		return
	}
	//pick a question and display it
	let quest = questions.pop();
	ca = quest.correctAnswer;
	q.textContent = quest.question;
	b1.textContent = quest.answers[0];	
	b2.textContent = quest.answers[1];	
	b3.textContent = quest.answers[2];	
	b4.textContent = quest.answers[3];	
	//enable the buttons(they where disabled for the next button)
	actBtns(false);
}

//create the button that will show the new question
function showNextBtn(btn){
	let next = document.createElement('button');
	next.textContent = 'Next';
	//create the message to be shown if the answer is correct or wrong
	let s = document.createElement('p');
	if( btn.textContent == ca ){
		s.textContent = "Correct answer";
		s.style.color = "#ffffff";
	}
	else{
		s.textContent = "Wrong answer";
		s.style.color = "#ff0f0f";
	}
	//style for the message
	s.style.fontSize = "17pt";
	s.style.fontWeight = "500";
	document.body.appendChild(s);
	document.body.appendChild(next);
	//add a handler to the next button
	next.addEventListener('click',function(){
			document.body.removeChild(next);
			document.body.removeChild(s);
			showQ();
	});
}

//function for shuffling an array
function shuffleArray(ar){
	for(let i = 0; i<50; i++){
		let x = Math.floor(Math.random()*ar.length);
		let y = Math.floor(Math.random()*ar.length);
		[ar[x],ar[y]] = [ar[y],ar[x]];
	}
}


//asign the question and the answers to the html document
let q = document.querySelector('#question');
//assign the handler for the fist button
let b1 = document.querySelector('#b1');
b1.addEventListener('click',function (){
	if( ca == b1.textContent )
		correctAnswers++;
	actBtns(true);
	showNextBtn(b1);
	});

//assign the handler for the second button
let b2 = document.querySelector('#b2');
b2.addEventListener('click',function (){
	if( ca == b2.textContent )
		correctAnswers++;
	actBtns(true);
	showNextBtn(b2);
	});
 
//assign the handler for the third button
let b3 = document.querySelector('#b3');
b3.addEventListener('click',function (){
	if( ca == b3.textContent )
		correctAnswers++;
	actBtns(true);
	showNextBtn(b3);
	});

//assign the handler for the forth button
let b4 = document.querySelector('#b4');
b4.addEventListener('click',function (){
	if( ca == b4.textContent )
		correctAnswers++;
	actBtns(true);
	showNextBtn(b4);
	});

//show the first question
showQ();
