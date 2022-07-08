function adduser(){
    username=document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
    window.location="kwitter_room.html";
}

function  redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter.html";
 
 }

 
 