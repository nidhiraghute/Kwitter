
 var firebaseConfig = {
      apiKey: "AIzaSyBGPEa8cg_qh2wErCWkd1x_KyhK2xznfN0",
      authDomain: "kwitter-80198.firebaseapp.com",
      databaseURL: "https://kwitter-80198-default-rtdb.firebaseio.com",
      projectId: "kwitter-80198",
      storageBucket: "kwitter-80198.appspot.com",
      messagingSenderId: "885936295957",
      appId: "1:885936295957:web:3e027e453f585d45f7be1c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.apiKey;
      Room_names = childKey;
       console.log("Room Name", Room_names);
       row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' ># "+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //End code
      });
      });
      }
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
