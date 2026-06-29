Principais diferenças entre usar divs e HTML semântico:

divs: São containers genericos e sem significados. Com eles, o código pode ficar mais confuso e dificil de entender

exemplo: 

<body>
    <div class="header">
        <h1>Meu Site</h1>
        <div class="nav">
            <a href="#home">Home</a> | <a href="#sobre">Sobre</a>
        </div>
    </div>

    <div class="main-content">
        <div class="section">
            <h2>Sobre Nós</h2>
            <p>Texto explicativo aqui.</p>
        </div>
   </div>

    <div class="footer">
        <p>&copy; 2026 Meu Site</p>
    </div>
</body>



HTML semântico: É o uso de tags que revelam o conteudo para o navehador e para o usuario. Isso facilita a acessibilidade e o entendimento do codigo.


exemplo:

<body>
    <header>
        <h1>Meu Site</h1>
        <nav>
            <a href="#home">Home</a> | <a href="#sobre">Sobre</a>
        </nav>
    </header>

    <main>
        <section>
            <h2>Sobre Nós</h2>
            <p>Texto explicativo aqui.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 Meu Site</p>
    </footer>
</body>
