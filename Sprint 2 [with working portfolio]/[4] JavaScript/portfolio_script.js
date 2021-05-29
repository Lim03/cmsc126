$(document).ready(function(){		// ensures that by the time the script inside is executed, the browser DOM is fully loaded

    $(window).scroll(function(){				// scroll event
        // sticky navbar on scroll script
        if(this.scrollY > 20){					// when the user scrolled more than 20px downward
            $('.navbar').addClass("sticky");	// sticky class will be added to navbar; this allows the navbar's style to change (stick to its original position)
        }else{									// else
            $('.navbar').removeClass("sticky");	// sticky class will not be added / removed from navbar; this allows the navbar to be at its default style
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){						// when the user scrolled more than 500px downward
            $('.scroll-up-btn').addClass("show");	// show class will be added to scroll-up-button; this allows the scroll up button to appear
        }else{										// else
            $('.scroll-up-btn').removeClass("show");// show class will not be added / removed from navbar; this hides the scroll up button
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){		// when the scroll up button is clicked
        $('html').animate({scrollTop: 0});		// scrolls upward continuously to the top when the scroll up button is clicked
        $('html').css("scrollBehavior", "auto");// removes the smooth scroll on slide-up button click to make scrolling faster
    });

    // applying again smooth scroll on menu items click
    // without this, when clicking on a section in the navigation bar, after using the scroll up button, the transition won't be smooth
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){				// when the hamburger menu button is clicked
        $('.navbar .menu').toggleClass("active");	// shows the navigation bar menu
        $('.menu-btn i').toggleClass("active");		// hides the hamburger menu button
    });
});

// selecting all required elements
const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");

window.onload = ()=>{ // once window loaded
	filterItem.onclick = (selectedItem)=>{ // when user clicked on filterItem div
		if(selectedItem.target.classList.contains("item")){ 				// if user click element has .item class
			filterItem.querySelector(".active").classList.remove("active"); // removes the active class which is in the first element
			selectedItem.target.classList.add("active"); 					// adds that active class on the user selected element or item
			let filterName = selectedItem.target.getAttribute("data-name"); // gets the data-name value of the user selected item and stores in a filtername variable
			filterImg.forEach((image)=>{
				let filterImages = image.getAttribute("data-name"); 		// gets image data-name value
				// if the user selected item data-name value is equal to image data-name value
				// or user selected item data-name value is equal to "all"
				if((filterImages == filterName) || filterName == "all"){
					image.classList.remove("hide");
					image.classList.add("show");
				}else{
					image.classList.add("hide");
					image.classList.remove("show");
				}
			});
		}
	}
	for (let index = 0; index < filterImg.length; index++) {
		filterImg[index].setAttribute("onclick", "preview(this)"); // adds onclick attribute in all available images
	}
}

// selects all required elements
const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryName = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

// fullscreen function
function preview(element){
	// once user click on any image, remove the scrollbar of the body, so user can't scroll up or down
	document.querySelector("body").style.overflow = "hidden";
	let selectedPrevImg = element.querySelector("img").src; 		// gets user clicked image source link and store in a variable
	let selectedImgCategory = element.getAttribute("name"); 		// gets user clicked data-name value
	categoryName.textContent = selectedImgCategory; 				// passes the data-name value to category name variable
	previewImg.src = selectedPrevImg; 								// passes the user clicked image source in the preview image source
	previewBox.classList.add("show"); 								// shows the preview box
	shadow.classList.add("show"); 									// shows the light grey background
	closeIcon.onclick = ()=>{ 										// if user click on the close icon of the previous box
		previewBox.classList.remove("show"); 						// hides the preview box
		shadow.classList.remove("show"); 							// hides the light grey background
		document.querySelector("body").style.overflow = "scroll"; 	// shows the scroll bar of body
	}
}