$(document).ready(function() {
	$('#btnIngresar').click(function() {
		var isCorrect = true;
		if ($('#username').val() == '') {
			Swal.fire(
				'Espera!',
				'Debes ingresar un correo electronico!!',
				'warning'
			);
			$('#username').focus();
			isCorrect = false;
		} else if ($('#password').val() == '') {
			Swal.fire(
				'Espera!',
				'Debes ingresar un password!!',
				'warning'
			);
			$('#password').focus();
			isCorrect = false;
		}

		if ($('#username').val() != "") {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			var email = $("#username").val();
			
			if (!re.test(email)) {
				Swal.fire("Espera", "El correo \"" + email + "\" no es valido!!!", "warning");
				$('#email').focus();
				isCorrect = false;
			}
		}

		if (isCorrect) {
			//$('/login').submit();
			//Pendiente, enviar mediante ajax
		}

	}
	);
});