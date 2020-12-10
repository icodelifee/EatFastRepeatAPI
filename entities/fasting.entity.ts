import { BaseEntity } from "./base.entity";
import {
  Cascade,
  Entity,
  ManyToOne,
  OneToOne,
  Property,
  Unique,
  TimeType,
} from "@mikro-orm/core";
import { User } from "./user.entity";
import { FastingPlan } from "./fastingplan.entity";
// import { in } from "@mikro-orm/postgresql"

/**
 * lets try to do in single table
 * fasting needs fields
 * user id
 * plan id
 * timestarted
 * timeexpected
 * timeended
 * desc
 * notes
 */

@Entity()
export class Fasting extends BaseEntity {
  @ManyToOne(() => User, { cascade: [Cascade.PERSIST, Cascade.REMOVE] })
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
}

/**
 * Fasting
 *
 * user will have current fasting plan
 *
 * fasting plan id in user
 * so
 * fasting fields will be
 *
 * fasting_id
 * fasting start time
 * fasting end time
 * fasting plan id
 * did fasting complete ? true: false
 * total fasting time
 *
 *
 */
