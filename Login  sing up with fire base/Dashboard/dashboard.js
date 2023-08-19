import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getFirestore,collection, addDoc,getDocs } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyD6fPHTKcVZkNIfWjIKbKWqsZej46-nZX4",
    authDomain: "hackathon-e46f2.firebaseapp.com",
    projectId: "hackathon-e46f2",
    storageBucket: "hackathon-e46f2.appspot.com",
    messagingSenderId: "414338316165",
    appId: "1:414338316165:web:a95f26c9ebef1d511536ec"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let post_desc = document.getElementById("post_desc");
let post_title = document.getElementById("post_title");
let publish_btn = document.getElementById("Publish-btn");



publish_btn.addEventListener("click",async(e)=>{
e.preventDefault()
    console.log("publish btn is working")

let dataGet = {
    post_title:post_title.value,
    post_desc:post_desc.value
}
console.log(dataGet)


try {
    const docRef = await addDoc(collection(db, "users"), {
      ...dataGet
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

})
let getalldata = async()=>{
    const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id}=>`, doc.data());
});
}
getalldata()






















