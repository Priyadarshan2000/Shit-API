import {Controller, Inject} from "@tsed/di";
import {Get, Post} from "@tsed/schema";
import {TransactionService} from "../../services/TransactionService";
import { BodyParams } from "@tsed/platform-params";
import { FinanceDataModel, HealthDataModel } from "../../models/TransactionModel";
@Controller("/transaction")
export class TransactionController {
  @Inject() // Inject the service
  transactionService: TransactionService

  @Post("/insertFinanceData")
  async insertFinanceData(@BodyParams("") data: FinanceDataModel) {
    return await this.transactionService.insertFinanceData(data);
  }
  @Post("/insertHealthData")
  async insertHealthData(@BodyParams("") data: HealthDataModel) {
    return await this.transactionService.insertHealthData(data);

  }
}
