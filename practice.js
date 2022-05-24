var firebaseConfig = {
    apiKey: "AIzaSyAaChBcti-CUhpYnQnMDQorrhU5jme-F5g",
    authDomain: "roary-38a49.firebaseapp.com",
    databaseURL: "https://roary-38a49-default-rtdb.firebaseio.com",
    projectId: "roary-38a49",
    storageBucket: "roary-38a49.appspot.com",
    messagingSenderId: "1040663095660",
    appId: "1:1040663095660:web:0a5f3feb12c38b8d88ab49"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function AddUser()
{
    User_Name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(User_Name).update({
    purpose:"adding user"
    });
}