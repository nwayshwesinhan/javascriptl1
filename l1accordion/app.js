var getacctitles = document.getElementsByClassName("acctitle");
// console.log(getacctitles); //HTML Collection cant looping
var getacccontents = document.querySelectorAll(".acccontent");
// console.log(getacccontent); //Node List

for(var x = 0 ; x < getacctitles.length; x++){
	// console.log(x); //0 1 2 3

	getacctitles[x].addEventListener('click',function(e){
		// console.log(e.target);//get their related element
		// console.log(this);

		this.classList.toggle("active");
		var getcontent = this.nextElementSibling; //h1 and acccontents are silbing
		// console.log(getcontent);
		

		if(getcontent.style.height){
			getcontent.style.height=null; //beware can't set 0
		}else{
			// console.log(getcontent.scrollHeight);
			getcontent.style.height=getcontent.scrollHeight +"px";
		}

	});

	if(getacctitles[x].classList.contains("active")){
		getacccontents[x].style.height = getacccontents[x].scrollHeight+"px";
	}

}
