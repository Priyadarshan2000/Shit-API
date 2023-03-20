import {Injectable} from "@tsed/di";
import abi from "../assets/abi.json";
import {ethers} from "ethers";
import { FinanceDataModel, HealthDataModel } from "../models/TransactionModel";

@Injectable()
export class TransactionService {
    provider: ethers.providers.JsonRpcProvider;
    contract: ethers.Contract;
    wallet: ethers.Wallet;
    constructor() {
        this.provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER||'');
        this.wallet = new ethers.Wallet(process.env.PRIVATE_KEY||'', this.provider);
        this.contract = new ethers.Contract(process.env.CONTRACT_ADDRESS||'', abi, this.wallet);
    }
    async insertFinanceData(data: FinanceDataModel) {
        console.log(data.user,[data.timestamp,data.typeOf,data.amount,data.comment,data.creditOrDebit,data.creationTime,data.updateTime]);
        const tx = await this.contract.insertFinanceData(data.user,[data.timestamp,data.typeOf,data.amount,data.comment,data.creditOrDebit,data.creationTime,data.updateTime]);
        await tx.wait();
        return tx;
    }

    async insertHealthData(data: HealthDataModel) {
        const tx = await this.contract.insertHealthData(data,[data.animal,data.issue,data.treatment,data.issueData,data.status,data.createdAt,data.modifiedAt]);
        await tx.wait();
        return tx;
    }
}
