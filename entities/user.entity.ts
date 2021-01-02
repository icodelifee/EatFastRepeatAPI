import { BaseEntity } from "./base.entity";
import { Entity, Property, Unique } from "@mikro-orm/core";

@Entity()
export class User extends BaseEntity {
  @Property()
  fullName?: string;

  @Property()
  @Unique()
  email!: string;

  @Property()
  height?: number;

  @Property()
  weight?: Float32Array;

  @Property()
  unit?: string;

  @Property()
  targetWeight?: Float32Array;

  constructor(json: any) {
    super();
    this.fullName = json.full_name;
    this.email = json.email;
    this.height = json.height;
    this.weight = json.weight;
    this.unit = json.unit;
    this.targetWeight = json.target_weight;
  }
}
