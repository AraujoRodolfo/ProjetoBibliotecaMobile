//função que irá mostrar os dados do usuário na página (dentro do #perfil)
let usuario = JSON.parse(localStorage.usuario);

let perfil = document.getElementById('user');

let dados = '<b style="color:black;"> '+usuario.nome+'</b>';
// dados += '<img src="'+usuario.perfil+'" height="100px">';
perfil.innerHTML += dados;

let sair= document.getElementById('sair');
sair.addEventListener('click',function(){
    localStorage.removeItem('usuario');
    window.location.replace('index.html');
});


let filtrar = document.querySelector('.filtrar');
let filtros = document.querySelector('#filtros');
let usou = false;
filtrar.addEventListener('click',function(){
    if(!usou){
        filtros.style.marginTop = '8vh'; 
        usou = true;
    }
    else{
        filtros.style.marginTop = '-7vh'; 
        usou = false;
    }

    //margin-top: -7vh;
});
window.onload = function(){

var src = "https://profrodolfo.com.br/biblioteca/";
var url = src+"livro.php";
fetch(url)
.then(resposta => {
	return resposta.json();
})
.then( function (json){
	var d = document.querySelector('.acervo');
    var texto = '';
	for(i = 0; i < json.length ; i++){
            var foto = src+'imgs/'+json[i].cd+'/'+json[i].capa;
			texto+='<div class="col-6 mt-3">';
			texto+=	'<div class="card">';
			texto+=	'<img src="'+foto+'" class="card-img-top capa" alt="...">';
			texto+=	' <div class="card-body pb-0">';			  
		    texto+=	'<h5 class="card-title livro" value="'+json[i].cd+'">'+json[i].titulo ;			
			texto+=	'</h5></div></div></div>';		



            // texto+='<div class="item">';
            // texto+='    <a class="hoverfx" href="#">';
            // texto+='        <div class="figure"><i class="icon ion-search"></i></div>';
            // texto+='        <div class="figure"><i class="icon ion-link"></i></div>';
            // texto+='        <div class="overlay"></div>';
            // texto+='        <img src="'+foto+'">';
            // texto+='    </a>';
            // texto+='    <h4 class="card-title livro" value="'+json[i].cd+'">'+json[i].titulo+'</h4>';
            // texto+='    <p>'+json[i].sinopse+'</p>';
            // texto+=' </div>';
	}
    d.innerHTML += texto;
})
.catch();
}



