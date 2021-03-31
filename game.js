var numsq=6;
var color =generaterandomcolor(numsq);
var square= document.querySelectorAll(".square");
var picked=pickedcolor();
var colordis= document.getElementById("colordis");
var msg=document.getElementById("msg");
var h1=document.querySelector("h1");
var reset=document.getElementById("reset");
var mode=document.querySelectorAll(".mode");

init();

function init(){
	//mode listeners
	for (var i = 0; i < mode.length; i++) {
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
	this.textContent==="EASY" ? numsq=3 : numsq=6;
	resetmode();
});
}

//sqaure listeners
for (var i=0; i<square.length; i++) {

	//add click listeners
	square[i].addEventListener("click", function(){
		
		var clicked= this.style.backgroundColor;
		if(clicked ===picked){
			msg.textContent="correct";
			changecolor(clicked);
			h1.style.backgroundColor=clicked;
			reset.textContent="play again?";
		}
		else{
			this.style.backgroundColor="#232323";
			msg.textContent="try again";
		}

	});
}
}

function resetmode(){
	color=generaterandomcolor(numsq);
	//pick a new color
	picked=pickedcolor();
	//change colordis to match picked color
	colordis.textContent=picked;
	reset.textContent="New colors";
	//remove try again
	msg.textContent="";
	//change color of square
	for (var i=0; i<square.length; i++) {
		if(color[i]){
			square[i].style.display="block";
			square[i].style.backgroundColor=color[i];
		}
		else{
			square[i].style.display="none";
		}
	}
	h1.style.backgroundColor="steelblue";
}


reset.addEventListener("click",function(){
	resetmode();
})

function changecolor(color){
	for (var i = 0; i < square.length; i++) {
	square[i].style.backgroundColor=color;
	}
}

function pickedcolor(){
	var random=Math.floor(Math.random()*color.length); 
	return color[random];
}

function generaterandomcolor(num){
	var arr=[];
	for (var i = 0; i < num; i++) {
	arr.push(randomcolor())	
	}
	return arr;
}

function randomcolor(){
	var r=Math.floor(Math.random()*255);
	var g=Math.floor(Math.random()*255);
	var b=Math.floor(Math.random()*255);
	return "rgb(" + r +", " + g +", " + b +")";
}