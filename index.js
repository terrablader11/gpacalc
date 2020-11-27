//window.onload = function() {

	//}

var gpa = 0;
var coursecount = 0;
var realgpa = 0;

function updateScreen() {
	var cname = document.getElementById("cname").value;
	var ctype = document.getElementById("ctype").value;
	var cgrade1 = document.getElementById("grade1").value;
	var cgrade2 = document.getElementById("grade2").value;
	var table = document.getElementById("course-table");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	cell1.innerHTML = cname;
	cell2.innerHTML = ctype;
	cell3.innerHTML = cgrade1;
	cell4.innerHTML = cgrade2;
	if (cgrade1>=97) {
		if (ctype == "Level 1") {
			gpa = gpa + 4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 5
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 5.5
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 6
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 5.5
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade1>=94) {
		if (ctype == "Level 1") {
			gpa = gpa + 3.8
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 4.8
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 5.3
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 5.8
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 5.5
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade1>=90) {
		if (ctype == "Level 1") {
			gpa = gpa + 3.6
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 4.6
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 5.1
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 5.6
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 5.5
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade1>=87) {
		if (ctype == "Level 1") {
			gpa = gpa + 3.4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 4.4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 4.9
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 5.4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 4.9
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade1>=84) {
		if (ctype == "Level 1") {
			gpa = gpa + 3.2
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 4.2
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 4.7
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 5.2
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 4.9
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade1>=80) {
		if (ctype == "Level 1") {
			gpa = gpa + 3
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 4.5
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 5
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 4.9
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade1>=77) {
		if (ctype == "Level 1") {
			gpa = gpa + 2.8
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 3.8
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 4.3
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 4.8
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 4.3
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade1>=74) {
		if (ctype == "Level 1") {
			gpa = gpa + 2.6
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 3.6
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 4.1
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 4.6
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 4.3
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade1>=71) {
		if (ctype == "Level 1") {
			gpa = gpa + 2.4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 3.4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 3.9
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 4.4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 4.3
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade1==70) {
		if (ctype == "Level 1") {
			gpa = gpa + 2.2
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 3.2
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 3.7
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 4.2
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 4.3
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade1>=60) {
		if (ctype == "Dual Credit") {
			gpa = gpa + 3.7
			coursecount = coursecount + 1
			console.log(gpa);
		} else {
			gpa = gpa + 0
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else {
		gpa = gpa + 0
		coursecount = coursecount + 1
		console.log(gpa);
	}

	if (cgrade2>=97) {
		if (ctype == "Level 1") {
			gpa = gpa + 4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 5
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 5.5
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 6
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 5.5
			coursecount = coursecount + 1
			console.log(gpa);
			}
	} else if (cgrade2>=94) {
		if (ctype == "Level 1") {
			gpa = gpa + 3.8
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 4.8
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 5.3
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 5.8
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 5.5
			coursecount = coursecount + 1
			console.log(gpa);	
		}
	} else if (cgrade1>=90) {
		if (ctype == "Level 1") {
			gpa = gpa + 3.6
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 4.6
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 5.1
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 5.6
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 5.5
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade2>=87) {
		if (ctype == "Level 1") {
			gpa = gpa + 3.4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 4.4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 4.9
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 5.4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 4.9
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade2>=84) {
		if (ctype == "Level 1") {
			gpa = gpa + 3.2
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 4.2
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 4.7
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 5.2
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 4.9
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade2>=80) {
		if (ctype == "Level 1") {
			gpa = gpa + 3
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 4.5
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 5
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 4.9
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade2>=77) {
		if (ctype == "Level 1") {
			gpa = gpa + 2.8
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 3.8
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 4.3
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 4.8
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 4.3
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade2>=74) {
		if (ctype == "Level 1") {
			gpa = gpa + 2.6
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 3.6
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 4.1
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 4.6
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 4.3
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade2>=71) {
		if (ctype == "Level 1") {
			gpa = gpa + 2.4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 3.4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 3.9
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 4.4
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 4.3
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade2==70) {
		if (ctype == "Level 1") {
			gpa = gpa + 2.2
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "On-Level") {
			gpa = gpa + 3.2
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Honors, GT/Honors") {
			gpa = gpa + 3.7
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "AP/IB") {
			gpa = gpa + 4.2
			coursecount = coursecount + 1
			console.log(gpa);
		} else if (ctype == "Dual Credit") {
			gpa = gpa + 4.3
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else if (cgrade2>=60) {
		if (ctype == "Dual Credit") {
			gpa = gpa + 3.7
			coursecount = coursecount + 1
			console.log(gpa);
		} else {
			gpa = gpa + 0
			coursecount = coursecount + 1
			console.log(gpa);
		}
	} else {
		gpa = gpa + 0
		coursecount = coursecount + 1
		console.log(gpa);
	}}

function calculate(){ 
	realgpa = (gpa/coursecount).toFixed(3)
	console.log(realgpa);
	document.getElementById("gpaOutput").innerHTML = realgpa
}