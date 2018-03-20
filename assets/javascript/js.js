"use strict";

$(document).ready(function() {

    let index = 0;
    let counter =0;
	let countdownTimer = {
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

    let items = 

        {
            question: ["At the end of 'Return of the King', who became the king of Gondor?", "Who were the other Hobbits that accompanied Frodo on the quest?", "What was the name of the council where it was determined who took the ring to Mordor to destroy it?", "What is the name of Frodo's sword?", "What are the seeing stones called that Gandalf discovers Sauruman to have one of?"],
            A: ["Faramir","Happy, Dopey, and Doc","The Council of the 12","Shard","a pet rock"],
            B: ["Aragorn","Athos, Porthos, and Aramis","The Council of Elrond","Sting","a Huorn"],
            C: ["Boromir","Samwise Gamgee, Meriadoc Brandybuck, and Perigrin Took ","Council of the Five Kingdoms","Needle","an Orthac"],
            D: ["Gimli","Larry, Moe, and Curly","Forget the ring, let's get drunk!","Goblin's Bane","a palantir"],
            rightAnswer: ["b", "c", "b", "b", "d"]
        };
    
        
    
    let r = 0, w = 0;

    function right() {
        r++;
        alert("Correct!");
        console.log("correct");
    }

    function wrong() {
        w++;
        alert("Incorrect!");
        console.log("incorrect");
    }

    function outOfTime() {
        w++;
        console.log("incorrect");
    }

    function score() {
        $('.right').empty();
        $('.wrong').empty();
        $('.right').append("<h3>Correct: " + r + "</h3>");
        $('.wrong').append("<h3>Incorrect: " + w + "</h3>");
        countdownTimer.stop();
        $('.timer').empty();
	    
    }

    function start() {

        

        for (let i = 0; i < items.question.length; i++) {
        $('.questions').empty();
        $('.a').empty();
        $('.b').empty();
        $('.c').empty();
        $('.d').empty();
        countdownTimer.reset();
        $('.questions').append("<p>" + items.question[i] + "</p>");
        $('.a').append(items.A[i]);
        $('.b').append(items.B[i]);
        $('.c').append(items.C[i]);
        $('.d').append(items.D[i]);

        $('.button').on('click', function() {

            countdownTimer.start();

            if ($(this).val() == items.rightAnswer[i]) {

                    r++;
                    console.log(r);
                    console.log(w);
                    score();
                    countdownTimer.reset();

            } else if (countdownTimer.time == 0) {

                    w++;
                    console.log(r);
                    console.log(w);
                    score();
                    countdownTimer.reset();

            } else {

                w++;
                console.log(r);
                console.log(w);
                score();
                countdownTimer.reset();

            }

            });

        }
    }
    
start();
});