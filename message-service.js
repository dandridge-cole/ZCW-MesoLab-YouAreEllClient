export default class MessageService {

	getAllMessages(){
		let request = new XMLHttpRequest();

		request.onload = function() {
			if (request.status >= 200 && request.status < 300) {
            console.log(JSON.parse(request.responseText)); 
        } else {
            console.log('Error: ' + request.status); 
        }
		};
        request.open("GET", "http://zipcode.rocks:8085/messages");

        request.send();
	}
}