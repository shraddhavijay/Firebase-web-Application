// Initializing Firebase connection
var firebaseConfig = {
    apiKey: "AIzaSyCuBy1BA1RslttOA-Fgs_wK0x9_dsJdT70",
    authDomain: "sakec-nosql-95813.firebaseapp.com",
    databaseURL: "https://sakec-nosql-95813-default-rtdb.firebaseio.com",
    projectId: "sakec-nosql-95813",
    storageBucket: "sakec-nosql-95813.appspot.com",
    messagingSenderId: "848629320357",
    appId: "1:848629320357:web:cba362b33884ec34db5b4c",
    measurementId: "G-2H2Y47K8S3"
};
firebase.initializeApp(firebaseConfig);
var databaseReference = firebase.database().ref().child('Students_record');



//This code snippet is use to fetch names of Departments in realtime
var dropdown = document.getElementById("departmentDropdown");       
databaseReference.child('Departments').on('child_added', function (snapshot) {
    var dept_name = snapshot.val();
    var option = document.createElement("option");
    option.text = dept_name;
    option.val = snapshot.key;
    dropdown.add(option);
});


//This code snippet is used to insert department
function insertDepartment() {
    var departmentInputField = document.getElementById("departmentInputField").value;
    databaseReference.child('Departments').push(departmentInputField);
}


//This code snippet is used to insert student record
function insertStudent() {
    var dropdown = document.getElementById("departmentDropdown");     
    var s_name = document.getElementById("s_name").value;       
    var s_email = document.getElementById("s_email").value;       
    var s_mobile = document.getElementById("s_mobile").value;         
    deptId= dropdown.options[dropdown.selectedIndex].val;
    studID= databaseReference.child('Students').push({
        'name':s_name,
        'email':s_email,
        'mobile':s_mobile,
        'deptId':deptId
    }).getKey();
    databaseReference.child('Departments_Students').child(deptId).push(studID);
}

