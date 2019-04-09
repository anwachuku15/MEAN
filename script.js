$.get('https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple', music)
	function music(data) {
		console.log(data);

		let html = '';
		for(var i=0; i<data.results.length; i++){
			html += `<p class='question'>${data.results[i].question}</p>`;
			// html += `<button id='answerbtn'>Correct Answer</button>`;
			// DISPLAYS ALL POSSIBLE ANSWERS
			for(var j=0; j<data.results[i].incorrect_answers.length; j++){
				html += `<p class='answer'>${data.results[i].incorrect_answers[j]}`;
			}
			html += `<p class='answer'>${data.results[i].correct_answer}</p>`;

		}
		$('#header').after(html);
	}

	// function music(data) {
	// 	console.log(data);

	// 	let html = '';
	// 	let s = '';
	// 	let j = 2;
		
	// 	for(var i=0; i<data.results.length; i++){
	// 		html += `<p class='question'>${data.results[i].question}</p>`;
	// 		html += `<button id='answerbtn${i}'>Correct Answer</button>`;
	// 	}
	// 	$('#header').after(html);

	// 	if(s != ''){
	// 		return false;
			
	// 	}
	// 	else{
	// 		$(document).on('click', `#answerbtn${j}`, function(){
	// 			console.log('click');
	// 		s += `<p class='answer'>${data.results[j].correct_answer}</p>`;
	// 		$(`#answerbtn${j}`).after(s)
	// 		})
	// 	}	
	// }