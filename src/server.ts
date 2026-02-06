import "dotenv/config";
import * as http from "http";
import {
  getEpisodesFilter,
  getEpisodesList,
} from "./controllers/podcasts-controller";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    //queryString
    //http://localhost:3636/api/episode?p=flow
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    if (req.method === "GET" && baseUrl === "/api/list") {
      await getEpisodesList(req, res);
    }

    if (req.method === "GET" && baseUrl === "/api/episode")
      await getEpisodesFilter(req, res);
  },
);

const port = Number(process.env.PORT) || 3636;

server.listen(port, () => {
  console.log(`servidor iniciado na porta ${port}`);
});
