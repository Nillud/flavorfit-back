import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutLikesNestedInput } from '../user/user-update-one-required-without-likes-nested.input';
import { RecipeUpdateOneRequiredWithoutLikesNestedInput } from '../recipe/recipe-update-one-required-without-likes-nested.input';

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

    @Field(() => RecipeUpdateOneRequiredWithoutLikesNestedInput, {nullable:true})
    recipe?: RecipeUpdateOneRequiredWithoutLikesNestedInput;
}
