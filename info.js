var $header, r = 20, g = 20, b = 20, lastChange = 0;

function startupStyling(){

	$header = $('.top-panel');

	$( window ).resize(onResize);
	onResize();


}

function onResize(){

}

function animate(){

	lastChange = (lastChange + (Math.random() > .5 ? 1 : 2)) % 3;

	if(lastChange == 0) {
		r = Math.floor((r + 1 * 50) % 70);
		console.log("r" + r);
	} else if(lastChange == 1) {
		g = Math.floor((g + 1 * 50) % 70);
		console.log("g" + g);
	} else if(lastChange == 2) {
		b = Math.floor((b + 1 * 50) % 70);
		console.log("B" + b);
	}

	var av = 255 - Math.floor((r + g + b) / 3);

	$header.animate({
		//color: "rgb(" + av + ", " + av + ", " + av + ")",
		backgroundColor: "rgba(" + r + ", " + g + ", " + b + ")"
	}, { 
		duration: 2500, 
		timing: "linear", 
		complete: function() {
			animate();
		},
	});
}