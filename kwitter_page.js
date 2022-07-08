function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          like : 0,
          message : msg,
          name : user_name
    });
    document.getElementById("msg").value = "";
 
 }
