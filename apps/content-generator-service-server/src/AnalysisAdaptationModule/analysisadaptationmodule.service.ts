import { Injectable } from "@nestjs/common";
import { AnalysisAdaptationInput } from "../analysisAdaptationModule/AnalysisAdaptationInput";

@Injectable()
export class AnalysisAdaptationModuleService {
  constructor() {}
  async AdaptScript(args: AnalysisAdaptationInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
