import { IncomingMessage, ServerResponse } from "http";

import { serviceEpisodesList } from "../services/episodes-list-service";

import { serviceEpisodesFilter } from "../services/episodes-filter-service";

export const getEpisodesList = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const content = await serviceEpisodesList();

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};

export const getEpisodesFilter = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  //http://localhost:3636/api/episode?p=flow
  const queryString = req.url?.split("?p=")[1] || "";

  const content = await serviceEpisodesFilter(queryString);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};
