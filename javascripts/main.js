console.log("main.js");

let donorObject,
	donorForm = document.getElementById("walkAThon")
	nameInput = document.getElementById("nameInput"),
	emailInput = document.getElementById("emailInput"),
	donationInput = document.getElementById("donationInput"),
	singleDon = document.getElementById("singleDonBtn"),
	perLapDon = document.getElementById("perLapDonBtn"),
	formInputs = document.getElementsByClassName("inputBox"),
	donateBtn = document.getElementById("donate"),
	tableContainer = document.getElementById("table-container"),
	donorTable = document.getElementById("table-of-donors");

var donorInfo = ((orgdonorInfo) => {
	return orgdonorInfo
})(donorInfo || {});

var validateForm = () => {
	if(formInputs[0].validity.valid === false || formInputs[0].value === ""){
		alert("Please fill out Name field.");
	}else if (formInputs[1].value === false || formInputs[1].value === ""){
		alert("Please enter a valid e-mail.");
	} else if (formInputs[2].value === false || formInputs[2].value === ""){
		alert("Please enter a donation amount.");
	}else{
		return true;
	}
}

function createObj(name, email, donation, donationType) {
	this.name = name;
	this.email = email;
	this.donation = donation;
	this.donationType = donationType;
}

var checkedBtn = () => {
	if (singleDon.checked) {
		return singleDon.value
	}else{
		return perLapDon.value
	}
}

var addToTable = (donor) => {
	donorTable.innerHTML +=`<tr class="row">
					<td class="col-lg-3">${donor.name}</td>
					<td class="col-lg-3">${donor.email}</td>
					<td class="col-lg-2">${donor.donation}</td>
					<td class="col-lg-4">${donor.donationType}</td>
				</tr>`
}


donorInfo.getDonors().forEach(function(element) {
	addToTable(element);
});

donate.addEventListener("click", function(){
	if (validateForm() === true) {
		donorObj = new createObj(formInputs[0].value, formInputs[1].value, formInputs[2].value, checkedBtn());
		donorInfo.addDonor(donorObj);
		addToTable(donorObj);
		walkAThon.reset();
	}
});

