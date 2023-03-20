import {Property} from "@tsed/schema";


export class FinanceDataModel {
  @Property()
  user: string;

  @Property()
  timestamp: number;

  @Property()
  typeOf: string;

  @Property()
  amount: number;

  @Property()
  comment: string;

  @Property()
  creditOrDebit: boolean;

  @Property()
  creationTime: number;

  @Property()
  updateTime: number;
}


export class HealthDataModel {
  @Property()
  user: string;

  @Property()
  animal: string;

  @Property()
  issue: string;

  @Property()
  treatment: string;

  @Property()
  issueData: number;

  @Property()
  status: string;

  @Property()
  createdAt: number;

  @Property()
  modifiedAt: number;
}