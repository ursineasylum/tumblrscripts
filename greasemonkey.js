// ==UserScript==
// @name        Put That Thing Back Where It Came From
// @namespace   tumblr
// @description Or So Help Me
// @include     https://www.tumblr.com/dashboard
// @version     1
// @grant       none
// ==/UserScript==
		clone_obj = ""
		jQuery(document).ready(function(){
			jQuery("#account_button").trigger("click");
			//jQuery("#account_button").hide();
			console.log("Attempting to clone the popover");
			clone_obj = jQuery(".popover--account-popover").clone()
			clone_obj.css({'position' : 'relative', 'display' : 'block', 'visibility' : 'visible', "top" : "0px", "right" : "0px"});
			clone_obj.addClass(".popover--active popover--base bottom");
			clone_obj.find("div:first").addClass("popover--active")
			//jQuery(".popover--account-popover").hide()
			jQuery("#right_column").prepend(clone_obj)
		});
