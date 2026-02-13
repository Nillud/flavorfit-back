import { Field, InputType, Int } from '@nestjs/graphql'
import { Unit } from 'src/recipes/recipe.enum'

@InputType()
export class IngredientCreateInput {
	@Field(() => String, { nullable: false })
	name!: string

	@Field(() => Int, { nullable: false })
	price!: number

	@Field(() => Unit, { nullable: true })
	defaultUnit: `${Unit}`

	@Field(() => String, { nullable: false })
	iconUrl!: string

	@Field(() => String, { nullable: false })
	content!: string
}
