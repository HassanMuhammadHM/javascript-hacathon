import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

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


//  let googleclick = document.getElementsByClassName("login-div")[0]
//  console.log(googleclick)
// googleclick.addEventListener('click',()=>{
// console.log('click check')
// signInWithPopup(auth, provider)
//   .then((result) => {
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     const user = result.user;
//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
// console.log(errorMessage)   
//  const email = error.customData.email;
//    console.log(email)
//     const credential = GoogleAuthProvider.credentialFromError(error);
//    console.log(credential)
//   });
// })





let button = document.getElementById("button-login")
button.addEventListener("click", () => {
  console.log("btn is working")
  let email = document.getElementById("email").value
  let password = document.getElementById("password-login").value
  let fpw = document.getElementById("forget-pw");


  fpw.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("btn is working")
    //Here I'm doing reset password 
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent!");
        confirm("Password reset email sent!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, "=>>")
      });
    })



  // Login code and if condition
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;
      // console.log("user",user)
      console.log("user Detail=>", userCredential
      )

      if (userCredential.operationType === "signIn") {

        alert("Login successfully");
        // window.location.assign("/profile/profile.html")
window.location.assign("./Dashboard/dashboard.html")
      }
      else {
      }

    })
    .catch((error) => {
      const errorcode = error.code
      const errorMessage = error.message;
      console.log(errorcode)
      let invalidEmail = "auth/invalid-email";
      let wrongpw = "auth/wrong-password";
      let misspw = "auth/missing-password";
      if (errorcode === invalidEmail) {
        alert("Invalid Email ");
      }
      if (errorcode === wrongpw) {
        alert("Wrong password");
      }
      if (errorcode === misspw) {
        alert("write password");
      }

    });

  })
  




















