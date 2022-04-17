auth.onAuthStateChanged((user) => {
    if (user)
        location.replace("dashboard.html");
    else {
        console.log("No user found");
    }
});
document.getElementById("logInGoogle").onclick = function () {
    const GoogleAuth = new firebase.auth.GoogleAuthProvider();
    GoogleAuth.setCustomParameters({
        prompt: 'select_account'
    });
    firebase.auth().signInWithPopup(GoogleAuth);
    // firebase.auth().signInWithRedirect(GoogleAuth);
}