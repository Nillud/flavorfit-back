import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutLikesInput } from '../user/user-create-nested-one-without-likes.input';
import { RecipeCreateNestedOneWithoutLikesInput } from '../recipe/recipe-create-nested-one-without-likes.input';

@InputType()
export class LikeCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutLikesInput, {nullable:false})
    user!: UserCreateNestedOneWithoutLikesInput;

    @Field(() => RecipeCreateNestedOneWithoutLikesInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutLikesInput;
}
