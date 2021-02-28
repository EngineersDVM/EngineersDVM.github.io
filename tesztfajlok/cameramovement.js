"use strict"

//document.getElementById('cam').setAttribute('position', {x: 7, y: 1.6, z: 1.8});
window.onload = function() {
	setTimeout(function(){
    //do what you need here

		document.getElementById('cam').setAttribute('animation', 'property: position; to: 0 1 3');
	}, 3000);


	setTimeout(function(){
    //do what you need here

		//document.getElementById('cam').setAttribute('animation', 'property: position; to: 1.291 1 3.099');
		//document.getElementById('cam').setAttribute('animation', 'property: rotation; to: -15.699 26.929 0');

		document.getElementById('fejtarto').setAttribute('animation', 'property: rotation; to: 0 105 0');
	}, 9000);
	setTimeout(function(){
    //do what you need here

		//document.getElementById('cam').setAttribute('animation', 'property: position; to: 1.291 1 3.099');
		//document.getElementById('cam').setAttribute('animation', 'property: rotation; to: -15.699 26.929 0');

	document.getElementById('maincow').setAttribute('animation', 'property: position; to: -1.150 -0.086 2.980');
	document.getElementById('cam').setAttribute('animation', 'property: position; to: 3.5 1 7');
	}, 12000);
};