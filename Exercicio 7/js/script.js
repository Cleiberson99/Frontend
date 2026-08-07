// ===================== LOCAL STORAGE =====================

function carregarProdutos() {
    return JSON.parse(localStorage.getItem("produtos")) || [];
}

let produtos = carregarProdutos();

function salvarProdutos() {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

// ===================== CADASTRO =====================

const formulario = document.getElementById("formCadastro");

if (formulario) {
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        cadastrarProduto();
    });
}

function cadastrarProduto() {

    const nome = document.getElementById("nome").value.trim();
    const categoria = document.getElementById("categoria").value.trim();
    const preco = Number(document.getElementById("preco").value);
    const estoque = Number(document.getElementById("estoque").value);
    const status = document.getElementById("status").value;

    if (nome === "" || categoria === "" || preco <= 0 || estoque < 0) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    const produto = {
        id: Date.now(),
        nome,
        categoria,
        preco,
        estoque,
        status
    };

    produtos.push(produto);

    salvarProdutos();

    document.getElementById("mensagem").innerHTML = `
        <div class="alert alert-success">
            Produto cadastrado com sucesso!
        </div>
    `;

    formulario.reset();
}

// ===================== LISTA =====================

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

                        <h5 class="card-title">${produto.nome}</h5>

                        <p><strong>Categoria:</strong> ${produto.categoria}</p>

                        <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>

                        <p><strong>Estoque:</strong> ${produto.estoque}</p>

                        <p><strong>Status:</strong> ${produto.status}</p>

                        <button class="btn btn-warning btn-sm me-2"
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

    const total = document.getElementById("totalProdutos");
    const ativosCard = document.getElementById("produtosAtivos");
    const valor = document.getElementById("valorEstoque");

    if (total) total.textContent = produtos.length;
    if (ativosCard) ativosCard.textContent = ativos;
    if (valor) valor.textContent = "R$ " + valorEstoque.toFixed(2);
}

// ===================== BUSCA =====================

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

// ===================== EXCLUIR =====================

function excluirProduto(id) {

    if (!confirm("Deseja excluir este produto?")) {
        return;
    }

    produtos = produtos.filter(produto => produto.id !== id);

    salvarProdutos();

    renderizarProdutos();

}

// ===================== EDITAR =====================

function editarProduto(id) {

    const produto = produtos.find(p => p.id === id);

    if (!produto) return;

    const novoNome = prompt("Novo nome do produto:", produto.nome);

    if (novoNome && novoNome.trim() !== "") {

        produto.nome = novoNome.trim();

        salvarProdutos();

        renderizarProdutos();

    }

}

// ===================== INICIAR =====================

renderizarProdutos();
