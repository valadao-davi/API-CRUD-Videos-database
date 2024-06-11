
# API-CRUD-Videos-database

Um projeto que busca implementar uma api de videos com um banco de dados utilizando PostsgreSQL em uma hospedagem Render. Com funcionalidades CRUD:

-Criar videos

-Ler videos e buscar videos especificos

-Atualizar videos existentes

-Deletar videos existentes


Hospedagem principal da API: https://api-crud-videos-database.onrender.com
## Documentação da API

#### Retorna todos os itens

```http
  GET https://api-crud-videos-database.onrender.com/videos
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET https://api-crud-videos-database.onrender.com/videos?search=
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |


#### Cria um vídeo novo no banco
```http
  POST https://api-crud-videos-database.onrender.com/videos
```

#### Edita um vídeo existente no banco
```http
  PUT https://api-crud-videos-database.onrender.com/videos/300d2ead-8d65-4010-9a26-31ef9404a231
```


#### Deleta um vídeo existente no banco
```http
  DELETE https://api-crud-videos-database.onrender.com/videos/4eb1ca71-4573-49e4-9f4a-945152074a6c
```


## Deploy

Para fazer o deploy desse projeto node:

```bash
 $ npm start
```

