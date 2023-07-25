
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, doc, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9xWDg2qFQdOz0XaWtFfw90cnuLVxih-o",
  authDomain: "firestore-todo-app-da00e.firebaseapp.com",
  projectId: "firestore-todo-app-da00e",
  storageBucket: "firestore-todo-app-da00e.appspot.com",
  messagingSenderId: "695545540689",
  appId: "1:695545540689:web:91e5130a98e5281760c870",
  measurementId: "G-1J7DCHZGQ6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

let userArr = [];


userArr = JSON.parse(localStorage.getItem('user'))

let butn = document.getElementById("butn")

butn.addEventListener("click", function () {

  var enterData = document.getElementById('todo').value


  if (enterData == '') {

    alert("Input field cannot be blank")

  }

  // else {

  //   let show = document.getElementById('show')
  //   let li = document.createElement('li')
  //   show.appendChild(li)
  //   li.textContent = enterData

  //   let a = document.createElement('a');
  //   a.innerHTML = "\u00d7";
  //   a.href = "javascript:void(0)"
  //   a.className = "remove"
  //   li.appendChild(a)

  //   //    localStorage      

  //   // userArr.push({ 'name': enterData })
  //   localStorage.setItem("user", JSON.stringify(userArr))

  // }

  document.getElementById('todo').value = ""

  let btn = document.querySelector('ul');
  btn.addEventListener('click', function (e) {
    let show = document.getElementById('show')
    let li = e.target.parentElement
    show.removeChild(li)
  }
  )

  savMsg(enterData)
})

async function savMsg(enterData) {

  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: enterData,

    });
    // console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    // console.error("Error adding document: ", e);
  }

  getData()

}



let display = document.querySelector(".getingData")


async function getData() {
  
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    
    let frst = `<div>${doc.data().first}<div>`
   
    display.innerHTML += frst
    //  renderData()   
    
    console.log(display)
    
  })


};




// setTimeout(() => {
  
// }, 3000);



