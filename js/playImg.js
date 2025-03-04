var txt= document.getElementById("typeDiv");	
var msg = document.getElementById("msgTxt")
var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;


function showImage() {
    if (imageIndex < len) {
        myImage.setAttribute("src", imageArray[imageIndex]);
        myTxt.innerHTML = txtArray[imageIndex];
        imageIndex++;
    } else {
        clearInterval(showImageInterval); // Stop slideshow

        // Display ending message
        myTxt.innerHTML = 
            "🎉 Bass tuza krta mala kahi tri chan gift Dych Hota ki je Life-Long tuza sbt rahil ani maze kahi feelings je convey kraych hote tula..🎉<br><br>" + 
			"Tula adhich pasunch Mahit hota ki mi tuza premat ahe but tula Jevdha Mahit ahe mi Tya peksha khup Jast veda zalo ahe ..🫶 that I am deeply into You..!🤗<br><br>"+
			"Mahit ahe Tu Tyla Visru Nahi Shkt nahi Mi tula But kuthe tri tula step out kra lagel Ruchii ani he must ahe tuza krta ..Force nahi krt ahe but Suggest krt ahe ki try TO Move out and Find something better Fot You..<br>"+
			"bass shevtach bolto ki ...[I always be there for you bolnya sathi nahi bolate ahe shevat priyanta rahil.]..🩵🫂♾️ ..! sooo I Really wanted to be with you ..🫴🫴..<br>"+
			"Mi Last priyanta tuzi vaat baghel maza sbt yenya sathi tu ghe tula jevdha vel ghych ahe ..bass ek nehmi laksaht thevshil ki koni tri ahe tuza sathi jo tuza vedya sarkhi vaat baght ahe {💝I Love Ruchii Mana Pasun ..💓💓💌}<br>"+
			"Yeshil Maza Sbt...??🤞🤞✨ ani yacha uttar chi ghyi nahi ahe mala Armat dila tri chalel..bharpur vel ahe aplya jawal..🩵🫴🫴 <br><br>"+
			"✨jr kahi Chukich kinva Jasta Bollo asel tr Please mla maaf krshil🙏🎂 (I Just wanted to make u Happy..! ) I hope Tula Avdel ..!🤞<br>" + 
            "Once again Happy Birthday..🎂🎂🥳..! & Love You..💌";

        myImage.style.display = "none"; // Hide last image
	     
    }				
}



function play(){

	msg.style.display = "none";
	btn.style.display = "none";
	if(t == 0){
		myImage.setAttribute("src", imageArray[0]); // Load first image instead of empty
		myTxt.innerHTML = "";
		imageIndex = 0;
		clearInterval(showImageInterval);
	}
	flag = 1 - flag;
	document.getElementById("typeDiv").style.opacity = flag;
	document.getElementById("imgTxt").style.opacity = 1 - flag;
	if(t == 0){
		//setTimeout(showImage, 1000);
		setInterval(showImage, 5000);
	}
	t++;
}

function preshowImage(){
	document.getElementById("imgTxt").style.opacity = 0;
	myImage.setAttribute("src", imageArray[imageIndex]);
	myTxt.innerHTML = txtArray[imageIndex];
	imageIndex++;
	if(imageIndex >= len){
		imageIndex = 0;
	}
}  

function buttonFadeIn(){
	if(btnVal < 1){
		btnVal += 0.025;
		btn.style.opacity = btnVal;
	}
	else{
		clearInterval(buttonInterval);
		if(ok == 3){
			ok += 1;
		}
	}
}



function hideTypeDiv() {
    var txt = document.getElementById("typeDiv");
    txt.style.display = "none";  // Hide after work is completed
}

function event(){
    showImageInterval = setInterval(preshowImage, 100);

    imgInterval = setInterval(function (){
        if(ok == 3){
            setTimeout(function(){
                buttonInterval = setInterval(buttonFadeIn, 50);
                hideTypeDiv(); // Hides typeDiv after completing its work
            });
            clearInterval(imgInterval);
        }
    }, 50);
}


var showImageInterval;
var imgInterval;
var buttonInterval;

event();
