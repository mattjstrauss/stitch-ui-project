function customSelects() {
	$(document).click(function(){
	  $('.custom-select').removeClass('active-select');
	});

	$selectObject = $('.custom-select');
	$selectObject.each(function(){
		$currentSelectObject = $(this);
		$currentSelectObject.on('click', function(e){
			e.stopPropagation();
			$currentSelectObject.toggleClass('active-select');
		});
		$selectField = $(this).find('select');
		$selectField.after('<ul class="select-list"></ul>');
		$selectField.find('option').each(function() {
	    	$selectObject.find('ul').append('<li tabindex="0" class="option" data-value="'+this.value+'">' + this.text + '</li>');
		});
		$selectList = $(this).find('.select-list');
		$selectListOptions = $(this).find('.select-list li');
		$defaultSelection = $selectList.find('li').first();
		$defaultSelection.addClass('selected');
		$defaultValue = $defaultSelection.text();
		$(this).attr('data-current-value', $defaultValue);
		
		$selectListOptions.on('click', function(e){
			e.preventDefault();
			$('.select-list li').removeClass('selected');
			$(this).addClass('selected');
			$selectObject.attr('data-current-value', $(this).text());
			$selectField.val($(this).data('value'));
		});

		$selectField.on('change', function(){
			console.log($selectField.val());
			$selectList.find("[data-value='" + $selectField.val() + "']").trigger('click'); 
		});
		$selectListOptions.focus(function() {
			$currentSelectObject.addClass('active-select');
		});
		$selectListOptions.last().focusout(function() {
			$currentSelectObject.removeClass('active-select');
		});
		$selectObject.focusout(function() {
			$currentSelectObject.removeClass('active-select');
		});
	});

	
}