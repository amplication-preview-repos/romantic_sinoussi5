/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ChatFile } from "./ChatFile";
import { ChatFileCountArgs } from "./ChatFileCountArgs";
import { ChatFileFindManyArgs } from "./ChatFileFindManyArgs";
import { ChatFileFindUniqueArgs } from "./ChatFileFindUniqueArgs";
import { CreateChatFileArgs } from "./CreateChatFileArgs";
import { UpdateChatFileArgs } from "./UpdateChatFileArgs";
import { DeleteChatFileArgs } from "./DeleteChatFileArgs";
import { ChatMessageFindManyArgs } from "../../chatMessage/base/ChatMessageFindManyArgs";
import { ChatMessage } from "../../chatMessage/base/ChatMessage";
import { SummaryFindManyArgs } from "../../summary/base/SummaryFindManyArgs";
import { Summary } from "../../summary/base/Summary";
import { ChatFileService } from "../chatFile.service";
@graphql.Resolver(() => ChatFile)
export class ChatFileResolverBase {
  constructor(protected readonly service: ChatFileService) {}

  async _chatFilesMeta(
    @graphql.Args() args: ChatFileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ChatFile])
  async chatFiles(
    @graphql.Args() args: ChatFileFindManyArgs
  ): Promise<ChatFile[]> {
    return this.service.chatFiles(args);
  }

  @graphql.Query(() => ChatFile, { nullable: true })
  async chatFile(
    @graphql.Args() args: ChatFileFindUniqueArgs
  ): Promise<ChatFile | null> {
    const result = await this.service.chatFile(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ChatFile)
  async createChatFile(
    @graphql.Args() args: CreateChatFileArgs
  ): Promise<ChatFile> {
    return await this.service.createChatFile({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => ChatFile)
  async updateChatFile(
    @graphql.Args() args: UpdateChatFileArgs
  ): Promise<ChatFile | null> {
    try {
      return await this.service.updateChatFile({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ChatFile)
  async deleteChatFile(
    @graphql.Args() args: DeleteChatFileArgs
  ): Promise<ChatFile | null> {
    try {
      return await this.service.deleteChatFile(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [ChatMessage], { name: "chatMessages" })
  async findChatMessages(
    @graphql.Parent() parent: ChatFile,
    @graphql.Args() args: ChatMessageFindManyArgs
  ): Promise<ChatMessage[]> {
    const results = await this.service.findChatMessages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Summary], { name: "summaries" })
  async findSummaries(
    @graphql.Parent() parent: ChatFile,
    @graphql.Args() args: SummaryFindManyArgs
  ): Promise<Summary[]> {
    const results = await this.service.findSummaries(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}