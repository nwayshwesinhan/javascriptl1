// console.log('hi');

var getmodal = document.getElementById("singupmodal");
var getbtnsignup = document.getElementById("btn-signup");
var getbtnclose = document.querySelector(".btn-close");
var getbtnfullscreen = document.getElementById('btn-fullscreen');
var getbtnclosescreen = document.getElementById('btn-closescreen');

getbtnsignup.addEventListener('click',function(){
	getmodal.style.display="block";
});

getbtnclose.addEventListener('click',function(){
	getmodal.style.display="none";
});

window.onclick = function(e){
	// console.log(e.target);

	if(e.target == getmodal){
		getmodal.style.display = "none";
	}
}

var getde = document.documentElement;
// console.log(getde);

getbtnfullscreen.addEventListener('click',function(){

	if(getde.requestFullscreen){
		getde.requestFullscreen();
	}else if(getde.msRequestFullScreen){
		getde.msRequestFullScreen();
	}else if(getde.webkitRequestFullScreen){
		getde.webkitRequestFullScreen();
	}

	getbtnclosescreen.style.display = "inline-block";

});


getbtnclosescreen.addEventListener('click',function(){

	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.msExitFullScreen){
		document.msExitFullScreen();
	}else if(document.webkitExitFullScreen){
		document.webkitExitFullScreen();
	}

	getbtnclosescreen.style.display = "none";

});