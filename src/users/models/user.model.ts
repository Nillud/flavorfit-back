import { Field, Int } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { BodyMeasurement } from 'prisma/generated/graphql/body-measurement'
import { Profile } from 'prisma/generated/graphql/profile'
import { Role } from 'prisma/generated/prisma/enums'
import { OrderModel } from 'src/orders/models/order.model'
import { RecipeModel } from 'src/recipes/models/recipe.model'
import { CommentModel } from 'src/recipes/reactions/models/comment.model'

@ObjectType()
export class UserModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	email!: string

	@Field(() => String, { nullable: false })
	password!: string

	@Field(() => Role, { defaultValue: 'USER', nullable: false })
	role!: `${Role}`

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => Profile, { nullable: true })
	profile?: Profile | null

	@Field(() => BodyMeasurement, { nullable: true })
	measurement?: BodyMeasurement | null

	@Field(() => [RecipeModel], { nullable: true })
	recipes?: Array<RecipeModel>

	@Field(() => [CommentModel], { nullable: true })
	comments?: Array<CommentModel>

	@Field(() => Int, { nullable: true })
	likes?: number

	@Field(() => [OrderModel], { nullable: true })
	orders?: Array<OrderModel>
}
