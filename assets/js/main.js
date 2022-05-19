// MAGMAEPEKTIBO-PART
	document.getElementById('confirm-magmaepektibo').onclick = function() {

	var getValue = document.getElementById('mga-bahin').selectedOptions[0].value;
			
			if (getValue == '0') {
				document.getElementById('mga-bahin').classList.add("error");
				document.getElementById('hidden').classList.remove("hidden");
			}

			if (getValue == 2) {
				document.getElementById("hideBahin1").style.display = "revert";
				document.getElementById("hideBahin2").style.display = "revert";
			}
			if (getValue == 3) {
				document.getElementById("hideBahin1").style.display = "revert";
				document.getElementById("hideBahin2").style.display = "revert";
				document.getElementById("hideBahin3").style.display = "revert";
			}
	};

	document.getElementById('mga-bahin').onclick = function() {
		document.getElementById('mga-bahin').classList.remove("error");
		document.getElementById('hidden').classList.add("hidden");
		document.getElementById("hideBahin1").style.display = "none";
		document.getElementById("hideBahin2").style.display = "none";
		document.getElementById("hideBahin3").style.display = "none";
	};
	document.getElementById('clear-magmaepektibo').onclick = function() {
		document.getElementById('mga-bahin').classList.remove("error");
		document.getElementById('hidden').classList.add("hidden");
		document.getElementById("hideBahin1").style.display = "none";
		document.getElementById("hideBahin2").style.display = "none";
		document.getElementById("hideBahin3").style.display = "none";
	};
// MAGMAEPEKTIBO-PART


// KRISTOHANONG PAGKINABUHI

document.getElementById('confirm-kristohanong').onclick = function() {

var getValue = document.getElementById('mga-bahin-kristohanong').selectedOptions[0].value;
		
		if (getValue == '0') {
			document.getElementById('mga-bahin-kristohanong').classList.add("error");
			document.getElementById('hidden-kristohanong').classList.remove("hidden-kristohanong");
		}

		if (getValue == 2) {
			document.getElementById("hideBahin1-kristohanong").style.display = "revert";
			document.getElementById("hideBahin3-kristohanong").style.display = "revert";
		}
		if (getValue == 3) {
			document.getElementById("hideBahin1-kristohanong").style.display = "revert";
			document.getElementById("hideBahin2-kristohanong").style.display = "revert";
			document.getElementById("hideBahin3-kristohanong").style.display = "revert";
		}
};

	document.getElementById('mga-bahin-kristohanong').onclick = function() {
		document.getElementById('mga-bahin-kristohanong').classList.remove("error-kristohanong");
		document.getElementById('hidden-kristohanong').classList.add("hidden-kristohanong");
		document.getElementById("hideBahin1-kristohanong").style.display = "none";
		document.getElementById("hideBahin2-kristohanong").style.display = "none";
		document.getElementById("hideBahin3-kristohanong").style.display = "none";
	};
	document.getElementById('clear-kristohanong').onclick = function() {
		document.getElementById('mga-bahin-kristohanong').classList.remove("error-kristohanong");
		document.getElementById('hidden-kristohanong').classList.add("hidden-kristohanong");
		document.getElementById("hideBahin1-kristohanong").style.display = "none";
		document.getElementById("hideBahin2-kristohanong").style.display = "none";
		document.getElementById("hideBahin3-kristohanong").style.display = "none";
	};


// KRISTOHANONG PAGKINABUHI
