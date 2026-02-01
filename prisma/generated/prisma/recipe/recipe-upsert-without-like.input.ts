import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutLikeInput } from './recipe-update-without-like.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutLikeInput } from './recipe-create-without-like.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutLikeInput {

    @Field(() => RecipeUpdateWithoutLikeInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutLikeInput)
    update!: RecipeUpdateWithoutLikeInput;

    @Field(() => RecipeCreateWithoutLikeInput, {nullable:false})
    @Type(() => RecipeCreateWithoutLikeInput)
    create!: RecipeCreateWithoutLikeInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
