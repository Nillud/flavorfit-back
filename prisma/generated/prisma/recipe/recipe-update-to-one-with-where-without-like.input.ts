import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutLikeInput } from './recipe-update-without-like.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutLikeInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutLikeInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutLikeInput)
    data!: RecipeUpdateWithoutLikeInput;
}
