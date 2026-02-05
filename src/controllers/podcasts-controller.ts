import { IncomingMessage, ServerResponse } from "http";

import { serviceEpisodesList } from "../services/episodes-list-service";

import { serviceEpisodesFilter } from "../services/episodes-filter-service";

export const getListEpisodes = async (
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
  const content = await serviceEpisodesFilter("flow");

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};
