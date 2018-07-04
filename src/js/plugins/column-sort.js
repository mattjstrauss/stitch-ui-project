function columnSort() {

	$('.sort-time').on('click', function () {

		if ( $(this).hasClass('asc') ) {

			var $rows = $('.table-row'),
				$tableBody = $('.table-body');

	   		var orderedDesc = $rows.sort(function (a, b) {
				return parseInt($(a).data('time')) > parseInt($(b).data('time'));
	    	});

	    	$tableBody.html(orderedDesc);

	    } 

	    // Still have to reverse toggle the rows
	    setTimeout(function(){
		 $('.sort-time').toggleClass('asc desc');
		}, 100);
	    
	});

};