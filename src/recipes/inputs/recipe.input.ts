import { Field, InputType, Int } from '@nestjs/graphql'
import { NutritionFactInput } from './nutrition-fact.input'
import { RecipeStepInput } from './step.input'
import { Difficulty } from '../enums/recipe.enum'
import { RecipeIngredientInput } from './recipe-ingredient.input'

@InputType()
export class RecipeInput {
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

	@Field(() => NutritionFactInput, {
		nullable: true
	})
	nutritionFact?: NutritionFactInput

	@Field(() => [String], {
		nullable: true
	})
	tags?: string[]

	@Field(() => [RecipeStepInput], { nullable: false })
	recipeSteps?: RecipeStepInput[]

	@Field(() => [RecipeIngredientInput], {
		nullable: true
	})
	ingredients?: RecipeIngredientInput[]
}
