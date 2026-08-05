let produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônicos",
        preco: 3500,
        estoque: 10,
        status: "Disponível"
    },
    {
        nome: "Mouse Gamer",
        categoria: "Acessórios",
        preco: 120,
        estoque: 25,
        status: "Disponível"
    }
];


// Cadastro de produtos

const formulario = document.getElementById("formCadastro");


if (formulario) {

    formulario.addEventListener("submit", function(event){

        event.preventDefault();

        cadastrarProduto();

    });

}


function cadastrarProduto(){


    let nome = document.getElementById("nome").value;
    let categoria = document.getElementById("categoria").value;
    let preco = document.getElementById("preco").value;
    let estoque = document.getElementById("estoque").value;
    let status = document.getElementById("status").value;


    if(nome === "" || categoria === "" || preco === "" || estoque === ""){
        alert("Preencha todos os campos!");
        return;
    }


    let produto = {

        nome: nome,
        categoria: categoria,
        preco: preco,
        estoque: estoque,
        status: status

    };


    produtos.push(produto);


    document.getElementById("mensagem").innerHTML =
    `
    <div class="alert alert-success">
        Produto cadastrado com sucesso!
    </div>
    `;


    formulario.reset();

}