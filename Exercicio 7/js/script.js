// Carrega os produtos do localStorage
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// =================== CADASTRO ===================

const formulario = document.getElementById("formCadastro");

if (formulario) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        cadastrarProduto();
    });
}

function cadastrarProduto() {
    let nome = document.getElementById("nome").value;
    let categoria = document.getElementById("categoria").value;
    let preco = document.getElementById("preco").value;
    let estoque = document.getElementById("estoque").value;
    let status = document.getElementById("status").value;

    if (nome === "" || categoria === "" || preco === "" || estoque === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let produto = {
        id: Date.now(),
        nome: nome,
        categoria: categoria,
        preco: Number(preco),
        estoque: Number(estoque),
        status: status
    };

    produtos.push(produto);

    localStorage.setItem("produtos", JSON.stringify(produtos));

    document.getElementById("mensagem").innerHTML = `
        <div class="alert alert-success">
            Produto cadastrado com sucesso!
        </div>
    `;

    formulario.reset();
}

// =================== LISTAGEM ===================

function renderizarProdutos(lista = produtos) {

    const listaProdutos = document.getElementById("listaProdutos");

    if (!listaProdutos) return;

    listaProdutos.innerHTML = "";

    let ativos = 0;
    let valorEstoque = 0;

    lista.forEach(produto => {

        if (produto.status === "Disponível") {
            ativos++;
        }

        valorEstoque += produto.preco * produto.estoque;

        listaProdutos.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow">
                    <div class="card-body">

                        <h5>${produto.nome}</h5>

                        <p><strong>Categoria:</strong> ${produto.categoria}</p>
                        <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>
                        <p><strong>Estoque:</strong> ${produto.estoque}</p>
                        <p><strong>Status:</strong> ${produto.status}</p>

                        <button class="btn btn-warning btn-sm"
                            onclick="editarProduto(${produto.id})">
                            Editar
                        </button>

                        <button class="btn btn-danger btn-sm"
                            onclick="excluirProduto(${produto.id})">
                            Excluir
                        </button>

                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById("totalProdutos").textContent = produtos.length;
    document.getElementById("produtosAtivos").textContent = ativos;
    document.getElementById("valorEstoque").textContent =
        "R$ " + valorEstoque.toFixed(2);
}

// =================== BUSCA ===================

const busca = document.getElementById("busca");

if (busca) {
    busca.addEventListener("input", function () {

        const texto = busca.value.toLowerCase();

        const filtrados = produtos.filter(produto =>
            produto.nome.toLowerCase().includes(texto)
        );

        renderizarProdutos(filtrados);

    });
}

// =================== EXCLUIR ===================

function excluirProduto(id) {

    produtos = produtos.filter(produto => produto.id !== id);

    localStorage.setItem("produtos", JSON.stringify(produtos));

    renderizarProdutos();

}

// =================== EDITAR ===================

function editarProduto(id) {

    alert("Função editar ainda não foi implementada.");

}

// =================== INICIAR LISTA ===================

renderizarProdutos();
