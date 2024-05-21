let iptBuscarDisco = document.getElementById('iptBuscarDisco');
let divResultadoDoFiltro = document.getElementById('divResultadoDoFiltro');

function filtrarPorAno() {

    divResultadoDoFiltro.innerHTML = "";

    for (let i = 0; i < discografia.length; i++) {
        if (discografia[i].anoDeLancamento == iptBuscarDisco.value) {
            divResultadoDoFiltro.innerHTML +=
                `<h1> nome do álbum: ${discografia[i].nome}</h1>
                <h2> ano de lançamento : ${discografia[i].anoDeLancamento}</h2>
                <h2>nome da artista : ${discografia[i].nomeArtista}</h2>
                <h1> curiosidades: ${discografia[i].curiosidades}</h1>
                <img src='./estilos/${discografia[i].fotoDoAlbum}'>`


        }
    }

}



function barrarLetras(event) {
    console.log(event.keyCode);
    if (event.keyCode >= 97 && event.keyCode <= 122) {
        event.preventDefault();


    }


}




iptBuscarDisco.addEventListener('keyup', filtrarPorAno);
iptBuscarDisco.addEventListener('keypress', barrarLetras);

