function addroom(){
    room_name = document.getElementById("add_room").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names );
    row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
    getData();