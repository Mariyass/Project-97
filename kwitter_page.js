//YOUR FIREBASE LINKS
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
    
var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like:0
      });
      document.getElementById("msg").value="";

}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
message_with_tag="<h4 class='message_h4'>"+message+"</h4>"
like_button="<button class='btn btn-waring' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like : "+like+"</span></button>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function logout(){
     localStorage.removeItem("user_name")
     localStorage.removeItem("room_name")
     window.location="index.html" 
}
function updatelike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updated_likes=Number(likes)+1;

      firebase.database().ref(room_name).child(message_id).update({
            like:updated_likes
      });
}