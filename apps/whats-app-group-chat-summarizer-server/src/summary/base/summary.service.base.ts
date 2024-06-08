/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Summary as PrismaSummary,
  ChatFile as PrismaChatFile,
} from "@prisma/client";

export class SummaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SummaryCountArgs, "select">): Promise<number> {
    return this.prisma.summary.count(args);
  }

  async summaries<T extends Prisma.SummaryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SummaryFindManyArgs>
  ): Promise<PrismaSummary[]> {
    return this.prisma.summary.findMany<Prisma.SummaryFindManyArgs>(args);
  }
  async summary<T extends Prisma.SummaryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SummaryFindUniqueArgs>
  ): Promise<PrismaSummary | null> {
    return this.prisma.summary.findUnique(args);
  }
  async createSummary<T extends Prisma.SummaryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SummaryCreateArgs>
  ): Promise<PrismaSummary> {
    return this.prisma.summary.create<T>(args);
  }
  async updateSummary<T extends Prisma.SummaryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SummaryUpdateArgs>
  ): Promise<PrismaSummary> {
    return this.prisma.summary.update<T>(args);
  }
  async deleteSummary<T extends Prisma.SummaryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SummaryDeleteArgs>
  ): Promise<PrismaSummary> {
    return this.prisma.summary.delete(args);
  }

  async getChatFile(parentId: string): Promise<PrismaChatFile | null> {
    return this.prisma.summary
      .findUnique({
        where: { id: parentId },
      })
      .chatFile();
  }
}