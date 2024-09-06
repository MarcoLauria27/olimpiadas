function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa === "") {
        // Se o campo de pesquisa estiver vazio, exibe uma mensagem de erro
        section.innerHTML = "<p class='erro'>Digite um termo para pesquisar.</p>";
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada item de dados da pesquisa
    for (let dado of dados) {
        if (dado.titulo.toLowerCase().includes(campoPesquisa.toLowerCase()) || dado.descricao.toLowerCase().includes(campoPesquisa.toLowerCase())) {
            // Se o título ou a descrição do item contém o texto pesquisado, adiciona o item aos resultados            
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>`;
        }
    }

    // Se a string 'resultados' estiver vazia, significa que nenhum item foi encontrado
    if (resultados === "") {
        section.innerHTML = "<p class='erro'>Nada foi encontrado.</p>";
    } else {
        // Caso contrário, exibe os resultados
        section.innerHTML = resultados;
    }
}
