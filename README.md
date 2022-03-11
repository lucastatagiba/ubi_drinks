# Titulo e descrição

Ubi Drinks

Este projeto consiste em uma aplicação feita para consultar receita de drinks, pensando na dificuldade que temos quando recebemos algum amigo em nossa casa e queremos agradá-los com alguma bebida e não sabemos direito como fazer. Esta aplicação vem justamente para resolver este problema, nela você pode consultar variados drinks, suas receitas e ingredientes.
Obs: Aplicação feita toda em inglês.


## Implementações:

- Light/dark mode theme fixado na pagina principal(HOME) salvando a configuração no localstorage. 

- Na Pagina Home foi implementado um paragrafo de apresentação e logo abaixo o sistema de busca de bebidas, no qual o usuário pode filtrar pelo nome da bebida, categoria, ingredientes e até pela primeira letra do nome da bebida.
Logo quando o usuário buscar, ele verá os cards abaixo com o nome da bebida, a foto e um botão para ver a receita. 

- Clicando no botão, o usuário é redirecionado para a pagina "/recipe:NomedaBebida", no qual ali vai renderizar um card com o nome da bebida, foto, ingredientes, receita, categoria e tipo.

- Se o usuário tentar acessar uma rota inexistente, ele será redirecionado para uma pagina personalizada que conterá uma mensagem de erro e um botão para voltar a pagina Home.

## O que foi feito:


Primeiro dia: Foi pensado em toda a ideia da aplicação e construido toda estrutura de pastas e algumas estruturas de código, context API e alguns componentes. Foi adicionado também uma estilização básica para melhor visualização.

Segundo dia: Foi construída toda a lógica da aplicação. Busca na API, distribuição dos dados aos components, funções também foram distribuídas.

Terceiro dia: Foi feita toda estilização de fato, algumas implementações de busca e alguns ajustes. Também foi adicionado de ultima hora o light/dark mode theme com chakra UI salvando o tema no localstorage.

Obs: Aplicação foi feita em mobile first. bibliotecas utilizadas: react-router-dom, react-toastify, axios, chakra UI e react-icons. Toda tipada com typescript e utilização de context API.

### Como iniciar a aplicação:

Ao clonar o repositório e acessar o mesmo através do terminal, inserir o comando "yarn" para instalar as dependencias. Após isso, ainda no terminal, pode iniciar a aplicação com "yarn start". ou acessar através do link -> https://ubi-drinks.vercel.app/

Obs: link do repositório: https://github.com/lucastatagiba/ubi_drinks
