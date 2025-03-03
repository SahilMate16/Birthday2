var txt= document.getElementById("typeDiv");	
var msg = document.getElementById("msgTxt")
var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;


function showImage(){
    if (imageIndex < len) { // Show images until the last one
        myImage.setAttribute("src", imageArray[imageIndex]);
        myTxt.innerHTML = txtArray[imageIndex];
        myTxt.style.fontSize = "24px"; // Adjust font size if needed
        myTxt.style.fontWeight = "bold"; 
        myTxt.style.color = "#ffffff"; 

        imageIndex++;
    } else {
        clearInterval(showImageInterval); // Stop the loop when all images are shown

        // Show "Slideshow Ended" message
        myTxt.innerHTML = "🎉 Bass tuza krta mala kahi tri chan gift Dych Hota ki je Life-Long tuza sbt rahil ani maze kahi feelings je convey krayche hote tula..🎉"<br>"✨jr kahi Chukich kinva Jasta Bollo asel tr Please mla maaf krshil🙏🎂(I Just wanted to make u Happy..! ) I hope Tula Avdel ..!🤞"<br>"Once again Happy Birthday..🎂🎂🥳..!& Love You..💌"; 
        // myTxt.style.fontSize = "28px"; // Make message larger
        // myTxt.style.color = "#ffcc00"; // Highlight in different color
        // myTxt.style.textAlign = "center"; 

        // Optional: Hide the image after the slideshow ends
        myImage.style.display = "none";
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
