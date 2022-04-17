document.getElementById("raise").onclick = function(){
    document.getElementById("raiseIssue").classList.add('active');
    document.getElementById("dim").classList.add('active');
};
document.getElementById("close1").onclick = function(){
    document.getElementById("raiseIssue").classList.remove('active');
    document.getElementById("dim").classList.remove('active');
};

document.getElementById("listOfAdmin").onclick = function(){
    document.getElementById("listAdmins").classList.add('active');
    document.getElementById("dim").classList.add('active');
};
document.getElementById("close2").onclick = function(){
    document.getElementById("listAdmins").classList.remove('active');
    document.getElementById("dim").classList.remove('active');
};

document.getElementById("listOfIssues").onclick = function(){
    document.getElementById("listIssues").classList.add('active');
    document.getElementById("dim").classList.add('active');
};
document.getElementById("close4").onclick = function(){
    document.getElementById("listIssues").classList.remove('active');
    document.getElementById("dim").classList.remove('active');
};

document.getElementById("listOfTeach").onclick = function(){
    document.getElementById("listTeachers").classList.add('active');
    document.getElementById("dim").classList.add('active');
};
document.getElementById("close3").onclick = function(){
    document.getElementById("listTeachers").classList.remove('active');
    document.getElementById("dim").classList.remove('active');
};

document.getElementById("listOfStudents").onclick = function(){
    document.getElementById("listStudents").classList.add('active');
    document.getElementById("dim").classList.add('active');
};
document.getElementById("close5").onclick = function(){
    document.getElementById("listStudents").classList.remove('active');
    document.getElementById("dim").classList.remove('active');
};