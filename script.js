
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
function updateBackgroundImage(sectionId, imageUrl) {
        const section = document.getElementById(sectionId);
        section.style.backgroundImage = `url('${imageUrl}')`;
    }

function resetBackgroundImage() {
    const sections =["shome","sskills","sabout","sproject","scontact"];
    for (const section of sections){
        const sectio = document.getElementById(section);
        sectio.style.backgroundImage = `url('./assets/${section}.png')`;
    }
 }


document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded.');
    const sections =["shome","sskills","sabout","sproject","scontact"];
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
	    resetBackgroundImage()
	    updateBackgroundImage('shome', './assets/achome.png');
	}
	else if(isactive('about')){
	    console.log("its about");
	    resetBackgroundImage();
	    updateBackgroundImage('sabout', './assets/acabout.png');
	    homeel.style.color="white";
	    aboutel.style.color="#1e88e5";
	    skillel.style.color="white";
	    contactel.style.color="white";
	    projectel.style.color="white";
	}
	else if(isactive('skills')){
	    console.log("its skills");
	    resetBackgroundImage();
	    updateBackgroundImage('sskills', './assets/acskills.png');
	    homeel.style.color="white";
	    aboutel.style.color="white";
	    skillel.style.color="#1e88e5";
	    contactel.style.color="white";
	    projectel.style.color="white";
	}
	else if(isactive('contact')){
	    console.log("its contact");
	    resetBackgroundImage();
	    updateBackgroundImage('scontact', './assets/accontact.png');
	    homeel.style.color="white";
	    aboutel.style.color="white";
	    skillel.style.color="white";
	    contactel.style.color="#1e88e5";
	    projectel.style.color="white";
 
	}
	else if(isactive('project')){
	    console.log("its projecct");
	    resetBackgroundImage();
	    updateBackgroundImage('sproject', './assets/acproject.png');
	    homeel.style.color="white";
	    aboutel.style.color="white";
	    skillel.style.color="white";
	    contactel.style.color="white";
	    projectel.style.color="#1e88e5";
	}
  }, 400); // Adjust the interval (in milliseconds) as needed
});
