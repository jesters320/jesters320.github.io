// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$( document ).ready(function() {
		$(".trigger_link").click(
		  function() {
			// open the info div
			$(this).next("div.info").slideToggle();
			
			// scroll to the top of the link
			$('html, body').animate(
				{scrollTop: $(this).offset().top},
				2000	
				);
		  }
		);
		
		$(".address").offset({left: -5000}).css({"position" : "absolute"});
		
		var d = new Date();
		$("#footer").append(" " + d.getFullYear() + " made by jessa co.")
  });