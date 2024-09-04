function carregar() {
    var msg = document.getElementById("msg");
    var imagem = document.getElementById("imagem"); // Corrigido de 'foto' para 'imagem'
    var data = new Date();
    var hora = data.getHours();



    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        imagem.src = 'foto1.png'; // Corrigido de 'scr' para 'src'
        document.body.style.background = 'blue';
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'foto3.png'; // Corrigido de 'scr' para 'src'
        document.body.style.background = 'yellow';
    } else {
        imagem.src = 'foto2.png'; // Corrigido de 'scr' para 'src'
        document.body.style.background = 'pink';
    }
}




