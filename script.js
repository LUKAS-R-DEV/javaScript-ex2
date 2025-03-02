function calcularPesoIdeal() {

    const altura = parseInt(document.getElementById('labelAltura').value);
    const sexo = document.getElementById('sexo').value;

    if (!altura || altura <= 0) {
        document.getElementById('resultado').innerText = "ALTURA INVALIDA!";
        return;
    }

    let pesoIdeal;
    if (sexo === "Masculino") {
        pesoIdeal = 52 + (0.75 * (altura - 152.4));
    } else {
        pesoIdeal = 52 + (0.67 * (altura - 152.4));
    }

    document.getElementById('resultado').innerText = `SEU PESO IDEAL-> ${pesoIdeal.toFixed(2)} kg.`;
}

function ativarMusica(){
    var audio = document.getElementById('audio');
    var imagem=document.getElementById("iconeMusica");
    if(audio.paused){
        imagem.src="imagens/pause.png";
        audio.play();
        
        

    }else{
        audio.pause();
        imagem.src="imagens/player.png";
    }

}
