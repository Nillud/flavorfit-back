import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { RecipeScalarRelationFilter } from '../recipe/recipe-scalar-relation-filter.input';

@InputType()
export class LikeWhereInput {

    @Field(() => [LikeWhereInput], {nullable:true})
    AND?: Array<LikeWhereInput>;

    @Field(() => [LikeWhereInput], {nullable:true})
    OR?: Array<LikeWhereInput>;

    @Field(() => [LikeWhereInput], {nullable:true})
    NOT?: Array<LikeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;

    @Field(() => RecipeScalarRelationFilter, {nullable:true})
    recipe?: RecipeScalarRelationFilter;
}
