import { IncomingMessage, ServerResponse } from "http";

import { serviceEpisodesList } from "../services/episodes-list-service";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const content = await serviceEpisodesList();

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(content));
};
