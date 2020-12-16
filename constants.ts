import { EntityManager, EntityRepository } from "@mikro-orm/postgresql";
import { MikroORM } from "mikro-orm";
import { Fasting, FastingPlan, User } from "./entities";
import { Logger } from "./utils/logger";

export const DI = {} as {
  orm: MikroORM;
  em: EntityManager;
  userRepo: EntityRepository<User>;
  fastingRepo: EntityRepository<Fasting>;
  fastingPlanRepo: EntityRepository<FastingPlan>;
  logger: Logger;
};
