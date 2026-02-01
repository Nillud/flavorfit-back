import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeUserIdRecipeIdCompoundUniqueInput } from './like-user-id-recipe-id-compound-unique.input';
import { LikeWhereInput } from './like-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { RecipeScalarRelationFilter } from '../recipe/recipe-scalar-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class LikeWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    recipeId?: string;

    @Field(() => LikeUserIdRecipeIdCompoundUniqueInput, {nullable:true})
    userId_recipeId?: LikeUserIdRecipeIdCompoundUniqueInput;

    @Field(() => [LikeWhereInput], {nullable:true})
    AND?: Array<LikeWhereInput>;

    @Field(() => [LikeWhereInput], {nullable:true})
    OR?: Array<LikeWhereInput>;

    @Field(() => [LikeWhereInput], {nullable:true})
    NOT?: Array<LikeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    user?: UserScalarRelationFilter;

    @Field(() => RecipeScalarRelationFilter, {nullable:true})
    @Type(() => RecipeScalarRelationFilter)
    recipe?: RecipeScalarRelationFilter;
}
