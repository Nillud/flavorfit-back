import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutLikeInput } from '../recipe/recipe-create-nested-one-without-like.input';
import { Type } from 'class-transformer';

@InputType()
export class LikeCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeCreateNestedOneWithoutLikeInput, {nullable:false})
    @Type(() => RecipeCreateNestedOneWithoutLikeInput)
    recipe!: RecipeCreateNestedOneWithoutLikeInput;
}
