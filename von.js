function PVON() {
	var prn1 = document.getElementById("first").value;
	var prn2 = document.getElementById("second").value;
	if (prn1.trim().length == 0 || prn2.trim().length == 0) {
		document.getElementById("pvon").innerHTML = "";
	} else {
		if (prn1.trim().toLowerCase() == "he" && prn2.trim().toLowerCase() == "him" || prn1.trim().toLowerCase() == "she" && prn2.trim().toLowerCase() == "her") {
				document.getElementById("pvon").innerHTML = prn1 + "/" + prn2 + " is valid!";
		} else {
			if (prn1.trim().toLowerCase() == "ge" && prn2.trim().toLowerCase() == "gim") {
				document.getElementById("pvon").innerHTML = prn1 + "/" + prn2 + " is valid ;)";
			} else {
				document.getElementById("pvon").innerHTML = prn1 + "/" + prn2 + " is NOT valid!!!";
			}
		}
	}
}
function GVON() {
	var gnd = document.getElementById("gender").value;
	if (gnd.trim().length == 0) {
		document.getElementById("gvon").innerHTML = "";
	} else {
		if (gnd.trim().toLowerCase() == "male" || gnd.trim().toLowerCase() == "female") {
			document.getElementById("gvon").innerHTML = gnd + " is valid!";
		} else {
			if (gnd.trim().toLowerCase() == "gemale") {
				document.getElementById("gvon").innerHTML = gnd + " is valid ;)";
			} else {
				document.getElementById("gvon").innerHTML = gnd + " is NOT valid!!!";
			}
		}
	}
}
