 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBr_8T7EF4tAv9JIj0m4LHJeh_ovrJSbEw",
  authDomain: "kwitter-39d07.firebaseapp.com",
  databaseURL: "https://kwitter-39d07-default-rtdb.firebaseio.com",
  projectId: "kwitter-39d07",
  storageBucket: "kwitter-39d07.appspot.com",
  messagingSenderId: "243545391004",
  appId: "1:243545391004:web:ada759187c01cfb67b5259"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";

    function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}
}

