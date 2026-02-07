import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutLikeInput } from './recipe-create-without-like.input';

@InputType()
export class RecipeCreateOrConnectWithoutLikeInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

    @Field(() => RecipeCreateWithoutLikeInput, {nullable:false})
    @Type(() => RecipeCreateWithoutLikeInput)
    create!: RecipeCreateWithoutLikeInput;
}
