import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/tag";

@EntityRepository(Tag)
class TagRepository extends Repository<Tag> {}

export { TagRepository };
