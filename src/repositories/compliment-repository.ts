import { Repository, EntityRepository } from "typeorm";
import { Compliment } from "../entities/compliment";

@EntityRepository(Compliment)
class ComplimentRepository extends Repository<Compliment> {}

export { ComplimentRepository };
