/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChatFileWhereInput } from "./ChatFileWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ChatFileOrderByInput } from "./ChatFileOrderByInput";

@ArgsType()
class ChatFileFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ChatFileWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ChatFileWhereInput, { nullable: true })
  @Type(() => ChatFileWhereInput)
  where?: ChatFileWhereInput;

  @ApiProperty({
    required: false,
    type: [ChatFileOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ChatFileOrderByInput], { nullable: true })
  @Type(() => ChatFileOrderByInput)
  orderBy?: Array<ChatFileOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ChatFileFindManyArgs as ChatFileFindManyArgs };