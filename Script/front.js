let head = document.getElementById("head");
head.addEventListener("mouseover", function() {
    document.getElementById("vid").classList.add('active');
    document.getElementById("aside").classList.add('blur');
});
head.addEventListener("mouseout", function() {
    document.getElementById("vid").classList.remove('active');
    document.getElementById("aside").classList.remove('blur');
});

document.getElementById("logInGoogle").onclick = function(){
    document.getElementById("firstLogIn").classList.add('active');
};
document.getElementById("close1").onclick = function(){
    document.getElementById("firstLogIn").classList.remove('active');
};
document.getElementById("close2").onclick = function(){
    document.getElementById("firstLogIn2").classList.remove('active');
};
document.getElementById("goBack").onclick = function(){
    document.getElementById("firstLogIn2").classList.remove('active');
    document.getElementById("firstLogIn").classList.add('active');
};
document.getElementById("next").onclick = function(){
    document.getElementById("firstLogIn").classList.remove('active');
    document.getElementById("firstLogIn2").classList.add('active');
};

let typeW = document.getElementById("attentionSeeker");
let text = "Hover above only if you can confront the absolute truth.";
for(var i=0; i<text.length;i++){
    let x = text[i];
    if (x==' '){x="\u00A0";}
    setTimeout(function setTimeout() {
        typeW.innerText+=x;
      }, i * 100)
}