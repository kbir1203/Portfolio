function openPopup(link) {
	var link = "https://www.credly.com/badges/9a9f167a-8bee-46e9-8a68-9b74e048ed0f/linked_in_profilel";
	document.getElementById('popup-link').href = link; // Set the link
	
	document.getElementById('popup').style.display = 'block';
}

function closePopup() {
	document.getElementById('popup').style.display = 'none';
}


function openPopup_a(link_a) {
	var link_a = "https://www.cloudskillsboost.google/public_profiles/af08b926-4e6b-4b7d-924d-65c99498faae/badges/5362000?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share";
	document.getElementById('popup-link_a').href = link_a; // Set the link
	
	document.getElementById('popup_a').style.display = 'block';
}

function closePopup_a() {
	document.getElementById('popup_a').style.display = 'none';
}


function openPopup_b(link_b) {
	var link_b = "https://www.linkedin.com/posts/kbir-n-447673204_c-activity-7014887191633944576-d35I?utm_source=share&utm_medium=member_desktop";
	document.getElementById('popup-link_b').href = link_b; // Set the link
	
	document.getElementById('popup_b').style.display = 'block';
}

function closePopup_b() {
	document.getElementById('popup_b').style.display = 'none';
}


function openPhonePopup() {
var phone = "+91 9589918060";
document.getElementById('phone-number').innerHTML = phone;
document.getElementById('phonepopup').style.display = 'block';
}

function closephonePopup() {
	document.getElementById('phonepopup').style.display = 'none';
}
function openlinkdinPopup() {
	var link = "www.linkedin.com/in/kbir-n-447673204";
	document.getElementById('linkdin-link').innerHTML = link;
	document.getElementById('linkdinpopup').style.display = 'block';
	}
	
	function closelinkdinPopup() {
		document.getElementById('linkdinpopup').style.display = 'none';
	}

function scrollToSection(sectionId) {
	const element = document.getElementById(sectionId);
	if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
	}
}

jQuery(document).ready(function($) {


	var mastheadheight = $('.ds-header').outerHeight();
	//console.log(mastheadheight);
	$(".ds-banner,.ds-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ds-header').addClass('ds-fixed-header');
	    }
	    else {
	        $('.ds-header').removeClass('ds-fixed-header');
	    }
	}).scroll();

	
});

