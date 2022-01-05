var room_name
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDEHNOktAOcwyEvMliS8cnJ3UDPIc5NGp8",
      authDomain: "kwitter-108e6.firebaseapp.com",
      databaseURL: "https://kwitter-108e6-default-rtdb.firebaseio.com",
      projectId: "kwitter-108e6",
      storageBucket: "kwitter-108e6.appspot.com",
      messagingSenderId: "860320717162",
      appId: "1:860320717162:web:4e342ede38add7100ced13"
    };
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !"

    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose: "adding room name "
          });
          window.location="kwitter_room.html"
    }
    

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id='"+ Room_names +"' onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}
getData();

function redirectToRoomName(room){
      localStorage.setItem("room_name",room)
      window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
}