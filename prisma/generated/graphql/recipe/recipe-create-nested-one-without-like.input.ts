import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutLikeInput } from './recipe-create-without-like.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutLikeInput } from './recipe-create-or-connect-without-like.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutLikeInput {

    @Field(() => RecipeCreateWithoutLikeInput, {nullable:true})
    @Type(() => RecipeCreateWithoutLikeInput)
    create?: RecipeCreateWithoutLikeInput;

    @Field(() => RecipeCreateOrConnectWithoutLikeInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutLikeInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutLikeInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;
}
