function calcularPesoIdeal(){
    const altura = parseInt(document.getElementById('altura').value);
    const sexo = document.getElementById('sexo').value;

    if (!altura || altura <= 0) {
        document.getElementById('resultado').innerText = "Altura inválida!";
        return;
    }

    let pesoIdeal;
    if (sexo === "Masculino") {
        pesoIdeal = 52 + (0.75 * (altura - 152.4));
    } else {
        pesoIdeal = 52 + (0.67 * (altura - 152.4));
    }

    document.getElementById('resultado').innerText = `Seu peso ideal -> ${pesoIdeal.toFixed(2)} kg.`;
}
