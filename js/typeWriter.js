
let i = 0;

let text1 = "Happy Birthday Ruchii..💌🥳[May all your wishes Comes true]";
let text2 = "I Wish You Achieve All Things That You Want In Your Life";
let text3 = "Today is the Big Day."
let speed = 100;

function typeWriter(text, para){
	

	if(ok == 3){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		if(ok == 1){
			i = 0;
		}
		
		ok += 1;
		// let i = 0;
	}
	
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt2");
		}
		else{
			typeWriter(text3, "txt3");
		}
	}, 100);
//};
