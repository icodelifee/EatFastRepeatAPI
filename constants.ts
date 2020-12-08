import { EntityManager, EntityRepository, SqlEntityManager } from "@mikro-orm/postgresql";
import { Connection, IDatabaseDriver, MikroORM } from "mikro-orm";
import { User } from "./entities";


export const DI = {} as {
    orm: MikroORM,
    em: EntityManager
    userRepo: EntityRepository<User>
}