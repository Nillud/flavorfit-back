import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutLikesNestedInput } from '../user/user-update-one-required-without-likes-nested.input';
import { RecipeUpdateOneRequiredWithoutLikeNestedInput } from '../recipe/recipe-update-one-required-without-like-nested.input';

@InputType()
export class LikeUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutLikesNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutLikesNestedInput;

    @Field(() => RecipeUpdateOneRequiredWithoutLikeNestedInput, {nullable:true})
    recipe?: RecipeUpdateOneRequiredWithoutLikeNestedInput;
}
