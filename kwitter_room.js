function getData()
 {
     firebase.database().ref("/").on('value',
     function(snapshot)
 {  document.getElementById("output").innerHTML ="";
    snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
//Start code
<div class="form-group">
		  <label >User Name:</label>
		
		</div>
//End code
});});}
getData();

firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});