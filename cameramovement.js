"use strict"

//document.getElementById('cam').setAttribute('position', {x: 7, y: 1.6, z: 1.8});
window.onload = function() {
	setTimeout(function(){
    //do what you need here

		document.getElementById('cam').setAttribute('animation', 'property: position; to: 0 1 3');
	}, 3000);


	setTimeout(function(){
    //do what you need here

		/*document.getElementById('cam').setAttribute('animation', 'property: position; to: 1.291 1 3.099');
		document.getElementById('cam').setAttribute('animation', 'property: rotation; to: -15.699 26.929 0');*/
		document.getElementById('fejtarto').setAttribute('animation', 'property: rotation; to: -90 0 0');
	}, 7000);
};