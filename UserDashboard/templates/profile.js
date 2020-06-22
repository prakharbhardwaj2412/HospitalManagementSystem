(function () {
	console.log(sessionStorage.getItem("patientData"));
	var patientData = JSON.parse(sessionStorage.getItem("patientData"));
	console.log(patientData);
	document.getElementById("r1").innerHTML = patientData.Name;
	// document.getElementById("r2").innerHTML = patientData.Name;
	document.getElementById("r3").innerHTML = patientData.Contact;
	document.getElementById("r4").innerHTML = patientData.Email;
	document.getElementById("r5").innerHTML = patientData.DOB;
	document.getElementById("r6").innerHTML = patientData.Weight;
	document.getElementById("r7").innerHTML = patientData.Height;
	document.getElementById("r8").innerHTML = patientData.BloodGroup;
	document.getElementById("r9").innerHTML = patientData.Address;




})();