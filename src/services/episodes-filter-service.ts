import { podcastRepository } from "../repositories/podcasts-repository";

export const serviceEpisodesFilter = async (podcastName: string) => {
  const data = await podcastRepository(podcastName);

  return data;
};
