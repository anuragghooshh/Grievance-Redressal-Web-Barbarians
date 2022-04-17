document.getElementById("raise").onclick = function () {
    document.getElementById("raiseIssue").classList.add('active');
    document.getElementById("dim").classList.add('active');
};
document.getElementById("close1").onclick = function () {
    document.getElementById("raiseIssue").classList.remove('active');
    document.getElementById("dim").classList.remove('active');
};

document.getElementById("listOfAdmin").onclick = function () {
    document.getElementById("listAdmins").classList.add('active');
    document.getElementById("dim").classList.add('active');
};
document.getElementById("close2").onclick = function () {
    document.getElementById("listAdmins").classList.remove('active');
    document.getElementById("dim").classList.remove('active');
};

document.getElementById("listOfIssues").onclick = function () {
    document.getElementById("listIssues").classList.add('active');
    document.getElementById("dim").classList.add('active');
};
function close4(){
    document.getElementById("listIssues").classList.remove('active');
    document.getElementById("dim").classList.remove('active');
}

document.getElementById("listOfTeach").onclick = function () {
    document.getElementById("listTeachers").classList.add('active');
    document.getElementById("dim").classList.add('active');
};
document.getElementById("close3").onclick = function () {
    document.getElementById("listTeachers").classList.remove('active');
    document.getElementById("dim").classList.remove('active');
};

document.getElementById("listOfStudents").onclick = function () {
    document.getElementById("listStudents").classList.add('active');
    document.getElementById("dim").classList.add('active');
};
document.getElementById("close5").onclick = function () {
    document.getElementById("listStudents").classList.remove('active');
    document.getElementById("dim").classList.remove('active');
};

UID = null;
var listOfIssue = [];
var listOfAdmin = [];
var listOfStudents = [];
var listOfTeachers = [];
auth.onAuthStateChanged(user => {
    if (user) {
        loadPage(user.uid)
        UID = user.uid;
    } else
        location.replace("index.html");
});
function postIssue() {
    var uid = UID;
    if (uid == null) {
        alert("Somethign went wrong, please reload the page!");
        return;
    }
    var name = document.getElementById("raiseename").value;
    var phone = document.getElementById("enrollmentNo").value;
    var subject = document.getElementById("issueSubject").value;
    var description = document.getElementById("issueDescription").value;
    if (name.length == 0 || phone.length == 0)
        alert("Name and phone cannot be empty");
    else if (phone.length != 10)
        alert("Invalid phone number");
    else if (subject.length == 0)
        alert("Subject empty!");
    else if (description.length == 0)
        alert("description empty!");
    else if (description.trim().length < 20)
        alert("description too short!");
    else {
        var time = Math.floor(Date.now() / 1000);
        database.ref("Users/" + uid + "/Issue").child(time).set({
            authKey: uid,
            issueDescription: description,
            issueRaisedTimeStamp: time,
            issueSolved: false,
            issueSolvedTimeStamp: 0,
            issueSubject: subject,
            personName: name,
            phoneNumber: phone
        });
        document.getElementById("close1").click();
    }
}
function loadPage(uid) {
    database.ref("Users/" + uid + "/userType").once("value", function (snapshot) {
        document.getElementById("userType").innerHTML = snapshot.val();
        if (snapshot.val() == "Admin" || snapshot.val() == "Teacher")
            document.getElementById("raise").style.display = "none";
    });
    database.ref("Users/" + uid).once("value", function (snapshot) {
        var user = snapshot.val();
        document.getElementById("raiseename").value = user.Data.name;
        document.getElementById("enrollmentNo").value = user.Data.phone;
    });
    database.ref("Users").on("value", function (snapshot) {
        document.getElementById("issueList").innerHTML = "";
        document.getElementById("listIssues").innerHTML = "<img src=\"Resources/close.svg\" class=\"closebtn\" onclick=\"close4()\">";
        listOfIssue = [];
        document.getElementById("listAllAdmins").innerHTML = "";
        listOfAdmin = [];
        document.getElementById("listAllTeachers").innerHTML = "";
        listOfStudents = [];
        document.getElementById("listAllStudents").innerHTML = "";
        listOfTeachers = [];
        snapshot.forEach(user => {
            if (user.hasChild("Issue")) {
                user.child("Issue").forEach(details => {
                    listOfIssue.push(details.val());
                });
            }
            if (user.val().userType == "Admin")
                listOfAdmin.push(user.val());
            if (user.val().userType == "Teacher")
                listOfTeachers.push(user.val());
            if (user.val().userType == "Student")
                listOfStudents.push(user.val());
        });
        for (i = 0, count = 0; i < listOfIssue.length && count < 10; ++i) {
            var issue = listOfIssue[i];
            var statusHeading = "";
            if (issue.issueSolved)
                continue;
            else {
                statusHeading = "<h2 id=\"status2\">Unsolved</h2>";
                ++count;
            }
            const div = document.createElement("div");
            div.classList.add("issue");
            div.innerHTML = "<h1 id=\"issueTitle\">" + issue.issueSubject + "</h1>" +
                "<p id=\"issueDesc\">" + issue.issueDescription + "</p>" +
                "<div class=\"finisher\"><div>" +
                "<h2>Raised By</h2>" +
                "<h2 class=\"raiseeName\" id=\"raiseeName\">&nbsp" + issue.personName + ",&nbsp" +
                + issue.phoneNumber + "</h2>" +
                "</div>" + statusHeading + "</div>";
            document.getElementById("issueList").appendChild(div);
        } // load main list of issues
        for (i = 0; i < listOfIssue.length; ++i) {
            var issue = listOfIssue[i];
            var statusHeading = "";
            if (issue.issueSolved)
                statusHeading = "<h2 id=\"status1\">Solved</h2>";
            else
                statusHeading = "<h2 id=\"status2\">Unsolved</h2>";
            const div = document.createElement("div");
            div.classList.add("issue");
            div.innerHTML = "<h1 id=\"issueTitle\">" + issue.issueSubject + "</h1>" +
                "<p id=\"issueDesc\">" + issue.issueDescription + "</p>" +
                "<div class=\"finisher\"><div>" +
                "<h2>Raised By</h2>" +
                "<h2 class=\"raiseeName\" id=\"raiseeName\">&nbsp" + issue.personName + ",&nbsp" +
                + issue.phoneNumber + "</h2>" +
                "</div>" + statusHeading + "</div>";
            document.getElementById("listIssues").appendChild(div);
        } // load all issue in specified section
        for (i = 0; i < listOfAdmin.length; ++i) {
            var admin = listOfAdmin[i];
            const div = document.createElement("div");
            div.classList.add("issue");
            div.innerHTML = "<h1 id=\"issueTitle\">" + admin.Data.name + "</h1>" +
                "<p id=\"issueDesc\">" + admin.Data.phone + "</p>" +
                "<div class=\"finisher\"><div>" +
                "<h2>ID:</h2>" +
                "<h2 class=\"raiseeName\" id=\"raiseeName\">&nbsp" + admin.Data.employeeID + ",&nbsp" +
                admin.Data.department + "</h2>";
            document.getElementById("listAllAdmins").appendChild(div);
        } // load all admins
        for (i = 0; i < listOfTeachers.length; ++i) {
            var teacher = listOfTeachers[i];
            const div = document.createElement("div");
            div.classList.add("issue");
            div.innerHTML = "<h1 id=\"issueTitle\">" + teacher.Data.name + "</h1>" +
                "<p id=\"issueDesc\">" + teacher.Data.phone + "</p>" +
                "<div class=\"finisher\"><div>" +
                "<h2>ID:</h2>" +
                "<h2 class=\"raiseeName\" id=\"raiseeName\">&nbsp" + teacher.Data.employeeID + ",&nbsp" +
                teacher.Data.subject + "</h2>";
            document.getElementById("listAllTeachers").appendChild(div);
        } // load all teachers
        for (i = 0; i < listOfStudents.length; ++i) {
            var student = listOfStudents[i];
            const div = document.createElement("div");
            div.classList.add("issue");
            div.innerHTML = "<h1 id=\"issueTitle\">" + student.Data.name + "</h1>" +
                "<p id=\"issueDesc\">Phone: " + student.Data.phone + "</p>" +
                "<p id=\"issueDesc\">Stream: " + student.Data.stream + "</p>" +
                "<p id=\"issueDesc\">Section: " + student.Data.section + "</p>" +
                "<p id=\"issueDesc\">Roll No.: " + student.Data.roll + "</p>" +
                "<p id=\"issueDesc\">Year: " + student.Data.inYear + "-" + student.Data.outYear + "</p>" +
                "<p id=\"issueDesc\">Enrollment No.: " + student.Data.enrolmentNumber + "</p>" +
                "<p id=\"issueDesc\">Registration No.: " + student.Data.registrationNumber + "</p>";
            document.getElementById("listAllStudents").appendChild(div);
        } // load all students
    });
};
document.getElementById("logOut").onclick = function () {
    auth.signOut().then(() => {
        location.replace("index.html");
    }).catch((error) => {
        alert("Something went wrong, please try again!");
        console.log(error);
    });
};