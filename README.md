# TRABALHO - API NODE, WORLDCUP

Trabalho desenvolvido utilizando Node.js, com os metodos Delete, Put, Get, e Post (CRUD).
Utilizando o docker, docker compose, postgreSQL

# Passos para a instalação do projeto em seu computador

Se estiver utilizando o windows, instalar o Docker desktop, e caso estiver usando um linux, instalar docker e docker-compose

# Clonando o projeto

para clonar o projeto:
```
git clone https://github.com/JoseAugusto1989/trabalho-node-api.git
```

entrar no diretório do projeto:
```
cd trabalho-node-api
```

instalar o node modules:
```
npm install
```

# Criar a imagem na maquina

```
docker build -t joseaugustooliveirapins/api-node-worldcup .
docker run -p 8084:8084 joseaugustooliveirapins/api-node-worldcup
```

subir o projeto utilizando o docker compose:
```
docker-compose up
```

# Download da imagem do Docker hub
```
docker pull joseaugustooliveirapins/api-node-worldcup
```

# API Node

Endpoint POST:
```
http://localhost:8084/api/v1/worldcup
```

Endpoint PUT:
```
http://localhost:8084/api/v1/worldcup/{id}   
```  

Exemplo de requisição:
```
http://localhost:8084/api/v1/worldcup/1
```

Endpoint DELETE:
```
http://localhost:8084/api/v1/worldcup/{id}
```

Exemplo de requisição:
```
http://localhost:8084/api/v1/worldcup/1
```

Endpoint GET:
```
http://localhost:8084/api/v1/worldcup
```

Endpoint GET - data:
```
http://localhost:8084/api/v1/worldcup/date/{date}
```

Exemplo de requisição:
```
http://localhost:8084/api/v1/worldcup/2022-10-12
```

Endpoint GET - nameTeam:
```
http://localhost:8084/api/v1/worldcup/{name}      
```

Exemplo de requisição:
```
http://localhost:8084/api/v1/worldcup/Brasil
```

Exemplo de Json:
```
{
    "team_home": "Polonia",
    "team_visitor": "Ucrania",
    "score_home": 3,
    "score_visitor": 1,
    "match_date": "2022-12-01"
}
```