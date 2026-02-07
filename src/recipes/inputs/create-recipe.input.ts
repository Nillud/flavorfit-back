import { Field, InputType, Int } from '@nestjs/graphql'
import { CommentCreateNestedManyWithoutRecipeInput } from 'prisma/generated/graphql/comment'
import { LikeCreateNestedManyWithoutRecipeInput } from 'prisma/generated/graphql/like'
import { Difficulty } from 'prisma/generated/graphql/prisma'
import { RecipeIngredientCreateNestedManyWithoutRecipeInput } from 'prisma/generated/graphql/recipe-ingredient'
import { RecipeStepCreateNestedManyWithoutRecipeInput } from 'prisma/generated/graphql/recipe-step'
import { UserCreateNestedOneWithoutRecipesInput } from 'prisma/generated/graphql/user'

@InputType()
export class RecipeCreateInput {
	@Field(() => String, { nullable: true })
	id?: string

	@Field(() => String, { nullable: false })
	slug!: string

	@Field(() => String, { nullable: false })
	title!: string

	@Field(() => String, { nullable: false })
	description!: string

	@Field(() => Int, { nullable: false })
	calories!: number

	@Field(() => Int, { nullable: false })
	cookingTime!: number

	@Field(() => Difficulty, { nullable: false })
	difficulty!: `${Difficulty}`

	@Field(() => Date, { nullable: true })
	createdAt?: Date | string

	@Field(() => Date, { nullable: true })
	updatedAt?: Date | string

	@Field(() => UserCreateNestedOneWithoutRecipesInput, { nullable: false })
	author!: UserCreateNestedOneWithoutRecipesInput

	@Field(() => RecipeIngredientCreateNestedManyWithoutRecipeInput, {
		nullable: true
	})
	recipeIngredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput

	@Field(() => RecipeStepCreateNestedManyWithoutRecipeInput, { nullable: true })
	recipeSteps?: RecipeStepCreateNestedManyWithoutRecipeInput

	@Field(() => CommentCreateNestedManyWithoutRecipeInput, { nullable: true })
	comments?: CommentCreateNestedManyWithoutRecipeInput

	@Field(() => LikeCreateNestedManyWithoutRecipeInput, { nullable: true })
	like?: LikeCreateNestedManyWithoutRecipeInput
}
