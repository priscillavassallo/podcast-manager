import * as http from "http";
import {
  getEpisodesFilter,
  getEpisodesList,
} from "./controllers/podcasts-controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    //listar podcasts
    if (req.method === "GET" && req.url === "/api/list") {
      await getEpisodesList(req, res);
    }

    if (req.method === "GET" && req.url === "/api/episode")
      await getEpisodesFilter(req, res);
  },
);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`servidor iniciado na porta ${port}`);
});
