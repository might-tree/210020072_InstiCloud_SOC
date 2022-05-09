// Questions
const Questions = [{
		id: 0,
		q: "Who is the Chairman of the Board of the Herjavec-Fishtech merger group?",
		a: [{ text: "Phil Venables", isCorrect: false },
			{ text: "Gary Fish", isCorrect: true },
			{ text: "Robert Herjavec", isCorrect: false },
			{ text: "Bret Arsenault", isCorrect: false }
		]

	},
	{
		id: 1,
		q: "Which club conducts SoC?",
		a: [{ text: "Google@IITB", isCorrect: false, isSelected: false },
			{ text: "DevCom", isCorrect: false },
			{ text: "Math and Physics Club", isCorrect: false },
			{ text: "Web and Coding Club", isCorrect: true }
		]

	},
	{
		id: 2,
		q: "Which is the most largely used cloud computing platform today?",
		a: [{ text: "Google Cloud", isCorrect: false },
			{ text: "Microsoft Azure", isCorrect: false },
			{ text: "Amazon Web Services Cloud Compute", isCorrect: true },
			{ text: "None of these", isCorrect: false }
		]
		
	},
	{
		id: 3,
	}
]


function finish() {
	document.write("You scored " + score +"/3!");
}

var start = true;
var score = 0

function iterate(id) {

	var result = document.getElementsByClassName("result");
	result[0].innerText = "";

	const question = document.getElementById("question");


	question.innerText = Questions[id].q;

	const option1 = document.getElementById('op1');
	const option2 = document.getElementById('op2');
	const option3 = document.getElementById('op3');
	const option4 = document.getElementById('op4');


	option1.innerText = Questions[id].a[0].text;
	option2.innerText = Questions[id].a[1].text;
	option3.innerText = Questions[id].a[2].text;
	option4.innerText = Questions[id].a[3].text;


	option1.value = Questions[id].a[0].isCorrect;
	option2.value = Questions[id].a[1].isCorrect;
	option3.value = Questions[id].a[2].isCorrect;
	option4.value = Questions[id].a[3].isCorrect;

	var selected = "";


	option1.addEventListener("click", () => {
		option1.style.backgroundColor = "white";
		option2.style.backgroundColor = "lightgreen";
		option3.style.backgroundColor = "lightgreen";
		option4.style.backgroundColor = "lightgreen";
		selected = option1.value;
		//if(selected==true){
		//	option1.style.backgroundColor = "lightgreen";
		//}
		//else{
		//	option1.style.backgroundColor = "red";
		//}
	})


	option2.addEventListener("click", () => {
		option1.style.backgroundColor = "lightgreen";
		option2.style.backgroundColor = "white";
		option3.style.backgroundColor = "lightgreen";
		option4.style.backgroundColor = "lightgreen";
		selected = option2.value;
	})


	option3.addEventListener("click", () => {
		option1.style.backgroundColor = "lightgreen";
		option2.style.backgroundColor = "lightgreen";
		option3.style.backgroundColor = "white";
		option4.style.backgroundColor = "lightgreen";
		selected = option3.value;
	})


	option4.addEventListener("click", () => {
		option1.style.backgroundColor = "lightgreen";
		option2.style.backgroundColor = "lightgreen";
		option3.style.backgroundColor = "lightgreen";
		option4.style.backgroundColor = "white";
		selected = option4.value;
	})


	const evaluate = document.getElementsByClassName("evaluate");

	// Evaluate method
	evaluate[0].addEventListener("click", () => {
		if (selected == "true") {
			if(score<3&&id<=2)
				score++;
			//answerContainers[Questions[id].a[0]].style.color = 'lightgreen';
			result[0].innerHTML = "Correct!";
			result[0].style.color = "green";
		} else {
			//answerContainers[Questions[id].a[0]].style.color = 'lightgreen';
			result[0].innerHTML = "Wrong!";
			result[0].style.color = "red";
		}
	})
}

if (start) {
	iterate("0");
}

const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
	start = false;
	if (id < 2) {
		id++;
		iterate(id);
		console.log(id);
	}
	else
		finish();

})
