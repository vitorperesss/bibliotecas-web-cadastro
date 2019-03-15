$(document).ready(function() {

	
$('#date').mask('00/00/0000').trigger('input');
$('.phone').mask('(00) 00000-0000').trigger('input');
$('.cpf').mask('000.000.000-00', {reverse: true}).trigger('input');

function DateValidation( value, element ) {
        return this.optional(element) || /^(?:(?:(?:(?:31\/(?:0?[13578]|1[02]))|(?:(?:29|30)\/(?:0?[13-9]|1[0-2])))\/(?:1[6-9]|[2-9]\d)\d{2})|(?:29\/0?2\/(?:(?:(1[6-9]|[2-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))|(?:0?[1-9]|1\d|2[0-8])\/(?:(?:0?[1-9])|(?:1[0-2]))\/(?:(?:1[6-9]|[2-9]\d)\d{2}))$/.test(value);
    }

$.validator.addMethod("Date", DateValidation, "Data Inválida");

$.validator.addClassRules("date", { Date: true });


	
	
$("#msform").validate({
	
   rules : {

		 email:{required:true, email:true},

		 senha:{required:true,minlength: 8,maxlength: 15},

		 csenha:{required:true, equalTo: "#senha"},
	   
	   	 nome:{required:true, minlength: 2},
	   
	   	 sobrenome:{required:true, minlength: 2},
	   
	   	 cpf:{required:true},
	   
	   	 nascimento:{required:true},
	   
	   	 telefone:{required:true},
	   
		 check:{required:true} 
   },
   messages:{

		 email:{required:"É necessário informar um email", email:"O email está incorreto!"},

	   
	     senha:{required:"É necessário informar uma senha",minlength:"A Senha deve ter no mínimo 8 caracteres",maxlength:"A Senha deve ter no máximo 15 caracteres"},
				   
		 csenha:{required:"Campo Obrigatório!", equalTo: "As senhas são diferentes"}, 
	   
	   	 nome:{required: "Campo Obrigatório!", minlength: "O nome deve ter no mínimo 2 caracteres"},
	   
	   	 sobrenome:{required: "Campo Obrigatório!", minlength: "O nome deve ter no mínimo 2 caracteres"},
	   
	   	 cpf:{required: "Campo Obrigatório!"},
	   
	   	 nascimento:{required: "Campo Obrigatório!"},
	   
	   	 telefone:{required: "Campo Obrigatório!"},

		 check:{required:"Campo Obrigatório!"}, 
	   

		submitHandler: function(form) {

			$successMsg.show();
			return false;
		}
	}
});
	
	
	



$("#enviar").click(function(){
	

	if($("#msform").valid()){
	
		var email 			= $('#email').val(); 
		var senha 			= $('#csenha').val(); 
		var csenha 			= window.btoa(senha); 
		var nome			= $('#nome').val(); 		
		var sobrenome		= $('#sobrenome').val(); 
		var cpf				= $('#cpf').val(); 
		var data_nascimento	= $('#date').val(); 
		var telefone		= $('#telefone').val(); 
		
		
		
		
		$.ajax({
		url: 'php/salvar_formulario.php',
		type: 'POST',
		data: {email: email,csenha:csenha,nome:nome,sobrenome:sobrenome,cpf:cpf,data_nascimento:data_nascimento,telefone:telefone},
		dataType: 'json',
		success: function(response) {
			  if (response.success !== "false") { 
				  
				  notify('done','Ok!  ','<strong></strong>Cadastro Efetuado com Sucesso!','success');
				  
 
			  }else{
				  notify('close','Erro!  ','<strong></strong>Cadastro Inválido!','danger');
			  }


			},
	
	 	});

				$('#email').val('');
				$('#senha').val('');
				$('#csenha').val('');
				$('#nome').val('');
				$('#sobrenome').val('');
				$('#cpf').val('');
				$('#date').val('');
				$('#telefone').val('');

	}
		
});
	
	
	

	
/*-----------------  modal  ----------------------------*/

$(document).on('click', '.termos', function(){

	$('#modal_termos').modal('show');

});
	
/* ------------------------ notify --------------------------------*/
	
function notify($icon,$title,$menssage,$type){
	 

	$.notify({
			// options
			icon: $icon,
			title: $title,
			message: $menssage,
			url: '',
			target: '_blank'
		},{
			// settings
			element: 'body',
			position: null,
			type: $type,
			allow_dismiss: true,
			newest_on_top: false,
			showProgressbar: false,
			placement: {
				from: "top",
				align: "right"
			},
			offset: 20,
			spacing: 20,
			z_index: 1031,
			delay: 5000,
			timer: 1000,
			url_target: '_blank',
			mouse_over: null,
			animate: {
				enter: 'animated fadeInDown',
				exit: 'animated fadeOutUp'
			},
			onShow: null,
			onShown: null,
			onClose: null,
			onClosed: null,
			icon_type: '',
			template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
				'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
				'<i style="width:30px; padding-top: 13px;" class="material-icons">'+$icon+'</i> ' +
				'<span data-notify="title">{1}</span> ' +
				'<span data-notify="message">{2}</span>' +
				'<div class="progress" data-notify="progressbar">' +
					'<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
				'</div>' +
				'<a href="{3}" target="{4}" data-notify="url"></a>' +
			'</div>' 
		});
	}		
	
});
	
	

	
	
	
	
