import { Field, ID, InputType } from '@nestjs/graphql'
import { Unit } from '../enums/recipe.enum'

@InputType()
export class RecipeIngredientInput {
	@Field(() => ID)
	ingredientId!: string

	@Field(() => Number)
	quantity!: string

	@Field(() => Unit)
	unit!: Unit
}
