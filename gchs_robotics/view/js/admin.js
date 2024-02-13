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

function reload_edit(){
	document.querySelectorAll('.edit').forEach(function(element){
		element.addEventListener('click', function(){
			this.setAttribute('contenteditable', 'true');
	    	this.focus();
		})
	})

	document.querySelectorAll('img.edit').forEach(function(img) {
	    img.addEventListener('click', function() {
	        // Store a reference to the current image in the file input
	        fileInput.currentImage = img;
	        // Trigger the file input dialog
	        fileInput.click();
	    });
	});
}

window.addEventListener('scroll', updateScroll);

/*

code that runs when the page loads

*/

document.addEventListener('DOMContentLoaded', function(){
	updateScroll();
	reload_edit();
})

function hidepages(){
	const pages = ["#edit-home", "#edit-about_us", "#edit-blog", "#edit-schedule", "#edit-sponsors", "#edit-blog_create"];
    pages.forEach(page => {
        document.querySelector(page).style.display = "none";
    });
    window.scrollTo(0, 0);
}

document.querySelector("#button-home").addEventListener('click', function(){
	hidepages();
	document.querySelector("#edit-home").style.display = "flex";
});

document.querySelector("#button-about_us").addEventListener('click', function(){
	hidepages();
	document.querySelector("#edit-about_us").style.display = "flex";
});

document.querySelector("#button-blog").addEventListener('click', function(){
	hidepages();
	document.querySelector("#edit-blog").style.display = "flex";
});

document.querySelector("#button-schedule").addEventListener('click', function(){
	hidepages();
	document.querySelector("#edit-schedule").style.display = "flex";
});

document.querySelector("#button-sponsors").addEventListener('click', function(){
	hidepages();
	document.querySelector("#edit-sponsors").style.display = "flex";
});

/*

blog creation functionality

*/

document.querySelector("#button-new_blog").addEventListener('click', function(){
	hidepages();
	document.querySelector("#edit-blog_create").style.display = "flex";
});

var current_color = 0;
var section_select = document.querySelector("#section-select");

// creating the new sections in the blog editor

document.querySelector("#button-section_1").addEventListener('click', function(){
	var new_section = document.createElement('div');
	var new_blog = document.createElement('div');
	new_blog.classList = "blog";
	var new_text = document.createElement('div');
	new_text.classList = "text"
	var new_h1 = document.createElement('h1');
	new_h1.classList = "edit";
	new_h1.innerHTML = "TITLE"
	var new_p = document.createElement('p');
	new_p.classList = "edit";
	new_p.innerHTML = "TEXT"
	var new_photo = document.createElement('div');
	new_photo.classList = "photo_square";
	var new_img = document.createElement('img');

	if (current_color == 0){
		new_section.className = 'section dark';
		current_color = current_color + 1;
	} else {
		new_section.className = 'section light';
		current_color = current_color - 1;
	}

	section_select.parentNode.insertBefore(new_section, section_select);
	new_section.appendChild(new_blog);
	new_blog.appendChild(new_text);
	new_blog.appendChild(new_photo);
	new_text.appendChild(new_h1);
	new_text.appendChild(new_p);
	new_photo.innerHTML = "<img class='edit'>";

	reload_edit();
})

document.querySelector("#button-section_2").addEventListener('click', function(){
	var new_section = document.createElement('div');
	var new_p = document.createElement('div');
	new_p.classList = "p edit"
	new_p.innerHTML = "TEXT"

	if (current_color == 0){
		new_section.className = 'section dark';
		current_color = current_color + 1;
	} else {
		new_section.className = 'section light';
		current_color = current_color - 1;
	}

	section_select.parentNode.insertBefore(new_section, section_select);
	new_section.appendChild(new_p);

	reload_edit();
})

document.querySelector("#button-section_3").addEventListener('click', function(){
	var new_section = document.createElement('div');
	var new_blog = document.createElement('div');
	new_blog.classList = "blog";
	var new_text = document.createElement('div');
	new_text.classList = "text"
	var new_h1 = document.createElement('h1');
	new_h1.classList = "edit";
	new_h1.innerHTML = "TITLE"
	var new_p = document.createElement('p');
	new_p.classList = "edit";
	new_p.innerHTML = "TEXT"
	var new_photo = document.createElement('div');
	new_photo.classList = "photo_square";
	var new_img = document.createElement('img');

	if (current_color == 0){
		new_section.className = 'section dark';
		current_color = current_color + 1;
	} else {
		new_section.className = 'section light';
		current_color = current_color - 1;
	}

	section_select.parentNode.insertBefore(new_section, section_select);
	new_section.appendChild(new_blog);
	new_blog.appendChild(new_photo);
	new_blog.appendChild(new_text);
	new_text.appendChild(new_h1);
	new_text.appendChild(new_p);
	new_photo.innerHTML = "<img class='edit'>";

	reload_edit();
})

document.querySelector("#button-section_4").addEventListener('click', function(){
	var new_section = document.createElement('div');
	var new_p = document.createElement('div');
	new_p.classList = "p"
	new_p.innerHTML = "<img class='edit' style='width: 400px; height: 400px; object-fit: cover; object-position: center;' src='view/img/image.png'>"

	if (current_color == 0){
		new_section.className = 'section dark';
		current_color = current_color + 1;
	} else {
		new_section.className = 'section light';
		current_color = current_color - 1;
	}

	section_select.parentNode.insertBefore(new_section, section_select);
	new_section.appendChild(new_p);

	reload_edit();
})

// Create a file input element dynamically and set its type and style
var fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.style.display = 'none';
fileInput.accept = 'image/*';  // Accept only image files

// Append the file input to the body
document.body.appendChild(fileInput);

// Add change event listener to the file input
fileInput.addEventListener('change', function(event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            // Use the previously stored reference to set the image source
            fileInput.currentImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

document.querySelector("#button-save_blog").addEventListener('click', function(){
    // Remove the specified div
    var element = document.getElementById("section-select");
    if (element) {
        element.parentNode.removeChild(element);
    }

    var nextelement = document.getElementById("edit-blog");
    if (nextelement) {
        nextelement.parentNode.removeChild(nextelement);
    }

    // Prompt for blog title
    var blogTitle = prompt("What should we call this blog?");

    // Check if a title was entered
    if (blogTitle) {
        // Get the contents of the <body> tag
        var bodyContent = document.body.innerHTML;

        // Create blog object
        var blogData = {
            title: blogTitle,
            content: bodyContent
        };

    }

    location.reload();
});
