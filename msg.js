


var messages = [];
var button = document.getElementById('send-message-button');
button.addEventListener('click', sendMessage);



function addMessage(message); {
  messages.push(message);
  var div = document.createElement('div');
  div.textContent = message;
  document.getElementById('message-container').appendChild(div);
  
}

function sendMessage() {
  var input = document.getElementById('message-input');
  var message = input.value;
  addMessage(message);
  input.value = '';
}
document.getElementById('send-message-button').addEventListener('click', sendMessage);

function openImage(src, target) {
  var width = 600;
  var height = 400;
  var left = (screen.width - width) / 2;
  var top = (screen.height - height) / 2;
  var options = 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
  window.open(src, target, options);
}

var mySong=document.getElementById("mySong");
var icon=document.getElementById("icon");
var audio=document.getElementById("audio");

icon.onClick=function(){
audio.play();
};
icon.style.display ="block";

//playAudio(mySong.src);//
  //icon.src = "https://github.com/ravmon1726/ravmon/blob/main/giphy.gif?raw=true";//
}//


function playAudio(source) {
  document.getElementById('audio').src = source;
  document.getElementById('audio').style.display = 'block';
  document.getElementById('audio').play();
}


