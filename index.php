<!doctype html>
<html><head>
<meta charset="utf-8">
<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
<script type="text/javascript" src="./jquery-validation-1.19.0/dist/jquery.validate.js"></script> <!--validate-->
<script type="text/javascript" src="./jQuery-Mask-Plugin-master/dist/jquery.mask.js"></script> <!--<!--Mask-->
<script src="bootstrap-notify-master/bootstrap-notify.min.js"></script><!--<!--Notify-->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script><!--modal-->
<script type="text/javascript" src="js/index.js"></script>

<link rel="stylesheet" href="css/bootstrap.css"><!--modal-->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><!--<!--Notify Icon-->
<link rel="stylesheet" href="css/index.css">


<title>Cadastro</title>
</head>

<body>
	<!-- multistep form -->
	<form id="msform">
	  <!-- fieldsets -->
	  <fieldset>
		<h2 class="fs-title">Configuração</h2>
			<input type="text"  name="email" id="email" placeholder="Email" />
			<input type="password" name="senha" id="senha" placeholder="Senha" />
			<input type="password" name="csenha" id="csenha" placeholder="Confirmar Senha" />
			
	 
		<h2 class="fs-title">Dados Pessoais</h2>
			<input type="text" name="nome" id="nome" placeholder="Nome" />
			<input type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" />
			<input type="text" name="cpf" id="cpf" placeholder="CPF" class="cpf"/>
			<input type="text" id="date" name="nascimento" placeholder="Data de Nascimento" class="date"/>
			<input type="text" name="telefone" id="telefone" placeholder="Telefone (xx) xxxxx-xxxx" class="phone"/>
		
	 
		<h2 class="fs-title">Termo</h2>
		<div class="form-check">
			<div>
				<label class="form-check-label" for="check">Li e Aceito os <label id="termos" class="termos">Termos de Uso</label></label>
				<input type="checkbox" class="form-check-input" id="check" name="check">
			</div>
	  	</div>
		<div id="div_button">
			<input id="enviar" type="button" name="submit" class="submit action-button" value="ENVIAR" />
		</div>
	  </fieldset>
	</form>
	<!--modal-->
	<div id="modal_termos" class="modal" tabindex="-1" role="dialog">
  		<div class="modal-dialog modal-sm " role="document">
    		<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Termos de Uso</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					</button>
			  	</div>
			  <div class="modal-body">
				<p>Aqui vai o texto do Termo de Uso!</p>
			  </div>
			  <div class="modal-footer">
		  		<button type="button" class="btn btn-default" data-dismiss="modal">Sair</button>
			  </div>
      		</div>
   		</div>
   </div>
</body>
</html>