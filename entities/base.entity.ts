import { PrimaryKey, Property } from "mikro-orm";
import {} from "@mikro-orm/postgresql";
export abstract class BaseEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();
}
