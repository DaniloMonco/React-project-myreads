# MyReads Project

Projeto final para avaliação do curso React Fundamentals da Udacity. Este website possui uma estante para livros, com 3 prateleiras:
* Livros que esta lendo no momento
* Livros que gostaria de ler
* Livros lidos

Criei diversos componentes para entender o conceito de props e state do REACT. Acredito que tenha desenvolvido uma estrutura bem coesa de componentes, onde cada componente possui uma responsabilidade clara e definida e sem códigos duplicados.

Não utilizei o pacote 'sort-by' para ordernar as listas, achei que a ordem de entrada no array fazia mais sentido visualmente.

A ideia foi desenvolver este projeto para ser "mobile friendly".

Cada livro na estante possui opções para remover da estante ou mover de prateleira para outra. Ao clicar no nome do livro na estante é disponibilizado detalhes do livro em questão. O botão de ação para cada livro exibe apenas opções válidas (não permite
mover de "Read" para "Read", por exemplo.).A opção none retira o livro da prateleira em questão (e desta forma, volta a ser exibido na listagem de pesquisa).

O botão de adicionar, serve para abrir uma tela de pesquisa de livros, onde é possível adicionar livro em determinada prateleira na estante. Os livros adicionados na estante não aparecem na tela de pesquisa, por este motivo não existe a opção "none" no botão de ação, mas sim, apenas as opções para adicionar nas prateleiras. Também é possível obter mais informações do livro ao clicar no nome do livro (aqui temos mais informações do que os livros na prateleira), além das infos do livro em questão, existe uma informações de livros relacionados baseado na pesquisa feita. Esta relação de "livros relacionados" são recuperados através da api do Google Book (e limitado a 10 livros relacionados);

O projeto foi desenvolvido a partir do template disponibilizado pela Udacity e utilizado [Create React App] para o desenvolvimento.

## TL;DR

Após baixar o código:
* executar `npm install` para instalar todas as dependências 
* executar `npm start` para iniciar a aplicação

Este projeto utiliza:
* material-ui https://material-ui.com/
* feather-icons https://feathericons.com/  https://github.com/carmelopullara/react-feather
* react-debounce-input https://www.npmjs.com/package/react-debounce-input
* react-star-rating-component https://www.npmjs.com/package/react-star-rating-component
* react-spinners https://www.npmjs.com/package/react-spinners

## Estrutura do projeto
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # Lista de palavras para pesquisas na aplicação
├── package.json # npm package manager file. \
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── APIs # Pasta para organizar as APIs utilizadas
    │   ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    │   ├── GoogleBookApi.js # API do google para pesquisa de livros. Retorna 10 livros na chamada
    ├── AppUtils # Pasta com componentes auxiliares para o APP
    │   ├── AppOpenSearch.js # Componente com o botão de pesquisar livros na BookAPI
    │   ├── AppTitle.js # Componente responsavel pelo titulo da APP
    │   ├── SearchFailure.js # Componente para exibir mensagens de info para o Usuário
    │   ├── Loader.js # Componente para imagem de loading no carregamento de resultado
    ├── BookDetail # Pasta com componentes de detalhes do Livro
    │   ├── BookDetail.js # Componente para abrir a tela de detalhes do livro
    │   ├── BookDetailAttributeInfo.js # Componente com as infos de titulo/subtitulo, autores, paginas, editora, etc
    │   ├── BookDetailDescriptionInfo.js # Componente com a info de descrição do livro/sumário
    │   ├── BookDetailImageInfo.js # Componente com a info da imagem, ratings e ISBNs
    │   ├── BookDetailInfo.js # Componente com as infos detalhadas do livro
    ├── BookPreview # Pasta com componentes responsaveis pelo preview (info básica do livro)
    │   ├── BookPreview.js # Componente com info básica do Livro (thumbnail, titulo, autores, etc)
    │   ├── BookRelatedPreview.js # Componente com info básica do Livro relacionado (thumbnail, titulo, autores, etc)
    ├── BookRelated # Pasta com componentes responsaveis por montar os livros relacionados
    │   ├── BookRelated.js # Componente que recupera infos da API Google
    │   ├── BookRelatedList.js # Componente que lista todos os previews dos livros recuperados da API Google
    ├── BookSearch # Pasta com componentes responsaveis por montar a pesquisa dos livros
    │   ├── BookSearch.js # Componente  que recupera infos da API Udacity
    │   ├── BookSearchList.js # Componente que lista todos os previews dos livros recuperados da API Udacity
    ├── BookShelf # Pasta com componentes responsaveis pela estande e prateleiras do App
    │   ├── BookList.js # Componente responsavel por exibir as prateleiras/estantes de cada tipo de livro
    │   ├── BookShelf.js # Componente responsavel por montar cada prateleira/estante com seus livros
    ├── BookUtils # Pasta com componentes auxiliares para exibir info do livro
    │   ├── BookAuthors.js # Componente para exibir os autores do livro
    │   ├── BookCategories.js # Componente para exibir as categorias do livro
    │   ├── BookImage.js # Componente para exibir a imagem do Livro
    │   ├── BookISBNTypes.js # Componente para exibir os tipos de ISBN do livro
    │   ├── BookShelfChanger.js # Componente para auxiliar a mudança de prateleira/estante do livro
    ├── App.css # Styles da aplicação
    ├── App.js # Root da app.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.



## Backend Server

* BookAPI.js fornecido no template da UDACITU

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

* GoogleBookApi.js desenvolvido para efetuar uma pesquisa da Api Google Book, utilizando autenticação por chave.
* [`search`](#search)

## Important
Para pesquisar livros utilizar os "termos" do arquivo [SEARCH_TERMS.md](SEARCH_TERMS.md).


