export default class MessageService {

	getAllMessages() {
	    let request = new XMLHttpRequest();

	    // Setup our listener to process compeleted requests
	    request.onload = function() {
	        if (request.status >= 200 && request.status < 300) {
	            console.log(JSON.parse(request.responseText)); // 'This is the returned text.'
	        } else {
	            console.log('Error: ' + request.status); // An error occurred during the request.
	        }
	    };

	    request.open("GET", "http://zipcode.rocks:8085/messages");

	    request.send();
	}
}