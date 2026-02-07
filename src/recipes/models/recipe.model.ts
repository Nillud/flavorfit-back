import { Field, ID, Int, ObjectType } from '@nestjs/graphql'
import { Comment } from 'prisma/generated/graphql/comment'
import { Like } from 'prisma/generated/graphql/like'
import { Difficulty } from 'prisma/generated/graphql/prisma'
import { RecipeIngredient } from 'prisma/generated/graphql/recipe-ingredient'
import { RecipeStep } from 'prisma/generated/graphql/recipe-step'
import { User } from 'prisma/generated/graphql/user'

@ObjectType()
export class RecipeModel {
	@Field(() => ID, { nullable: false })
	id!: string

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

	@Field(() => String, { nullable: false })
	authorId!: string

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => User, { nullable: false })
	author?: User

	@Field(() => [RecipeIngredient], { nullable: true })
	recipeIngredients?: Array<RecipeIngredient>

	@Field(() => [RecipeStep], { nullable: true })
	recipeSteps?: Array<RecipeStep>

	@Field(() => [Comment], { nullable: true })
	comments?: Array<Comment>

	@Field(() => [Like], { nullable: true })
	like?: Array<Like>
}
