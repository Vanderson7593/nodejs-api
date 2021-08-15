import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/compliment-repository";

class ListUserReceiveComplimentsService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(
      ComplimentRepository
    );

    const compliments = await complimentsRepositories.find({
      where: {
        user_receiver: user_id,
      },
      relations: ["userSender", "userReceiver", "tag"],
    });

    return compliments;
  }
}

export { ListUserReceiveComplimentsService };
