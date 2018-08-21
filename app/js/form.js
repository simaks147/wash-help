$(".submit-btn").click(function() {

	var $this = $(this),
		form = $this.closest('form'),
		name = form.find('input[name = "name"]').val(),
		tel = form.find('input[name = "tel"]').val(),
		to = form.find('input[name = "to"]').val(),
		type = form.find('input[name = "type"]').val(),
		agreement = form.find('input[name = "agreement"]');
		
		if (!name) {
			name = "";
		}
	
	if (agreement.length != 0 && !agreement.is(':checked')) {
		Materialize.toast('Подтвердите согласие!', 4000);
		console.log(agreement);
		return;
	}
	$this.attr('disabled',true);


	if (tel !="") {
			
		$.ajax({
			type: "POST",
			data: "name="+name+"&tel="+tel+"&to="+to+"&type="+type,
			url: window.location.origin+'/assets/message/',
			success: function(data) {
				if (data) {
					Materialize.toast('Спасибо, ваша заявка принята!', 4000);
					$('#modal-submit').modal('close');
				} else {
					Materialize.toast('Ошибка отправки!', 4000);
					$this.attr('disabled',false);
				}
			},
			error: function() {
				Materialize.toast('Ошибка отправки!', 4000);
				$this.attr('disabled',false);
			}
		});

	} else {
		Materialize.toast('Введите телефон!', 4000);
		$this.attr('disabled',false);
	}

});