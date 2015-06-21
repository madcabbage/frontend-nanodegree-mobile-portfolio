//document.body.scrollTop

self.addEventListener('message', function(e) {
	//console.log(e.data);
	//console.log(JSON.parse(e.data));
	var pizzaData = JSON.parse(e.data);
	for (var i = 0; i < pizzaData["items"].length; i++) {
		pizzaData["phases"][i] = Math.sin((1000 / 1250) + (i % 5));
		pizzaData["pos"][i] = pizzaData["items"][i].basicLeft + 100 * pizzaData["phases"][i];
	}
	self.postMessage(pizzaData);
}, false);