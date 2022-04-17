document.getElementById("raise").onclick = function(){
    document.getElementById("raiseIssue").classList.add('active');
};
document.getElementById("close1").onclick = function(){
    document.getElementById("raiseIssue").classList.remove('active');
};