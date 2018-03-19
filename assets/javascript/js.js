"use strict";

$(document).ready(function() {

    var index = 0;
    let counter =0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 10;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			 counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				outOfTime();
				countdownTimer.reset();
				if (index < items.length) {
					initQ(index);
				} else {
					$(".answerchoice").hide();
					score();
				}
			}
		}
	};

    const items = [

        {
            question: "At the end of 'Return of the King', who became the king of Gondor?",
            A: "Faramir",
            B: "Aragorn",
            C: "Boromir",
            D: "Gimli",
            rightAnswer: "b"
        }
    
        {
    
            question: "Who were the pther Hobbits that accompanied Frodo on the quest?",
            A: "Happy, Dopey, and Doc",
            B: "Athos, Porthos, and Aramis",
            C: "Samwise Gamgee, Meriadoc Brandybuck, and Perigrin Took ",
            D: "Larry, Moe, and Curly",
            rightAnswer: "c"
    
        }
    
        {
    
            question: "What was the name of the council where it was determined who took the ring to Mordor to destroy it?",
            A: "The Council of the 12",
            B: "The Council of Elrond",
            C: "Council of the Five Kingdoms",
            D: "Forget the ring, let's get drunk!",
            rightAnswer: "b"
    
        }
    
        {
    
            question: "What is the name of Frodo's sword?",
            A: "Shard",
            B: "Sting",
            C: "Needle",
            D: "Goblin's Bane",
            rightAnswer: "b"
    
        }
    
        {
    
            question: "What are the seeing stones called that Gandalf discovers Sauruman to have one of?",
            A: "a pet rock",
            B: "a Huorn",
            C: "an Orthac",
            D: "a palantir",
            rightAnswer: "d"
    
        }
    
        ];
    
    let right, wrong;

    function right() {
        right++;
        alert("Correct!");
        console.log("correct");
    }

    function wrong() {
        wrong++;
        alert("Incorrect!");
        console.log("incorrect");
    }

    function outOfTime() {
        wrong++;
        console.log("incorrect");
    }

    function score() {
        $('.right').empty();
        $('.wrong').empty();
        $('.right').append("<h3>" + right + "</h3>");
        $('.wrong').append("<h3>" + wrong + "</h3>");
        countdownTimer.stop();
        $('.timer').empty();
	    // $('.question').append('<button id="startButton">Start</button>');
	    $('#startButton').on('click', function() {
        index = 0;
		$(this).hide();
		countdownTimer.start();
        initQ(index);
        incorrect=0;
        correct=0;
        $('.right').empty();
        $('.wrong').empty();
	});	

    }



}