import { EntityManager, EntityRepository } from "@mikro-orm/postgresql";
import { MikroORM } from "mikro-orm";
import { Fasting, FastingPlan, User } from "./entities";

export const DI = {} as {
  orm: MikroORM;
  em: EntityManager;
  userRepo: EntityRepository<User>;
  fastingRepo: EntityRepository<Fasting>;
  fastingPlanRepo: EntityRepository<FastingPlan>;
};
