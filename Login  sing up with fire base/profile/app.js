import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getStorage, ref, uploadBytes, } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6fPHTKcVZkNIfWjIKbKWqsZej46-nZX4",
  authDomain: "hackathon-e46f2.firebaseapp.com",
  projectId: "hackathon-e46f2",
  storageBucket: "hackathon-e46f2.appspot.com",
  messagingSenderId: "414338316165",
  appId: "1:414338316165:web:a95f26c9ebef1d511536ec"
};





const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
let uploadImg = document.getElementById("uploadImage")
let input = document.getElementById("input")
let button = document.getElementById("btn")





input.addEventListener('change', (event) => {
  let selectedFile = event.target.files[0];
console.log(selectedFile.name , "upload picture in "
)
  if (selectedFile) {
    uploadImg.src = URL.createObjectURL(selectedFile);
    
    
    
    


  }
}
)

// upload image


button.addEventListener('click', function () {
  var selectedFile = input.files[0].name;
  if (selectedFile) {
   

    const imageRef = ref(storage, `profile/${selectedFile}`);

// 'file' comes from the Blob or File API
uploadBytes(imageRef, selectedFile).then((snapshot) => {
  console.log('Uploaded a blob or file!');
  alert("Picture has been Uploaded ")
});
  }
});















