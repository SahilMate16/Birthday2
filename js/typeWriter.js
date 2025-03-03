
let i = 0;

let text1 = "Happy Birthday Ruchii..💌🥳[May all your wishes Comes true]..!I Wish You Achieve All Things That You Want In Your Life..";
let text2 = " Zalya tya junya goshti tuza past madhle sodd tyla chance ghe ani samor jaycha praytna kr..tu tycha peksha chan ek deserve krte chance de swatala bss [Leave behind what no longer serves, embrace the joy that you deserve!🌟]..Tuza Past ha Ek Lesson Hota ani Tuza Future ha yenara Gift so Step Out kr with Confidence and let your sprit lift..💝🫶";
let text3 = "";
let speed = 500;

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
