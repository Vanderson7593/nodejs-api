import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/compliment-repository";

class ListUserSendComplimentsService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(
      ComplimentRepository
    );

    const compliments = await complimentsRepositories.find({
      where: {
        user_sender: user_id,
      },
    });

    return compliments;
  }
}

export { ListUserSendComplimentsService };
