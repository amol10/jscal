$("#start").click(function() {
	console.log("start");
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
});

$("#submit").click(function() {
	console.log("submit");
	var guess = parseInt($("#answer").val());
	console.log("guess: " + guess);
	var correct_ans = parseInt($("#h_answer").text());
	console.log("correct ans: " + correct_ans);
	if (correct_ans == guess) {
		console.log("correct");
	} else {
		console.log("incorrect");
	}
	
});
