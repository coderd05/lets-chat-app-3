var firebaseConfig = {
      apiKey: "AIzaSyDHmL5ZUmjkxSwcZL5lHRs5O7HdMO6Y3NA",
      authDomain: "kwitter-da69a.firebaseapp.com",
      databaseURL: "https://kwitter-da69a-default-rtdb.firebaseio.com",
      projectId: "kwitter-da69a",
      storageBucket: "kwitter-da69a.appspot.com",
      messagingSenderId: "821991743864",
      appId: "1:821991743864:web:a0e4f3d71a15431dcba88d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;
      function addRoom()
      {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
})
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html"
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-" +Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}