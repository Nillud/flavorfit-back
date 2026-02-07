import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentsInput } from '../user/user-create-nested-one-without-comments.input';
import { RecipeCreateNestedOneWithoutCommentsInput } from '../recipe/recipe-create-nested-one-without-comments.input';

@InputType()
export class CommentCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutCommentsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutCommentsInput;

    @Field(() => RecipeCreateNestedOneWithoutCommentsInput, {nullable:false})
    recipe!: RecipeCreateNestedOneWithoutCommentsInput;
}
