// Initialize students_record_Ref instance
var students_record_Ref = databaseRef.child('Students_record');


//This code snippet is use to fetch names of Departments in realtime
var dropdown = document.getElementById("departmentDropdown");
students_record_Ref.child('Departments').on('child_added', function (snapshot) {
	var option = document.createElement("option");
	option.text = snapshot.val();
	option.val = snapshot.key;
	dropdown.add(option);
});


//This code snippet is used to insert department
function insertDepartment() {
	var departmentInputField = document.getElementById("departmentInputField").value;
	students_record_Ref.child('Departments').push(departmentInputField);
}


//This code snippet is used to insert student record
function insertStudent() {
	var dropdown = document.getElementById("departmentDropdown");
	var s_name = document.getElementById("s_name").value;
	var s_email = document.getElementById("s_email").value;
	var s_mobile = document.getElementById("s_mobile").value;
	deptId = dropdown.options[dropdown.selectedIndex];
	studID = students_record_Ref.child('Students').push({
		'name': s_name,
		'email': s_email,
		'mobile': s_mobile,
		'deptId': deptId.val
	}).getKey();

	students_record_Ref.child('Departments_Students').child(deptId.text).push(studID);
}
