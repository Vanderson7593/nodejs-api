import { Router } from "express";
import { CreateUserController } from "./controllers/create-user-controller";
import { CreateTagController } from "./controllers/create-tag-controller";
import { ensureAdmin } from "./middlewares/ensure-admin";
import { AuthenticateUserController } from "./controllers/authenticate-user-controller";
import { CreateComplimentController } from "./controllers/create-compliment-controller";
import { ensureAuthenticated } from "./middlewares/ensure-authenticated";
import { ListUserSendComplimentsController } from "./controllers/list-user-send-compliment-controller";
import { ListUserReceiveComplimentsController } from "./controllers/list-user-receive-compliment-controller";
import { ListTagsController } from "./controllers/list-tag-controller";
import { ListUsersController } from "./controllers/list-user-controller";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();

const listTagsController = new ListTagsController();

const listUsersController = new ListUsersController();

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);

router.get("/tags", ensureAuthenticated, listTagsController.handle);

router.post("/users", createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);
router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  listUserReceiveComplimentsController.handle
);

router.get("/users", ensureAuthenticated, listUsersController.handle);

export { router };
