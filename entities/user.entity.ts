import { BaseEntity } from "./base.entity";
import { Entity, Property, Unique } from "@mikro-orm/core";
import { Field, Column } from "@mikro-orm/postgresql"

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

  constructor(name: string, email: string) {
    super();
    this.fullName = name;
    this.email = email;
  }
}
