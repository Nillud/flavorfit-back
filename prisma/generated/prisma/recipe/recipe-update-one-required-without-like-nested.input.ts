import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutLikeInput } from './recipe-create-without-like.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutLikeInput } from './recipe-create-or-connect-without-like.input';
import { RecipeUpsertWithoutLikeInput } from './recipe-upsert-without-like.input';
import { Prisma } from '@prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutLikeInput } from './recipe-update-to-one-with-where-without-like.input';

@InputType()
export class RecipeUpdateOneRequiredWithoutLikeNestedInput {

    @Field(() => RecipeCreateWithoutLikeInput, {nullable:true})
    @Type(() => RecipeCreateWithoutLikeInput)
    create?: RecipeCreateWithoutLikeInput;

    @Field(() => RecipeCreateOrConnectWithoutLikeInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutLikeInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutLikeInput;

    @Field(() => RecipeUpsertWithoutLikeInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutLikeInput)
    upsert?: RecipeUpsertWithoutLikeInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

    @Field(() => RecipeUpdateToOneWithWhereWithoutLikeInput, {nullable:true})
    @Type(() => RecipeUpdateToOneWithWhereWithoutLikeInput)
    update?: RecipeUpdateToOneWithWhereWithoutLikeInput;
}
