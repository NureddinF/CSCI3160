
function openAssignments(){

	var lec = document.getElementById("lecture-content");
	var quiz = document.getElementById("quiz-content");

	var assign = document.getElementById("assignment-content");
	var lab = document.getElementById("lab-content");
	var grad = document.getElementById("grade-content");
	var grad = document.getElementById("grade-content");

	lec.style.display = "none";
	quiz.style.display = "none";
	lab.style.display = "none";
	grad.style.display = "none"


	if(assign.style.display == "none"){

		assign.style.display = "block";
	} 
}

function openLectures(){

	var lec = document.getElementById("lecture-content");
	var quiz = document.getElementById("quiz-content");

	var assign = document.getElementById("assignment-content");
	var lab = document.getElementById("lab-content");
	var grad = document.getElementById("grade-content");


	assign.style.display = "none";
	quiz.style.display = "none";
	lab.style.display = "none";
	grad.style.display = "none"


	if(lec.style.display == "none"){

		lec.style.display = "block";
	} 
}


function openQuizzes(){

	var lec = document.getElementById("lecture-content");
	var quiz = document.getElementById("quiz-content");

	var assign = document.getElementById("assignment-content");
	var lab = document.getElementById("lab-content");
	var grad = document.getElementById("grade-content");


	lec.style.display = "none";
	assign.style.display = "none";
	lab.style.display = "none";
	grad.style.display = "none"

	if(quiz.style.display == "none"){

		quiz.style.display = "block";
	} 
}

function openLabs(){

	var lec = document.getElementById("lecture-content");
	var quiz = document.getElementById("quiz-content");

	var assign = document.getElementById("assignment-content");
	var lab = document.getElementById("lab-content");
	var grad = document.getElementById("grade-content");

	grad.style.display = "none"
	lec.style.display = "none";
	quiz.style.display = "none";
	assign.style.display = "none";

	if(lab.style.display == "none"){

		lab.style.display = "block";
	}
}

function openGrades(){

	var lec = document.getElementById("lecture-content");
	var quiz = document.getElementById("quiz-content");

	var assign = document.getElementById("assignment-content");
	var lab = document.getElementById("lab-content");
	var grad = document.getElementById("grade-content");
	
	grad.style.display = "none"
	lec.style.display = "none";
	quiz.style.display = "none";
	lab.style.display = "none";
	assign.style.display = "none"


	if(grad.style.display == "none"){

		grad.style.display = "block";
	} 

}

