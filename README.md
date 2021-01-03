<p align="center">
    <img src="https://www.linx.com.br/app/themes/linx/crystals/dist/assets/static/logo.png"></img>
</p>

# Linx Impulse - Desafio Técnico (Desenvolvedor Fullstack)

O desafio proposto foi desenvolver um sistema de vitrines de um site, contendo back-end, front-end e base de dados, além do consumo da api externa de recomendações.

<p align="center">
  <img src="https://user-images.githubusercontent.com/51968142/103484182-1cad1a00-4dc3-11eb-800b-7ca64f61e9c6.gif" />
</p>

# Ferramentas utilizadas

* Nodejs
* Knexjs
* Reactjs
* Boostrap
* PostgreSQL
* Docker

# Execução do projeto

* Com docker

    Na raiz do projeto, rode o comando "docker-compose up --build"


* Sem docker

    * Na pasta backend, edite o arquivo "knexfile.js" de acordo com o banco de dados do seu ambiente, em seguida rode o comando no terminal "npx knex migrate:latest && npm start"
        
    * Na pasta frontend, rode o comando no terminal "npm start"

# Acesso ao sistema

Entre no link http://localhost:3000
