import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/user-repository";
import { classToPlain } from "class-transformer";

class ListUserService {
  async execute() {
    const usersRepositories = getCustomRepository(UserRepository);

    const users = await usersRepositories.find();

    return classToPlain(users);
  }
}

export { ListUserService };
