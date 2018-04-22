

			$(document).ready(function() {

				
				$(".navbar").affix({
					offset : {
						top : $(window).height() * .93
					}
				});



			 // for going to top.
			  $("#target").on("click", function( e ) {

			 	if(this.hash!="")
				{
			    e.preventDefault();
				var hash = this.hash;

			    $("body, html").animate({ 
			      scrollTop: $("#front").offset().top }, "slow","linear",function(){
				  window.location.hash=hash;
				  });
				}// End if
			  });

			  // for going to profile
			  $(".prof").on("click", function( e ) {

				if(this.hash!="")
				{
			    e.preventDefault();
				var hash = this.hash;

			    $("body, html").animate({ 
			      scrollTop: $("#profile").offset().top }, "slow","linear",function(){
				  window.location.hash=hash;
				  });
				}// End if
			  });

			  // for going to skills section
			  $(".sk").on("click", function( e ) {

				if(this.hash!="")
				{
			    e.preventDefault();
				var hash = this.hash;

			    $("body, html").animate({ 
			      scrollTop: $("#skills").offset().top }, "slow","linear",function(){
				  window.location.hash=hash;
				  });
				}// End if
			  });

			  // for going to the project section.
			  $(".proj").on("click", function( e ) {

				if(this.hash!="")
				{
			    e.preventDefault();
				var hash = this.hash;

			    $("body, html").animate({ 
			      scrollTop: $("#projects").offset().top }, "slow","linear",function(){
				  window.location.hash=hash;
				  });
				}// End if
			  });

			  // for going to contact section.
			  $(".cont").on("click", function( e ) {

				if(this.hash!="")
				{
			    e.preventDefault();
				var hash = this.hash;

			    $("body, html").animate({ 
			      scrollTop: $("#contact").offset().top }, "slow","linear",function(){
				  window.location.hash=hash;
				  });
				}// End if
			  });

			  // for skills bars animation.
			  $('.skillbar').each(function(){
				$(this).find('.skillbar-bar').animate({
					width:$(this).attr('data-percent')
				 },6000);
			  });
			});
