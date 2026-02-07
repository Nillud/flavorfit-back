import { Field, InputType } from '@nestjs/graphql'
import { Unit } from 'prisma/generated/graphql/prisma'

@InputType()
export class IngredientCreateInput {
	@Field(() => String, { nullable: false })
	name!: string

	@Field(() => Unit, { nullable: true })
	defaultUnit: `${Unit}`

	@Field(() => String, { nullable: false })
	iconUrl!: string

	@Field(() => String, { nullable: false })
	content!: string
}
