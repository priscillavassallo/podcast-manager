import { podcastRepository } from "../repositories/podcasts-repository";

export const serviceEpisodesList = async () => {
  const data = await podcastRepository();

  return data;
};
