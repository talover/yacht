$(document).ready(function() {
	//Datepicker
	$('.order .input-daterange').datepicker({
	    format: "dd/mm/yyyy",
	    language: "ru",
	    multidate: false
	});

	//Calendar sidebar
	var today = new Date();
	$('#calendar').datepicker({
	    format: "dd/mm/yyyy",
	    language: "ru",
	    multidate: false,
	    startDate: today,
	    datesDisabled: ['19/05/2015', '27/05/2015', '28/05/2015']
	});

	//Video player
	if ($('.video-cont').length>0) {
		$.each($('.video-cont'), function(index, el) {
			console.log(el);
			$(el).tubeplayer({
			    width: '100%', // the width of the player
			    height: '100%', // the height of the player
			    allowFullScreen: "true", // true by default, allow user to go full screen
			    initialVideo: $(el).data('video'), // the video that is loaded into the player
			    preferredQuality: "default",// preferred quality: default, small, medium, large, hd720
			});
		});
	};


	//Popup
	$('.popup-link').magnificPopup({
        type: 'image',
        preloader: false,
        removalDelay: 100,
        midClick: false,
        fixedContentPos: false,
        callbacks: {
            beforeOpen: function() {
    		    this.st.mainClass = 'mfp-zoom-in';
            }
        }
    });
	
});
