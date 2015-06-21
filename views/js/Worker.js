self.addEventListener('reCalc', function(e) {
	self.postMessage(e.data);
	/*for (var i = 0; i < items.length; i++) {
		phases[i] = Math.sin((document.body.scrollTop / 1250) + (i % 5));
		pos[i] = items[i].basicLeft + 100 * phases[i];
	}*/
}, false);