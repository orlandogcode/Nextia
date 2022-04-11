$(document).ready(function() {
	$('#btnRegistrar').click(function() {
		var isCorrect = true;
		if ($('#nombre').val() == '') {
			Swal.fire(
				'Espera!',
				'Debes ingresar un Nombre!!',
				'warning'
			);
			$('#nombre').focus();
			isCorrect = false;
		} else if ($('#apellido').val() == '') {
			Swal.fire(
				'Espera!',
				'Debes ingresar un Apellido!!',
				'warning'
			);
			$('#apellido').focus();
			isCorrect = false;
		} else if ($('#email').val() == '') {
			Swal.fire(
				'Espera!',
				'Debes ingresar un Email!!',
				'warning'
			);
			$('#email').focus();
			isCorrect = false;
		} else if ($('#password').val() == '') {
			Swal.fire(
				'Espera!',
				'Debes ingresar un Password!!',
				'warning'
			);
			$('#password').focus();
			isCorrect = false;
		}

		if ($('#email').val() != "") {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			var email = $("#email").val();

			if (!re.test(email)) {
				Swal.fire("Espera", "El correo \"" + email + "\" no es valido!!!", "warning");
				$('#email').focus();
				isCorrect = false;
			}
		}

		if (isCorrect) {
			document.formularioRegistro.submit();
		}

	});
});