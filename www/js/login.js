let form = document.getElementById("entrar");
let login = document.getElementById("login");
let senha = document.getElementById("senha");

 form.addEventListener("click", function(){
    let formData = new FormData();
    formData.append('login', `${login.value}`);
    formData.append('senha', `${senha.value}`);
    fetch("https://profrodolfo.com.br/biblioteca/usuario.php",
        {
            body: formData,
            method: "post",
            mode: 'cors',
            cache: 'default'
        })  .then(response => {response.json()
        .then(data => {
            console.log(data);
          if(data.erro){
                document.getElementById('msg').style.display = 'block';
            }else{
              //alert(data.dados.nome);
              //armazena o usuário convertendo de json para string
              localStorage.setItem('usuario', JSON.stringify(data.dados));
              //redireciona
              window.location.replace('home.html');
            }
        })
      });
  });   

Verifica();

 