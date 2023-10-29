function PVON() {
	var prn1 = document.getElementById("first").value;
	var prn2 = document.getElementById("second").value;
	if (prn1.trim().length == 0 || prn2.trim().length == 0) {
		document.getElementById("pvon").innerHTML = "";
	} else {
		if (prn1.toLowerCase() == "he" && prn2.toLowerCase() == "him" || prn1.toLowerCase() == "she" && prn2.toLowerCase() == "her") {
				document.getElementById("pvon").innerHTML = prn1 + "/" + prn2 + " is valid!";
		} else {
			if (prn1.toLowerCase() == "ge" && prn2.toLowerCase() == "gim") {
				document.getElementById("pvon").innerHTML = prn1 + "/" + prn2 + " is valid ;)";
			} else {
				document.getElementById("pvon").innerHTML = prn1 + "/" + prn2 + " is NOT valid!!!";
			}
		}
	}
}
function GVON() {
	var gnd = document.getElementById("gender").value;
	console.log(gnd.toLowerCase());
	if (gnd.trim().length == 0) {
		document.getElementById("gvon").innerHTML = "";
	} else {
		if (gnd.toLowerCase() == "male" || gnd.toLowerCase() == "female") {
			document.getElementById("gvon").innerHTML = gnd + " is valid!";
		} else {
			if (gnd.toLowerCase() == "gemale") {
				document.getElementById("gvon").innerHTML = gnd + " is valid ;)";
			} else {
				document.getElementById("gvon").innerHTML = gnd + " is NOT valid!!!";
			}
		}
	}
}
