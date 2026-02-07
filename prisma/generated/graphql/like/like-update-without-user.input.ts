import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateOneRequiredWithoutLikeNestedInput } from '../recipe/recipe-update-one-required-without-like-nested.input';

@InputType()
export class LikeUpdateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUpdateOneRequiredWithoutLikeNestedInput, {nullable:true})
    recipe?: RecipeUpdateOneRequiredWithoutLikeNestedInput;
}
