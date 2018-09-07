(function($){





        $(document).ready(function() {


        // Countdown
		$('#countdown').countdown('2017/10/04 20:30:00', function(event) {	// your date here
        	$(this).html(event.strftime(''
            	+ '<div><div>%D</div><i>Days</i></div>'
            	+ '<div><div>%H</div><i>Hours</i></div>'
            	+ '<div><div>%M</div><i>Minutes</i></div>'
            	+ '<div><div>%S</div><i>Seconds</i></div>'
        	));
    	});



	});

})(jQuery);
