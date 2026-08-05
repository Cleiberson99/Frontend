// Lista de produtos fictícios
const produtos = [
    {
        nome: "Notebook",
        preco: "R$ 3.500,00",
        descricao: "Notebook para estudos e trabalho."
    },
    {
        nome: "Mouse Gamer",
        preco: "R$ 120,00",
        descricao: "Mouse com alta precisão para jogos."
    },
    {
        nome: "Teclado Mecânico",
        preco: "R$ 250,00",
        descricao: "Teclado confortável e resistente."
    },
    {
        nome: "Monitor LED",
        preco: "R$ 900,00",
        descricao: "Monitor de alta qualidade de imagem."
    },
    {
        nome: "Headset",
        preco: "R$ 180,00",
        descricao: "Headset com microfone integrado."
    }
];


// Criar lista de produtos na página
const listaProdutos = document.getElementById("listaProdutos");

if (listaProdutos) {

    produtos.forEach(produto => {

        listaProdutos.innerHTML += `
        
        <div class="col-md-4 mb-4">

            <div class="card h-100">

                <div class="card-body">

                    <h5 class="card-title">${produto.nome}</h5>

                    <p class="card-text">
                        ${produto.descricao}
                    </p>

                    <p class="fw-bold">
                        ${produto.preco}
                    </p>

                </div>

            </div>

        </div>

        `;

    });

}