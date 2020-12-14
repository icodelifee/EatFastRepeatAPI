import { BaseEntity } from "./base.entity";
import { Entity, ManyToOne, Property } from "@mikro-orm/core";
import { User } from "./user.entity";
import { FastingPlan } from "./fastingplan.entity";

@Entity()
export class Fasting extends BaseEntity {
  @ManyToOne(() => User)
  user?: User;

  @ManyToOne()
  fastingPlan?: FastingPlan;

  @Property()
  timeStarted?: string;

  @Property()
  timeExpected?: string;

  @Property()
  timeEnded?: string;

  @Property()
  eStatus?: string;

  @Property()
  notes?: string;

  constructor(reqBody: any, fastingplan: FastingPlan, user: User) {
    super();
    this.fastingPlan = fastingplan;
    this.user = user;
    this.notes = reqBody.notes;
    this.eStatus = reqBody.e_status;
    this.fastingPlan = reqBody.fasting_plan_id;
    this.timeStarted = reqBody.time_started;
    this.timeExpected = reqBody.time_expected;
    this.timeEnded = reqBody.time_ended;
  }
}
