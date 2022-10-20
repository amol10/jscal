var quiz = function() {
	console.log("start");

	var total = parseInt($("#total").text());
	console.log("total: " + total);
	$("#total").text(total + 1);

	var arr = [];
	var max = 3;

	function gen_and_set() {
		var r = Math.floor(Math.random() * 100);
		$("#number").text(r);
		arr.push(r);
		max--;
		if (max > 0) {
			setTimeout(gen_and_set, 2000);
		} else {
			var sum = 0;
			arr.forEach(function(i) {
				sum += i;
			});
			console.log(sum);
			$("#h_answer").text(sum);
		}
	}
	
	gen_and_set();
}

$("#start").click(quiz);


$("#submit").click(function() {
	console.log("submit");
	var guess = parseInt($("#answer").val());
	console.log("guess: " + guess);
	var correct_ans = parseInt($("#h_answer").text());
	console.log("correct ans: " + correct_ans);
	if (correct_ans == guess) {
		console.log("correct");
		var prev_score = parseInt($("#correct").text());
		console.log("prev score: " + prev_score);
		$("#correct").text(prev_score + 1);
	} else {
		console.log("incorrect");
	}
	setTimeout(quiz, 1000);	
});
