### Nome do Aplicativo

Podcast Menager

### Descrição

Um app ao estilo Netflix, onde possa centralizar diferentes podcasts separados por categoria

### Domínio

Podcasts feitos em vídeo

### Features

- Listar os episódios de podcast em sessões de categoria [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

#### Feature:

Listar os episódios de podcast em sessões de categoria

### Como vou implementar:

Vou retornar em uma API REST para que consiga alimentar um front-end (nome do podcast, nome do episódio, uma imagem de capa, link, categoria)

```js
[
  {
    podcastName: "flow",
    episode: "CBUM – Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    category: ["saúde", "fitness"],
  },
];
```
