
function isactive(className){
    const sections =document.getElementsByClassName(className);
    for(const section of sections){
	const element = section.getBoundingClientRect();
	if(element.bottom >= 0 &&
            element.top <= (window.innerHeight || document.documentElement.clientHeight)
        )
	    return true;
    }
    return false;
}


document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM content loaded.');
  setInterval(function () {
	console.log('Yes');
	const homeel= document.getElementById("shome");
	const aboutel= document.getElementById("sabout");
	const skillel= document.getElementById("sskills");
	const contactel= document.getElementById("scontact");
	const projectel= document.getElementById("sproject");
	if(isactive('home')){
	    console.log("its home");
	   
	    homeel.style.color="#1e88e5";
	    aboutel.style.color="white";
	    skillel.style.color="white";
	    contactel.style.color="white";
	    projectel.style.color="white";
	}
	else if(isactive('about')){
	    console.log("its about");
	     homeel.style.color="white";
	    aboutel.style.color="#1e88e5";
	    skillel.style.color="white";
	    contactel.style.color="white";
	    projectel.style.color="white";
	}
	else if(isactive('skills')){
	    console.log("its skills");
	    homeel.style.color="white";
	    aboutel.style.color="white";
	    skillel.style.color="#1e88e5";
	    contactel.style.color="white";
	    projectel.style.color="white";
	}
	else if(isactive('contact')){
	    console.log("its contact");
	    homeel.style.color="white";
	    aboutel.style.color="white";
	    skillel.style.color="white";
	    contactel.style.color="#1e88e5";
	    projectel.style.color="white";
 
	}
	else if(isactive('project')){
	    console.log("its projecct");
	    homeel.style.color="white";
	    aboutel.style.color="white";
	    skillel.style.color="white";
	    contactel.style.color="white";
	    projectel.style.color="#1e88e5";
	}
  }, 400); // Adjust the interval (in milliseconds) as needed
});
