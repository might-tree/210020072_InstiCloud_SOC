const centralNode = new RTCPeerConnection(servers);
const clientNode = new RTCPeerConnection(servers);

try{
	const sendChannel = centralNode.createDataChannel('sendDataChannel');
	trace('Created send data channel');
}
catch(e){
	alert('Failed to create Data Channel');
	trace('createDataChannel failed with exception: ' + e.message);
}
const receiveChannel;
sendChannel.id=0
console.log("Channel id: " + sendChannel.id);

clientNode.ondatachannel = (event) => {
  receiveChannel = event.channel;
  receiveChannel.onmessage = onReceiveMessage;
  receiveChannel.onopen = onReceiveChannelStateChange;
  receiveChannel.onclose = onReceiveChannelStateChange;
};

function onReceiveMessage(event) {
  document.querySelector("textarea#send").value = event.data;
}

function onReceiveChannelStateChange() {
  var readyState = receiveChannel.readyState;
  trace('Receive channel state is: ' + readyState);
}

document.querySelector("button#send").onclick = () => {
  var data = document.querySelector("textarea#send").value;
  sendChannel.send(data);
};


