function isDate(txtDate, separator) {
	var aoDate, // needed for creating array and object
	ms, // date in milliseconds
	month, day, year; // (integer) month, day and year
	// if separator is not defined then set '/'
	if (separator === undefined) {
		separator = '/';
	}
	// split input date to month, day and year
	aoDate = txtDate.split(separator);
	// array length should be exactly 3 (no more no less)
	if (aoDate.length !== 3) {
		return false;
	}
	// define month, day and year from array (expected format is m/d/yyyy)
	// subtraction will cast variables to integer implicitly
	month = aoDate[1] - 1; // because months in JS start from 0
	day = aoDate[0] - 0;
	year = aoDate[2] - 0;
	// test year range
	if (year < 1000 || year > 3000) {
		return false;
	}
	// convert input date to milliseconds
	ms = (new Date(year, month, day)).getTime();
	// initialize Date() object from milliseconds (reuse aoDate variable)
	aoDate = new Date();
	aoDate.setTime(ms);
	// compare input date and parts from Date() object
	// if difference exists then input date is not valid
	if (aoDate.getFullYear() !== year || aoDate.getMonth() !== month
			|| aoDate.getDate() !== day) {
		return false;
	}
	// date is OK, return true
	return true;
}

function dateValidate() {
	var value = document.getElementById('date').value;
	if (isDate(value, "-")) {

		document.getElementById("result").innerHTML = "<span style=\"color:green\">Date is valid<//span>";

	} else {
		document.getElementById("result").innerHTML = "<span style=\"color:red\">Date is invalid<//span>";

	}

}	