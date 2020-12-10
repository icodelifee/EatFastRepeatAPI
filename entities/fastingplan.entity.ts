import { BaseEntity } from "./base.entity";
import { Entity, Property, Unique } from "@mikro-orm/core";

@Entity()
export class FastingPlan extends BaseEntity {

  @Property()
  planName?: string;

  @Property()
  fastingTime!: number;

  @Property()
  eatingTime?: number;

}