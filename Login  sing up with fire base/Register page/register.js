import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyD6fPHTKcVZkNIfWjIKbKWqsZej46-nZX4",
    authDomain: "hackathon-e46f2.firebaseapp.com",
    projectId: "hackathon-e46f2",
    storageBucket: "hackathon-e46f2.appspot.com",
    messagingSenderId: "414338316165",
    appId: "1:414338316165:web:a95f26c9ebef1d511536ec"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const provider = new GoogleAuthProvider();



// let googleclick = document.getElementsByClassName("login-div")[0]
// console.log(googleclick)
// googleclick.addEventListener('click',()=>{
// console.log('click check')
// signInWithPopup(auth, provider)
//  .then((result) => {
//    const credential = GoogleAuthProvider.credentialFromResult(result);
//    const token = credential.accessToken;
//    const user = result.user;
//  }).catch((error) => {
//    const errorCode = error.code;
//    const errorMessage = error.message;
// console.log(errorMessage)   
// const email = error.customData.email;
//   console.log(email)
//    const credential = GoogleAuthProvider.credentialFromError(error);
//   console.log(credential)
//  });
// })














let registerBtn = document.getElementById("register")
let fullName = document.getElementById("full-Name")
let email = document.getElementById("email")
let password = document.getElementById("password")
registerBtn.addEventListener("click", () => {
console.log("btn is working")

    let userData = {
        fullName: fullName.value,
        email: email.value,
        password: password.value
    }
    // console.log(userData);
    
        
createUserWithEmailAndPassword(auth, userData.email, userData.password)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Succefully Register");
    console.log(user)
    window.location.assign("../index.html")
})
.catch((error) => {
    const errorcode= error.code
    const errorMessage = error.message;
console.log(   errorcode )
// alert("write correct information")
let invalidEmail = "auth/invalid-email";
let useemail = "auth/email-already-in-use";
let invalidpw = "auth/weak-password";
let misspw = "auth/missing-password"
if (errorcode === invalidEmail) {
    alert("Invalid Email ");
}
if (errorcode === useemail) {
    alert("Email is already in use");
}
if (errorcode === invalidpw) {
    alert("Password is week");
}
if (errorcode === misspw) {
    alert("write password");
}



});
  });






