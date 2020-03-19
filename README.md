# atendimentos-app
App made to learn rest with nodejs

### Stack

- [NodeJS](https://nodejs.org)
- [Express](https://expressjs.com)
- [MySQL](https://www.mysql.com)
- [Docker-compose](https://docs.docker.com/compose/)

### Steps

1 - Download ou clone este repositório:  
```
    git clone https://github.com/SEdilson/atendimentos-app.git
```

2 - Instale as dependências:  
```
    npm install
```

3 - Rode o banco:  
```
    docker-compose up -d
```

4 - Rode a aplicação:  
```
    npm start
```

__Note__: No primeiro acesso talvez ele dê o seguinte erro __client does not support authentication protocol requested by server__, para consertar tal comportamento siga esses passos:  

1 - Rode o seguinte comando para entrar no bash do mysql:  

```
    docker exec -it mysql bash
```

2 - Uma vez dentro do bash entre no banco e altere o tipo de hash de senha para o padrão antigo:  

```
    mysql -u root -p
    senha: mysql

    ALTER USER root IDENTIFIED WITH mysql_native_password BY 'mysql';
```

- Feitas essas alterações reinicie a aplicação e veja se está tudo rodando