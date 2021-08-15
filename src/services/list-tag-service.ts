import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/tag-repository";
import { classToPlain } from "class-transformer";

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagRepository);

    const tags = await tagsRepositories.find();

    return classToPlain(tags);
  }
}

export { ListTagsService };
