/*

scroll variable code

*/

let scrolled_pixels = 0;

function updateScroll() {
    scrolled_pixels = window.scrollY;
    pixel_percent = scrolled_pixels / 200;
    if (scrolled_pixels == 0){
    	document.querySelector(".top_bar").style.background = "transparent";
    } else if (scrolled_pixels < 200){
    	document.querySelector(".top_bar").style.background = "rgba(19, 23, 28, " + pixel_percent;
    } else {
    	document.querySelector(".top_bar").style.background = "rgb(19, 23, 28)";
    }
}

window.addEventListener('scroll', updateScroll);

/*

code that runs when the page loads

*/

document.addEventListener('DOMContentLoaded', function(){
	updateScroll();
})

function hidepages(){
	const pages = ["#page-home", "#page-about_us", "#page-blog", "#page-schedule", "#page-sponsors"];
    pages.forEach(page => {
        document.querySelector(page).style.display = "none";
    });
    window.scrollTo(0, 0);
}

document.querySelector("#button-home").addEventListener('click', function(){
	hidepages();
	document.querySelector("#page-home").style.display = "flex";
});

document.querySelector("#button-about_us").addEventListener('click', function(){
	hidepages();
	document.querySelector("#page-about_us").style.display = "flex";
});

document.querySelector("#button-blog").addEventListener('click', function(){
	hidepages();
	document.querySelector("#page-blog").style.display = "flex";
});

document.querySelector("#button-schedule").addEventListener('click', function(){
	hidepages();
	document.querySelector("#page-schedule").style.display = "flex";
});

document.querySelector("#button-sponsors").addEventListener('click', function(){
	hidepages();
	document.querySelector("#page-sponsors").style.display = "flex";
});